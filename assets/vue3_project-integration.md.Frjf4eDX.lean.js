import{_ as s,c as n,o as a,V as p}from"./chunks/framework.S4DI0Aw4.js";const m=JSON.parse('{"title":"项目集成","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/project-integration.md","filePath":"vue3/project-integration.md"}'),e={name:"vue3/project-integration.md"},l=p(`<h1 id="项目集成" tabindex="-1">项目集成 <a class="header-anchor" href="#项目集成" aria-label="Permalink to &quot;项目集成&quot;">​</a></h1><h2 id="_3-1-集成-element-plus" tabindex="-1">3.1 集成 element-plus <a class="header-anchor" href="#_3-1-集成-element-plus" aria-label="Permalink to &quot;3.1 集成 element-plus&quot;">​</a></h2><p>硅谷甄选运营平台,UI 组件库采用的 element-plus，因此需要集成 element-plus 插件！ ！！</p><p>官网地址:<a href="https://element-plus.gitee.io/zh-CN/" target="_blank" rel="noreferrer">https://element-plus.gitee.io/zh-CN/</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm install element-plus @element-plus/icons-vue</span></span></code></pre></div><p><strong>入口文件 main.ts 全局安装 element-plus,element-plus 默认支持语言英语设置为中 文</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import ElementPlus from &#39;element-plus&#39;;</span></span>
<span class="line"><span>import &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span>//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)</span></span>
<span class="line"><span>import zhCn from &#39;element-plus/dist/locale/zh-cn.mjs&#39;</span></span>
<span class="line"><span>app.use(ElementPlus, {</span></span>
<span class="line"><span>    locale: zhCn</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>Element Plus 全局组件类型声明</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// tsconfig.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    &quot;types&quot;: [&quot;element-plus/global&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>配置完毕可以测试 element-plus 组件与图标的使用.</p><h2 id="_3-2src-别名的配置" tabindex="-1">3.2src 别名的配置 <a class="header-anchor" href="#_3-2src-别名的配置" aria-label="Permalink to &quot;3.2src 别名的配置&quot;">​</a></h2><p>在开发项目的时候文件与文件关系可能很复杂，因此我们需要给 src 文件夹配置一个别名 ！！！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// vite.config.ts</span></span>
<span class="line"><span>import {defineConfig} from &#39;vite&#39;</span></span>
<span class="line"><span>import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>    plugins: [vue()],</span></span>
<span class="line"><span>    resolve: {</span></span>
<span class="line"><span>        alias: {</span></span>
<span class="line"><span>            &quot;@&quot;: path.resolve(&quot;./src&quot;) // 相对路径别名配置，使用 @ 代替 src</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>TypeScript 编译配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// tsconfig.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>    &quot;baseUrl&quot;: &quot;./&quot;, // 解析非相对模块的基地址，默认是当前目录</span></span>
<span class="line"><span>    &quot;paths&quot;: { //路径映射，相对于baseUrl</span></span>
<span class="line"><span>      &quot;@/*&quot;: [&quot;src/*&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-3-环境变量的配置" tabindex="-1">3.3 环境变量的配置 <a class="header-anchor" href="#_3-3-环境变量的配置" aria-label="Permalink to &quot;3.3 环境变量的配置&quot;">​</a></h2><p><strong>项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。不 同阶段请求的状态(如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。 于是环境变量配置的需求就应运而生，我们只需做简单的配置，把环境状态切换的工作交给 代码。</strong></p><p>开发环境（development）顾名思义，开发使用的环境，每位开发人员在自己的 dev 分支上 干活，开发到一定程度，同事会合并代码，进行联调。</p><p>测试环境（testing）测试同事干活的环境啦，一般会由测试同事自己来部署，然后在此环 境进行测试</p><p>生产环境（production）生产环境是指正式提供对外服务的，一般会关掉错误报告，打开错 误日志。(正式提供给客户使用的环境。)</p><p>注意:一般情况下，一个环境对应一台服务器,也有的公司开发与测试环境是一台服务器！！ ！</p><p>项目根目录分别添加 开发、生产和测试环境的文件!</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.env.development</span></span>
<span class="line"><span>.env.production</span></span>
<span class="line"><span>.env.test</span></span></code></pre></div><p>文件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 变量必须以 VITE_ 为前缀才能暴露给外部读取</span></span>
<span class="line"><span>NODE_ENV = &#39;development&#39;</span></span>
<span class="line"><span>VITE_APP_TITLE = &#39;硅谷甄选运营平台&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_API = &#39;/dev-api&#39;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>NODE_ENV = &#39;production&#39;</span></span>
<span class="line"><span>VITE_APP_TITLE = &#39;硅谷甄选运营平台&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_API = &#39;/prod-api&#39;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 变量必须以 VITE_ 为前缀才能暴露给外部读取</span></span>
<span class="line"><span>NODE_ENV = &#39;test&#39;</span></span>
<span class="line"><span>VITE_APP_TITLE = &#39;硅谷甄选运营平台&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_API = &#39;/test-api&#39;</span></span></code></pre></div><p>配置运行命令：package.json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;vite --open&quot;,</span></span>
<span class="line"><span>    &quot;build:test&quot;: &quot;vue-tsc &amp;&amp; vite build --mode test&quot;,</span></span>
<span class="line"><span>    &quot;build:pro&quot;: &quot;vue-tsc &amp;&amp; vite build --mode production&quot;,</span></span>
<span class="line"><span>    &quot;preview&quot;: &quot;vite preview&quot;</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p>通过 import.meta.env 获取环境变量</p><h2 id="_3-4svg-图标配置" tabindex="-1">3.4SVG 图标配置 <a class="header-anchor" href="#_3-4svg-图标配置" aria-label="Permalink to &quot;3.4SVG 图标配置&quot;">​</a></h2><p>在开发项目的时候经常会用到 svg 矢量图,而且我们使用 SVG 以后，页面上加载的不再是 图片资源,</p><p>这对页面性能来说是个很大的提升，而且我们 SVG 文件比 img 要小的很多，放在项目中几 乎不占用资源。</p><p><strong>安装 SVG 依赖插件</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm install vite-plugin-svg-icons -D</span></span></code></pre></div><p><strong>在<code>vite.config.ts</code>中配置插件</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createSvgIconsPlugin } from &#39;vite-plugin-svg-icons&#39;</span></span>
<span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span>export default () =&gt; {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>      createSvgIconsPlugin({</span></span>
<span class="line"><span>        // Specify the icon folder to be cached</span></span>
<span class="line"><span>        iconDirs: [path.resolve(process.cwd(), &#39;src/assets/icons&#39;)],</span></span>
<span class="line"><span>        // Specify symbolId format</span></span>
<span class="line"><span>        symbolId: &#39;icon-[dir]-[name]&#39;,</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>入口文件导入</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;virtual:svg-icons-register&#39;</span></span></code></pre></div><h3 id="_3-4-1svg-封装为全局组件" tabindex="-1">3.4.1svg 封装为全局组件 <a class="header-anchor" href="#_3-4-1svg-封装为全局组件" aria-label="Permalink to &quot;3.4.1svg 封装为全局组件&quot;">​</a></h3><p>因为项目很多模块需要使用图标,因此把它封装为全局组件！！！</p><p><strong>在 src/components 目录下创建一个 SvgIcon 组件:代表如下</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;svg :style=&quot;{ width: width, height: height }&quot;&gt;</span></span>
<span class="line"><span>      &lt;use :xlink:href=&quot;prefix + name&quot; :fill=&quot;color&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span>    &lt;/svg&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>defineProps({</span></span>
<span class="line"><span>  //xlink:href属性值的前缀</span></span>
<span class="line"><span>  prefix: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &#39;#icon-&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  //svg矢量图的名字</span></span>
<span class="line"><span>  name: String,</span></span>
<span class="line"><span>  //svg图标的颜色</span></span>
<span class="line"><span>  color: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &quot;&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  //svg宽度</span></span>
<span class="line"><span>  width: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &#39;16px&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  //svg高度</span></span>
<span class="line"><span>  height: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &#39;16px&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre></div><p>在 src 文件夹目录下创建一个 index.ts 文件：用于注册 components 文件夹内部全部全 局组件！！！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import SvgIcon from &#39;./SvgIcon/index.vue&#39;;</span></span>
<span class="line"><span>import type { App, Component } from &#39;vue&#39;;</span></span>
<span class="line"><span>const components: { [name: string]: Component } = { SvgIcon };</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    install(app: App) {</span></span>
<span class="line"><span>        Object.keys(components).forEach((key: string) =&gt; {</span></span>
<span class="line"><span>            app.component(key, components[key]);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在入口文件引入 src/index.ts 文件,通过 app.use 方法安装自定义插件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import gloablComponent from &#39;./components/index&#39;;</span></span>
<span class="line"><span>app.use(gloablComponent);</span></span></code></pre></div><h2 id="_3-5-集成-sass" tabindex="-1">3.5 集成 sass <a class="header-anchor" href="#_3-5-集成-sass" aria-label="Permalink to &quot;3.5 集成 sass&quot;">​</a></h2><p>我们目前在组件内部已经可以使用 scss 样式,因为在配置 styleLint 工具的时候，项目当 中已经安装过 sass sass-loader,因此我们再组件内可以使用 scss 语法！！！需要加上 lang=&quot;scss&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;&lt;/style&gt;</span></span></code></pre></div><p>接下来我们为项目添加一些全局的样式</p><p>在 src/styles 目录下创建一个 index.scss 文件，当然项目中需要用到清除默认样式，因 此在 index.scss 引入 reset.scss</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@import reset.scss</span></span></code></pre></div><p>在入口文件引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;@/styles&#39;</span></span></code></pre></div><p>但是你会发现在 src/styles/index.scss 全局样式文件中没有办法使 用$变量.因此需要给项目中引入全局变量$.</p><p>在 style/variable.scss 创建一个 variable.scss 文件！</p><p>在 vite.config.ts 文件配置如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default defineConfig((config) =&gt; {</span></span>
<span class="line"><span>    css: {</span></span>
<span class="line"><span>      preprocessorOptions: {</span></span>
<span class="line"><span>        scss: {</span></span>
<span class="line"><span>          javascriptEnabled: true,</span></span>
<span class="line"><span>          additionalData: &#39;@import &quot;./src/styles/variable.scss&quot;;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong><code>@import &quot;./src/styles/variable.less&quot;;</code>后面的<code>;</code>不要忘记，不然会报错</strong>!</p><p>配置完毕你会发现 scss 提供这些全局变量可以在组件样式中使用了！！！</p><h2 id="_3-6mock-数据" tabindex="-1">3.6mock 数据 <a class="header-anchor" href="#_3-6mock-数据" aria-label="Permalink to &quot;3.6mock 数据&quot;">​</a></h2><p>安装依赖:<a href="https://www.npmjs.com/package/vite-plugin-mock" target="_blank" rel="noreferrer">https://www.npmjs.com/package/vite-plugin-mock</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm install -D vite-plugin-mock mockjs</span></span></code></pre></div><p>在 vite.config.js 配置文件启用插件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { UserConfigExport, ConfigEnv } from &#39;vite&#39;</span></span>
<span class="line"><span>import { viteMockServe } from &#39;vite-plugin-mock&#39;</span></span>
<span class="line"><span>import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>export default ({ command })=&gt; {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>      vue(),</span></span>
<span class="line"><span>      viteMockServe({</span></span>
<span class="line"><span>        localEnabled: command === &#39;serve&#39;,</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在根目录创建 mock 文件夹:去创建我们需要 mock 数据与接口！！！</p><p>在 mock 文件夹内部创建一个 user.ts 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//用户信息数据</span></span>
<span class="line"><span>function createUserList() {</span></span>
<span class="line"><span>    return [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            userId: 1,</span></span>
<span class="line"><span>            avatar:</span></span>
<span class="line"><span>                &#39;https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif&#39;,</span></span>
<span class="line"><span>            username: &#39;admin&#39;,</span></span>
<span class="line"><span>            password: &#39;111111&#39;,</span></span>
<span class="line"><span>            desc: &#39;平台管理员&#39;,</span></span>
<span class="line"><span>            roles: [&#39;平台管理员&#39;],</span></span>
<span class="line"><span>            buttons: [&#39;cuser.detail&#39;],</span></span>
<span class="line"><span>            routes: [&#39;home&#39;],</span></span>
<span class="line"><span>            token: &#39;Admin Token&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            userId: 2,</span></span>
<span class="line"><span>            avatar:</span></span>
<span class="line"><span>                &#39;https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif&#39;,</span></span>
<span class="line"><span>            username: &#39;system&#39;,</span></span>
<span class="line"><span>            password: &#39;111111&#39;,</span></span>
<span class="line"><span>            desc: &#39;系统管理员&#39;,</span></span>
<span class="line"><span>            roles: [&#39;系统管理员&#39;],</span></span>
<span class="line"><span>            buttons: [&#39;cuser.detail&#39;, &#39;cuser.user&#39;],</span></span>
<span class="line"><span>            routes: [&#39;home&#39;],</span></span>
<span class="line"><span>            token: &#39;System Token&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default [</span></span>
<span class="line"><span>    // 用户登录接口</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        url: &#39;/api/user/login&#39;,//请求地址</span></span>
<span class="line"><span>        method: &#39;post&#39;,//请求方式</span></span>
<span class="line"><span>        response: ({ body }) =&gt; {</span></span>
<span class="line"><span>            //获取请求体携带过来的用户名与密码</span></span>
<span class="line"><span>            const { username, password } = body;</span></span>
<span class="line"><span>            //调用获取用户信息函数,用于判断是否有此用户</span></span>
<span class="line"><span>            const checkUser = createUserList().find(</span></span>
<span class="line"><span>                (item) =&gt; item.username === username &amp;&amp; item.password === password,</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>            //没有用户返回失败信息</span></span>
<span class="line"><span>            if (!checkUser) {</span></span>
<span class="line"><span>                return { code: 201, data: { message: &#39;账号或者密码不正确&#39; } }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //如果有返回成功信息</span></span>
<span class="line"><span>            const { token } = checkUser</span></span>
<span class="line"><span>            return { code: 200, data: { token } }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 获取用户信息</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        url: &#39;/api/user/info&#39;,</span></span>
<span class="line"><span>        method: &#39;get&#39;,</span></span>
<span class="line"><span>        response: (request) =&gt; {</span></span>
<span class="line"><span>            //获取请求头携带token</span></span>
<span class="line"><span>            const token = request.headers.token;</span></span>
<span class="line"><span>            //查看用户信息是否包含有次token用户</span></span>
<span class="line"><span>            const checkUser = createUserList().find((item) =&gt; item.token === token)</span></span>
<span class="line"><span>            //没有返回失败的信息</span></span>
<span class="line"><span>            if (!checkUser) {</span></span>
<span class="line"><span>                return { code: 201, data: { message: &#39;获取用户信息失败&#39; } }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //如果有返回成功信息</span></span>
<span class="line"><span>            return { code: 200, data: {checkUser} }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>]</span></span></code></pre></div><p><strong>安装 axios</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm install axios</span></span></code></pre></div><p>最后通过 axios 测试接口！！！</p><h2 id="_3-7axios-二次封装" tabindex="-1">3.7axios 二次封装 <a class="header-anchor" href="#_3-7axios-二次封装" aria-label="Permalink to &quot;3.7axios 二次封装&quot;">​</a></h2><p>在开发项目的时候避免不了与后端进行交互,因此我们需要使用 axios 插件实现发送网络请 求。在开发项目的时候</p><p>我们经常会把 axios 进行二次封装。</p><p>目的:</p><p>1:使用请求拦截器，可以在请求拦截器中处理一些业务(开始进度条、请求头携带公共参数)</p><p>2:使用响应拦截器，可以在响应拦截器中处理一些业务(进度条结束、简化服务器返回的数 据、处理 http 网络错误)</p><p>在根目录下创建 utils/request.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import axios from &quot;axios&quot;;</span></span>
<span class="line"><span>import { ElMessage } from &quot;element-plus&quot;;</span></span>
<span class="line"><span>//创建axios实例</span></span>
<span class="line"><span>let request = axios.create({</span></span>
<span class="line"><span>    baseURL: import.meta.env.VITE_APP_BASE_API,</span></span>
<span class="line"><span>    timeout: 5000</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//请求拦截器</span></span>
<span class="line"><span>request.interceptors.request.use(config =&gt; {</span></span>
<span class="line"><span>    return config;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>//响应拦截器</span></span>
<span class="line"><span>request.interceptors.response.use((response) =&gt; {</span></span>
<span class="line"><span>    return response.data;</span></span>
<span class="line"><span>}, (error) =&gt; {</span></span>
<span class="line"><span>    //处理网络错误</span></span>
<span class="line"><span>    let msg = &#39;&#39;;</span></span>
<span class="line"><span>    let status = error.response.status;</span></span>
<span class="line"><span>    switch (status) {</span></span>
<span class="line"><span>        case 401:</span></span>
<span class="line"><span>            msg = &quot;token过期&quot;;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 403:</span></span>
<span class="line"><span>            msg = &#39;无权访问&#39;;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 404:</span></span>
<span class="line"><span>            msg = &quot;请求地址错误&quot;;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 500:</span></span>
<span class="line"><span>            msg = &quot;服务器出现问题&quot;;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            msg = &quot;无网络&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ElMessage({</span></span>
<span class="line"><span>        type: &#39;error&#39;,</span></span>
<span class="line"><span>        message: msg</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    return Promise.reject(error);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>export default request;</span></span></code></pre></div><h2 id="_3-8api-接口统一管理" tabindex="-1">3.8API 接口统一管理 <a class="header-anchor" href="#_3-8api-接口统一管理" aria-label="Permalink to &quot;3.8API 接口统一管理&quot;">​</a></h2><p>在开发项目的时候,接口可能很多需要统一管理。在 src 目录下去创建 api 文件夹去统一 管理项目的接口；</p><p>比如:下面方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//统一管理咱们项目用户相关的接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import request from &#39;@/utils/request&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import type {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> loginFormData,</span></span>
<span class="line"><span></span></span>
<span class="line"><span> loginResponseData,</span></span>
<span class="line"><span></span></span>
<span class="line"><span> userInfoReponseData,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>} from &#39;./type&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//项目用户相关的请求地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enum API {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> LOGIN_URL = &#39;/admin/acl/index/login&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span> USERINFO_URL = &#39;/admin/acl/index/info&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span> LOGOUT_URL = &#39;/admin/acl/index/logout&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//登录接口</span></span>
<span class="line"><span>export const reqLogin = (data: loginFormData) =&gt;</span></span>
<span class="line"><span> request.post&lt;any, loginResponseData&gt;(API.LOGIN_URL, data)</span></span>
<span class="line"><span>//获取用户信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const reqUserInfo = () =&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> request.get&lt;any, userInfoReponseData&gt;(API.USERINFO_URL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//退出登录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const reqLogout = () =&gt; request.post&lt;any, any&gt;(API.LOGOUT_URL)</span></span></code></pre></div>`,84),t=[l];function i(c,o,r,u,d,g){return a(),n("div",null,t)}const v=s(e,[["render",i]]);export{m as __pageData,v as default};
