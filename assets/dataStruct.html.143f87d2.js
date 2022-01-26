import{d as n}from"./app.7d51faec.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6570\u636E\u7ED3\u6784123321321" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784123321321" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784123321321</h1><h2 id="\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a> \u94FE\u8868</h2><p>\u5355\u5411\u94FE\u8868</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u94FE\u8868\u957F\u5EA6\u4E3A 0</span>
  length <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// \u521D\u59CB head \u4E3A null\uFF0Chead \u6307\u5411\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9</span>
  head <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token comment">// \u5185\u90E8\u7C7B\uFF08\u94FE\u8868\u91CC\u7684\u8282\u70B9 Node\uFF09</span>
  Node <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
    data
    next <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ------------ \u94FE\u8868\u7684\u5E38\u89C1\u64CD\u4F5C ------------ //</span>

  <span class="token comment">// append() \u5F80\u94FE\u8868\u5C3E\u90E8\u8FFD\u52A0\u6570\u636E</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001\u521B\u5EFA\u65B0\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this<span class="token punctuation">.</span>Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

    <span class="token comment">// 2\u3001\u8FFD\u52A0\u65B0\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u94FE\u8868\u957F\u5EA6\u4E3A 0 \u65F6\uFF0C\u5373\u53EA\u6709 head \u7684\u65F6\u5019</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u94FE\u8868\u957F\u5EA6\u5927\u4E8E 0 \u65F6\uFF0C\u5728\u6700\u540E\u9762\u6DFB\u52A0\u65B0\u8282\u70B9</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token comment">// \u5F53 currentNode.next \u4E0D\u4E3A\u7A7A\u65F6\uFF0C</span>
      <span class="token comment">// \u5FAA\u5E8F\u4F9D\u6B21\u627E\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373\u8282\u70B9\u7684 next \u4E3A null \u65F6</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>

      <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684 next \u6307\u5411\u65B0\u8282\u70B9</span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u8FFD\u52A0\u5B8C\u65B0\u8282\u70B9\u540E\uFF0C\u94FE\u8868\u957F\u5EA6 + 1</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// insert() \u5728\u6307\u5B9A\u4F4D\u7F6E\uFF08position\uFF09\u63D2\u5165\u8282\u70B9</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// position \u65B0\u63D2\u5165\u8282\u70B9\u7684\u4F4D\u7F6E</span>
    <span class="token comment">// position = 0 \u8868\u793A\u65B0\u63D2\u5165\u540E\u662F\u7B2C\u4E00\u4E2A\u8282\u70B9</span>
    <span class="token comment">// position = 1 \u8868\u793A\u65B0\u63D2\u5165\u540E\u662F\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u4EE5\u6B64\u7C7B\u63A8</span>

    <span class="token comment">// 1\u3001\u5BF9 position \u8FDB\u884C\u8D8A\u754C\u5224\u65AD\uFF0C\u4E0D\u80FD\u5C0F\u4E8E 0 \u6216\u5927\u4E8E\u94FE\u8868\u957F\u5EA6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token comment">// 2\u3001\u521B\u5EFA\u65B0\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this<span class="token punctuation">.</span>Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

    <span class="token comment">// 3\u3001\u63D2\u5165\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// position = 0 \u7684\u60C5\u51B5</span>
      <span class="token comment">// \u8BA9\u65B0\u8282\u70B9\u7684 next \u6307\u5411 \u539F\u6765\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373 head</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token comment">// head \u8D4B\u503C\u4E3A newNode</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 0 &lt; position &lt;= length \u7684\u60C5\u51B5</span>

      <span class="token comment">// \u521D\u59CB\u5316\u4E00\u4E9B\u53D8\u91CF</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token comment">// \u5F53\u524D\u8282\u70B9\u521D\u59CB\u5316\u4E3A head</span>
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// head \u7684 \u4E0A\u4E00\u8282\u70B9\u4E3A null</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// head \u7684 index \u4E3A 0</span>

      <span class="token comment">// \u5728 0 ~ position \u4E4B\u95F4\u904D\u5386\uFF0C\u4E0D\u65AD\u5730\u66F4\u65B0 currentNode \u548C previousNode</span>
      <span class="token comment">// \u76F4\u5230\u627E\u5230\u8981\u63D2\u5165\u7684\u4F4D\u7F6E</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>

      <span class="token comment">// \u5728\u5F53\u524D\u8282\u70B9\u548C\u5F53\u524D\u8282\u70B9\u7684\u4E0A\u4E00\u8282\u70B9\u4E4B\u95F4\u63D2\u5165\u65B0\u8282\u70B9\uFF0C\u5373\u5B83\u4EEC\u7684\u6539\u53D8\u6307\u5411</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span>

    <span class="token comment">// \u66F4\u65B0\u94FE\u8868\u957F\u5EA6</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
    <span class="token keyword">return</span> newNode
  <span class="token punctuation">}</span>

  <span class="token comment">// getData() \u83B7\u53D6\u6307\u5B9A\u4F4D\u7F6E\u7684 data</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token comment">// 2\u3001\u83B7\u53D6\u6307\u5B9A position \u8282\u70B9\u7684 data</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u8FD4\u56DE data</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span>

  <span class="token comment">// indexOf() \u8FD4\u56DE\u6307\u5B9A data \u7684 index\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u8FD4\u56DE -1\u3002</span>
  <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>data <span class="token operator">===</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> index
      <span class="token punctuation">}</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
      index<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// update() \u4FEE\u6539\u6307\u5B9A\u4F4D\u7F6E\u8282\u70B9\u7684 data</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6D89\u53CA\u5230 position \u90FD\u8981\u8FDB\u884C\u8D8A\u754C\u5224\u65AD</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token comment">// 2\u3001\u75DB\u8FC7\u5FAA\u73AF\u904D\u5386\uFF0C\u627E\u5230\u6307\u5B9A position \u7684\u8282\u70B9</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u4FEE\u6539\u8282\u70B9 data</span>
    currentNode<span class="token punctuation">.</span>data <span class="token operator">=</span> data

    <span class="token keyword">return</span> currentNode
  <span class="token punctuation">}</span>

  <span class="token comment">// removeAt() \u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9</span>
  <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token comment">// 2\u3001\u5220\u9664\u6307\u5B9A position \u8282\u70B9</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// position = 0 \u7684\u60C5\u51B5</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// position &gt; 0 \u7684\u60C5\u51B5</span>
      <span class="token comment">// \u901A\u8FC7\u5FAA\u73AF\u904D\u5386\uFF0C\u627E\u5230\u6307\u5B9A position \u7684\u8282\u70B9\uFF0C\u8D4B\u503C\u5230 currentNode</span>

      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>

      <span class="token comment">// \u5DE7\u5999\u4E4B\u5904\uFF0C\u8BA9\u4E0A\u4E00\u8282\u70B9\u7684 next \u6307\u5411\u5230\u5F53\u524D\u7684\u8282\u70B9\u7684 next\uFF0C\u76F8\u5F53\u4E8E\u5220\u9664\u4E86\u5F53\u524D\u8282\u70B9\u3002</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u66F4\u65B0\u94FE\u8868\u957F\u5EA6 -1</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span>

    <span class="token keyword">return</span> currentNode
  <span class="token punctuation">}</span>

  <span class="token comment">// remove() \u5220\u9664\u6307\u5B9A data \u7684\u8282\u70B9</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// isEmpty() \u5224\u65AD\u94FE\u8868\u662F\u5426\u4E3A\u7A7A</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// size() \u83B7\u53D6\u94FE\u8868\u7684\u957F\u5EA6</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>

  <span class="token comment">// toString() \u94FE\u8868\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot; &quot;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br></div></div><p>\u53CC\u5411\u94FE\u8868</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ------------ \u94FE\u8868\u7684\u5E38\u89C1\u64CD\u4F5C ------------ //</span>
  <span class="token comment">// append(element) \u5F80\u53CC\u5411\u94FE\u8868\u5C3E\u90E8\u8FFD\u52A0\u4E00\u4E2A\u65B0\u7684\u5143\u7D20</span>
  <span class="token comment">// \u91CD\u5199 append()</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001\u521B\u5EFA\u53CC\u5411\u94FE\u8868\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>

    <span class="token comment">// 2\u3001\u8FFD\u52A0\u5143\u7D20</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uFF01\uFF01\u8DDF\u5355\u5411\u94FE\u8868\u4E0D\u540C\uFF0C\u4E0D\u7528\u901A\u8FC7\u5FAA\u73AF\u627E\u5230\u6700\u540E\u4E00\u4E2A\u8282\u70B9</span>
      <span class="token comment">// \u5DE7\u5999\u4E4B\u5904</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// insert(position, data) \u63D2\u5165\u5143\u7D20</span>
  <span class="token comment">// \u91CD\u5199 insert()</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token comment">// 2\u3001\u521B\u5EFA\u65B0\u7684\u53CC\u5411\u94FE\u8868\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>

    <span class="token comment">// 3\u3001\u5224\u65AD\u591A\u79CD\u63D2\u5165\u60C5\u51B5</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728\u7B2C 0 \u4E2A\u4F4D\u7F6E\u63D2\u5165</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//== \u5DE7\u5999\u4E4B\u5904\uFF1A\u76F8\u5904\u817E\u51FA this.head \u7A7A\u95F4\uFF0C\u7559\u4E2A newNode \u6765\u8D4B\u503C ==//</span>
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>perv <span class="token operator">=</span> newNode
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u5165</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728 0 ~ this.length \u4F4D\u7F6E\u4E2D\u95F4\u63D2\u5165</span>

      <span class="token keyword">let</span> targetIndex <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span>

      <span class="token comment">// \u627E\u5230\u8981\u63D2\u5165\u4F4D\u7F6E\u7684\u8282\u70B9</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>targetIndex<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>

      <span class="token comment">// \u4EA4\u6362\u8282\u70B9\u4FE1\u606F</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> previousNode

      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode
      currentNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// getData() \u7EE7\u627F\u5355\u5411\u94FE\u8868</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// indexOf() \u7EE7\u627F\u5355\u5411\u94FE\u8868</span>
  <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// removeAt() \u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9</span>
  <span class="token comment">// \u91CD\u5199 removeAt()</span>
  <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token comment">// 2\u3001\u6839\u636E\u4E0D\u540C\u60C5\u51B5\u5220\u9664\u5143\u7D20</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5220\u9664\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u94FE\u8868\u5185\u53EA\u6709\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u94FE\u8868\u5185\u6709\u591A\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5220\u9664\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>

      currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5220\u9664 0 ~ this.length - 1 \u91CC\u9762\u8282\u70B9\u7684\u60C5\u51B5</span>

      <span class="token keyword">let</span> targetIndex <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>targetIndex<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>

      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
      currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>perv <span class="token operator">=</span> previousNode
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span>

  <span class="token comment">// update(position, data) \u4FEE\u6539\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9</span>
  <span class="token comment">// \u91CD\u5199 update()</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001\u5220\u9664 position \u4F4D\u7F6E\u7684\u8282\u70B9</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>

    <span class="token comment">// 2\u3001\u5728 position \u4F4D\u7F6E\u63D2\u5165\u5143\u7D20</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token comment">// remove(data) \u5220\u9664\u6307\u5B9A data \u6240\u5728\u7684\u8282\u70B9\uFF08\u7EE7\u627F\u5355\u5411\u94FE\u8868\uFF09</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// isEmpty() \u5224\u65AD\u94FE\u8868\u662F\u5426\u4E3A\u7A7A</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// size() \u83B7\u53D6\u94FE\u8868\u7684\u957F\u5EA6</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// forwardToString() \u94FE\u8868\u6570\u636E\u4ECE\u524D\u5F80\u540E\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token function">forwardToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot;--&quot;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token comment">// backwardString() \u94FE\u8868\u6570\u636E\u4ECE\u540E\u5F80\u524D\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token function">backwardString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot;--&quot;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>prev
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br></div></div>`,6);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
