(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1293:function(v,_,t){"use strict";t.r(_);var s=t(24),e=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"pull-request规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pull-request规范"}},[v._v("#")]),v._v(" Pull Request规范")]),v._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),_("p",[_("strong",[v._v("pull request（以下用pr代称） 需要严格遵循以下原则")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("一个 pr 只围绕一件事")]),v._v(" "),_("li",[v._v("避免过大的 pr")])]),v._v(" "),_("h3",{attrs:{id:"一个-pr-只围绕一件事"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一个-pr-只围绕一件事"}},[v._v("#")]),v._v(" 一个 pr 只围绕一件事")]),v._v(" "),_("p",[v._v("一个 pr 应该只负责一件事，这遵循设计模式中的"),_("strong",[v._v("单一职责原则")])]),v._v(" "),_("p",[v._v("如何定义"),_("em",[v._v("一件事")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("处理了一个 issue")]),v._v(" "),_("li",[v._v("解决了一个bug")]),v._v(" "),_("li",[v._v("新增了一个组件或功能")]),v._v(" "),_("li",[v._v("重构代码实现了某"),_("strong",[v._v("一个")]),v._v("目的")])]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("一个 pr 可以包含多个 commit，但要注意尺度，保证 pr 不要过大")])])]),v._v(" "),_("h3",{attrs:{id:"避免过大的-pr"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#避免过大的-pr"}},[v._v("#")]),v._v(" 避免过大的 pr")]),v._v(" "),_("blockquote",[_("p",[v._v("该条规则对于新增组件的 pr 例外")])]),v._v(" "),_("p",[v._v("一个 pr 的文件改变最好少于"),_("strong",[v._v("12个文件")]),v._v("（排除build产生的文件）")]),v._v(" "),_("h2",{attrs:{id:"信息填写"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信息填写"}},[v._v("#")]),v._v(" 信息填写")]),v._v(" "),_("h3",{attrs:{id:"title格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#title格式"}},[v._v("#")]),v._v(" Title格式")]),v._v(" "),_("h4",{attrs:{id:"pr-仅包含一个-commit"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pr-仅包含一个-commit"}},[v._v("#")]),v._v(" Pr 仅包含一个 commit")]),v._v(" "),_("p",[v._v("直接使用 Github 默认填写的信息，即 Title 为 commit msg 的 subject 部分，Content 为 commit msg 的 body 部分")]),v._v(" "),_("h4",{attrs:{id:"pr-包含多个-commit"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pr-包含多个-commit"}},[v._v("#")]),v._v(" Pr 包含多个 commit")]),v._v(" "),_("p",[v._v("描述清楚这个 Pr 所做的事情，格式："),_("code",[v._v("[名词]")]),v._v("+"),_("code",[v._v("动词")]),v._v("+"),_("code",[v._v("名词")]),v._v("+"),_("code",[v._v("[形容词]")]),v._v("+"),_("code",[v._v("[名词]")])]),v._v(" "),_("p",[v._v("例如：")]),v._v(" "),_("ul",[_("li",[v._v("修复 Collapse 组件无法展开的问题")]),v._v(" "),_("li",[v._v("Collapse 组件添加 top 属性")]),v._v(" "),_("li",[v._v("新增 Message 组件")]),v._v(" "),_("li",[v._v("删除 Message 组件 color 属性")]),v._v(" "),_("li",[v._v("修改 Message 组件 top 属性单位为 rpx")])]),v._v(" "),_("blockquote",[_("p",[v._v("注意英文单词左右添加一个空格方便阅读")])]),v._v(" "),_("p",[v._v("动词建议从下列选项中选取：")]),v._v(" "),_("ul",[_("li",[v._v("新增（组件、属性、API）")]),v._v(" "),_("li",[v._v("修改")]),v._v(" "),_("li",[v._v("修正")]),v._v(" "),_("li",[v._v("删除")])]),v._v(" "),_("h3",{attrs:{id:"content格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#content格式"}},[v._v("#")]),v._v(" Content格式")]),v._v(" "),_("p",[v._v("如果 title 已经描述清楚了此次 pr 的目的，则 Content 可以留空，否则应该对此次 pr 进行详细的描述")]),v._v(" "),_("h2",{attrs:{id:"其他规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他规则"}},[v._v("#")]),v._v(" 其他规则")]),v._v(" "),_("p",[v._v("连接 issue")]),v._v(" "),_("p",[v._v("如果这个 pr 解决了某个 issue 提出的 bug 或者 feature，则应在 pr 中将此 issue 关联起来")]),v._v(" "),_("p",[v._v("在 pr 描述中 使用如下关键字可将 issue 关联起来：")]),v._v(" "),_("ul",[_("li",[v._v("close")]),v._v(" "),_("li",[v._v("closes")]),v._v(" "),_("li",[v._v("closed")]),v._v(" "),_("li",[v._v("fix")]),v._v(" "),_("li",[v._v("fixes")]),v._v(" "),_("li",[v._v("fixed")]),v._v(" "),_("li",[v._v("resolve")]),v._v(" "),_("li",[v._v("resolves")]),v._v(" "),_("li",[v._v("resolved")])]),v._v(" "),_("p",[v._v("示例： close #756")]),v._v(" "),_("p",[v._v("然后在下图中设置关联issue：")]),v._v(" "),_("p",[_("img",{attrs:{src:t(810),alt:"image-20210501182705131"}})]),v._v(" "),_("h2",{attrs:{id:"流程说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程说明"}},[v._v("#")]),v._v(" 流程说明")]),v._v(" "),_("ul",[_("li",[v._v("提交PR")]),v._v(" "),_("li",[v._v("Review")]),v._v(" "),_("li",[v._v("建议 -> 修改")]),v._v(" "),_("li",[v._v("设置MileStone")]),v._v(" "),_("li",[v._v("关联issues（可选）")]),v._v(" "),_("li",[v._v("合并")])])])}),[],!1,null,null,null);_.default=e.exports},810:function(v,_,t){v.exports=t.p+"assets/img/image-20210501182705131.426da366.png"}}]);