import{r as t,o as c,c as o,a as s,e,F as l,b as n,d as p}from"./app.7d51faec.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=s("h1",{id:"github-action-vuepress-\u90E8\u7F72",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#github-action-vuepress-\u90E8\u7F72","aria-hidden":"true"},"#"),n(" GitHub Action + VuePress \u90E8\u7F72")],-1),b=n("\u672C\u6587\u6559\u4F60\u5982\u4F55\u4F7F\u7528 GitHub Action + vuepress \u81EA\u52A8\u5316\u90E8\u7F72\u5728 GitHub Pages\u3002\u6700\u7EC8\u7684\u4EE3\u7801\u5728\u6211\u7684"),k={href:"https://github.com/chen-junyi/article",target:"_blank",rel:"noopener noreferrer"},d=n("GitHub"),m=n("\u53EF\u4EE5\u770B\uFF0C\u6F14\u793A\u53EF\u4EE5\u70B9"),h={href:"https://chen-junyi.github.io/article/",target:"_blank",rel:"noopener noreferrer"},g=n("\u8FD9\u91CC"),_=n("\uFF0C\u6F14\u793A\u8BBF\u95EE\u4E0D\u4E86\u7684\u53EF\u4EE5\u8BBF\u95EE\u6211\u7684"),f={href:"https://junyi-chen.gitee.io/article/",target:"_blank",rel:"noopener noreferrer"},y=n("gitee pages \u5730\u5740"),v=n("\uFF0C\u6211\u5728 gitee \u4E5F\u6709\u540C\u6B65\u4EE3\u7801\u90E8\u7F72 gitee pages\u3002"),w=p(`<h2 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> VuePress</h2><p>VuePress \u662F\u4E00\u4E2A\u4EE5 Markdown \u4E3A\u4E2D\u5FC3\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\u3002\u5728\u672C\u6587\u7684\u793A\u4F8B\u91CC\u4F7F\u7528\u7684\u662F vue3 \u7248\u672C\u7684 vuepress-next\u3002VuePress \u8FD8\u80FD\u5728 Markdown \u91CC\u4F7F\u7528 Vue \u8BED\u6CD5\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u9875\u9762\u90FD\u4F1A\u9884\u6E32\u67D3\u751F\u6210\u9759\u6001\u7684 HTML\uFF0C\u4E5F\u5C31\u662F\u8BF4\u52A0\u8F7D\u6027\u80FD\u597D\u8FD8\u6709\u975E\u5E38\u597D\u7684 SEO \u652F\u6301\uFF0C\u975E\u5E38\u9002\u5408\u7528\u6765\u5199\u6587\u6863\u548C\u535A\u5BA2\u3002</p><h3 id="\u9879\u76EE\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u642D\u5EFA" aria-hidden="true">#</a> \u9879\u76EE\u642D\u5EFA</h3><h4 id="_1-\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> 1.\u521B\u5EFA\u9879\u76EE</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u76EE\u5F55</span>
<span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter

<span class="token comment"># \u521D\u59CB\u5316\u9879\u76EE</span>
<span class="token function">git</span> init
<span class="token function">yarn</span> init

<span class="token comment"># \u5C06 VuePress \u5B89\u88C5\u4E3A\u672C\u5730\u4F9D\u8D56</span>
<span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_2-\u6DFB\u52A0-script-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0-script-\u547D\u4EE4" aria-hidden="true">#</a> 2.\u6DFB\u52A0 script \u547D\u4EE4</h4><div class="language-package ext-package line-numbers-mode"><pre class="language-package"><code>{
  &quot;scripts&quot;: {
    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_3-\u521B\u5EFA\u7B2C\u4E00\u7BC7\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u7B2C\u4E00\u7BC7\u6587\u7AE0" aria-hidden="true">#</a> 3.\u521B\u5EFA\u7B2C\u4E00\u7BC7\u6587\u7AE0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir docs
echo &#39;# Hello VuePress&#39; &gt; docs/README.md
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_4-\u672C\u5730\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_4-\u672C\u5730\u542F\u52A8" aria-hidden="true">#</a> 4.\u672C\u5730\u542F\u52A8</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn docs:dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u6253\u5F00 localhost:8080 \u770B\u5230 Hello Vuepress \u7684\u6587\u7AE0\u4E86\uFF0C\u5E76\u4E14\u662F\u652F\u6301\u70ED\u66F4\u65B0\uFF0C\u56E0\u4E3A vuepress \u5C31\u662F\u7528 webpack-dev-server \u9A71\u52A8\u7684\u3002VuePress \u8FD8\u6709\u5F88\u591A\u6269\u5C55\u7684\u914D\u7F6E\uFF0C\u5728 docs \u76EE\u5F55\u4E0B\u52A0\u65B0\u5EFA.vuepress/config.js\uFF0C\u5728\u8FD9\u91CC\u53EF\u4EE5\u914D\u7F6E\u6807\u9898\u3001\u4E3B\u9898\u3001\u8BED\u8A00\u3001\u5BFC\u822A\u680F\u7B49\u7B49\uFF0C\u5728\u8FD9\u91CC\u4E0D\u5C55\u5F00\u63CF\u8FF0\u3002</p><p>\u6700\u540E\u90E8\u7F72\u7684\u65F6\u5019\u7528 yarn docs:build \u547D\u4EE4\uFF0C\u4F1A\u5728 docs/.vuepress \u751F\u6210 dist \u76EE\u5F55\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u540E\u9762\u914D\u7F6E workflow \u4F1A\u7528\u5230\u3002</p><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub-Actions</h2><p>actions \u987E\u540D\u601D\u4E49\u5C31\u662F\u4E00\u5806\u52A8\u4F5C\uFF0C\u662F\u4E00\u4E2A\u6301\u7EED\u96C6\u6210\u670D\u52A1\uFF0C\u6301\u7EED\u96C6\u6210\u5305\u542B\u4E86\u62C9\u4EE3\u7801\u3001\u8FD0\u884C\u6D4B\u8BD5\u3001\u7F16\u8BD1\u4EE3\u7801\u3001\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u53D1\u5E03\u5230\u7B2C\u4E09\u65B9\u670D\u52A1\u7B49\u7B49\u7684\u64CD\u4F5C\uFF0CGitHub \u5C06\u8FD9\u4E9B\u64CD\u4F5C\u79F0\u4E3A actions\u3002</p><p>\u4E0D\u540C\u9879\u76EE\u7684\u5F88\u591A\u64CD\u4F5C\u53EF\u4EE5\u662F\u4E00\u6837\u7684\uFF0C\u6BD4\u5982\u62C9\u53D6\u5206\u652F\u4EE3\u7801\u3001\u7F13\u5B58\u4F9D\u8D56\u7B49\uFF0C\u6BCF\u4E2A\u4E5F\u5C31\u662F\u4E00\u4E2A action \u811A\u672C\u662F\u53EF\u4EE5\u5171\u7528\u7684\uFF0C\u6240\u4EE5 GitHub \u5141\u8BB8\u5F00\u53D1\u8005\u628A\u6BCF\u4E2A\u64CD\u4F5C\u5199\u6210\u72EC\u7ACB\u7684\u811A\u672C\u6587\u4EF6\uFF0C\u5B58\u653E\u5230\u4EE3\u7801\u4ED3\u5E93\uFF0C\u4F7F\u5F97\u5176\u4ED6\u5F00\u53D1\u8005\u53EF\u4EE5\u5F15\u7528\u3002</p>`,16),x=n("GitHub \u505A\u4E86\u4E00\u4E2A"),j={href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"},H=n("\u5B98\u65B9\u5E02\u573A"),V=n("\uFF0C\u53EF\u4EE5\u8BA9\u5F00\u53D1\u8005\u63D0\u4EA4 action \u4F9B\u5176\u4ED6\u4EBA\u4F7F\u7528\uFF0CGitHub \u5B98\u65B9\u7684 actions \u5219\u90FD\u653E\u5728 "),E=s("a",{href:"github.com/actions"},"github.com/actions",-1),q=n(" \u91CC\u9762\u3002\u63A5\u4E0B\u6765\u4ECB\u7ECD\u5199\u4E00\u4E2A VuePress \u7684 action\u3002"),G=p(`<h3 id="\u5EFA\u7ACB\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u4ED3\u5E93" aria-hidden="true">#</a> \u5EFA\u7ACB\u4ED3\u5E93</h3><p>\u9996\u5148\u5728 github \u4E0A\u521B\u5EFA\u4ED3\u5E93\uFF0C\u5982\u679C\u5EFA\u7ACB\u7684\u4ED3\u5E93\u540D\u79F0\u662F username.github.io\uFF0C\u5219\u6700\u540E\u8BBF\u95EE\u7684\u5730\u5740https://username.github.io/\u3002 \u5982\u679C\u4E0D\u662F\u8FD9\u4E2A\u540D\u79F0\uFF0C\u5219\u6700\u540E\u8BBF\u95EE\u7684\u5730\u5740\u662Fhttps://username.github.io/repo/ ,repo \u5C31\u662F\u4ED3\u5E93\u540D\u5B57\uFF0C\u6B64\u65F6\u8FD8\u9700\u8981\u5148\u4FEE\u6539.vuepress/config.js\uFF0C\u8BE5\u6587\u4EF6\u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u589E\u52A0 base \u7684\u914D\u7F6E\u9879\uFF0C\u503C\u4E3A\u201C/repo/\u201D\u3002</p><h3 id="\u6DFB\u52A0-github-\u76F8\u5173\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-github-\u76F8\u5173\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0.github \u76F8\u5173\u914D\u7F6E\u6587\u4EF6</h3><p>\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA.github/workflows \u76EE\u5F55\uFF0Cworkflow \u5C31\u662F GitHub Actions \u7684\u914D\u7F6E\u6587\u4EF6\u3002\u968F\u4FBF\u65B0\u5EFA.yml \u6587\u4EF6\u5C31\u662F\u4E00\u4E2A flow\uFF0Cgithub \u4F1A\u81EA\u52A8\u8FD0\u884C workflows \u76EE\u5F55\u4E0B\u6240\u6709\u7684 yml \u6587\u4EF6\u3002\u4ECB\u7ECD\u4E0B workflow \u6700\u91CD\u8981\u7684\u51E0\u4E2A\u914D\u7F6E\u548C\u6982\u5FF5\u3002</p><ol><li>name</li></ol><p>name \u5B57\u6BB5\u662F workflow \u7684\u540D\u79F0\u3002\u5982\u679C\u7701\u7565\u8BE5\u5B57\u6BB5\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D workflow \u7684\u6587\u4EF6\u540D</p><ol start="2"><li>on</li></ol><p>on \u5B57\u6BB5\u6307\u5B9A\u89E6\u53D1 workflow \u7684\u6761\u4EF6\uFF0C\u901A\u5E38\u662F\u67D0\u4E9B\u4E8B\u4EF6\u3002\u5728\u672C\u6587\u5B9E\u4F8B\u91CC\u7528\u7684\u662F push\uFF0C\u6307\u7684\u5C31\u662F\u5F53 git push \u4E8B\u4EF6\u53D1\u751F\u65F6\u89E6\u53D1\u8BE5 workflow\u3002</p><ol start="3"><li>jobs</li></ol><p>jobs \u662F workflow \u6700\u91CD\u8981\u7684\u90E8\u5206\uFF0C\u8868\u793A workflow \u8981\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u3002</p><p>\u63A5\u4E0B\u91CC\u5F00\u59CB\u5C31\u662F\u672C\u6587\u793A\u4F8B\u7684\u90E8\u7F72\u5185\u5BB9\u3002</p><p>\u6211\u4EEC\u5E0C\u671B\u7684\u6D41\u7A0B\u662F\uFF0C\u672C\u5730\u6539\u5B8C\u4EE3\u7801\uFF0C\u4E0A\u4F20\u5230 github \u540E\u80FD\u81EA\u52A8\u6253\u5305\u90E8\u7F72\u5230 gh-pages \u5206\u652F\u3002\u5148\u914D\u7F6E\u89E6\u53D1\u6761\u4EF6 on\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token comment"># \u89E6\u53D1\u6761\u4EF6</span>
  <span class="token comment"># \u6BCF\u5F53 push \u5230 master \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
  <span class="token comment"># \u662F\u5426\u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u63A5\u4E0B\u6765\u914D\u7F6E\u91CD\u5934\u620F jobs:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest <span class="token comment"># \u6307\u5B9A\u8FD0\u884C\u6240\u9700\u8981\u7684\u865A\u62DF\u673A\u73AF\u5883\uFF08\u5FC5\u586B\uFF09</span>

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&quot;14&quot;</span>

      <span class="token comment"># \u7F13\u5B58 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>

      <span class="token comment"># \u5982\u679C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\uFF0C\u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn docs<span class="token punctuation">:</span>build

      <span class="token comment"># \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token comment"># \u73AF\u5883\u53D8\u91CF</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACTION_SECRET <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u9996\u5148 job \u91CC\u914D\u7F6E\u8FD0\u884C\u8FD9\u4E2A\u811A\u672C\u9700\u8981\u7684\u865A\u62DF\u673A\u73AF\u5883\uFF0C\u8FD9\u4E2A\u865A\u62DF\u673A\u73AF\u5883\u7531 github \u63D0\u4F9B\uFF0C\u53EF\u7528\u7684\u5305\u62EC windows\u3001linux\u3001macos \u7B49\u73AF\u5883\uFF0C\u5177\u4F53\u770B\u5B98\u65B9\u6587\u6863\u3002\u5728\u6B64\u793A\u4F8B\u4E2D\u5176\u5B9E\u4E0D\u8BBA\u54EA\u4E2A\u7CFB\u7EDF\u90FD\u662F\u53EF\u4EE5\u7684\uFF0C\u56E0\u4E3A\u6211\u4EEC\u9700\u8981\u7684\u662F node \u73AF\u5883\uFF0C\u800C node \u672C\u8EAB\u5C31\u662F\u8DE8\u5E73\u53F0\u7684\u3002</p><p>\u63A5\u4E0B\u91CC\u8BBE\u7F6E\u83B7\u53D6\u6E90\u7801\u3001\u9700\u8981\u7684 node \u7248\u672C\u3001\u589E\u52A0\u7F13\u5B58\u4F9D\u8D56\uFF0C\u8FD9\u91CC\u4F7F\u7528\u5B98\u65B9\u63D0\u4F9B\u7684 actions/setup-node@v1\u3001setup-node@v1\u3001cache@v2\u3002\u8FD9\u91CC\u7684@\u8868\u793A\u7248\u672C\uFF0C\u4F7F\u7528\u522B\u4EBA\u7684 action \u65F6\u6700\u597D\u90FD\u52A0\u4E0A\u7248\u672C\uFF0C\u4EE5\u9632\u540E\u9762\u66F4\u65B0\u7684 action \u4E0D\u517C\u5BB9\u5F53\u524D\u7684\u811A\u672C\u3002\u8FD9\u4E9B\u524D\u7F6E\u6761\u4EF6\u914D\u7F6E\u597D\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u719F\u6089\u7684 yarn install\u3001yarn build:docs\uFF0C\u5B89\u88C5\u4F9D\u8D56\u4F7F\u7528--frozen-lockfile \u6765\u9501\u5B9A\u7248\u672C\u3002\u6700\u540E\u4E00\u6B65\u5C31\u662F\u5C06\u6253\u5305\u7684\u76EE\u5F55\u66F4\u65B0\u5230 gh-pages \u5206\u652F\u3002\u56E0\u4E3A\u8981\u66F4\u65B0 github \u4EE3\u7801\uFF0C\u6240\u4EE5\u8FD8\u9700\u8981\u914D\u7F6E github-token\u3002 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61815fbd6adc4b10b5d60da9b49ab8b5~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u5728\u4ED3\u5E93\u7684 setting \u4E0B\u627E\u5230 secert\uFF0C\u65B0\u5EFA\u4E00\u4E2A secert\uFF0C\u6587\u4EF6\u540D\u53EF\u4EE5\u968F\u4FBF\u53D6\uFF0C\u5728 workflow \u7684\u73AF\u5883\u53D8\u91CF\u91CC secerts \u6307\u7684\u5C31\u662F\u8FD9\u91CC secert\uFF0C\u540E\u9762\u5C31\u662F secert \u91CC\u6587\u4EF6\u7684\u5177\u4F53\u540D\u79F0\uFF0C\u5728\u8FD9\u91CC\u53D6\u4E3A ACTION_SECERT\uFF0Cenv \u914D\u7F6E secerts.ACTION_SECRET \u5C31\u884C\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74607c18da504d63a88894d9493d6dce~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u6700\u540E\u6307\u5B9A\u90E8\u7F72\u7684\u5206\u652F\u540D\u79F0\uFF0C\u548C\u90E8\u7F72\u5230\u5206\u652F\u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55\u5C31\u884C\u3002</p><p>\u5C1D\u8BD5\u7740\u63A8\u9001\u4EE3\u7801\uFF0C\u53EF\u4EE5\u770B\u5230\u4ED3\u5E93\u7684 Actions \u5F00\u59CB\u81EA\u52A8\u8FD0\u884C\u4E86\uFF0C\u5E76\u4E14\u80FD\u770B\u5230\u8FD0\u884C\u7684\u65E5\u5FD7\u3002 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc2cd9e087804342978c671aec803489~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u8FD0\u884C\u5B8C\u540E\u8BBF\u95EE https://username.github.io/repo \u5C31\u80FD\u770B\u5230\u90E8\u7F72\u540E\u7684\u6548\u679C\u4E86\u3002</p><h2 id="\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a> \u6E90\u7801</h2><p>gitHub: https://github.com/chen-junyi/article</p><p>github pages: https://chen-junyi.github.io/article/</p><p>gitee pages: https://junyi-chen.gitee.io/article/</p><p>\u672C\u4EBA\u6574\u7406\u7684\u5F00\u6E90\u6587\u6863\u9879\u76EE\uFF0C\u6709\u5174\u8DA3\u7684\u53EF\u4EE5\u79C1\u804A\u6211\u4E00\u8D77\u7EF4\u62A4\u5B8C\u5584~</p><h2 id="\u7ED3\u675F\u8BED" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u675F\u8BED" aria-hidden="true">#</a> \u7ED3\u675F\u8BED</h2><p>\u6709\u4EC0\u4E48\u8BF4\u7684\u4E0D\u5BF9\u6216\u8005\u6709\u7591\u95EE\u7684\uFF0C\u6B22\u8FCE\u5728\u4E0B\u9762\u7559\u8A00\u4EA4\u6D41~~</p>`,29);function P(A,T){const a=t("ExternalLinkIcon");return c(),o(l,null,[i,s("p",null,[b,s("a",k,[d,e(a)]),m,s("a",h,[g,e(a)]),_,s("a",f,[y,e(a)]),v]),w,s("p",null,[x,s("a",j,[H,e(a)]),V,E,q]),G],64)}var I=r(u,[["render",P]]);export{I as default};
