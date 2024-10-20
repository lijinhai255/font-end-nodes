---
sidebarDepth: 10
---

# 手写Redux和Vuex

1. Redux/React⾃身良好的架构、先进的理念，加上⼀系列优秀的第三⽅插件的⽀持，是React/Redux成功的关键所在。
2. 可以将React看作输⼊为state，输出为view的“纯”函数。
3. 范畴论将世界抽象为对象和对象之间的联系，Redux将所有事件抽象为action。
4. Container 中含有 value 和 map 两个属性，⽽修改 value 的⽅法只有 map，在操作完value 后将新值放回 Container 中。

> // 如何操作或修改 value 由 f 给出。

```js

store -> container
currentState -> __value
action -> f
currentReducer -> map
middleware -> IO functor (解决异步操作的各种问题。)
```

5. store 是⼀个容器含有 state 和 reducer，

> reducer是⼀个纯函数，它可以查看之前的状态，执⾏⼀个action并且返回⼀个新的状态。

![alt text](./assets/reducer.png)
![alt text](./assets/redux.png)

这从 store 的创建语句 enhancer(createStore)(reducer, preloadedState) 可以很明显的得出。⽽修改 store 中的 currentState 的唯⼀⽅法是使⽤ currentReducer，并且currentState 在修改完后将新值依然存放在 store 内。


## 如何修改 currentState 是根据⽤户操作 action

![alt text](./assets/action.png)

1. applyMiddlewar.js 使⽤⾃定义的 middleware 来扩展 Redux
2. bindActionCreators.js 把 action creators 转成拥有同名 keys 的对象,使⽤时可以直接调⽤ 
3. combineReducers.js ⼀个⽐较⼤的应⽤，需要对 reducer 函数 进⾏拆分，拆分后的每⼀块独⽴负责管理 state 的⼀部分
4. compose.js 从右到左来组合多个函数，函数编程中常⽤到
5. createStore.js 创建⼀个 Redux Store 来放所有的state
6. utils/warnimng.js 控制台输出⼀个警告，我们可以不⽤看
7. React可以看做纯函数 固定的state输⼊输出组件


## Redux Store的基础

`store` 是⼀个单⼀对象：

- 管理应⽤的 state
- 通过 store.getState() 可以获取 state
- 通过 store.dispatch(action) 来触发 state 更新
- 通过 store.subscribe(listener) 来注册 state 变化监听器
- 通过 createStore(reducer, [initialState]) 创建


## React-Redux的原理

`Provider `其实就只是⼀个外层容器，它的作⽤就是通过配合 `connect` 来达到跨层级传递数
据。使⽤时只需将Provider定义为整个项⽬最外层的组件，并设置好store。那么整个项⽬都
可以直接获取这个store。它的原理其实是通过React中的Context来实现的。它⼤致的核⼼
代码如下：

> createStore

```html
 <script type="module">
      import { createStore } from './redux/index.js';
      import reducer from './reducer.js';
      let initState = {
        count: 0,
      };
      const store = createStore(reducer, initState);
      store.subscribe(() => {
        const state = store.getState();
        console.log('🐻', state.count);
      });
      store.dispatch({
        type: 'INCREMENT',
      });
      // store.dispatch({
      //   type: 'DECREMENT',
      // });
    </script>
```

```js
export default function createStore(reducer, initState) {
  let state = initState;
  let listeners = [];
  function subscribe(listener) {
    listeners.push(listener);
  }
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}

```

> reducer

```js
export default function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('INCREMENT: ');
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

```

> combineReducers

```text
 //合并reducers
      const reducer = combineReducers({
        counter: counterReducer,
        info: infoReducer,
      });
```

```js
//只要你想执行reducer必须要遍历全部的reducers文件夹中的内容
export default function combineReducers(reducers) {
  // counter info
  const reducerKeys = Object.keys(reducers);
  return function combinaction(state = {}, action) {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      //取到了对应reducers中的具体的js函数
      const reducer = reducers[key];
      //找到未更改前的state
      const previousStateForkey = state[key];
      const nextStateForkey = reducer(previousStateForkey, action);
      //外部的大对象中的counter == 新的状态
      nextState[key] = nextStateForkey;
    }
    return nextState;
  };
}

```

> replaceReducer

```js
 function replaceReducer(nextReducer) {
    reducer = nextReducer;
    //重新去替换了reducer
    dispatch({ type: Symbol() });
  }
```

> redux 中间件 重写dispatch 

### [compose.js](https://chatgpt.com/c/67130cf0-1edc-800c-a144-a83933bb8d14)

```js
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

```

> applyMiddleWare

```js
import compose from './compose.js';
const applyMiddleware = function (...middlewares) {
  return function (oldCreateStore) {
    //新的createStore
    return function (reducer, initState) {
      const store = oldCreateStore(reducer, initState);
      const simpleStore = { getState: store.getState };
      const chain = middlewares.map((middleware) => middleware(simpleStore));
      const dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
};
export default applyMiddleware;

```

## Vuex 


```js
import Vue from 'vue';
import Vuex from '@/store/ydvuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    add(state) {
      state.counter += 1;
    },
  },
  actions: {
    add({ commit }) {
      setTimeout(() => {
        commit('add');
      }, 500);
    },
  },
  modules: {
  },
});

```

```js
/* eslint-disable no-underscore-dangle */

let Vue;
class Store {
  constructor(options) {
    const { getters, state, mutations, actions } = options;
    this._mutations = mutations;
    this._actions = actions;
    if (getters) {
      this.handleGetters(getters);
    }
    this._vm = new Vue({
      data: {
        $$state: state,
      },
    });
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  get state() {
    return this._vm._data.$$state;
  }

  // mutations == redux reducer
  commit(type, payload) {
    const entry = this._mutations[type];
    if (entry) {
      entry(this.state, payload);
    }
  }

  dispatch(type, payload) {
    const entry = this._actions[type];
    if (entry) {
      entry(this, payload);
    }
  }

  handleGetters(getters) {
    this.getters = {};
    Object.keys(getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](this.state),
      });
    });
  }
}
function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}
export default {
  Store,
  install,
};

```



TypeScript + React + Node.js + CSS Next + Webpack5 + CI/CD + SDK
性能指标监控 + Recoil + cli + lowcode + Jest + majestic + msw
