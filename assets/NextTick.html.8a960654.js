import{r as e,o,c,a as s,e as t,F as l,d as a,b as n}from"./app.7d51faec.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=a('<h1 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h1><p>nextTick \u662F Vue \u4E2D\u7ECF\u5E38\u89C1\u5E76\u4E14\u5B9E\u7528\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u505A\u4E00\u4E2A\u5B8C\u5168\u7684\u89E3\u6790\u3002</p><p>\u9996\u5148\u770B\u4E0B nextTick api \u5728\u5B98\u7F51\u4E2D\u7684\u63CF\u8FF0\u3002</p><blockquote><p>Vue.nextTick( [callback, context] ),\u5728\u4E0B\u6B21 DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u6267\u884C\u5EF6\u8FDF\u56DE\u8C03\u3002\u5728\u4FEE\u6539\u6570\u636E\u4E4B\u540E\u7ACB\u5373\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u83B7\u53D6\u66F4\u65B0\u540E\u7684 DOM\u3002</p></blockquote><p>DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u662F\u4EC0\u4E48\u610F\u601D\uFF0C\u4EC0\u4E48\u65F6\u5019 DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\uFF1FnextTick \u600E\u4E48\u5728 DOM \u66F4\u65B0\u7ED3\u675F\u540E\u6267\u884C\u5EF6\u8FDF\u56DE\u8C03\u7684\uFF1F\u9996\u5148\u8BF4\u4E0B Vue \u4E2D\u7684\u5F02\u6B65\u66F4\u65B0\u961F\u5217\u3002</p><h2 id="vue-\u5F02\u6B65\u66F4\u65B0\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#vue-\u5F02\u6B65\u66F4\u65B0\u961F\u5217" aria-hidden="true">#</a> Vue \u5F02\u6B65\u66F4\u65B0\u961F\u5217</h2><p>Vue \u5F02\u6B65\u66F4\u65B0\u961F\u5217\uFF0C\u4E5F\u5C31\u662F\u5F02\u6B65\u6E32\u67D3\u3002\u5728\u5B98\u7F51\u6709\u8FD9\u6837\u4E00\u6BB5\u539F\u8BDD</p><blockquote><p>\u53EF\u80FD\u4F60\u8FD8\u6CA1\u6709\u6CE8\u610F\u5230\uFF0CVue \u5728\u66F4\u65B0 DOM \u65F6\u662F\u5F02\u6B65\u6267\u884C\u7684\u3002\u53EA\u8981\u4FA6\u542C\u5230\u6570\u636E\u53D8\u5316\uFF0CVue \u5C06\u5F00\u542F\u4E00\u4E2A\u961F\u5217\uFF0C\u5E76\u7F13\u51B2\u5728\u540C\u4E00\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u53D1\u751F\u7684\u6240\u6709\u6570\u636E\u53D8\u66F4\u3002\u5982\u679C\u540C\u4E00\u4E2A watcher \u88AB\u591A\u6B21\u89E6\u53D1\uFF0C\u53EA\u4F1A\u88AB\u63A8\u5165\u5230\u961F\u5217\u4E2D\u4E00\u6B21\u3002\u8FD9\u79CD\u5728\u7F13\u51B2\u65F6\u53BB\u9664\u91CD\u590D\u6570\u636E\u5BF9\u4E8E\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\u548C DOM \u64CD\u4F5C\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002\u7136\u540E\uFF0C\u5728\u4E0B\u4E00\u4E2A\u7684\u4E8B\u4EF6\u5FAA\u73AF\u201Ctick\u201D\u4E2D\uFF0CVue \u5237\u65B0\u961F\u5217\u5E76\u6267\u884C\u5B9E\u9645 (\u5DF2\u53BB\u91CD\u7684) \u5DE5\u4F5C\u3002Vue \u5728\u5185\u90E8\u5BF9\u5F02\u6B65\u961F\u5217\u5C1D\u8BD5\u4F7F\u7528\u539F\u751F\u7684 Promise.then\u3001MutationObserver \u548C setImmediate\uFF0C\u5982\u679C\u6267\u884C\u73AF\u5883\u4E0D\u652F\u6301\uFF0C\u5219\u4F1A\u91C7\u7528 setTimeout(fn, 0) \u4EE3\u66FF\u3002<br>\u4F8B\u5982\uFF0C\u5F53\u4F60\u8BBE\u7F6E vm.someData = &#39;new value&#39;\uFF0C\u8BE5\u7EC4\u4EF6\u4E0D\u4F1A\u7ACB\u5373\u91CD\u65B0\u6E32\u67D3\u3002\u5F53\u5237\u65B0\u961F\u5217\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u5728\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u201Ctick\u201D\u4E2D\u66F4\u65B0\u3002\u591A\u6570\u60C5\u51B5\u6211\u4EEC\u4E0D\u9700\u8981\u5173\u5FC3\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u4F46\u662F\u5982\u679C\u4F60\u60F3\u57FA\u4E8E\u66F4\u65B0\u540E\u7684 DOM \u72B6\u6001\u6765\u505A\u70B9\u4EC0\u4E48\uFF0C\u8FD9\u5C31\u53EF\u80FD\u4F1A\u6709\u4E9B\u68D8\u624B\u3002\u867D\u7136 Vue.js \u901A\u5E38\u9F13\u52B1\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528\u201C\u6570\u636E\u9A71\u52A8\u201D\u7684\u65B9\u5F0F\u601D\u8003\uFF0C\u907F\u514D\u76F4\u63A5\u63A5\u89E6 DOM\uFF0C\u4F46\u662F\u6709\u65F6\u6211\u4EEC\u5FC5\u987B\u8981\u8FD9\u4E48\u505A\u3002\u4E3A\u4E86\u5728\u6570\u636E\u53D8\u5316\u4E4B\u540E\u7B49\u5F85 Vue \u5B8C\u6210\u66F4\u65B0 DOM\uFF0C\u53EF\u4EE5\u5728\u6570\u636E\u53D8\u5316\u4E4B\u540E\u7ACB\u5373\u4F7F\u7528 Vue.nextTick(callback)\u3002\u8FD9\u6837\u56DE\u8C03\u51FD\u6570\u5C06\u5728 DOM \u66F4\u65B0\u5B8C\u6210\u540E\u88AB\u8C03\u7528\u3002</p></blockquote><p>\u8FD9\u91CC\u6D89\u53CA\u5230\u7684\u77E5\u8BC6\u70B9\uFF0C\u4E00\u4E2A\u662F\u4E8B\u4EF6\u5FAA\u73AF\uFF08Event loop\uFF09\uFF0C\u4E00\u4E2A\u662F Vue \u4E2D\u66F4\u65B0 Dom \u7684\u673A\u5236\u3002</p><h3 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF</h3><p>\u4E8B\u4EF6\u5FAA\u73AF\uFF08Event Loop\uFF09\uFF0C\u6BCF\u8F6E\u4E5F\u5C31\u662F\u4E00\u4E2A&#39;tick&#39;\u3002\u7B80\u5355\u6982\u62EC\u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF</p><ol><li>\u5B8F\u961F\u5217 macrotask \u4E00\u6B21\u53EA\u4ECE\u961F\u5217\u4E2D\u53D6\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\uFF0C\u6267\u884C\u5B8C\u540E\u5C31\u53BB\u6267\u884C\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u4EFB\u52A1</li><li>\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u6240\u6709\u7684\u4EFB\u52A1\u90FD\u4F1A\u88AB\u4F9D\u6B21\u53D6\u51FA\u6765\u6267\u884C\uFF0C\u76F4\u5230 microtask queue \u4E3A\u7A7A</li><li>UI render\uFF0C\u4F46\u662F UI render \u4E0D\u4E00\u5B9A\u4F1A\u6267\u884C\uFF0C\u8FD9\u4E2A\u662F\u7531\u6D4F\u89C8\u5668\u81EA\u884C\u5224\u65AD\u51B3\u5B9A\u7684\uFF0C\u4F46\u53EA\u8981\u6267\u884C UI render\uFF0C\u5B83\u7684\u8282\u70B9\u662F\u5728\u6267\u884C\u5B8C\u6240\u6709\u7684 microtask \u4E4B\u540E\uFF0C\u4E0B\u4E00\u4E2A macrotask \u4E4B\u524D\uFF0C\u7D27\u8DDF\u7740\u6267\u884C UI render\u3002(\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F)</li><li>\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1</li><li>...</li></ol>',12),k=n("\u5728 Vue \u4E2D\u66F4\u65B0 DOM \u662F\u901A\u8FC7\u89E6\u53D1 setter\uFF0Csetter \u518D\u89E6\u53D1 watcher \u5BF9\u8C61\u7684 update \u65B9\u6CD5\uFF0C\u4F46 update \u5E76\u4E0D\u662F\u7ACB\u9A6C\u66F4\u65B0\uFF0C\u800C\u662F\u8C03\u7528 queueWatcher \u65B9\u6CD5\u5C06\u5F53\u524D\u89E6\u53D1\u7684 watcher \u5BF9\u8C61\u653E\u5230 queueWatcher \u7684\u89C2\u5BDF\u8005\u961F\u5217\u4E2D\uFF0C\u5728\u4E0B\u4E00\u6B21 tick \u7684\u65F6\u5019\u6267\u884C\u3002\u6E90\u7801\u5728"),b={href:"https://github.com/vuejs/vue/blob/dev/src/core/observer/scheduler.js#L187",target:"_blank",rel:"noopener noreferrer"},m=n("\u8FD9\u91CC"),d=n("\u3002"),f=a(`<p>\u603B\u7ED3\u4E0B Vue \u5F02\u6B65\u6E32\u67D3\u7684\u6B65\u9AA4</p><p>\u4F9D\u8D56\u6570\u636E\u4FEE\u6539 -- \u89E6\u53D1 setter -- watcher \u5BF9\u8C61\u7684 update \u65B9\u6CD5 -- queueWatcher -- \u5C06\u66F4\u65B0\u89C6\u56FE\u7684\u65B9\u6CD5\u653E\u8FDB nextTick \u56DE\u8C03\u91CC\u3002</p><p>Vue \u66F4\u65B0 DOM \u6B63\u5F0F\u8C03\u7528\u4E86 nextTick \u4ECE\u800C\u5B9E\u8DF5\u5F02\u6B65\u6E32\u67D3\uFF0C\u6240\u4EE5\u7528\u6237\u8C03 nextTick \u624D\u80FD\u83B7\u53D6\u66F4\u65B0\u540E\u7684 DOM\u3002\u90A3\u4E3A\u4EC0\u4E48\u591A\u6B21\u4FEE\u6539\u6570\u636E\uFF0C\u7528\u6237 nextTick \u8FD8\u662F\u80FD\u62FF\u5230\u66F4\u65B0\u540E\u7684 DOM \u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u540C\u4E00\u4E2A watcher \u88AB\u591A\u6B21\u89E6\u53D1\uFF0C\u53EA\u4F1A\u88AB\u63A8\u5165\u5230\u961F\u5217\u4E2D\u4E00\u6B21\u3002\u770B\u4E0B\u6E90\u7801\u4E2D\u7684 queueWatcher:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">watcher</span><span class="token operator">:</span> Watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flushing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// if already flushing, splice the watcher based on its id</span>
      <span class="token comment">// if already past its id, it will be run next immediately.</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> watcher<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// queue the flush</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      waiting <span class="token operator">=</span> <span class="token boolean">true</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">flushSchedulerQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u901A\u8FC7 has \u8FD9\u4E2A\u5BF9\u8C61\u5224\u65AD\u8FD9\u6B21\u89E6\u53D1\u7684 watcher \u662F\u5426\u5DF2\u7ECF\u5728\u961F\u5217\u4E2D\u4E86\uFF0C\u7531\u6B64\u5B9E\u73B0\u591A\u6B21\u4FEE\u6539\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u89C6\u56FE\u53EA\u66F4\u65B0\u4E00\u6B21\u3002</p><p>\u5148\u770B\u4E0B\u5B98\u7F51\u63D0\u4F9B\u7684\u8FD9\u6BB5\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
vm<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&quot;new message&quot;</span> <span class="token comment">// \u66F4\u6539\u6570\u636E</span>
vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">&quot;new message&quot;</span> <span class="token comment">// false</span>
Vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">&quot;new message&quot;</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u5C31\u8DDF\u4E0A\u9762\u5206\u6790\u7684\u4E00\u6837\u3002</p><p>\u518D\u770B\u4E0B\u8FD9\u6BB5\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">&quot;new message&quot;</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
vm<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&quot;new message&quot;</span> <span class="token comment">// \u66F4\u6539\u6570\u636E</span>
vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">&quot;new message&quot;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u56E0\u4E3A message \u7684\u8D4B\u503C\u64CD\u4F5C\u653E\u5728\u4E86 nextTick \u65B9\u6CD5\u540E\u9762\uFF0C\u6240\u4EE5 nextTick \u56DE\u8C03\u51FD\u6570\u7684\u4F1A\u5F02\u6B65\u66F4\u65B0\u961F\u5217\u7684\u524D\u9762\uFF0C\u800C\u66F4\u65B0 DOM \u5219\u5728\u540E\u9762\uFF0C\u6240\u4EE5\u6B64\u65F6\u62FF\u5230\u7684 DOM \u4E0D\u662F\u66F4\u65B0\u540E\u7684\u3002</p><h2 id="nexttick-\u6E90\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#nexttick-\u6E90\u7801\u5B9E\u73B0" aria-hidden="true">#</a> nextTick \u6E90\u7801\u5B9E\u73B0</h2><p>\u9996\u5148\u770B\u4E0B\u7528\u6CD5\uFF1A Vue.nextTick \u7528\u4E8E\u5EF6\u8FDF\u6267\u884C\u4E00\u6BB5\u4EE3\u7801\uFF0C\u5B83\u63A5\u53D7 2 \u4E2A\u53C2\u6570\uFF08\u56DE\u8C03\u51FD\u6570\u548C\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u56DE\u8C03\u51FD\u6570\uFF0C\u90A3\u4E48\u5C06\u8FD4\u56DE promise \u5BF9\u8C61\u3002</p>`,13),h=n("\u5728"),w={href:"https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js",target:"_blank",rel:"noopener noreferrer"},y=n("next-tick \u6E90\u7801"),g=n("\u91CC\u4E3B\u8981\u505A\u4E86\u4E24\u4E2A\u4E8B\u60C5\u3002"),v=a(`<p>\u7B2C\u4E00\u662F\u6839\u636E\u5F53\u524D\u7684\u6267\u884C\u73AF\u5883\u5224\u65AD\u6267\u884C\u7684\u56DE\u8C03\u662F\u5FAE\u4EFB\u52A1\u8FD8\u662F\u5B8F\u4EFB\u52A1\uFF0C\u5177\u4F53\u5982\u4E0B\u987A\u5E8F\uFF1A</p><p><code>Promise &gt; MutationObserver &gt; setImmediate &gt; setTimeout</code></p><p>\u7B2C\u4E8C\u662F\u6267\u884C\u4EFB\u52A1\u961F\u5217\u65B9\u6CD5\u3002</p><p>\u770B\u4E0B nextTick \u51FD\u6570\u505A\u4E86\u4EC0\u4E48\uFF0C\u9996\u5148\u58F0\u660E\u4E00\u4E2A_resolve\uFF0C\u5982\u679C\u6CA1\u6709\u56DE\u8C03\u51FD\u6570\u5219\u8FD4\u56DE\u4E00\u4E2A promise\uFF0C\u6240\u4EE5\u5728\u4F7F\u7528 this.$nextTick \u65F6\u53EF\u4EE5\u4F7F\u7528 await \u7B49\u5F85\u5176\u5F02\u6B65\u6267\u884C\u3002\u5728\u4F20\u5165\u56DE\u8C03\u51FD\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u56DE\u8C03\u51FD\u6570\u653E\u5165 callbacks \u961F\u5217\u91CC\uFF0C\u5E76\u4E14\u5728\u6BCF\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u9996\u6B21\u4F7F\u7528 nextTick \u7684\u65F6\u5019\uFF0C\u6267\u884C timer \u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u4E0A\u9762\u5224\u65AD\u7684\u5F02\u6B65\u65B9\u6CD5\uFF0C\u5728\u672C\u8F6E\u7684\u4E8B\u4EF6\u5FAA\u73AF\u91CC\uFF0C\u6BCF\u6B21\u518D\u8C03\u7528 nextTick \u51FD\u6570\u5219\u53EA\u5C06\u56DE\u8C03\u51FD\u6570\u653E\u5165 callbacks \u961F\u5217\u91CC\u3002\u6700\u7EC8\u901A\u8FC7 flushCallbacks \u65B9\u6CD5\u6267\u884C\u4EFB\u52A1\u961F\u5217\u7684\u6240\u6709\u65B9\u6CD5\u3002</p><p>\u4E0B\u9762\u662F\u6E90\u7801\u52A0\u6CE8\u91CA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> noop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> handleError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./error&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isIE<span class="token punctuation">,</span> isIOS<span class="token punctuation">,</span> isNative <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./env&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment">// \u4EFB\u52A1\u961F\u5217</span>
<span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// \u6BCF\u4E00\u8F6E\u4EFB\u52A1\u961F\u5217\u7684\u662F\u5426\u5F00\u542F\u5FAE(\u5B8F)\u4EFB\u52A1\u7684\u6807\u8BC6</span>
<span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment">// \u6267\u884C\u4EFB\u52A1\u961F\u5217\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">flushCallbacks</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pending <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token comment">// \u4E4B\u6240\u4EE5\u8981slice\u590D\u5236\u4E00\u4EFD\u51FA\u6765\u662F\u56E0\u4E3A\u6709\u7684cb\u6267\u884C\u8FC7\u7A0B\u4E2D\u53C8\u4F1A\u5F80callbacks\u4E2D\u52A0\u5165\u5185\u5BB9</span>
  <span class="token comment">// \u6BD4\u5982$nextTick\u7684\u56DE\u8C03\u51FD\u6570\u91CC\u53C8\u6709$nextTick</span>
  <span class="token comment">// \u8FD9\u4E9B\u662F\u5E94\u8BE5\u653E\u5165\u5230\u4E0B\u4E00\u4E2A\u8F6E\u6B21\u7684nextTick\u53BB\u6267\u884C\u7684,</span>
  <span class="token comment">// \u6240\u4EE5\u62F7\u8D1D\u4E00\u4EFD\u5F53\u524D\u7684,\u904D\u5386\u6267\u884C\u5B8C\u5F53\u524D\u7684\u5373\u53EF,\u907F\u514D\u65E0\u4F11\u6B62\u7684\u6267\u884C\u4E0B\u53BB</span>
  <span class="token keyword">const</span> copies <span class="token operator">=</span> callbacks<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  callbacks<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> copies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    copies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// timerFunc\u4F1A\u628AflushCallbacks\u7ED9\u585E\u5230\u4E8B\u4EF6\u5FAA\u73AF\u7684\u961F\u5C3E\uFF0C\u7B49\u5F85\u88AB\u8C03\u7528\u3002</span>
<span class="token comment">// \u6839\u636E\u5F53\u524D\u73AF\u5883\u652F\u6301\u4EC0\u4E48\u65B9\u6CD5\u5219\u786E\u5B9A\u8C03\u7528\u54EA\u4E2A</span>
<span class="token keyword">let</span> timerFunc<span class="token operator">=</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>Promise<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isIE <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> MutationObserver <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token function">isNative</span><span class="token punctuation">(</span>MutationObserver<span class="token punctuation">)</span> <span class="token operator">||</span>
  MutationObserver<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object MutationObserverConstructor]&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token keyword">const</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>textNode<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">characterData</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    counter <span class="token operator">=</span> <span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span>
    textNode<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setImmediate <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>setImmediate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5728\u4F7F\u7528nextTick \u65F6\u5C06\u5F85\u6267\u884C\u5F85\u51FD\u6570\u653E\u5165\u5230\u6267\u884C\u7684\u961F\u5C3E</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _resolve
  <span class="token comment">// \u5C06\u56DE\u8C03\u51FD\u6570push\u81F3\u961F\u5217\u4E2D</span>
  callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> <span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_resolve</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// \u6267\u884C\u5F02\u6B65\u5EF6\u8FDF\u51FD\u6570 timerFunc(\u4EE5pending\u505A\u6807\u8BC6\uFF0C\u53EA\u5728\u6BCF\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u9996\u6B21\u8C03\u7528\u6267\u884C)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pending <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">timerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5F53 nextTick \u6CA1\u6709\u4F20\u5165\u51FD\u6570\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE\u4E00\u4E2A Promise \u5316\u7684\u8C03\u7528</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _resolve <span class="token operator">=</span> resolve
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u91CD\u70B9\u5728\u4E8E Vue \u66F4\u65B0 DOM \u4E5F\u662F\u8C03\u7528\u4E86 nextTick \u65B9\u6CD5\uFF0C\u5B9E\u73B0\u5F02\u6B65\u6E32\u67D3\uFF0C\u540E\u9762\u7528\u6237\u8C03\u7528 nextTick \u81EA\u7136\u5C31\u6392\u5728 nextTick \u7684\u4EFB\u52A1\u961F\u5217\u540E\u9762\uFF0C\u4E5F\u5C31\u80FD\u62FF\u5230\u66F4\u65B0\u540E\u7684 DOM \u4E86\u3002</p>`,8);function x(_,T){const p=e("ExternalLinkIcon");return o(),c(l,null,[i,s("p",null,[k,s("a",b,[m,t(p)]),d]),f,s("p",null,[h,s("a",w,[y,t(p)]),g]),v],64)}var O=u(r,[["render",x]]);export{O as default};
