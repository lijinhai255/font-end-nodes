(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1358:function(t,s,n){"use strict";n.r(s);var a=n(24),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"currying-is-the-technique-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#currying-is-the-technique-o"}},[t._v("#")]),t._v(" Currying is the technique O")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("TypeScript "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),t._v(" is recommended "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" this challenge\n\n\n\nCurrying is the technique of converting a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" that takes multiple arguments into a sequence of functions that each take a single argument.\n\n\n\nFor example:\n\n\n\nconst "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a: number, b: number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a + b\n\nconst three "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\nconst curriedAdd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Currying"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconst five "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curriedAdd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nThe "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" passed to Currying may have multiple arguments, you need to correctly "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" it.\n\n\n\nIn this challenge, the curried "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" only accept one argument at a time. Once all the argument is assigned, it should "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" its result.\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a: number, b: number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" a + b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconst three "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // Regular "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" call\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# const Currying = ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   (fn, arr = []) => ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     (...args) => ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       ((arg) => ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         (arg.length === fn.length ? fn(...arg) : Currying(fn, arg))")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       )([...arr, ...args]);")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Currying"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" curried"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args.length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" func.length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" func.apply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this, args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // If enough arguments are provided, call the "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" curried.apply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this, args.concat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // Otherwise, "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" that accumulates arguments\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconst curriedAdd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Currying"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconst five "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curriedAdd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // Currying "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" action: call "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" multiple steps\nconsole.log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'five:'")]),t._v(", five"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // Logs: five: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" Fn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Args, R"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Args extends "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("infer First, "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".infer Rest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  ? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p: First"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Fn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Rest, R"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Currying"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("F extends "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args: any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  func: F\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": Fn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Parameters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("F"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(", ReturnType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("F"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Currying"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args: any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" curried"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args: any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args.length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" func.length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 调用函数\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args2: any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" curried"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args, "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".args2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 收集剩余参数\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n// 示例函数\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a: number, b: number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" a + b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n// 使用 Currying\nconst curriedAdd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Currying"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n// 正常调用\nconst five "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curriedAdd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 分步调用\nconsole.log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"five:"')]),t._v(", five"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 输出：five: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);