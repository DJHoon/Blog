import{_ as s,c as a,o as n,V as p}from"./chunks/framework.S4DI0Aw4.js";const v=JSON.parse('{"title":"组件通信方式","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/communication.md","filePath":"vue3/communication.md"}'),t={name:"vue3/communication.md"},e=p(`<h1 id="组件通信方式" tabindex="-1">组件通信方式 <a class="header-anchor" href="#组件通信方式" aria-label="Permalink to &quot;组件通信方式&quot;">​</a></h1><p><strong>props:</strong> 可以实现父子组件、子父组件、甚至兄弟组件通信</p><p><strong>自定义事件</strong>:可以实现子父组件通信</p><p><strong>全局事件总线$bus</strong>:可以实现任意组件通信</p><p><strong>pubsub:</strong> 发布订阅模式实现任意组件通信</p><p><strong>vuex</strong>:集中式状态管理容器，实现任意组件通信</p><p><strong>ref</strong>:父组件获取子组件实例 VC,获取子组件的响应式数据以及方法</p><p><strong>slot:</strong> 插槽(默认插槽、具名插槽、作用域插槽)实现父子组件通信........</p><h2 id="_1-1-props" tabindex="-1">1.1 props <a class="header-anchor" href="#_1-1-props" aria-label="Permalink to &quot;1.1 props&quot;">​</a></h2><p>props 可以实现父子组件通信,在 vue3 中我们可以通过 defineProps 获取父组件传递的数 据。且在组件内部不需要引入 defineProps 方法可以直接使用！</p><p><strong>父组件给子组件传递数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Child info=&quot;我爱祖国&quot; :money=&quot;money&quot;&gt;&lt;/Child&gt;</span></span></code></pre></div><p><strong>子组件获取父组件传递数据:方式 1</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let props = defineProps({</span></span>
<span class="line"><span>  info:{</span></span>
<span class="line"><span>   type:String,//接受的数据类型</span></span>
<span class="line"><span>   default:&#39;默认参数&#39;,//接受默认数据</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  money:{</span></span>
<span class="line"><span>   type:Number,</span></span>
<span class="line"><span>   default:0</span></span>
<span class="line"><span>}})</span></span></code></pre></div><p><strong>子组件获取父组件传递数据:方式 2</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let props = defineProps([&quot;info&quot;,&#39;money&#39;]);</span></span></code></pre></div><p>子组件获取到 props 数据就可以在模板中使用了,但是切记 props 是只读的(只能读取，不 能修改)</p><h2 id="_1-2-自定义事件" tabindex="-1">1.2 自定义事件 <a class="header-anchor" href="#_1-2-自定义事件" aria-label="Permalink to &quot;1.2 自定义事件&quot;">​</a></h2><p>在 vue 框架中事件分为两种:一种是原生的 DOM 事件，另外一种自定义事件。</p><p>原生 DOM 事件可以让用户与网页进行交互，比如 click、dbclick、change、mouseenter、mouseleave....</p><p>自定义事件可以实现子组件给父组件传递数据</p><h3 id="_1-2-1-原生-dom-事件" tabindex="-1">1.2.1 原生 DOM 事件 <a class="header-anchor" href="#_1-2-1-原生-dom-事件" aria-label="Permalink to &quot;1.2.1 原生 DOM 事件&quot;">​</a></h3><p>代码如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &lt;pre @click=&quot;handler&quot;&gt;</span></span>
<span class="line"><span>      我是祖国的老花骨朵</span></span>
<span class="line"><span> &lt;/pre&gt;</span></span></code></pre></div><p>当前代码级给 pre 标签绑定原生 DOM 事件点击事件,默认会给事件回调注入 event 事件对 象。当然点击事件想注入多个参数可以按照下图操作。但是切记注入的事件对象务必叫做 $event.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  &lt;div @click=&quot;handler1(1,2,3,$event)&quot;&gt;我要传递多个参数&lt;/div&gt;</span></span></code></pre></div><p>在 vue3 框架 click、dbclick、change(这类原生 DOM 事件),不管是在标签、自定义标签 上(组件标签)都是原生 DOM 事件。</p><p><strong></strong></p><h3 id="_1-2-2-自定义事件" tabindex="-1">1.2.2 自定义事件 <a class="header-anchor" href="#_1-2-2-自定义事件" aria-label="Permalink to &quot;1.2.2 自定义事件&quot;">​</a></h3><p>自定义事件可以实现子组件给父组件传递数据.在项目中是比较常用的。</p><p>比如在父组件内部给子组件(Event2)绑定一个自定义事件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Event2  @xxx=&quot;handler3&quot;&gt;&lt;/Event2&gt;</span></span></code></pre></div><p>在 Event2 子组件内部触发这个自定义事件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;我是子组件2&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;handler&quot;&gt;点击我触发xxx自定义事件&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>let $emit = defineEmits([&quot;xxx&quot;]);</span></span>
<span class="line"><span>const handler = () =&gt; {</span></span>
<span class="line"><span>  $emit(&quot;xxx&quot;, &quot;法拉利&quot;, &quot;茅台&quot;);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>我们会发现在 script 标签内部,使用了 defineEmits 方法，此方法是 vue3 提供的方法, 不需要引入直接使用。defineEmits 方法执行，传递一个数组，数组元素即为将来组件需要 触发的自定义事件类型，此方执行会返回一个$emit 方法用于触发自定义事件。</p><p>当点击按钮的时候，事件回调内部调用$emit 方法去触发自定义事件,第一个参数为触发事 件类型，第二个、三个、N 个参数即为传递给父组件的数据。</p><p>需要注意的是:代码如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Event2  @xxx=&quot;handler3&quot; @click=&quot;handler&quot;&gt;&lt;/Event2&gt;</span></span></code></pre></div><p>正常说组件标签书写@click 应该为原生 DOM 事件,但是如果子组件内部通过 defineEmits 定义就变为自定义事件了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let $emit = defineEmits([&quot;xxx&quot;,&#39;click&#39;]);</span></span></code></pre></div><h2 id="_1-3-全局事件总线" tabindex="-1">1.3 全局事件总线 <a class="header-anchor" href="#_1-3-全局事件总线" aria-label="Permalink to &quot;1.3 全局事件总线&quot;">​</a></h2><p>全局事件总线可以实现任意组件通信，在 vue2 中可以根据 VM 与 VC 关系推出全局事件总 线。</p><p>但是在 vue3 中没有 Vue 构造函数，也就没有 Vue.prototype.以及组合式 API 写法没有 this，</p><p>那么在 Vue3 想实现全局事件的总线功能就有点不现实啦，如果想在 Vue3 中使用全局事件 总线功能</p><p>可以使用插件 mitt 实现。</p><p><strong>mitt:官网地址:<a href="https://www.npmjs.com/package/mitt" target="_blank" rel="noreferrer">https://www.npmjs.com/package/mitt</a></strong></p><h2 id="_1-4v-model" tabindex="-1">1.4v-model <a class="header-anchor" href="#_1-4v-model" aria-label="Permalink to &quot;1.4v-model&quot;">​</a></h2><p>v-model 指令可是收集表单数据(数据双向绑定)，除此之外它也可以实现父子组件数据同步 。</p><p>而 v-model 实指利用 props[modelValue]与自定义事件[update:modelValue]实现的。</p><p>下方代码:相当于给组件 Child 传递一个 props(modelValue)与绑定一个自定义事件 update:modelValue</p><p>实现父子组件数据同步</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Child v-model=&quot;msg&quot;&gt;&lt;/Child&gt;</span></span></code></pre></div><p>在 vue3 中一个组件可以通过使用多个 v-model,让父子组件多个数据同步,下方代码相当于 给组件 Child 传递两个 props 分别是 pageNo 与 pageSize，以及绑定两个自定义事件 update:pageNo 与 update:pageSize 实现父子数据同步</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Child v-model:pageNo=&quot;msg&quot; v-model:pageSize=&quot;msg1&quot;&gt;&lt;/Child&gt;</span></span></code></pre></div><h2 id="_1-5useattrs" tabindex="-1">1.5useAttrs <a class="header-anchor" href="#_1-5useattrs" aria-label="Permalink to &quot;1.5useAttrs&quot;">​</a></h2><p>在 Vue3 中可以利用 useAttrs 方法获取组件的属性与事件(包含:原生 DOM 事件或者自定 义事件),次函数功能类似于 Vue2 框架中$attrs属性与$listeners 方法。</p><p>比如:在父组件内部使用一个子组件 my-button</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;my-button type=&quot;success&quot; size=&quot;small&quot; title=&#39;标题&#39; @click=&quot;handler&quot;&gt;&lt;/my-button&gt;</span></span></code></pre></div><p>子组件内部可以通过 useAttrs 方法获取组件属性与事件.因此你也发现了，它类似于 props,可以接受父组件传递过来的属性与属性值。需要注意如果 defineProps 接受了某一 个属性，useAttrs 方法返回的对象身上就没有相应属性与属性值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import {useAttrs} from &#39;vue&#39;;</span></span>
<span class="line"><span>let $attrs = useAttrs();</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_1-6ref-与-parent" tabindex="-1">1.6ref 与$parent <a class="header-anchor" href="#_1-6ref-与-parent" aria-label="Permalink to &quot;1.6ref 与$parent&quot;">​</a></h2><p>ref,提及到 ref 可能会想到它可以获取元素的 DOM 或者获取子组件实例的 VC。既然可以 在父组件内部通过 ref 获取子组件实例 VC，那么子组件内部的方法与响应式数据父组件可 以使用的。</p><p>比如:在父组件挂载完毕获取组件实例</p><p>父组件内部代码:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;ref与$parent&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;Son ref=&quot;son&quot;&gt;&lt;/Son&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import Son from &quot;./Son.vue&quot;;</span></span>
<span class="line"><span>import { onMounted, ref } from &quot;vue&quot;;</span></span>
<span class="line"><span>const son = ref();</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  console.log(son.value);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>但是需要注意，如果想让父组件获取子组件的数据或者方法需要通过 defineExpose 对外暴 露,因为 vue3 中组件内部的数据对外“关闭的”，外部不能访问</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span>//数据</span></span>
<span class="line"><span>let money = ref(1000);</span></span>
<span class="line"><span>//方法</span></span>
<span class="line"><span>const handler = ()=&gt;{</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  money,</span></span>
<span class="line"><span>   handler</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>$parent 可以获取某一个组件的父组件实例 VC,因此可以使用父组件内部的数据与方法。必 须子组件内部拥有一个按钮点击时候获取父组件实例，当然父组件的数据与方法需要通过 defineExpose 方法对外暴露</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;button @click=&quot;handler($parent)&quot;&gt;点击我获取父组件实例&lt;/button&gt;</span></span></code></pre></div><h2 id="_1-7provide-与-inject" tabindex="-1">1.7provide 与 inject <a class="header-anchor" href="#_1-7provide-与-inject" aria-label="Permalink to &quot;1.7provide 与 inject&quot;">​</a></h2><p><strong>provide[提供]</strong></p><p><strong>inject[注入]</strong></p><p>vue3 提供两个方法 provide 与 inject,可以实现隔辈组件传递参数</p><p>组件组件提供数据:</p><p>provide 方法用于提供数据，此方法执需要传递两个参数,分别提供数据的 key 与提供数据 value</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import {provide} from &#39;vue&#39;</span></span>
<span class="line"><span>provide(&#39;token&#39;,&#39;admin_token&#39;);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>后代组件可以通过 inject 方法获取数据,通过 key 获取存储的数值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import {inject} from &#39;vue&#39;</span></span>
<span class="line"><span>let token = inject(&#39;token&#39;);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_1-8pinia" tabindex="-1">1.8pinia <a class="header-anchor" href="#_1-8pinia" aria-label="Permalink to &quot;1.8pinia&quot;">​</a></h2><p><strong>pinia 官网:<a href="https://pinia.web3doc.top/" target="_blank" rel="noreferrer">https://pinia.web3doc.top/</a></strong></p><p>pinia 也是集中式管理状态容器,类似于 vuex。但是核心概念没有 mutation、modules,使 用方式参照官网</p><h2 id="_1-9slot" tabindex="-1">1.9slot <a class="header-anchor" href="#_1-9slot" aria-label="Permalink to &quot;1.9slot&quot;">​</a></h2><p>插槽：默认插槽、具名插槽、作用域插槽可以实现父子组件通信.</p><p><strong>默认插槽:</strong></p><p>在子组件内部的模板中书写 slot 全局组件标签</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>在父组件内部提供结构：Todo 即为子组件,在父组件内部使用的时候，在双标签内部书写结 构传递给子组件</p><p>注意开发项目的时候默认插槽一般只有一个</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Todo&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;我是默认插槽填充的结构&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;/Todo&gt;</span></span></code></pre></div><p><strong>具名插槽：</strong></p><p>顾名思义，此插槽带有名字在组件内部留多个指定名字的插槽。</p><p>下面是一个子组件内部,模板中留两个插槽</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;todo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;slot name=&quot;a&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;slot name=&quot;b&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>父组件内部向指定的具名插槽传递结构。需要注意 v-slot：可以替换为#</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;slot&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;Todo&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:a&gt;  //可以用#a替换</span></span>
<span class="line"><span>        &lt;div&gt;填入组件A部分的结构&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:b&gt;//可以用#b替换</span></span>
<span class="line"><span>        &lt;div&gt;填入组件B部分的结构&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/Todo&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import Todo from &quot;./Todo.vue&quot;;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p><strong>作用域插槽</strong></p><p>作用域插槽：可以理解为，子组件数据由父组件提供，但是子组件内部决定不了自身结构与 外观(样式)</p><p>子组件 Todo 代码如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;todo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>     &lt;!--组件内部遍历数组--&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;(item,index) in todos&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>         &lt;!--作用域插槽将数据回传给父组件--&gt;</span></span>
<span class="line"><span>         &lt;slot :$row=&quot;item&quot; :$index=&quot;index&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>defineProps([&#39;todos&#39;]);//接受父组件传递过来的数据</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>父组件内部代码如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;slot&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;Todo :todos=&quot;todos&quot;&gt;</span></span>
<span class="line"><span>      &lt;template v-slot=&quot;{$row,$index}&quot;&gt;</span></span>
<span class="line"><span>         &lt;!--父组件决定子组件的结构与外观--&gt;</span></span>
<span class="line"><span>         &lt;span :style=&quot;{color:$row.done?&#39;green&#39;:&#39;red&#39;}&quot;&gt;{{$row.title}}&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/Todo&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import Todo from &quot;./Todo.vue&quot;;</span></span>
<span class="line"><span>import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span>//父组件内部数据</span></span>
<span class="line"><span>let todos = ref([</span></span>
<span class="line"><span>  { id: 1, title: &quot;吃饭&quot;, done: true },</span></span>
<span class="line"><span>  { id: 2, title: &quot;睡觉&quot;, done: false },</span></span>
<span class="line"><span>  { id: 3, title: &quot;打豆豆&quot;, done: true },</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="项目初始化" tabindex="-1">项目初始化 <a class="header-anchor" href="#项目初始化" aria-label="Permalink to &quot;项目初始化&quot;">​</a></h2><h2 id="_2-1-项目初始化" tabindex="-1">2.1 项目初始化 <a class="header-anchor" href="#_2-1-项目初始化" aria-label="Permalink to &quot;2.1 项目初始化&quot;">​</a></h2><p>一个项目要有统一的规范，需要使用 eslint+stylelint+prettier 来对我们的代码质量做检测和修复，需要使用 husky 来做 commit 拦截，需要使用 commitlint 来统一提交规范，需要使用 preinstall 来统一包管理工具。</p><h3 id="_2-1-1-环境准备" tabindex="-1">2.1.1 环境准备 <a class="header-anchor" href="#_2-1-1-环境准备" aria-label="Permalink to &quot;2.1.1 环境准备&quot;">​</a></h3><ul><li>node v16.14.2</li><li>pnpm 8.0.0</li></ul><h3 id="_2-1-2-初始化项目" tabindex="-1">2.1.2 初始化项目 <a class="header-anchor" href="#_2-1-2-初始化项目" aria-label="Permalink to &quot;2.1.2 初始化项目&quot;">​</a></h3><p>本项目使用 vite 进行构建，vite 官方中文文档参考 ：<a href="https://cn.vitejs.dev/guide/" target="_blank" rel="noreferrer">cn.vitejs.dev/guide/</a></p><p><strong>pnpm:performant npm ，意味“高性能的 npm”。<a href="https://so.csdn.net/so/search?q=pnpm&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">pnpm</a>由 npm/yarn 衍生而来，解决了 npm/yarn 内部潜在的 bug，极大的优化了性能，扩展了使用 场景。被誉为“最先进的包管理工具”</strong></p><p>pnpm 安装指令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i -g pnpm</span></span></code></pre></div><p>项目初始化命令:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm create vite</span></span></code></pre></div><p>进入到项目根目录 pnpm install 安装全部依赖.安装完依赖运行程序:pnpm run dev</p><p>运行完毕项目跑在<a href="http://127.0.0.1:5173/,%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E4%BD%A0%E5%BE%97%E9%A1%B9%E7%9B%AE%E5%95%A6" target="_blank" rel="noreferrer">http://127.0.0.1:5173/,可以访问你得项目啦</a></p>`,115),l=[e];function i(o,c,d,r,g,u){return n(),a("div",null,l)}const m=s(t,[["render",i]]);export{v as __pageData,m as default};
