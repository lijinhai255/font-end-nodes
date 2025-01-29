(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1291:function(t,e,a){"use strict";a.r(e);var r=a(24),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),e("p",[t._v("在参与开源电子书项目之前，你需要准备以下环境：")]),t._v(" "),e("ul",[e("li",[t._v("GitHub账号")]),t._v(" "),e("li",[t._v("Git")]),t._v(" "),e("li",[t._v("Node.js")]),t._v(" "),e("li",[t._v("Markdown编辑器")])]),t._v(" "),e("h2",{attrs:{id:"注册github账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册github账号"}},[t._v("#")]),t._v(" 注册GitHub账号")]),t._v(" "),e("p",[t._v("首先，打开"),e("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub官网"),e("OutboundLink")],1),t._v("，如果官网打开缓慢或者无法打开，可以使用"),e("a",{attrs:{href:"https://gitee.com/docmirror/dev-sidecar/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("DevSidecar"),e("OutboundLink")],1),t._v("进行加速，点击"),e("code",[t._v("Sign Up")]),t._v("，填写以下信息")]),t._v(" "),e("p",[e("img",{attrs:{src:a(806),alt:"github reg"}})]),t._v(" "),e("p",[t._v("点击"),e("code",[t._v("Create account")]),t._v("完成账号注册。完成注册后，你填写的邮箱会收到一封确认的邮件，点击"),e("code",[t._v("Verify email address")]),t._v("，")]),t._v(" "),e("p",[e("img",{attrs:{src:a(807),alt:"github verify"}})]),t._v(" "),e("p",[t._v("完成确认后，你的GitHub账号就注册成功啦。")]),t._v(" "),e("h2",{attrs:{id:"配置git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置git"}},[t._v("#")]),t._v(" 配置Git")]),t._v(" "),e("p",[t._v("前往"),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git官网"),e("OutboundLink")],1),t._v("，根据操作系统自行选择对应的版本进行安装，这边以 Windows 为例，Mac安装请参考"),e("a",{attrs:{href:"https://git-scm.com/download/mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mac build git"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("Git安装包，双击打开，按照指引，下一步完成安装即可。打开命令行，输入"),e("code",[t._v("git --version")]),t._v("，如出现对应的版本号，则表示安装成功。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(808),alt:"git version"}})]),t._v(" "),e("p",[t._v("接下来我们需要创建一个全局用户名和全局邮箱作为配置信息，")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_name"')]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_email@youremail.com"')]),t._v("\n")])])]),e("p",[t._v("这里的"),e("code",[t._v("your_name")]),t._v("以及"),e("code",[t._v("your_email@youremail.com")]),t._v("为方便统计贡献信息请尽量与你GitHub里的信息保持一致。")]),t._v(" "),e("h2",{attrs:{id:"安装node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装node-js"}},[t._v("#")]),t._v(" 安装Node.js")]),t._v(" "),e("p",[t._v("打开"),e("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js官网"),e("OutboundLink")],1),t._v("，根据操作系统自行选择对应的版本进行安装，这边以 Windows 为例，Mac安装请下载对应的Mac安装包。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("Node安装包，这里我们选择"),e("code",[t._v("LTS")]),t._v("版本，这个是Node发行的稳定版本，双击打开，按照指引，下一步完成安装即可，打开命令行，输入"),e("code",[t._v("node -v & npm -v")]),t._v("，出现对应的版本号，则表示安装成功。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(809),alt:"node version"}})]),t._v(" "),e("p",[t._v("npm默认的镜像源为国外镜像源，下载可能会出现缓慢或卡死的情况，建议采用一下方式进行处理。")]),t._v(" "),e("ol",[e("li",[t._v("安装cnpm，配置淘宝镜像源；")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" cnpm "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--registry")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("使用DevSidecar打开npm加速。")])]),t._v(" "),e("h2",{attrs:{id:"markdown编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown编辑器"}},[t._v("#")]),t._v(" Markdown编辑器")]),t._v(" "),e("p",[t._v("由于项目中图文内容基于Markdown语法进行创作，我们需要一款优秀的Markdown编辑器，这里我们推荐"),e("a",{attrs:{href:"https://www.typora.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typora"),e("OutboundLink")],1),t._v("，干净、简洁、语法支持丰富，让你专注创作，打开官网，下载对应的安装包，安装即可。")]),t._v(" "),e("p",[t._v("当然，同学们可以根据自己的喜好使用自己平时常用的编辑器进行创作，如果有同学还不熟悉Markdown语法，可以参考"),e("a",{attrs:{href:"http://note.youdao.com/s/cFmUBzQt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown语法整理"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("至此，基础环境已经准备完成，接下来将教同学们如何配置项目，提交PR（Pull Request）。")])])}),[],!1,null,null,null);e.default=s.exports},806:function(t,e,a){t.exports=a.p+"assets/img/github-reg.1d017933.png"},807:function(t,e,a){t.exports=a.p+"assets/img/github-verify.23f874bb.png"},808:function(t,e){t.exports="data:image/png;base64,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"},809:function(t,e){t.exports="data:image/png;base64,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"}}]);