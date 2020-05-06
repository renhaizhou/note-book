(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1398:function(e,r,t){"use strict";t.r(r);var s=t(15),_=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"搜索相关参数梳理以及-bouncing-results-问题解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索相关参数梳理以及-bouncing-results-问题解决方案"}},[e._v("#")]),e._v(" 搜索相关参数梳理以及 bouncing results 问题解决方案")]),e._v(" "),t("p",[e._v("本章重点：怎么解决 bouncing results 和 timeout、routing 回顾，其他的不详细解说")]),e._v(" "),t("h2",{attrs:{id:"什么是-bouncing-results？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bouncing-results？"}},[e._v("#")]),e._v(" 什么是 bouncing results？")]),e._v(" "),t("p",[e._v("看一个场景：两个 document 排序，field 值相同；不同的 shard 上，可能排序不同；\n每次请求轮询打到不同的 replica shard 上；每次页面上看到的搜索结果的排序都不一样。这就是 "),t("strong",[e._v("bouncing result")]),e._v("，也就是跳跃的结果。")]),e._v(" "),t("p",[e._v("解决方案：使用 preference")]),e._v(" "),t("p",[e._v("什么是 preference ? 决定了哪些 shard 会被用来执行搜索操作,可选值有如下")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("_primary")])]),e._v(" "),t("li",[t("code",[e._v("_primary_first")])]),e._v(" "),t("li",[t("code",[e._v("_local")])]),e._v(" "),t("li",[t("code",[e._v("_only_node:xyz")])]),e._v(" "),t("li",[t("code",[e._v("_prefer_node:xyz")])]),e._v(" "),t("li",[t("code",[e._v("_shards:2,3")])])]),e._v(" "),t("p",[e._v("这里的每个值不解说，在高级课程中才会解说。")]),e._v(" "),t("p",[e._v("解决 preference 的思路：将 preference 设置为一个字符串，比如说 user_id，让每个 user 每次搜索的时候，都使用同一个 replica shard 去执行，就不会看到 bouncing results 了")]),e._v(" "),t("p",[e._v("这里的 user_id 是指，假如 id=123 的用户查询，那么久将 preference=123。id=234 的用户查询就设置为 234 。")]),e._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[e._v("GET /_search?preference="),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[e._v("#")]),e._v(" timeout")]),e._v(" "),t("p",[e._v("已经讲解过原理了，主要就是限定在一定时间内，将部分获取到的数据直接返回，避免查询耗时过长")]),e._v(" "),t("h2",{attrs:{id:"routing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" routing")]),e._v(" "),t("p",[e._v("document 文档路由默认是 "),t("code",[e._v("_id")]),e._v(" 路由；routing=user_id，这样的话可以让同一个 user 对应的数据到一个 shard 上去")]),e._v(" "),t("h2",{attrs:{id:"search-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-type"}},[e._v("#")]),e._v(" search_type")]),e._v(" "),t("p",[e._v("default：query_then_fetch")]),e._v(" "),t("p",[e._v("dfs_query_then_fetch：可以提升 revelance sort（相关性排序） 精准度")])])}),[],!1,null,null,null);r.default=_.exports}}]);