# vue 设计原理

MVVM 

框架 


业务

业务=>数据  => 视图 


vue

```html

<div id='app'>
    <input type='text' id='a' v-model='text'/>
    {{text}}
</div>
```

```js
var vm = new Vue({
    el:'app',
    data:{
        text:'hellow world'
    }
})
vm.text = 5
```

1. 视图怎么到数据
2. 数据怎么到了视图里面
3. 编译模板=>complier

Object.defineProperty(obj, prop, descriptor) 不管是对象还是数组，都会监听刚开始的key 
 
 对象是 
 数组是连续的 ，数组操作，内存段里边的数据频繁发生改变 get 和set 。

监听对象的getter setter


Observer：把数据处理成响应式数据

Watcher：

Dep：收集依赖

Directive：指令 

```js
<div class='content'>
    <span>456</span>
</div>

function render(){
    return with(this){
        return _c('div',{
            staticClass:'content'
        },[
            _c('span',[_v('456')])
        ])
    }
}
```