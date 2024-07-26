# 笔试分类题


<!-- [01-HTML&CSS](Vue)
02-JS
[03-VUE](Vue)
04-React
05-前端工程化
06-移动端 
07-Node
08-数据库
09-算法
10-网络
11-性能优化
12-浏览器 -->



## Vue

### 如何遍历数组 

> v-if 的计算优先级要高于 v-for 
```vue
<template>
    <div>
        <p>遍历数组</p>
        <ul>
            <li v-for="(item, index) in listArr" :key="item.id">
                {{index}} - {{item.id}} - {{item.title}}
            </li>
        </ul>

        <p>遍历对象</p>
        <ul v-if='flag'>
            <li v-for="(val, key, index) in listObj" :key="key">
                {{index}} - {{key}} -  {{val.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            listArr: [
                { id: 'a', title: '标题1' }, // 数据结构中，最好有 id ，方便使用 key
                { id: 'b', title: '标题2' },
                { id: 'c', title: '标题3' }
            ],
            listObj: {
                a: { title: '标题1' },
                b: { title: '标题2' },
                c: { title: '标题3' },
            }
        }
    }
}
</script>
```

### 事件 

> 1 event 参数 ，自定义参数 如何获取
```vue
// 1. event 是原生的
// 2. 事件被挂载到当前元素
// 和 DOM 事件一样
```
> 2 事件修饰符 ， 按键修饰符 
```vue
 <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis"></a>
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThis"></a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件监听器时 使用事件捕获模式 -->
     <!-- 即内部元素触发的事件在此处理， 然后才交给内部元素进行处理 -->
    <div v-on:click.capture="doThis"></div>
    <!-- 只当在 event.target 是在当前元素自身时触发处理函数 -->
     <!-- 即事件不是从内部元素触发的 -->
    <div v-on:clicl.self="doThat"></div>
       <!-- alt 或 shift  一同按下 -->
     <button @click.ctrl="onClick">A</button>
     <!-- Ctrl 按下 -->
      <button @click.ctrl.exact="onCtrlClick">B</button>
      <!-- 没有任何修饰 按下时触发 -->
       <button @click.exact="onClick">C</button>
```
> 3 【观察】事件被绑到了哪里
```vue
<template>
    <div>
        <p>{{num}}</p>
        <button @click="increment1">+1</button>
        <button @click="increment2(2, $event)">+2</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        increment1(event) {
            // eslint-disable-next-line
            console.log('event', event, event.__proto__.constructor) // 是原生的 event 对象
            // eslint-disable-next-line
            console.log(event.target)
            // eslint-disable-next-line
            console.log(event.currentTarget) // 注意，事件是被注册到当前元素的，和 React 不一样
            this.num++

            // 1. event 是原生的
            // 2. 事件被挂载到当前元素
            // 和 DOM 事件一样
        },
        increment2(val, event) {
            // eslint-disable-next-line
            console.log(event.target)
            this.num = this.num + val
        },
        loadHandler() {
            // do some thing
        }
    },
    mounted() {
        window.addEventListener('load', this.loadHandler)
    },
    beforeDestroy() {
        //【注意】用 vue 绑定的事件，组建销毁时会自动被解绑
        // 自己绑定的事件，需要自己销毁！！！
        window.removeEventListener('load', this.loadHandler)
    }
}
</script>
```
### Form 表单

> v-model 如何使用
```vue
<template>
    <div>
        <p>输入框: {{name}}</p>
        <input type="text" v-model.trim="name"/>
        <input type="text" v-model.lazy="name"/>
        <input type="text" v-model.number="age"/>

        <p>多行文本: {{desc}}</p>
        <textarea v-model="desc"></textarea>
        <!-- 注意，<textarea>{{desc}}</textarea> 是不允许的！！！ -->

        <p>复选框 {{checked}}</p>
        <input type="checkbox" v-model="checked"/>

        <p>多个复选框 {{checkedNames}}</p>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>

        <p>单选 {{gender}}</p>
        <input type="radio" id="male" value="male" v-model="gender"/>
        <label for="male">男</label>
        <input type="radio" id="female" value="female" v-model="gender"/>
        <label for="female">女</label>

        <p>下拉列表选择 {{selected}}</p>
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <p>下拉列表选择（多选） {{selectedList}}</p>
        <select v-model="selectedList" multiple>
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '双越',
            age: 18,
            desc: '自我介绍',

            checked: true,
            checkedNames: [],

            gender: 'male',

            selected: '',
            selectedList: []
        }
    }
}
</script>
```

### Vue父子组件如何通讯 

> 1 props和$emit
> 2 组件通讯 - 自定义事件
> 3 组件生命周期

#### Vue.index
```vue
<template>
    <div>
        <Input @add="addHandler"/>
        <List :list="list" @delete="deleteHandler"/>
    </div>
</template>

<script>
import Input from './Input'
import List from './List'

export default {
    components: {
        Input,
        List
    },
    data() {
        return {
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                }
            ]
        }
    },
    methods: {
        addHandler(title) {
            this.list.push({
                id: `id-${Date.now()}`,
                title
            })
        },
        deleteHandler(id) {
            this.list = this.list.filter(item => item.id !== id)
        }
    },
    created() {
        // eslint-disable-next-line
        console.log('index created')
    },
    mounted() {
        // eslint-disable-next-line
        console.log('index mounted')
    },
    beforeUpdate() {
        // eslint-disable-next-line
        console.log('index before update')
    },
    updated() {
        // eslint-disable-next-line
        console.log('index updated')
    },
}
</script>

```
#### list.vue
```vue
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}

        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from "./event";

export default {
  // props: ['list']
  props: {
    // prop 类型和默认值
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteItem(id) {
      this.$emit("delete", id);
    },
    addTitleHandler(title) {
      // eslint-disable-next-line
      console.log("on add title", title);
    },
  },
  created() {
    // eslint-disable-next-line
    console.log("list created");
  },
  mounted() {
    // eslint-disable-next-line
    console.log("list mounted");

    // 绑定自定义事件
    event.$on("onAddTitle", this.addTitleHandler);
  },
  beforeUpdate() {
    // eslint-disable-next-line
    console.log("list before update");
  },
  updated() {
    // eslint-disable-next-line
    console.log("list updated");
  },
  beforeDestroy() {
    // 及时销毁，否则可能造成内存泄露
    event.$off("onAddTitle", this.addTitleHandler);
  },
};
</script>

```
#### Input.vue
```vue
<template>
    <div>
        <input type="text" v-model="title"/>
        <button @click="addTitle">add</button>
    </div>
</template>

<script>
import event from './event'

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTitle() {
            // 调用父组件的事件
            this.$emit('add', this.title)

            // 调用自定义事件
            event.$emit('onAddTitle', this.title)

            this.title = ''
        }
    }
}
</script>
```

#### event.js
```vue
import Vue from 'vue'

export default new Vue()

```

### 生命周期 （单个组件）

1. 挂载阶段
2. 更新阶段 
3. 销毁阶段 

生命周期图示
#### 

<!-- ![生命周期图示](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/6/8/16b371d739d6f702~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp ) -->
<img src='https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/6/8/16b371d739d6f702~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp' width='600'/>


### 组件生命周期 （多个组件）

![多组件生命周期执行顺序](/images/image.png)


### vue 高级特性

> 1. 自定义v-model
> 2. $nextTick
> 3. slot
> 4. 动态、异步组件
> 5. keep-alive
> 6. mixin

#### 自定义v-model

#### index.vue
```vue
<template>
  <div>
    <p>vue 高级特性</p>
    <hr />

    <!-- 自定义 v-model -->
    <p>{{name}}</p>
    <CustomVModel v-model="name"/> 

  </div>
</template>

<script>
import CustomVModel from './CustomVModel'
export default {
  components: {
    CustomVModel
  },
  data() {
    return {
      name: "test",
    };
  },
};
</script>

```
#### customVmodel
```vue
<template>
    <!-- 例如：vue 颜色选择 -->
    <input type="text"
        :value="text1"
        @input="$emit('change1', $event.target.value)"
    >
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
</template>

<script>
export default {
    model: {
        prop: 'text1', // 对应 props text1
        event: 'change1'
    },
    props: {
        text1: String,
        default() {
            return ''
        }
    }
}
</script>
```

#### $nextTick 

> 1. Vue是异步渲染的 
> 2. data 改变后 ，dom不会立刻渲染
> 3. $nextTick 会在DOM渲染之后被触发，以获取最新的DOM节点

```vue
```

##### nextTick.vue
```vue
<template>
  <div id="app">
    <ul ref="ul1">
        <li v-for="(item, index) in list" :key="index">
            {{item}}
        </li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        list: ['a', 'b', 'c']
      }
  },
  methods: {
    addItem() {
        this.list.push(`${Date.now()}`)
        this.list.push(`${Date.now()}`)
        this.list.push(`${Date.now()}`)

        // 1. 异步渲染，$nextTick 待 DOM 渲染完再回调
        // 3. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次
        this.$nextTick(() => {
          // 获取 DOM 元素
          const ulElem = this.$refs.ul1
          // eslint-disable-next-line
          console.log( ulElem.childNodes.length )
        })
    }
  }
}
</script>


```