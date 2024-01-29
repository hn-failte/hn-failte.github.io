(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{471:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"electron-日志接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#electron-日志接入"}},[t._v("#")]),t._v(" electron 日志接入")]),t._v(" "),a("h2",{attrs:{id:"接入方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接入方案"}},[t._v("#")]),t._v(" 接入方案")]),t._v(" "),a("p",[a("strong",[t._v("第三方开源库 + 二次开发")])]),t._v(" "),a("p",[t._v("考虑到技术的成熟性、稳定性、效率，采用第三方成熟的开源库是比较好的方案。")]),t._v(" "),a("p",[t._v("而在众多 npm 包中，"),a("code",[t._v("electron-log")]),t._v(" 的匹配度、更新时间与下载量以碾压态比下了其他的第三方库。")]),t._v(" "),a("p",[t._v("从功能上评估，"),a("code",[t._v("electron-log")]),t._v(" 提供了本地日志写入与远端日志上报功能，在主要功能上是满足需求的。")]),t._v(" "),a("p",[t._v("虽然第三方库提供的功能较为齐全，但是这并不能避免后续会产生其他的定制，因此，最理想的方案是基于第三方开源库二次开发。")]),t._v(" "),a("p",[t._v("但是在实施上，可以先接入 "),a("code",[t._v("electron-log")]),t._v("，后期不修改日志记录方式的基础上，做个性化，完成后只需要替换包即可。")]),t._v(" "),a("p",[t._v("下面，先熟悉 "),a("code",[t._v("electron-log")]),t._v(" 的基础，以该套成熟方案作为基石。")]),t._v(" "),a("blockquote",[a("p",[t._v("从官网 electron-log 官方包说明上得知，electron 13以下的版本需使用4.x及以下的版本，反之推荐使用5.x的版本，因此这里取4.4.8版本的 electron-log")])]),t._v(" "),a("h2",{attrs:{id:"接入实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接入实例"}},[t._v("#")]),t._v(" 接入实例")]),t._v(" "),a("p",[t._v("1、安装依赖包")]),t._v(" "),a("p",[a("code",[t._v("yarn add electron-log@^4.4.0")]),t._v(" or "),a("code",[t._v("npm i electron-log@^4.4.0")])]),t._v(" "),a("p",[t._v("2、编辑基本日志配置")]),t._v(" "),a("p",[a("strong",[t._v("logger.ts")])]),t._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron-log'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("useLogger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("isDevelopment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * @desc app 启动时的时间\n   * @example 若 app 在前一天打开，一直运行到第二天，第二天的日志将存储在前一天\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appRunDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * @desc 日志文件名\n   * @example {date}.log\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logFileName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("appRunDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFullYear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("appRunDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMonth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("appRunDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".log")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * @desc 日志文件位置\n   * @example macOS: ~/Library/Logs/{appName}/{appVersion}/{date}.log\n   * @example Windows: %USERPROFILE%\\AppData\\Roaming\\{appName}\\logs\\{appVersion}\\{date}.log\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logFilePath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logFileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置日志内容格式")]),t._v("\n\n  logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" isDevelopment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'silly'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'verbose'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置 silly 时表示所有日志都写入文件")]),t._v("\n  logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最大不超过10M")]),t._v("\n  logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logFileName\n  logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("resolvePath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" logFilePath\n\n  logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verbose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Logger is ready'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" useLogger\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br")])]),a("p",[t._v("3、接入到 main 线程")]),t._v(" "),a("p",[a("strong",[t._v("background.ts")])]),t._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" useLogger "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/main/logger'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isDevelopment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isDevelopment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("该文件对应主线程，在主线程中，仅需添加一个引用即可")]),t._v(" "),a("p",[t._v("4、接入 renderer 线程")]),t._v(" "),a("p",[a("strong",[t._v("src/preload.ts")])]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron-log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functions\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("首先添加 preload 文件")]),t._v(" "),a("p",[a("strong",[t._v("vue.config.js")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      preload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/preload.ts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("其次，为了能解析 preload 文件，添加如上配置")]),t._v(" "),a("p",[a("strong",[t._v("methods.ts")])]),t._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webPreferences "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  preload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preload'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("最后，在创建窗口时，将 preload 文件进行加载")]),t._v(" "),a("p",[t._v("至此，整个接入就完成了")]),t._v(" "),a("h2",{attrs:{id:"日志输出载体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志输出载体"}},[t._v("#")]),t._v(" 日志输出载体")]),t._v(" "),a("p",[t._v("这里的日志输出载体主要分为几种：控制台、文件、远端")]),t._v(" "),a("h3",{attrs:{id:"_1、控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、控制台"}},[t._v("#")]),t._v(" 1、控制台")]),t._v(" "),a("p",[t._v("main线程和renderer线程的日志在其对应的控制台查看")]),t._v(" "),a("p",[t._v("可以通过 "),a("code",[t._v("logger.transports.console")]),t._v(" 对其进行配置")]),t._v(" "),a("h3",{attrs:{id:"_2、文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、文件"}},[t._v("#")]),t._v(" 2、文件")]),t._v(" "),a("p",[t._v("记录日志到文件")]),t._v(" "),a("p",[t._v("可以通过 "),a("code",[t._v("logger.transports.file")]),t._v(" 对其进行配置")]),t._v(" "),a("h3",{attrs:{id:"_3、远端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、远端"}},[t._v("#")]),t._v(" 3、远端")]),t._v(" "),a("p",[t._v("记录日志到远端")]),t._v(" "),a("p",[t._v("可以通过 "),a("code",[t._v("logger.transports.remote")]),t._v(" 对其进行配置")]),t._v(" "),a("p",[t._v("这里远端暂时先不配置，后续迭代再接入")]),t._v(" "),a("h2",{attrs:{id:"日志格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志格式化"}},[t._v("#")]),t._v(" 日志格式化")]),t._v(" "),a("h3",{attrs:{id:"模版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模版"}},[t._v("#")]),t._v(" 模版")]),t._v(" "),a("p",[t._v("1、内置模版变量")]),t._v(" "),a("p",[t._v("官方提供了模版变量供使用")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("level")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Logging level")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Serialized log message")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("processType")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("browser or renderer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Month")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Day")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Hour")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Minute")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Second")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Millisecond")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("z")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Timezone offset")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("iso")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("date.toISOString()")])])])]),t._v(" "),a("p",[t._v("2、自定义变量")]),t._v(" "),a("p",[t._v("若官方变量无法满足，也可以自定义")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("variables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[{h}:{i}:{s}.{ms}] [{label}] {text}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("p",[t._v("另外，官方还提供了函数的方式来进行格式化")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("format")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),a("p",[t._v("这里定义格式为："),a("code",[t._v("[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}")])]),t._v(" "),a("h2",{attrs:{id:"日志文件位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志文件位置"}},[t._v("#")]),t._v(" 日志文件位置")]),t._v(" "),a("p",[t._v("这里，直接取 "),a("code",[t._v("app.getPath('logs')")]),t._v("，该路径在 "),a("code",[t._v("macOS")]),t._v(" 代表"),a("code",[t._v("~/Library/Logs/{appName}/{appVersion}/{date}.log")]),t._v("，在 "),a("code",[t._v("Windows")]),t._v("为"),a("code",[t._v("%USERPROFILE%\\AppData\\Roaming\\{appName}\\logs\\{appVersion}\\{date}.log")])]),t._v(" "),a("h2",{attrs:{id:"日志等级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志等级"}},[t._v("#")]),t._v(" 日志等级")]),t._v(" "),a("p",[t._v("error、warn、info、verbose、debug、silly")]),t._v(" "),a("p",[t._v("以上等级，从左到右依次降低。配置某等级的报错时，只有高于或等于该等级的报错才会被记录或上报")]),t._v(" "),a("p",[t._v("silly 等级最低，一般用于表示只需要在控制台打印，但不需要写入文件的日志（需配置）")]),t._v(" "),a("p",[t._v("此外，官方也提供了自定义等级的方法")])])}),[],!1,null,null,null);s.default=e.exports}}]);