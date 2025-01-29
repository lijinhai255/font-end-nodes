(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1242:function(t,s,e){"use strict";e.r(s);var a=e(24),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"项目规范及工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目规范及工具"}},[t._v("#")]),t._v(" 项目规范及工具")]),t._v(" "),s("h2",{attrs:{id:"集成-editorconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成-editorconfig"}},[t._v("#")]),t._v(" 集成 EditorConfig")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("a",{attrs:{href:"https://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EditorConfig"),s("OutboundLink")],1)]),t._v(" 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。")])]),t._v(" "),s("p",[t._v("在项目根目录下增加 "),s("code",[t._v(".editorconfig")]),t._v(" 文件， 并配置以下内容：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Editor configuration, see http://editorconfig.org")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示是最顶层的 EditorConfig 配置文件")]),t._v("\nroot = true\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示所有文件适用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置文件字符集为 utf-8")]),t._v("\ncharset = utf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缩进风格（tab | space）")]),t._v("\nindent_style = space\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缩进大小")]),t._v("\nindent_size = 4\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 控制换行类型(lf | cr | crlf)")]),t._v("\nend_of_line = lf\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去除行首的任意空白字符")]),t._v("\ntrim_trailing_whitespace = true\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 始终在文件末尾插入一个新行")]),t._v("\ninsert_final_newline = true\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# md 文件适用以下规则")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.md")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nmax_line_length = off\ntrim_trailing_whitespace = false\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("VSCode 使用 EditorConfig 需要去插件市场下载插件 "),s("code",[t._v("EditorConfig for VS Code")]),t._v(" 。WebStorm 则不需要安装，直接使用 EditorConfig 配置即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(699),alt:"image-20210504101228402"}})])]),t._v(" "),s("h2",{attrs:{id:"集成-prettier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成-prettier"}},[t._v("#")]),t._v(" 集成 Prettier")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),s("OutboundLink")],1)]),t._v(" 是一款强大的代码格式化工具，支持 "),s("code",[t._v("JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown")]),t._v(" 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。")])]),t._v(" "),s("ul",[s("li",[t._v("安装 Prettier")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i prettier "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("创建 Prettier 配置文件\nPrettier 支持多种格式的配置文件，比如 "),s("code",[t._v(".json")]),t._v("、"),s("code",[t._v(".yml")]),t._v("、"),s("code",[t._v(".yaml")]),t._v("、"),s("code",[t._v(".js")]),t._v(" 等。\n在本项目根目录下创建 "),s("code",[t._v(".prettierrc")]),t._v(" 文件。")])]),t._v(" "),s("li",[s("p",[t._v("配置 "),s("code",[t._v(".prettierrc")]),t._v("\n在本项目中，我们进行如下简单配置，关于更多配置项信息，请前往官网查看 "),s("a",{attrs:{href:"https://prettier.io/docs/en/options.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier-Options"),s("OutboundLink")],1),t._v(" 。")])])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useTabs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tabWidth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"printWidth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"singleQuote"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trailingComma"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bracketSpacing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"semi"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Prettier 安装且配置好之后，就能使用命令来格式化代码")]),t._v(" "),s("ul",[s("li",[t._v("格式化所有文件（. 表示所有文件）")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ npx prettier "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--write")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("VSCode 编辑器使用 "),s("code",[t._v("Prettier")]),t._v(" 配置需要下载插件 "),s("code",[t._v("Prettier - Code formatter")]),t._v("； WebStorm 则不需要安装，直接使用 EditorConfig 配置即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(700),alt:"image-20210504102416728"}})])]),t._v(" "),s("h2",{attrs:{id:"集成-eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成-eslint"}},[t._v("#")]),t._v(" 集成 ESLint")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),s("OutboundLink")],1),t._v(" 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。其核心是通过对代码解析得到的 "),s("code",[t._v("AST")]),t._v("（Abstract Syntax Tree 抽象语法树）进行模式匹配，来分析代码达到检查代码质量和风格问题的能力。\n使用 "),s("code",[t._v("ESLint")]),t._v(" 可以尽可能的避免团队成员之间编程能力和编码习惯不同所造成的代码质量问题，一边写代码一边查找问题，如果发现错误，就给出规则提示，并且自动修复，长期下去，可以促使团队成员往同一种编码风格靠拢。")]),t._v(" "),s("ul",[s("li",[t._v("安装 eslint")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" eslint\n")])])]),s("ul",[s("li",[s("p",[t._v("配置 ESLint")]),t._v(" "),s("blockquote",[s("p",[t._v("ESLint 安装成功后，执行 "),s("code",[t._v("npx eslint --init")]),t._v("，然后按照终端操作提示完成一系列设置来创建配置文件。")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(701),alt:"image-20210504103213588"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("How would you like to use ESLint? ...(你想如何使用 ESLint?…)")]),t._v(" "),s("blockquote",[s("p",[t._v("我这里选择第三个，检查语法，发现问题，并强制代码样式")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(702),alt:"image-20210504103418834"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("What type of modules does your project use? ... （你的项目使用什么类型的模块?…）")]),t._v(" "),s("blockquote",[s("p",[t._v("项目支持 es6+语法，所以这里就直接选用第一项：JavaScript modules (import/export)")])])]),t._v(" "),s("li",[s("p",[t._v("Which framework does your project use? ... （你的项目使用哪种框架?…）")]),t._v(" "),s("blockquote",[s("p",[t._v("这里并未使用 vue 和 react，所以选择 none of these")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(703),alt:"image-20210504104452973"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Does your project use TypeScript? (你的项目使用 TypeScript 吗?)")]),t._v(" "),s("blockquote",[s("p",[t._v("项目中并没有使用 Typescript，所以选择 No")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(704),alt:"image-20210504104610444"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Where does your code run?(你的代码在哪里运行?)")]),t._v(" "),s("blockquote",[s("p",[t._v("这是 node 项目，所以不需要选择浏览器环境")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(705),alt:"image-20210504105031201"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("How would you like to define a style for your project? ... (你想怎样为你的项目定义风格？)")]),t._v(" "),s("blockquote",[s("p",[t._v("我们这里选择 Use a popular style guide（使用一种流行的风格指南）")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(706),alt:"image-20210504105437959"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Which style guide do you want to follow? ... (你想遵循哪种风格指南?…)")]),t._v(" "),s("p",[s("img",{attrs:{src:e(707),alt:"image-20210504105647664"}})])]),t._v(" "),s("li",[s("p",[t._v("What format do you want your config file to be in? ... (您希望配置文件的格式是什么?…)")]),t._v(" "),s("blockquote",[s("p",[t._v("我这里选择 JavaScript")])])]),t._v(" "),s("li",[s("p",[t._v("Would you like to install them now with npm?（你想现在用 npm 安装它们吗?）")]),t._v(" "),s("blockquote",[s("p",[t._v("默认 Yes，所以可以直接回车")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(708),alt:"image-20210504110100677"}})])]),t._v(" "),s("li",[s("p",[t._v("所有配置如下")]),t._v(" "),s("p",[s("img",{attrs:{src:e(709),alt:"image-20210504110235680"}})])])]),t._v(" "),s("p",[t._v("安装成功后，项目的根目录就会多一个"),s("code",[t._v(".eslintrc.js")]),t._v("文件，其中的内容就是我们在终端中选择的相应配置。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint 。\n"),s("img",{attrs:{src:e(710),alt:"image-20210504111438312"}})])]),t._v(" "),s("h2",{attrs:{id:"解决-prettier-和-eslint-的冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决-prettier-和-eslint-的冲突"}},[t._v("#")]),t._v(" 解决 Prettier 和 ESLint 的冲突")]),t._v(" "),s("p",[t._v("本项目中的 ESLint 配置中使用了 "),s("code",[t._v("Airbnb JavaScript")]),t._v(" 风格指南校验，其规则之一是代码结束后面要加分号，而我们在 Prettier 配置文件中加了代码结束后面不加分号的配置项，这样就有冲突了，会出现用 Prettier 格式化后的代码，ESLint 检测到格式有问题的，从而抛出错误提示。\n解决两者冲突问题，需要用到 "),s("code",[t._v("eslint-plugin-prettier")]),t._v(" 和 "),s("code",[t._v("eslint-config-prettier")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("eslint-plugin-prettier")]),t._v(" 将 Prettier 的规则设置到 ESLint 的规则中。")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("eslint-config-prettier")]),t._v(" 关闭 ESLint 中与 Prettier 中会发生冲突的规则。")])]),t._v(" "),s("p",[t._v("最后形成优先级：Prettier 配置规则 > ESLint 配置规则。")]),t._v(" "),s("ul",[s("li",[t._v("安装插件")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i eslint-plugin-prettier eslint-config-prettier "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("ul",[s("li",[t._v("在 "),s("code",[t._v(".eslintrc.js")]),t._v(" 添加 prettier 插件")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'airbnb-base'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:prettier/recommended'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 prettier 插件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样，我们在执行 "),s("code",[t._v("eslint --fix")]),t._v(" 命令时，ESLint 就会按照 Prettier 的配置规则来格式化代码，轻松解决二者冲突问题。")]),t._v(" "),s("h2",{attrs:{id:"集成-husky-和-lint-staged"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成-husky-和-lint-staged"}},[t._v("#")]),t._v(" 集成 husky 和 lint-staged")]),t._v(" "),s("p",[t._v("我们在项目中已集成 "),s("code",[t._v("ESLint")]),t._v(" 和 "),s("code",[t._v("Prettier")]),t._v("，在编码时，这些工具可以对我们写的代码进行实时校验，在一定程度上能有效规范我们写的代码，但团队可能会有些人觉得这些条条框框的限制很麻烦，选择视“提示”而不见，依旧按自己的一套风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，"),s("code",[t._v("ESLint")]),t._v(" 也就形同虚设。\n所以，我们还需要做一些限制，让没通过 "),s("code",[t._v("ESLint")]),t._v(" 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。\n为了解决这个问题，我们需要用到 "),s("code",[t._v("Git Hook")]),t._v("，在本地执行 "),s("code",[t._v("git commit")]),t._v(" 的时候，就对所提交的代码进行 "),s("code",[t._v("ESLint")]),t._v(" 检测和修复（即执行 "),s("code",[t._v("eslint --fix")]),t._v("），如果这些代码没通过 "),s("code",[t._v("ESLint")]),t._v(" 规则校验，则禁止提交。\n实现这一功能，我们借助 "),s("code",[t._v("husky + lint-staged")]),t._v(" 。")]),t._v(" "),s("blockquote",[s("p",[t._v("husky —— Git Hook 工具，可以设置在 git 各个阶段（pre-commit、commit-msg、pre-push 等）触发我们的命令。\nlint-staged —— 在 git 暂存的文件上运行 linters。")])]),t._v(" "),s("h3",{attrs:{id:"配置-husky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-husky"}},[t._v("#")]),t._v(" 配置 husky")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("husky-init")]),t._v(" 命令快速在项目初始化一个 "),s("code",[t._v("husky")]),t._v(" 配置。在配置 "),s("code",[t._v("husky")]),t._v(" 之前必须初始化 "),s("code",[t._v("git")]),t._v("，否则可能会配置不成功")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ npx husky-init "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("命令执行会经历以下四步流程：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装"),s("code",[t._v("husky")]),t._v("为开发依赖")]),t._v(" "),s("p",[s("img",{attrs:{src:e(711),alt:"image-20210504120333648"}})])]),t._v(" "),s("li",[s("p",[t._v("创建"),s("code",[t._v(".husky")]),t._v("文件夹")]),t._v(" "),s("p",[s("img",{attrs:{src:e(712),alt:"image-20210504120510820"}})])]),t._v(" "),s("li",[s("p",[t._v("在 "),s("code",[t._v(".husky")]),t._v(" 目录创建 "),s("code",[t._v("pre-commit")]),t._v(" hook，并初始化 "),s("code",[t._v("pre-commit")]),t._v(" 命令为 "),s("code",[t._v("npm test")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(713),alt:"image-20210504120612932"}})])]),t._v(" "),s("li",[s("p",[t._v("修改 "),s("code",[t._v("package.json")]),t._v(" 的 "),s("code",[t._v("scripts")]),t._v("，增加 "),s("code",[t._v('"prepare": "husky install"')])]),t._v(" "),s("p",[s("img",{attrs:{src:e(714),alt:"image-20210504120708693"}})])])]),t._v(" "),s("h3",{attrs:{id:"配置-lint-staged"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-lint-staged"}},[t._v("#")]),t._v(" 配置 lint-staged")]),t._v(" "),s("p",[t._v("lint-staged 这个工具一般结合 husky 来使用，它可以让 husky 的 "),s("code",[t._v("hook")]),t._v(" 触发的命令只作用于 "),s("code",[t._v("git add")]),t._v("那些文件（即 git 暂存区的文件），而不会影响到其他文件。")]),t._v(" "),s("p",[t._v("接下来，我们使用 lint-staged 继续优化项目。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装 lint-staged")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i lint-staged "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("在 "),s("code",[t._v("package.json")]),t._v("里增加 lint-staged 配置项")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{vue,js,ts}"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:e(715),alt:"image-20210504121302298"}})])]),t._v(" "),s("li",[s("p",[t._v("修改 "),s("code",[t._v(".husky/pre-commit hook")]),t._v(" 的触发命令为："),s("code",[t._v("npx lint-staged")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(716),alt:"image-20210504121450870"}})])])]),t._v(" "),s("p",[t._v("至此，husky 和 lint-staged 组合配置完成。")])])}),[],!1,null,null,null);s.default=r.exports},699:function(t,s,e){t.exports=e.p+"assets/img/image-20210504101228402.5e7543f7.png"},700:function(t,s,e){t.exports=e.p+"assets/img/image-20210504102416728.3dbda827.png"},701:function(t,s,e){t.exports=e.p+"assets/img/image-20210504103213588.d63b5ec3.png"},702:function(t,s,e){t.exports=e.p+"assets/img/image-20210504103418834.acabf1c4.png"},703:function(t,s,e){t.exports=e.p+"assets/img/image-20210504104452973.81e4374c.png"},704:function(t,s,e){t.exports=e.p+"assets/img/image-20210504104610444.bc5623d2.png"},705:function(t,s,e){t.exports=e.p+"assets/img/image-20210504105031201.4dd08695.png"},706:function(t,s,e){t.exports=e.p+"assets/img/image-20210504105437959.f4a9a07c.png"},707:function(t,s,e){t.exports=e.p+"assets/img/image-20210504105647664.46c543a7.png"},708:function(t,s,e){t.exports=e.p+"assets/img/image-20210504110100677.15a7a58d.png"},709:function(t,s,e){t.exports=e.p+"assets/img/image-20210504110235680.d03c16f5.png"},710:function(t,s,e){t.exports=e.p+"assets/img/image-20210504111438312.727bc6a5.png"},711:function(t,s,e){t.exports=e.p+"assets/img/image-20210504120333648.39036f64.png"},712:function(t,s,e){t.exports=e.p+"assets/img/image-20210504120510820.7751bb3c.png"},713:function(t,s,e){t.exports=e.p+"assets/img/image-20210504120612932.25edc2fb.png"},714:function(t,s,e){t.exports=e.p+"assets/img/image-20210504120708693.fd343f7b.png"},715:function(t,s,e){t.exports=e.p+"assets/img/image-20210504121302298.97f6e65c.png"},716:function(t,s,e){t.exports=e.p+"assets/img/image-20210504121450870.40fc550a.png"}}]);