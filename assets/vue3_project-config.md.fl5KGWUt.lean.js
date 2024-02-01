import{_ as s,c as n,o as a,V as p}from"./chunks/framework.S4DI0Aw4.js";const m=JSON.parse('{"title":"项目配置","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/project-config.md","filePath":"vue3/project-config.md"}'),e={name:"vue3/project-config.md"},l=p(`<h1 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h1><h2 id="一、eslint-配置" tabindex="-1">一、eslint 配置 <a class="header-anchor" href="#一、eslint-配置" aria-label="Permalink to &quot;一、eslint 配置&quot;">​</a></h2><p><strong>eslint 中文官网:<a href="http://eslint.cn/" target="_blank" rel="noreferrer">http://eslint.cn/</a></strong></p><p>ESLint 最初是由<a href="http://nczonline.net/" target="_blank" rel="noreferrer">Nicholas C. Zakas</a> 于 2013 年 6 月创建的 开源项目。它的目标是提供一个插件化的<strong>javascript 代码检测工具</strong></p><p>首先安装 eslint</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i eslint -D</span></span></code></pre></div><p>生成配置文件:.eslint.cjs</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx eslint --init</span></span></code></pre></div><p><strong>.eslint.cjs 配置文件</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>   //运行环境</span></span>
<span class="line"><span>    &quot;env&quot;: {</span></span>
<span class="line"><span>        &quot;browser&quot;: true,//浏览器端</span></span>
<span class="line"><span>        &quot;es2021&quot;: true,//es2021</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    //规则继承</span></span>
<span class="line"><span>    &quot;extends&quot;: [</span></span>
<span class="line"><span>       //全部规则默认是关闭的,这个配置项开启推荐规则,推荐规则参照文档</span></span>
<span class="line"><span>       //比如:函数不能重名、对象不能出现重复key</span></span>
<span class="line"><span>        &quot;eslint:recommended&quot;,</span></span>
<span class="line"><span>        //vue3语法规则</span></span>
<span class="line"><span>        &quot;plugin:vue/vue3-essential&quot;,</span></span>
<span class="line"><span>        //ts语法规则</span></span>
<span class="line"><span>        &quot;plugin:@typescript-eslint/recommended&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    //要为特定类型的文件指定处理器</span></span>
<span class="line"><span>    &quot;overrides&quot;: [</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    //指定解析器:解析器</span></span>
<span class="line"><span>    //Esprima 默认解析器</span></span>
<span class="line"><span>    //Babel-ESLint babel解析器</span></span>
<span class="line"><span>    //@typescript-eslint/parser ts解析器</span></span>
<span class="line"><span>    &quot;parser&quot;: &quot;@typescript-eslint/parser&quot;,</span></span>
<span class="line"><span>    //指定解析器选项</span></span>
<span class="line"><span>    &quot;parserOptions&quot;: {</span></span>
<span class="line"><span>        &quot;ecmaVersion&quot;: &quot;latest&quot;,//校验ECMA最新版本</span></span>
<span class="line"><span>        &quot;sourceType&quot;: &quot;module&quot;//设置为&quot;script&quot;（默认），或者&quot;module&quot;代码在ECMAScript模块中</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    //ESLint支持使用第三方插件。在使用插件之前，您必须使用npm安装它</span></span>
<span class="line"><span>    //该eslint-plugin-前缀可以从插件名称被省略</span></span>
<span class="line"><span>    &quot;plugins&quot;: [</span></span>
<span class="line"><span>        &quot;vue&quot;,</span></span>
<span class="line"><span>        &quot;@typescript-eslint&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    //eslint规则</span></span>
<span class="line"><span>    &quot;rules&quot;: {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_1-1vue3-环境代码校验插件" tabindex="-1">1.1vue3 环境代码校验插件 <a class="header-anchor" href="#_1-1vue3-环境代码校验插件" aria-label="Permalink to &quot;1.1vue3 环境代码校验插件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查</span></span>
<span class="line"><span>&quot;eslint-config-prettier&quot;: &quot;^8.6.0&quot;,</span></span>
<span class="line"><span>&quot;eslint-plugin-import&quot;: &quot;^2.27.5&quot;,</span></span>
<span class="line"><span>&quot;eslint-plugin-node&quot;: &quot;^11.1.0&quot;,</span></span>
<span class="line"><span># 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低</span></span>
<span class="line"><span>&quot;eslint-plugin-prettier&quot;: &quot;^4.2.1&quot;,</span></span>
<span class="line"><span># vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南</span></span>
<span class="line"><span>&quot;eslint-plugin-vue&quot;: &quot;^9.9.0&quot;,</span></span>
<span class="line"><span># 该解析器允许使用Eslint校验所有babel code</span></span>
<span class="line"><span>&quot;@babel/eslint-parser&quot;: &quot;^7.19.1&quot;,</span></span></code></pre></div><p>安装指令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser</span></span></code></pre></div><h2 id="_1-2-修改-eslintrc-cjs-配置文件" tabindex="-1">1.2 修改.eslintrc.cjs 配置文件 <a class="header-anchor" href="#_1-2-修改-eslintrc-cjs-配置文件" aria-label="Permalink to &quot;1.2 修改.eslintrc.cjs 配置文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// @see https://eslint.bootcss.com/docs/rules/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  env: {</span></span>
<span class="line"><span>    browser: true,</span></span>
<span class="line"><span>    es2021: true,</span></span>
<span class="line"><span>    node: true,</span></span>
<span class="line"><span>    jest: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  /* 指定如何解析语法 */</span></span>
<span class="line"><span>  parser: &#39;vue-eslint-parser&#39;,</span></span>
<span class="line"><span>  /** 优先级低于 parse 的语法解析配置 */</span></span>
<span class="line"><span>  parserOptions: {</span></span>
<span class="line"><span>    ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span>    sourceType: &#39;module&#39;,</span></span>
<span class="line"><span>    parser: &#39;@typescript-eslint/parser&#39;,</span></span>
<span class="line"><span>    jsxPragma: &#39;React&#39;,</span></span>
<span class="line"><span>    ecmaFeatures: {</span></span>
<span class="line"><span>      jsx: true,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  /* 继承已有的规则 */</span></span>
<span class="line"><span>  extends: [</span></span>
<span class="line"><span>    &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span>    &#39;plugin:vue/vue3-essential&#39;,</span></span>
<span class="line"><span>    &#39;plugin:@typescript-eslint/recommended&#39;,</span></span>
<span class="line"><span>    &#39;plugin:prettier/recommended&#39;,</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  plugins: [&#39;vue&#39;, &#39;@typescript-eslint&#39;],</span></span>
<span class="line"><span>  /*</span></span>
<span class="line"><span>   * &quot;off&quot; 或 0    ==&gt;  关闭规则</span></span>
<span class="line"><span>   * &quot;warn&quot; 或 1   ==&gt;  打开的规则作为警告（不影响代码执行）</span></span>
<span class="line"><span>   * &quot;error&quot; 或 2  ==&gt;  规则作为一个错误（代码不能执行，界面报错）</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    // eslint（https://eslint.bootcss.com/docs/rules/）</span></span>
<span class="line"><span>    &#39;no-var&#39;: &#39;error&#39;, // 要求使用 let 或 const 而不是 var</span></span>
<span class="line"><span>    &#39;no-multiple-empty-lines&#39;: [&#39;warn&#39;, { max: 1 }], // 不允许多个空行</span></span>
<span class="line"><span>    &#39;no-console&#39;: process.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;no-debugger&#39;: process.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;no-unexpected-multiline&#39;: &#39;error&#39;, // 禁止空余的多行</span></span>
<span class="line"><span>    &#39;no-useless-escape&#39;: &#39;off&#39;, // 禁止不必要的转义字符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // typeScript (https://typescript-eslint.io/rules)</span></span>
<span class="line"><span>    &#39;@typescript-eslint/no-unused-vars&#39;: &#39;error&#39;, // 禁止定义未使用的变量</span></span>
<span class="line"><span>    &#39;@typescript-eslint/prefer-ts-expect-error&#39;: &#39;error&#39;, // 禁止使用 @ts-ignore</span></span>
<span class="line"><span>    &#39;@typescript-eslint/no-explicit-any&#39;: &#39;off&#39;, // 禁止使用 any 类型</span></span>
<span class="line"><span>    &#39;@typescript-eslint/no-non-null-assertion&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;@typescript-eslint/no-namespace&#39;: &#39;off&#39;, // 禁止使用自定义 TypeScript 模块和命名空间。</span></span>
<span class="line"><span>    &#39;@typescript-eslint/semi&#39;: &#39;off&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)</span></span>
<span class="line"><span>    &#39;vue/multi-word-component-names&#39;: &#39;off&#39;, // 要求组件名称始终为 “-” 链接的单词</span></span>
<span class="line"><span>    &#39;vue/script-setup-uses-vars&#39;: &#39;error&#39;, // 防止&lt;script setup&gt;使用的变量&lt;template&gt;被标记为未使用</span></span>
<span class="line"><span>    &#39;vue/no-mutating-props&#39;: &#39;off&#39;, // 不允许组件 prop的改变</span></span>
<span class="line"><span>    &#39;vue/attribute-hyphenation&#39;: &#39;off&#39;, // 对模板中的自定义组件强制执行属性命名样式</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_1-3-eslintignore-忽略文件" tabindex="-1">1.3.eslintignore 忽略文件 <a class="header-anchor" href="#_1-3-eslintignore-忽略文件" aria-label="Permalink to &quot;1.3.eslintignore 忽略文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dist</span></span>
<span class="line"><span>node_modules</span></span></code></pre></div><h2 id="_1-4-运行脚本" tabindex="-1">1.4 运行脚本 <a class="header-anchor" href="#_1-4-运行脚本" aria-label="Permalink to &quot;1.4 运行脚本&quot;">​</a></h2><p>package.json 新增两个运行脚本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;lint&quot;: &quot;eslint src&quot;,</span></span>
<span class="line"><span>    &quot;fix&quot;: &quot;eslint src --fix&quot;,</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="二、配置prettier" tabindex="-1">二、配置<strong>prettier</strong> <a class="header-anchor" href="#二、配置prettier" aria-label="Permalink to &quot;二、配置**prettier**&quot;">​</a></h2><p>有了 eslint，为什么还要有 prettier？eslint 针对的是 javascript，他是一个检测工具 ，包含 js 语法以及少部分格式问题，在 eslint 看来，语法对了就能保证代码正常运行， 格式问题属于其次；</p><p>而 prettier 属于格式化工具，它看不惯格式不统一，所以它就把 eslint 没干好的事接着 干，另外，prettier 支持</p><p>包含 js 在内的多种语言。</p><p>总结起来，<strong>eslint 和 prettier 这俩兄弟一个保证 js 代码质量，一个保证代码美观 。</strong></p><h2 id="_2-1-安装依赖包" tabindex="-1">2.1 安装依赖包 <a class="header-anchor" href="#_2-1-安装依赖包" aria-label="Permalink to &quot;2.1 安装依赖包&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier</span></span></code></pre></div><h2 id="_2-2-prettierrc-json-添加规则" tabindex="-1">2.2.prettierrc.json 添加规则 <a class="header-anchor" href="#_2-2-prettierrc-json-添加规则" aria-label="Permalink to &quot;2.2.prettierrc.json 添加规则&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;singleQuote&quot;: true,</span></span>
<span class="line"><span>  &quot;semi&quot;: false,</span></span>
<span class="line"><span>  &quot;bracketSpacing&quot;: true,</span></span>
<span class="line"><span>  &quot;htmlWhitespaceSensitivity&quot;: &quot;ignore&quot;,</span></span>
<span class="line"><span>  &quot;endOfLine&quot;: &quot;auto&quot;,</span></span>
<span class="line"><span>  &quot;trailingComma&quot;: &quot;all&quot;,</span></span>
<span class="line"><span>  &quot;tabWidth&quot;: 2</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2-3-prettierignore-忽略文件" tabindex="-1">2.3.prettierignore 忽略文件 <a class="header-anchor" href="#_2-3-prettierignore-忽略文件" aria-label="Permalink to &quot;2.3.prettierignore 忽略文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/dist/*</span></span>
<span class="line"><span>/html/*</span></span>
<span class="line"><span>.local</span></span>
<span class="line"><span>/node_modules/**</span></span>
<span class="line"><span>**/*.svg</span></span>
<span class="line"><span>**/*.sh</span></span>
<span class="line"><span>/public/*</span></span></code></pre></div><p><strong>通过 pnpm run lint 去检测语法，如果出现不规范格式,通过 pnpm run fix 修改</strong></p><h2 id="三、配置-stylelint" tabindex="-1">三、配置 stylelint <a class="header-anchor" href="#三、配置-stylelint" aria-label="Permalink to &quot;三、配置 stylelint&quot;">​</a></h2><p><a href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint</a>为 css 的 lint 工具。可格式化 css 代码，检查 css 语法错误与不合理的写法，指定 css 书写顺序等。</p><p>我们的项目中使用 scss 作为预处理器，安装以下依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D</span></span></code></pre></div><h2 id="_3-1-stylelintrc-cjs配置文件" tabindex="-1">3.1<code>.stylelintrc.cjs</code><strong>配置文件</strong> <a class="header-anchor" href="#_3-1-stylelintrc-cjs配置文件" aria-label="Permalink to &quot;3.1\`.stylelintrc.cjs\`**配置文件**&quot;">​</a></h2><p><strong>官网:<a href="https://stylelint.bootcss.com/" target="_blank" rel="noreferrer">https://stylelint.bootcss.com/</a></strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// @see https://stylelint.bootcss.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  extends: [</span></span>
<span class="line"><span>    &#39;stylelint-config-standard&#39;, // 配置stylelint拓展插件</span></span>
<span class="line"><span>    &#39;stylelint-config-html/vue&#39;, // 配置 vue 中 template 样式格式化</span></span>
<span class="line"><span>    &#39;stylelint-config-standard-scss&#39;, // 配置stylelint scss插件</span></span>
<span class="line"><span>    &#39;stylelint-config-recommended-vue/scss&#39;, // 配置 vue 中 scss 样式格式化</span></span>
<span class="line"><span>    &#39;stylelint-config-recess-order&#39;, // 配置stylelint css属性书写顺序插件,</span></span>
<span class="line"><span>    &#39;stylelint-config-prettier&#39;, // 配置stylelint和prettier兼容</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  overrides: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      files: [&#39;**/*.(scss|css|vue|html)&#39;],</span></span>
<span class="line"><span>      customSyntax: &#39;postcss-scss&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      files: [&#39;**/*.(html|vue)&#39;],</span></span>
<span class="line"><span>      customSyntax: &#39;postcss-html&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  ignoreFiles: [</span></span>
<span class="line"><span>    &#39;**/*.js&#39;,</span></span>
<span class="line"><span>    &#39;**/*.jsx&#39;,</span></span>
<span class="line"><span>    &#39;**/*.tsx&#39;,</span></span>
<span class="line"><span>    &#39;**/*.ts&#39;,</span></span>
<span class="line"><span>    &#39;**/*.json&#39;,</span></span>
<span class="line"><span>    &#39;**/*.md&#39;,</span></span>
<span class="line"><span>    &#39;**/*.yaml&#39;,</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * null  =&gt; 关闭该规则</span></span>
<span class="line"><span>   * always =&gt; 必须</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    &#39;value-keyword-case&#39;: null, // 在 css 中使用 v-bind，不报错</span></span>
<span class="line"><span>    &#39;no-descending-specificity&#39;: null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器</span></span>
<span class="line"><span>    &#39;function-url-quotes&#39;: &#39;always&#39;, // 要求或禁止 URL 的引号 &quot;always(必须加上引号)&quot;|&quot;never(没有引号)&quot;</span></span>
<span class="line"><span>    &#39;no-empty-source&#39;: null, // 关闭禁止空源码</span></span>
<span class="line"><span>    &#39;selector-class-pattern&#39;: null, // 关闭强制选择器类名的格式</span></span>
<span class="line"><span>    &#39;property-no-unknown&#39;: null, // 禁止未知的属性(true 为不允许)</span></span>
<span class="line"><span>    &#39;block-opening-brace-space-before&#39;: &#39;always&#39;, //大括号之前必须有一个空格或不能有空白符</span></span>
<span class="line"><span>    &#39;value-no-vendor-prefix&#39;: null, // 关闭 属性值前缀 --webkit-box</span></span>
<span class="line"><span>    &#39;property-no-vendor-prefix&#39;: null, // 关闭 属性前缀 -webkit-mask</span></span>
<span class="line"><span>    &#39;selector-pseudo-class-no-unknown&#39;: [</span></span>
<span class="line"><span>      // 不允许未知的选择器</span></span>
<span class="line"><span>      true,</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        ignorePseudoClasses: [&#39;global&#39;, &#39;v-deep&#39;, &#39;deep&#39;], // 忽略属性，修改element默认样式的时候能使用到</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-2-stylelintignore-忽略文件" tabindex="-1">3.2.stylelintignore 忽略文件 <a class="header-anchor" href="#_3-2-stylelintignore-忽略文件" aria-label="Permalink to &quot;3.2.stylelintignore 忽略文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/node_modules/*</span></span>
<span class="line"><span>/dist/*</span></span>
<span class="line"><span>/html/*</span></span>
<span class="line"><span>/public/*</span></span></code></pre></div><h2 id="_3-3-运行脚本" tabindex="-1">3.3 运行脚本 <a class="header-anchor" href="#_3-3-运行脚本" aria-label="Permalink to &quot;3.3 运行脚本&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;lint:style&quot;: &quot;stylelint src/**/*.{css,scss,vue} --cache --fix&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后配置统一的 prettier 来格式化我们的 js 和 css，html 代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;vite --open&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;vue-tsc &amp;&amp; vite build&quot;,</span></span>
<span class="line"><span>    &quot;preview&quot;: &quot;vite preview&quot;,</span></span>
<span class="line"><span>    &quot;lint&quot;: &quot;eslint src&quot;,</span></span>
<span class="line"><span>    &quot;fix&quot;: &quot;eslint src --fix&quot;,</span></span>
<span class="line"><span>    &quot;format&quot;: &quot;prettier --write \\&quot;./**/*.{html,vue,ts,js,json,md}\\&quot;&quot;,</span></span>
<span class="line"><span>    &quot;lint:eslint&quot;: &quot;eslint src/**/*.{ts,vue} --cache --fix&quot;,</span></span>
<span class="line"><span>    &quot;lint:style&quot;: &quot;stylelint src/**/*.{css,scss,vue} --cache --fix&quot;</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p><strong>当我们运行<code>pnpm run format</code>的时候，会把代码直接格式化</strong></p><h2 id="四、配置-husky" tabindex="-1">四、配置 husky <a class="header-anchor" href="#四、配置-husky" aria-label="Permalink to &quot;四、配置 husky&quot;">​</a></h2><p>在上面我们已经集成好了我们代码校验工具，但是需要每次手动的去执行命令才会格式化我 们的代码。如果有人没有格式化就提交了远程仓库中，那这个规范就没什么用。所以我们需 要强制让开发人员按照代码规范来提交。</p><p>要做到这件事情，就需要利用 husky 在代码提交之前触发 git hook(git 在客户端的钩子 )，然后执行<code>pnpm run format</code>来自动的格式化我们的代码。</p><p>安装<code>husky</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm install -D husky</span></span></code></pre></div><p>执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx husky-init</span></span></code></pre></div><p>会在根目录下生成个一个.husky 目录，在这个目录下面会有一个 pre-commit 文件，这个 文件里面的命令在我们执行 commit 的时候就会执行</p><p>在<code>.husky/pre-commit</code>文件添加如下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span>pnpm run format</span></span></code></pre></div><p>当我们对代码进行 commit 操作的时候，就会执行命令，对代码进行格式化，然后再提交。</p><h2 id="五、配置-commitlint" tabindex="-1">五、配置 commitlint <a class="header-anchor" href="#五、配置-commitlint" aria-label="Permalink to &quot;五、配置 commitlint&quot;">​</a></h2><p>对于我们的 commit 信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准 来执行，我们可以利用<strong>commitlint</strong>来实现。</p><p>安装包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm add @commitlint/config-conventional @commitlint/cli -D</span></span></code></pre></div><p>添加配置文件，新建<code>commitlint.config.cjs</code>(注意是 cjs)，然后添加下面的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span>  // 校验规则</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    &#39;type-enum&#39;: [</span></span>
<span class="line"><span>      2,</span></span>
<span class="line"><span>      &#39;always&#39;,</span></span>
<span class="line"><span>      [</span></span>
<span class="line"><span>        &#39;feat&#39;,</span></span>
<span class="line"><span>        &#39;fix&#39;,</span></span>
<span class="line"><span>        &#39;docs&#39;,</span></span>
<span class="line"><span>        &#39;style&#39;,</span></span>
<span class="line"><span>        &#39;refactor&#39;,</span></span>
<span class="line"><span>        &#39;perf&#39;,</span></span>
<span class="line"><span>        &#39;test&#39;,</span></span>
<span class="line"><span>        &#39;chore&#39;,</span></span>
<span class="line"><span>        &#39;revert&#39;,</span></span>
<span class="line"><span>        &#39;build&#39;,</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &#39;type-case&#39;: [0],</span></span>
<span class="line"><span>    &#39;type-empty&#39;: [0],</span></span>
<span class="line"><span>    &#39;scope-empty&#39;: [0],</span></span>
<span class="line"><span>    &#39;scope-case&#39;: [0],</span></span>
<span class="line"><span>    &#39;subject-full-stop&#39;: [0, &#39;never&#39;],</span></span>
<span class="line"><span>    &#39;subject-case&#39;: [0, &#39;never&#39;],</span></span>
<span class="line"><span>    &#39;header-max-length&#39;: [0, &#39;always&#39;, 72],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在<code>package.json</code>中配置 scripts 命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 在scrips中添加下面的代码</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;commitlint&quot;: &quot;commitlint --config commitlint.config.cjs -e -V&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>配置结束，现在当我们填写<code>commit</code>信息的时候，前面就需要带着下面的<code>subject</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;feat&#39;,//新特性、新功能</span></span>
<span class="line"><span>&#39;fix&#39;,//修改bug</span></span>
<span class="line"><span>&#39;docs&#39;,//文档修改</span></span>
<span class="line"><span>&#39;style&#39;,//代码格式修改, 注意不是 css 修改</span></span>
<span class="line"><span>&#39;refactor&#39;,//代码重构</span></span>
<span class="line"><span>&#39;perf&#39;,//优化相关，比如提升性能、体验</span></span>
<span class="line"><span>&#39;test&#39;,//测试用例修改</span></span>
<span class="line"><span>&#39;chore&#39;,//其他修改, 比如改变构建流程、或者增加依赖库、工具等</span></span>
<span class="line"><span>&#39;revert&#39;,//回滚到上一个版本</span></span>
<span class="line"><span>&#39;build&#39;,//编译相关的修改，例如发布版本、对项目构建或者依赖的改动</span></span></code></pre></div><p>配置 husky</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx husky add .husky/commit-msg</span></span></code></pre></div><p>在生成的 commit-msg 文件中添加下面的命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span>pnpm commitlint</span></span></code></pre></div><p>当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m &#39;fix: xxx&#39; 符合 类型的才可以，<strong>需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的 ，这个是不能省略的</strong></p><h2 id="六、强制使用-pnpm-包管理器工具" tabindex="-1">六、强制使用 pnpm 包管理器工具 <a class="header-anchor" href="#六、强制使用-pnpm-包管理器工具" aria-label="Permalink to &quot;六、强制使用 pnpm 包管理器工具&quot;">​</a></h2><p>团队开发项目的时候，需要统一包管理器工具,因为不同包管理器工具下载同一个依赖,可能 版本不一样,</p><p>导致项目出现 bug 问题,因此包管理器工具需要统一管理！！！</p><p>在根目录创建<code>scritps/preinstall.js</code>文件，添加下面的内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if (!/pnpm/.test(process.env.npm_execpath || &#39;&#39;)) {</span></span>
<span class="line"><span>  console.warn(</span></span>
<span class="line"><span>    \`\\u001b[33mThis repository must using pnpm as the package manager \` +</span></span>
<span class="line"><span>    \` for scripts to work properly.\\u001b[39m\\n\`,</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  process.exit(1)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>配置命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;preinstall&quot;: &quot;node ./scripts/preinstall.js&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>当我们使用 npm 或者 yarn 来安装包的时候，就会报错了。原理就是在 install 的时候 会触发 preinstall（npm 提供的生命周期钩子）这个文件里面的代码。</strong></p>`,81),t=[l];function i(c,o,r,u,d,h){return a(),n("div",null,t)}const v=s(e,[["render",i]]);export{m as __pageData,v as default};
