---
sidebarDepth: 10
---

# React17与React18的更新变化

## React17 更新

> 首先，官方发布日志称React17最大的特点就是无新特性，这个版本主要目标是让React能渐进式升级，允许多版本混用共存，为更远的未来版本做准备，

### 去除事件池

在React17之前，如果使用异步的方式来获取事件的e对象，会发现合成事件被销毁，

```js
function handleClick(e) {
  setTimeout(() => {
    console.log(e.type); // 此时 e 可能已经被销毁，输出 undefined 或空字符串
  }, 1000);
}

```

Warning: This synthetic event is reused for performance reasons.

> 事件池：合成事件对象会被放入池中统一管理，这意味着合成事件对象可以被复用，当所有属性都会被回收释放置空。

事件池的好处是在较浏览器中重用了不同事件的事件对象以提高性能，但它对浏览器的性能优化微乎其微，反而给开发者带来了困惑，因此没有了事件复用机制。

### 更贴近原声浏览器事件 

对事件系统进行了一些较小的更改：

- `onScroll` 事件不再冒泡，以防止出现常见的混淆
- React的onFocus和onBlur 事件已在底层切换为原生的focusin和focusout 事件。他们更接近React现有行为，有时会提供额外信息。

> blur、focus和focusin、focusout的区别：blur、focus不支持冒泡，focusin、focusout支持冒泡

- 捕获事件（例如：onClickCapture）现在使用的是实际浏览器的捕获监听器。

这些更改会是React与浏览器行为更接近，并提高了互操作性。

> 尽管React17底层已将onFocus事件从Focus切换为focusin，但请注意，这并未影响冒泡行为，onFocus事件总是冒泡，在React17中会继续保持，因此通常它是一个更有用的默认值。

### 全新的jsx转换器

总结下来就是两点：

- 用``jsx()``函数替换``React.createElement()``
- 运行时自动引入``jsx()``函数，无需手动引入react

在v16中，我们写了一个React组件，总要引入

```js
import React from 'react'
```

这是因为在浏览器中无法直接使用jsx，所以要借助工具如``@babel/preset-react``将jsx语法转换为``React.createElement``的js代码，所以需要显式引入React，才能正常调用createElement。
通过``React.createElement()``创建元素是比较繁琐的，本身也存在一些问题，无法做到性能优化，在v17之后，React与babel官方合作，直接通过将``react/jsx-runtime``对jsx语法进行了新的转换而不依赖``React.createElement``,因此v17使用jsx语法可以不引入React，应用程序依然能正常运行。

### 副作用清理时机 

- v17 之前的清理机制：

在 React v17 之前，useEffect 的清理函数（即返回的函数）是 同步执行 的。当组件卸载或重新渲染时，React 会同步调用清理函数。
这种同步行为对于一些复杂的应用（如大规模的渲染或屏幕切换）来说，可能会影响性能。

- v17 之后的清理机制：

从 React v17 开始，清理函数的执行是 异步的，即它会在屏幕更新后异步执行清理操作。
如果副作用是与屏幕渲染无关的逻辑，这种异步清理方式能够提高渲染性能，特别是在过渡动画等情况下。

- 顺序保障：

在 React v17 中，清理函数始终在新的副作用执行之前完成（这是确保副作用依赖被正确清理的一种方式）。
而在 React 16 及之前版本，清理函数在组件更新前被同步执行。

- someRef.current 的问题：

图片提到了一个与 ref 相关的问题。由于 ref 是可变的，它在组件的整个生命周期内都可以被更新。当你在清理函数中使用 someRef.current 时，可能会出现 current 为 null 或变为其他值的情况。
为了避免这种问题，通常可以在 useEffect 的副作用中保存当前的 ref，以确保清理函数中的 ref 值是稳定的。

```js
useEffect(() => {
  // 保持当前 someRef 的引用
  const instance = someRef.current;

  // 副作用逻辑
  instance.someSetupMethod();

  // 清理副作用
  return () => {
    instance.someCleanupMethod(); // 使用保存的 instance 进行清理，避免 ref 变为 null 的问题
  };
}, []);

```

### 返回一致的undefined错误

在vI7以前，组件返回``undefined``始终是一个错误。但是有漏网之鱼，React只对类组件和函数组件执行此操作，但并不会检查``forwardRef``和``memo``组件的返回值，
在v7中修复了这个问题，forwardRef和memo组件的行为会与常规函数组件和类组件保持一致，在返回undefined时会报错

### 原生组件栈

- v16中错误调用钱的缺点：

   - 缺少源码位置追溯，在控制台无法点击跳转到到出错的地方
   - 无法适用于生产环境

整体来说不如原生的JavaScript调用钱，不同于常规压缩后的JavaScript调用栈，它们可以通过sourcemap的形式自动恢复到原始函数的位置，而使用React组件栈，在生产环境下必须在调用战信息和bundle大小间进行选择，
在v17使用了不同的机制生成组件调用钱，直接从JavaScript原生错误栈生成的，所以在生产环境也能按sourcemap还原回来，且支持点击跳到源码位置。

### 移除私有导出API

v17删除了一些私有APl,主要是React Native for Web使用的
另外，还别除了ReactTestUtil.SimulateNative工具方法，因为其行为与语义不符，如果你想要一种简便的方式来触发测试中原生浏览器的事件，可直接使用React Testing Library

### 启发式更新算法更新

引用React17新特性：启发式更新算法

- React16的expirationTimes模型只能区分是否>=expirationTimes决定节点是否更新，

- React17的lanes模型可以选定一个更新区间，并且动态的向区间中增减优先级，可以处理更细粒度的更新。


## React18 更新 

### 并发模式

V18的新特性是使用现代浏览器的特性构建的，彻底放弃对E的支特。
v17和v18的区别就是：从同步不可中断更新变成了异步可中断更新，V17可以通过一些试验性的AP开启并发模式，而V18则全面开启并发模式。

> 并发模式可帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整。该模式通过使渲染可中断来修复阻塞渲染限制，在Concurrent模式中，React可以同时更新多个状态。

这里参考下文区分几个概念：
- 并发模式是实现并发更新的基本前提
- V18中，以是否使用并发特性作为是否开启并发更新的依据。
- 并发特性指开启并发模式后才能使用的特性，比如：useDefrredvalue/useTransition

可阅读参考Concurrent Mode(并发模式)

### 更新Render API

v18使用ReactDOM.createRoot()创建一个新的根元素进行渲染，使用该APL,会自动启用并发模式。如果你升级到vM8,但没有使用ReactDOM.createRoot()代替
ReactDO州.render()时，控制台会打印错误日志要提醒你使用React,该警告也意味此项变更没有造成breaking change,而可以并存，当然尽量是不建议。

### 自动批处理

### Suspense 支持ssr



### startTransition 

### useTransition

### useDeferredValue

### useId

### 提供给第三方库的Hook

useSyncExternalStore


useInsertionEffect