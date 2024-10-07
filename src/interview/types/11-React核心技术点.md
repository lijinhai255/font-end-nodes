---
sidebarDepth: 10
---

# React 原理核心技术点

## 数据结构 

| 数据结构与算法相关      |
| ----------- |
| 链表、双向链表      |
| 队列   |
| 深度优先、广度优先   |
| 字典   |

## 前端开发架构相关 

| 前端知识      |
| ----------- |
| 性能渲染requestAnimationFrame      |
| 性能优化指标 FCP FP FID CLS   |
| 位元算   |
| 私仓、TypeSCript 、 Jest单元测试、pnpm npm yarn 原理、CICD 、webpack、Rollup   |
| v8 Libuv 原理   |
| 微任务和宏任务等   |

## Concurrent Mode （Fiber架构）

`React15`采用不可中断的递归方法更新`Stack Reconciler` 

> 在 React 中，Stack Reconciler 是 React 早期版本中用于处理虚拟 DOM 更新和渲染的调和器（Reconciler）实现。调和器的主要作用是计算并比较虚拟 DOM 的变化，然后最有效地更新实际的 DOM。

`React 16` 废弃-采用可中断的便利方式更新 `Fiber Reconciler`（新架构）Fiber的主要目标是通过异步渲染和更细粒度的任务调度来优化性能

![alt text](./assets/Reconciler.png)

`React 17` 废弃了React16中处理优先级采用的是`expirationTime`模型。用了Lane 
> `expirationTime` 模型使用了 expirationTime （一个时间长度）来描述任务的优先级；而`lane模型`则使用`二进制数来表示任务的优先级`

`lane模型`提供了一个新的优先级排列思路，相对于`expirationTime`来说，它对优先级的处理会更细腻，能够覆盖更多的边界条件。

`React17`带来了`Concurrent Mode`是一种提供更好的用户体验的渲染模式，它允许React在处理大型和复杂应用时更灵活的分配和调度工作。

```js
ReactDOM.render // aync模式
ReactDOM.createRoot(document.getElementById('root')).render() // Concurrent 模式
```
`React 18` 继续废弃React17的开启方式，采用默认启动。但是请配合startTransition才能启动满血版本

```js
import { startTransition } from 'react';

function MyComponent() {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    // 优先响应用户输入，保证输入框不会卡顿
    setValue(e.target.value);

    // 使用 startTransition 进行较为复杂的非紧急更新
    startTransition(() => {
      // 过渡性更新，例如过滤一个列表或加载数据
      updateFilteredList(e.target.value);
    });
  };

  return (
    <input type="text" value={value} onChange={handleInputChange} />
  );
}

```

Concurrent Mode的实现涉及到以下几个方面：

1.异步渲染

。Concurrent Mode引入了异步渲染的概念，即将渲染任务分割为多个小任务，并使用调度器(Scheduler)来优先处理用户交互和高优先级任务。

。异步渲染使得R©act能够以递增的方式对应用进行更新，并在每个更新阶段中尽快对用户提供反馈。

2.调度器(Scheduler):

。Concurrent Model使用了一个全新的调度器，称为新的调度器(New Scheduler)。

。新的调度器采用优先级调度算法，允许React根据任务的优先级和类型动态地安排任务的执行顺序。

。调度器在Concurrent Mode中负责任务的调度和优先级排序，确保任务按照正确的优先级和顺序执行。

3.任务优先级

。Concurrent Mode引入了任务优先级的概念，使得React能够根据任务的紧迫程度和重要性来分配优先级。

。React为不同类型的任务（如用户交互、动画、数据更新等）赋予不同的优先级，确保紧急任务得到更快的响应和处理。

4.时间切切片(Time Slicing):

。时间切片是Concurrent Model的一个关键特性，它将渲染任务切分为一系列小的时间片段。

。每个时间片段的执行时间被控制在一定范围内，确保不会阻塞主线程，使得浏览器能够及时响应用户输入和其他高优先级的任务。

通过这些机制的结合，Concurrent Modet使得React应用能够以更细粒度的方式进行渲染和更新，并提供更好的用户交互和响应能力。Concurrent Mode的实现使得React能够在处理复杂应用时，更好地平衡渲染和性能。需要注意的是，Concurrent Mode目前仍然处于实验性阶段，并且在React 18及以后版本中得到了更多的改进和优化。

```jsx
import { useState, useEffect, useTransition, Suspense } from 'react';

// 模拟一个获取数据的异步函数
const fetchData = (resource: string): Promise<string> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Data fetched: ${resource}`), 2000)
  );
};

// 使用 Suspense 支持的 resource
const resourceCache: { [key: string]: Promise<string> } = {};

const fetchResource = (resource: string) => {
  if (!resourceCache[resource]) {
    resourceCache[resource] = fetchData(resource);
  }
  throw resourceCache[resource]; // Throw promise to suspend the component
};

const DataComponent: React.FC<{ resource: string }> = ({ resource }) => {
  const data = fetchResource(resource); // This will throw a promise or return cached data
  return <div>{data}</div>;
};

const MyComponent: React.FC = () => {
  const [resource, setResource] = useState<string>('initial resource');
  const [startTransition, isPending] = useTransition();

  const handleClick = (nextResource: string) => {
    startTransition(() => {
      setResource(nextResource);
    });
  };

  return (
    <div>
      <button onClick={() => handleClick('next resource')} disabled={isPending}>
        {isPending ? 'Loading...' : 'Load Next Resource'}
      </button>
      <Suspense fallback={<h1>Loading...</h1>}>
        <DataComponent resource={resource} />
      </Suspense>
    </div>
  );
};

export default MyComponent;

```

总的来说，Fiber 是React内部的一种机构，用于管理组件的渲染，而Concurrent Mode是一种运行模式，它利用Fiber的异步渲染能力，使得React可以在处理多个任务是进行更好的协调

```text
1000/60 = 16.67ms  ： 1s 渲染60次  

如何把主线程（webWork）让出来 
requestIdleCallback
requestAnimationFrame
Atomics 线程锁

微任务和宏任务 
react 主要是宏任务 
微任务执行要早于宏任务 
微任务：如果控制不好反而会堵主线程 

```

```js
function foo(){
    console.log(Math.random())
    foo()
}
foo()
```

```js
function foo(){
    console.log(Math.random())
    return Promise.resolve().then(foo)
}
foo()
```

```js
function foo(){
    console.log(Math.random())
    setTimeout(foo,0)
}
foo()
```

16的fiber

通过 requestAnimationFrame 来进行帧间时间计算，以及使用 MessageChannel 把计算逻辑放到宏任务中，如果这一帧优先级比较紧急，马上执行

```js
//requestAnimationFrame回调的执行与task和microtast无关，它是在浏觉器道染前，在微任务执行后执行。时机其实也并不是很准确
//requestAnimationFrame还有个特点，就是当页面处理末激活的状态下，requestAnimationFrame会停止执行：当页面后面再转为激活时，requestAnimationFrame又会接着上
- 时机无法把握 

let tasks = []; // 保存待执行任务的队列
let isPerformingTask = false; // 标识变量，用于表示当前是否有任务正在执行
const channel = new MessageChannel();// 创建一个新的消息通道
const port = channel.port2;// 获取通道的第二个端口
// 事例任务函数
function myTask1(){
    console.log('Performing Task 1')
}
function myTask2(){
    console.log('Performing Task 2')
}
function myTask3(){
    console.log('Performing Task 3')
}
// 任务调度
function scheduleTask(task,expirationTime){
    tasks.push({task,expirationTime})
    if(!isPerformingTask){
         isPerformingTask= true;
         port.postMessage(null);
    }
}
function performTask(currentTime){
    const frameTime = 1000/60;
    while(tasks.length>0&&performance.now()-currentTime<frameTime){
        const {task,expirationTime} = tasks.shift()
        if(performance.now()>= expirationTime){
            task()
        }else{
            tasks.push({task,expirationTime})
        }
    }
    if (tasks.length > 0) {
        // 如果还有未完成的任务，继续请求下一帧
        requestAnimationFrame(performTask);
    } else {
        // 所有任务完成后，重置 isPerformingTask
        isPerformingTask = false;
    }



}
// 当通道的第一个端口收到消息是，开始执行任务
channel.port1.onmessage = ()=>requestAnimationFrame(performTask);
// 添加超时任务队列，并设置过期时间
scheduleTask(myTask1,performance.now()+1000)
scheduleTask(myTask2,performance.now())
scheduleTask(myTask3,performance.now()+3000)
```

代码说明：

- frameScheduler：每次调用 requestAnimationFrame，都计算出这一帧已经消耗的时间，剩余时间可以用于执行任务。如果当前帧还剩下足够的时间，我们就调用 addTask 来处理任务。

- addTask：将任务添加到 tasks 队列中，并通过 MessageChannel 的微任务机制执行队列中的任务。如果任务耗时较短，它们会在当前帧中执行；如果任务较多或者帧内没有足够时间，则会延后到下一帧继续执行。

- MessageChannel：保证任务执行的顺序，并确保它们在微任务队列中处理，这样可以避免阻塞主线程的其他重要操作。

```js

setTimeout(()=>{
    console.log(1)
},0)
setImmediate(()=>{
    console.log(2)
},0)

```

- 在node执行过程中 可能是1、2 也可能是2、1

