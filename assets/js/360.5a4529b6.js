(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{1311:function(a,e,t){"use strict";t.r(e);var s=t(15),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"fielddata-内存控制以及-circuit-breaker-短路器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fielddata-内存控制以及-circuit-breaker-短路器"}},[a._v("#")]),a._v(" fielddata 内存控制以及 circuit breaker 短路器")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#fielddata-核心原理"}},[a._v("fielddata 核心原理")])]),t("li",[t("a",{attrs:{href:"#fielddata-内存限制"}},[a._v("fielddata 内存限制")])]),t("li",[t("a",{attrs:{href:"#监控-fielddata-内存使用"}},[a._v("监控 fielddata 内存使用")])]),t("li",[t("a",{attrs:{href:"#circuit-breaker"}},[a._v("circuit breaker")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"fielddata-核心原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fielddata-核心原理"}},[a._v("#")]),a._v(" fielddata 核心原理")]),a._v(" "),t("p",[a._v("fielddata 加载到内存的过程是 lazy 加载的，对一个 analzyed field 执行聚合时，\n才会加载，而且是 field-level（字段级别而不是该 doc 的所有字段） 加载的，\n一个 index 的一个 field，所有 doc 都会被加载而不是少数 doc，\n不是 index-time 创建，是 query-time 创建")]),a._v(" "),t("h2",{attrs:{id:"fielddata-内存限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fielddata-内存限制"}},[a._v("#")]),a._v(" fielddata 内存限制")]),a._v(" "),t("p",[a._v("有一个配置字段可以配置 "),t("code",[a._v("indices.fielddata.cache.size")]),a._v(": 20%，")]),a._v(" "),t("p",[a._v("作用是占用的内存超出了这个比例的限制，清除内存已有 fielddata 数据，\n默认无限制。")]),a._v(" "),t("p",[a._v("虽然可以限制内存使用，但是会导致频繁 evict 和 reload，大量 IO 性能损耗，以及内存碎片和 gc")]),a._v(" "),t("p",[a._v("配置方式：在配置文件 "),t("code",[a._v("elasticsearch-5.2.0/config/elasticsearch.yml")]),a._v(" 新增该配置参数即可")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("该配置文件中默认是没有改参数配置的，所以搜不到该配置的关键信息")])]),a._v(" "),t("h2",{attrs:{id:"监控-fielddata-内存使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控-fielddata-内存使用"}},[a._v("#")]),a._v(" 监控 fielddata 内存使用")]),a._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 所有分片的统计信息")]),a._v("\nGET /_stats/fielddata?fields=*\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取每个 node 的占用信息")]),a._v("\nGET /_nodes/stats/indices/fielddata?fields=*\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取每个 node 的每个索引占用信息")]),a._v("\nGET /_nodes/stats/indices/fielddata?level=indices&fields=*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h2",{attrs:{id:"circuit-breaker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circuit-breaker"}},[a._v("#")]),a._v(" circuit breaker")]),a._v(" "),t("p",[a._v("如果一次 query load 的 feilddata 超过总内存，就会 oom 内存溢出")]),a._v(" "),t("p",[a._v("circuit breaker 会估算 query 要加载的 fielddata 大小，如果超出总内存就短路，query 直接失败")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("indices.breaker.fielddata.limit：fielddata 的内存限制，默认 60%\nindices.breaker.request.limit：执行聚合的内存限制，默认 40%\nindices.breaker.total.limit：综合上面两个，限制在 70% 以内\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("这些属性也是在 elasticsearch.yml 中配置的")])])}),[],!1,null,null,null);e.default=i.exports}}]);