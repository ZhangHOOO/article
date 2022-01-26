import{d as n}from"./app.7d51faec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6392\u5E8F\u7B97\u6CD5123" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F\u7B97\u6CD5123" aria-hidden="true">#</a> \u6392\u5E8F\u7B97\u6CD5123</h1><h2 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> \u5192\u6CE1\u6392\u5E8F</h2><p>\u539F\u7406\uFF1A\u6BD4\u8F83\u4E24\u4E2A\u76F8\u90BB\u7684\u5143\u7D20\uFF0C\u5C06\u503C\u5927\u7684\u5143\u7D20\u653E\u5230\u540E\u9762 \u601D\u8DEF\uFF1A\u4F9D\u6B21\u6BD4\u8F83\u76F8\u90BB\u7684\u4E24\u4E2A\u6570\uFF0C\u5C0F\u7684\u653E\u524D\u9762\uFF0C\u5927\u7684\u653E\u540E\u9762\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5916\u5C42\uFF0C\u9700\u8981\u904D\u5386\u7684\u6B21\u6570</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5185\u5C42\uFF0C\u6BCF\u6B21\u6BD4\u8F83</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a> \u63D2\u5165\u6392\u5E8F</h2><p>\u539F\u7406\uFF1A\u4E3A\u5F53\u524D\u5143\u7D20\u4FDD\u5B58\u4E00\u4E2A\u526F\u672C\uFF0C\u4F9D\u6B21\u5411\u524D\u904D\u5386\u524D\u9762\u7684\u5143\u7D20\u662F\u5426\u6BD4\u81EA\u5DF1\u5927\uFF0C\u5982\u679C\u6BD4\u81EA\u5DF1\u5927\u5C31\u76F4\u63A5\u628A\u524D\u4E00\u4E2A\u5143\u7D20\u8D4B\u503C\u5230\u5F53\u524D\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u5F53\u524D\u67D0\u4F4D\u7F6E\u7684\u5143\u7D20\u4E0D\u518D\u6BD4\u5F53\u524D\u5143\u7D20\u5927\u7684\u65F6\u5019\uFF0C\u5C06\u5F53\u524D\u5143\u7D20\u7684\u503C\u8D4B\u503C\u5230\u8FD9\u4E2A\u4F4D\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insertSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> j<span class="token punctuation">,</span>
      temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> temp<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h2><p>\u539F\u7406\uFF1A\u627E\u4E00\u4E2A\u57FA\u51C6\u503C\u5C06\u6570\u7EC4\u5206\u5272\u6210\u4E24\u90E8\u5206\uFF0C\u5927\u7684\u653E\u540E\u9762\uFF0C\u5C0F\u7684\u653E\u524D\u9762 \u601D\u8DEF\uFF1A 1\uFF0E\u5148\u4ECE\u6570\u5217\u4E2D\u53D6\u51FA\u4E00\u4E2A\u6570\u4F5C\u4E3A\u57FA\u51C6\u6570\u3002 2\uFF0E\u5206\u533A\u8FC7\u7A0B\uFF0C\u5C06\u6BD4\u8FD9\u4E2A\u6570\u5927\u7684\u6570\u5168\u653E\u5230\u5B83\u7684\u53F3\u8FB9\uFF0C\u5C0F\u4E8E\u6216\u7B49\u4E8E\u5B83\u7684\u6570\u5168\u653E\u5230\u5B83\u7684\u5DE6\u8FB9\u3002 3\uFF0E\u518D\u5BF9\u5DE6\u53F3\u533A\u95F4\u91CD\u590D\u7B2C\u4E8C\u6B65\uFF0C\u76F4\u5230\u5404\u533A\u95F4\u53EA\u6709\u4E00\u4E2A\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>p<span class="token punctuation">]</span>
  nums<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>q<span class="token punctuation">]</span>
  nums<span class="token punctuation">[</span>q<span class="token punctuation">]</span> <span class="token operator">=</span> temp
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">randomQuickSort</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span>l<span class="token punctuation">,</span>r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">let</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> l
  <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> random<span class="token punctuation">,</span> l<span class="token punctuation">)</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> l<span class="token punctuation">,</span>
    right <span class="token operator">=</span> r<span class="token punctuation">,</span>
    pivot <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> pivot<span class="token punctuation">)</span> right<span class="token operator">--</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> pivot<span class="token punctuation">)</span> left<span class="token operator">++</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> pivot<span class="token punctuation">)</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> right<span class="token punctuation">)</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> pivot
  <span class="token punctuation">}</span>
  <span class="token function">randomQuickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token function">randomQuickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u5F52\u5E76\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F" aria-hidden="true">#</a> \u5F52\u5E76\u6392\u5E8F</h2>`,11);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
