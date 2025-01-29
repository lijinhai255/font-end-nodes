(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1068:function(e,t,o){e.exports=o.p+"assets/img/queue.68f92921.png"},1069:function(e,t,o){e.exports=o.p+"assets/img/renderApp.ae705ba8.png"},1388:function(e,t,o){"use strict";o.r(t);var r=o(24),v=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"react-18-源码核心流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-18-源码核心流程"}},[e._v("#")]),e._v(" React 18 源码核心流程")]),e._v(" "),t("h2",{attrs:{id:"实现状态更新机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现状态更新机制"}},[e._v("#")]),e._v(" 实现状态更新机制")]),e._v(" "),t("p",[e._v("常见的触发更新方式：")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("ReactDOM.createRoot().render")]),e._v("（或老版本 ReactDOM.render）")])]),e._v(" "),t("li",[t("p",[e._v("this.setState")])]),e._v(" "),t("li",[t("p",[e._v("useState的"),t("code",[e._v("dispatch")]),e._v("方法")])])]),e._v(" "),t("p",[e._v("希望实现一套统一的的更新机制")]),e._v(" "),t("p",[e._v("更新机制的组成部分")]),e._v(" "),t("ul",[t("li",[e._v("代表更新的数据结构 - Update")]),e._v(" "),t("li",[e._v("消费update的数据结构 - UpdateQueue")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(1068),alt:"queue"}})]),e._v(" "),t("p",[e._v("需要考虑的事情：")]),e._v(" "),t("ul",[t("li",[e._v("更新可能发生于任意组件，尔更新流程是从根节点递归的")]),e._v(" "),t("li",[e._v("需要一个统一的根节点保存通用信息")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("ReactDOM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("createRoot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("rootElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("App"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[t("img",{attrs:{src:o(1069),alt:"alt text"}})]),e._v(" "),t("p",[e._v("在React Fiber架构中，有两个概念叫做"),t("code",[e._v("HostRootFibe")]),e._v("r和"),t("code",[e._v("FiberRootNode")]),e._v(",这两个概念都是React内部实现的一部分，并且都与React组件树的根部相关。然而，它们在React内部的角\n色是不同的")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("HostRootFiber:这是一个特殊类型的Fiber节点，代表React应用的根，每个React应用都有一个对应的"),t("code",[e._v("HostRootFiber")]),e._v("。在Fiber架构中，每个React组件都对应一个Fiber节点，这个节点包含了该组件的状态、属性(props)等信息，以及对父节点、子节点和兄弟节点的引用。"),t("code",[e._v("HostRootP1ber")]),e._v("也不例外，它的子节点通常是应用的顶级组件。")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("FiberRootNode")]),e._v(":这是一个存储在React内部的对象，代表React应用的根。它包含了很多关于React应用状态的信息，例如当前的Fiber树、下一个待处理的工作单元等。它的current属性指向了当前有效的HostRootFiber")])])]),e._v(" "),t("p",[e._v("所以，"),t("code",[e._v("HostRootFiber")]),e._v("和"),t("code",[e._v("FiberRootNode")]),e._v("都代表了React应用的根，但一个是在"),t("code",[e._v("Fiber")]),e._v("树中的节点，一个是存储应用状态的对象。在处理React/应用时，React内部会通过\n"),t("code",[e._v("FiberRootNode``来访问和管理应用的状态，通过HostRootF1ber")]),e._v("来处理组件的渲染和更新。")]),e._v(" "),t("blockquote",[t("p",[e._v("更深入一些具体细节")])]),e._v(" "),t("p",[t("code",[e._v("FiberRootNode")]),e._v("和"),t("code",[e._v("HostRootFiber")]),e._v("是React Fiber架构中的两个关键概念，"),t("code",[e._v("FiberRootNode")]),e._v("和"),t("code",[e._v("HostRootFiber")]),e._v("都代表着React应用的根，但它们的角色和用途是有所区别的。")]),e._v(" "),t("ul",[t("li",[e._v("FiberRootNode:这是一个React内部的数据结构，它包含了许多关于React应用的信息，以及对应用状态的引用。它的一些主要属性包括\n"),t("ul",[t("li",[e._v("current:指向当前活动的"),t("code",[e._v("HostRootFiber")]),e._v(",React在渲染过程中可能会有两棵Fiber树在交替工作（这是为了实现React的异步渲染和时间切片功能），current属性始终指向当前应用的状态。")]),e._v(" "),t("li",[e._v("finishedWork:在React完成一次更新后，"),t("code",[e._v("finishedwork")]),e._v("属性会被设置为新的"),t("code",[e._v("HostRootF1ber")]),e._v("。然后，React会在提交阶段将这个新的Fiber树提交给渲块器，以便更新DOM.")]),e._v(" "),t("li",[e._v("HostRootF1ber:这是Fiber树中的一个特殊类型的节点，代表了React应用的根。每一个Fiber节点都代表了一个React元素或组件，而"),t("code",[e._v("HostRootF1ber")]),e._v("则代表了整个应用。它的一些主要属性包括：\n"),t("ul",[t("li",[e._v("child:指向应用的顶级组件，例如，如果你的React应用由一个"),t("code",[e._v("<App/>")]),e._v("组件构成，那么HostRootFiber的child属性将会指向代表"),t("code",[e._v("<App/>")]),e._v("的Fiber节点.")]),e._v(" "),t("li",[t("code",[e._v("return")]),e._v(":对于所有的Fiber节点（除了HostRootFiber）,"),t("code",[e._v("return")]),e._v("属性会指向它门的父节点。但对于"),t("code",[e._v("HostRootFiber")]),e._v(","),t("code",[e._v("return")]),e._v("属性是"),t("code",[e._v("null")]),e._v("，因为它没有父节点.")])])])])])]),e._v(" "),t("p",[t("code",[e._v("FiberRootNode")]),e._v("和"),t("code",[e._v("HostRootFiber")]),e._v("的关系是，"),t("code",[e._v("FiberRootNode")]),e._v("的current属性会指向一个"),t("code",[e._v("HostRootFiber")]),e._v(",而这个"),t("code",[e._v("HostRootFiber")]),e._v("则代表了应用当前的状态，当React完成一\n次更新后，FiberRootNode的finishedwork属性会被设置为新的HostRootFiber,然后React会在提交阶段将这个新的Fiber树提交给渲染器，以便更新DOM.")]),e._v(" "),t("blockquote",[t("p",[e._v("createContainer -> hosrRootFiber -> updateQueue 返回<- FiberRootNode\nFiberrootNode -> HostRootFiber -> updateQueue -> createUpdate(element)-> 状态更新 -> scheduleUpdateOnFIber -> markUpdateFromFiberToRoot -> renderRoot -> prepareFreshStack -> createWorkInProgress ->  第一次mount阶段")])]),e._v(" "),t("h2",{attrs:{id:"render-commit阶段实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#render-commit阶段实现"}},[e._v("#")]),e._v(" Render + Commit阶段实现")]),e._v(" "),t("p",[e._v("react内部三个阶段")]),e._v(" "),t("ul",[t("li",[e._v("schedule 阶段")]),e._v(" "),t("li",[e._v("render 阶段（beginWork completeWork）入口函数 wookLoop")]),e._v(" "),t("li",[e._v("commit 阶段（commitWork）")])]),e._v(" "),t("p",[t("code",[e._v("commit")]),e._v("阶段三个子阶段")]),e._v(" "),t("ul",[t("li",[e._v("beforeMulation阶段")]),e._v(" "),t("li",[e._v("mulation 阶段(突变阶段 意味着元素属性变化等)")]),e._v(" "),t("li",[e._v("layout 阶段  （useLayout等Hook发生的阶段）")]),e._v(" "),t("li",[e._v("workInProgess 和current 切换就发生在mutation->layout之间")])]),e._v(" "),t("p",[e._v("当前"),t("code",[e._v("commit")]),e._v(" 阶段要执行的任务")]),e._v(" "),t("ul",[t("li",[e._v("fiber树切换")]),e._v(" "),t("li",[e._v("执行Fiacement 对应的操作")])])])}),[],!1,null,null,null);t.default=v.exports}}]);