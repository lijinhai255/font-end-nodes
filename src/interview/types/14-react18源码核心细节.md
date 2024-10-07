---
sidebarDepth: 10
---

# React 18 源码核心流程


## 实现状态更新机制

常见的触发更新方式：
- `ReactDOM.createRoot().render`（或老版本 ReactDOM.render）

- this.setState
- useState的`dispatch`方法 

希望实现一套统一的的更新机制
更新机制的组成部分 

- 代表更新的数据结构 - Update
- 消费update的数据结构 - UpdateQueue

