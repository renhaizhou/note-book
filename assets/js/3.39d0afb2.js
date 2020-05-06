(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1397:function(t,a,s){"use strict";s.r(a);var e=s(15),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"z-index-层级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-index-层级"}},[t._v("#")]),t._v(" z-index 层级")]),t._v(" "),e("p",[t._v("简介：本课程中，张鑫旭大大将带领大家学习 z-index 的基本知识，并深入讲解嵌套表现以及 z-index 计算规则。\n同时还将介绍 CSS 中非常基础且重要的元素层叠表现的概念、元素的层叠顺序，以及 z-index、\n还有其他 CSS 属性与层叠上下文的关系。还有最值得期待的 z-index 实践经验分享！")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-css-z-index-基础"}},[t._v("1. CSS z-index 基础")]),e("ul",[e("li",[e("a",{attrs:{href:"#含义"}},[t._v("含义")])]),e("li",[e("a",{attrs:{href:"#支持的属性值"}},[t._v("支持的属性值")])]),e("li",[e("a",{attrs:{href:"#基本特性"}},[t._v("基本特性")])])])]),e("li",[e("a",{attrs:{href:"#_2-z-index-与-css-定位属性"}},[t._v("2. z-index 与 CSS 定位属性")]),e("ul",[e("li",[e("a",{attrs:{href:"#如果定位元素-z-index-没有发生嵌套"}},[t._v("如果定位元素 z-index 没有发生嵌套")])]),e("li",[e("a",{attrs:{href:"#如果定位元素-z-index-发生嵌套"}},[t._v("如果定位元素 z-index 发生嵌套")])])])]),e("li",[e("a",{attrs:{href:"#_3-css-中的层叠上下文和层叠水平"}},[t._v("3. CSS 中的层叠上下文和层叠水平")]),e("ul",[e("li",[e("a",{attrs:{href:"#层叠上下文（stacking-context）"}},[t._v("层叠上下文（stacking context）")])]),e("li",[e("a",{attrs:{href:"#具有层叠上下文的元素有"}},[t._v("具有层叠上下文的元素有")])]),e("li",[e("a",{attrs:{href:"#层叠水平（stacking-level）"}},[t._v("层叠水平（stacking level）")])]),e("li",[e("a",{attrs:{href:"#层叠上下文的特性"}},[t._v("层叠上下文的特性")])])])]),e("li",[e("a",{attrs:{href:"#_4-元素的层叠顺序"}},[t._v("4. 元素的层叠顺序")]),e("ul",[e("li",[e("a",{attrs:{href:"#著名的-7-阶层叠水平（stacking-level）"}},[t._v("著名的 7 阶层叠水平（stacking level）")])]),e("li",[e("a",{attrs:{href:"#感受下"}},[t._v("感受下")])])])]),e("li",[e("a",{attrs:{href:"#_5-z-index-与层叠上下文"}},[t._v("5. z-index 与层叠上下文")]),e("ul",[e("li",[e("a",{attrs:{href:"#为何定位元素要覆盖普通元素？"}},[t._v("为何定位元素要覆盖普通元素？")])]),e("li",[e("a",{attrs:{href:"#z-index-与创建层叠上下文"}},[t._v("z-index 与创建层叠上下文")])]),e("li",[e("a",{attrs:{href:"#z-index-受限于层叠上下文"}},[t._v("z-index 受限于层叠上下文")])])])]),e("li",[e("a",{attrs:{href:"#_6-其他-css-属性与层叠上下文"}},[t._v("6. 其他 CSS 属性与层叠上下文")]),e("ul",[e("li",[e("a",{attrs:{href:"#display-flex-与层叠上下文"}},[t._v("display:flex 与层叠上下文")])]),e("li",[e("a",{attrs:{href:"#opacity-≠-1-与层叠上下文"}},[t._v("opacity ≠ 1 与层叠上下文")])]),e("li",[e("a",{attrs:{href:"#transform-≠-none-与层叠上下文元素"}},[t._v("transform ≠ none 与层叠上下文元素")])]),e("li",[e("a",{attrs:{href:"#mix-blend-model-≠-normal-与层叠上下文"}},[t._v("mix-blend-model ≠ normal 与层叠上下文")])]),e("li",[e("a",{attrs:{href:"#filter-≠-none-与层叠上下文元素"}},[t._v("filter ≠ none 与层叠上下文元素")])]),e("li",[e("a",{attrs:{href:"#isolation-isolate-与层叠上下文元素"}},[t._v("isolation:isolate 与层叠上下文元素")])]),e("li",[e("a",{attrs:{href:"#position-fixed-与层叠上下文元素"}},[t._v("position:fixed 与层叠上下文元素")])]),e("li",[e("a",{attrs:{href:"#will-change-与层叠上下文"}},[t._v("will-change 与层叠上下文")])]),e("li",[e("a",{attrs:{href:"#webkit-overflow-scrolling-与层叠上下文"}},[t._v("-webkit-overflow-scrolling 与层叠上下文")])])])]),e("li",[e("a",{attrs:{href:"#_7-z-index-与其他-css-属性层叠上下文"}},[t._v("7. z-index 与其他 CSS 属性层叠上下文")]),e("ul",[e("li",[e("a",{attrs:{href:"#更完整的-7-阶层叠水平图"}},[t._v("更完整的 7 阶层叠水平图")])]),e("li",[e("a",{attrs:{href:"#举例"}},[t._v("举例")])]),e("li",[e("a",{attrs:{href:"#第-2-点"}},[t._v("第 2 点")])]),e("li",[e("a",{attrs:{href:"#层叠上下文导致的有趣的现象"}},[t._v("层叠上下文导致的有趣的现象")])])])]),e("li",[e("a",{attrs:{href:"#_8-z-index-相关实践分享"}},[t._v("8. z-index 相关实践分享")]),e("ul",[e("li",[e("a",{attrs:{href:"#最小化影响原则"}},[t._v("最小化影响原则")])]),e("li",[e("a",{attrs:{href:"#不犯二准则"}},[t._v("不犯二准则")])]),e("li",[e("a",{attrs:{href:"#组件层级计数器"}},[t._v("组件层级计数器")])]),e("li",[e("a",{attrs:{href:"#负值-z-index-与可访问性隐藏"}},[t._v("负值 z-index 与可访问性隐藏")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"_1-css-z-index-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-z-index-基础"}},[t._v("#")]),t._v(" 1. CSS z-index 基础")]),t._v(" "),e("blockquote",[e("p",[t._v("了解 z-index 的语法，支持的特性等")])]),t._v(" "),e("h3",{attrs:{id:"含义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#含义"}},[t._v("#")]),t._v(" 含义")]),t._v(" "),e("p",[t._v("z-index 属性指定了元素及其子元素的 「z 顺序」，而 「z 顺序」可以决定当元素发生覆盖的时候，哪个元素在上面。通常一个较大 z-index 值的元素会覆盖较低的那一个")]),t._v(" "),e("h3",{attrs:{id:"支持的属性值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的属性值"}},[t._v("#")]),t._v(" 支持的属性值")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("z-index: auto")]),t._v("： 默认值")]),t._v(" "),e("li",[e("code",[t._v("z-index: <integer>")]),t._v(" ：数值")]),t._v(" "),e("li",[e("code",[t._v("z-index: inherit")]),t._v("： 继承")])]),t._v(" "),e("h3",{attrs:{id:"基本特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本特性"}},[t._v("#")]),t._v(" 基本特性")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("支持负值： "),e("code",[t._v("z-index:-1")]),t._v(" ，整个后续会讲解比较微妙")])]),t._v(" "),e("li",[e("p",[t._v("支持 css3 animation 动画")])]),t._v(" "),e("li",[e("p",[t._v("在 css2.1 时代，需要和定位元素配合使用")]),t._v(" "),e("p",[t._v("如果不考虑 css3，只有定位元素（"),e("code",[t._v("position：relative/absolute/fixed/sticky")]),t._v("）的 z-index 才有作用，在 css3 中有例外")])])]),t._v(" "),e("p",[t._v("下图是一个从 "),e("code",[t._v("z-index -1 到 50")]),t._v(" 的动画，图片也是从 -1 到 50 排列得，当动画播放的时候，就会产生类似进度条的样式，你会看到，透明的区域是一层一层显示出来的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(716),alt:"image-20200502233800021"}})]),t._v(" "),e("p",[t._v("动画代码如下")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" zIndex")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 51"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("但是这种动画，并没有什么太多的适用场景")]),t._v(" "),e("h2",{attrs:{id:"_2-z-index-与-css-定位属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-z-index-与-css-定位属性"}},[t._v("#")]),t._v(" 2. z-index 与 CSS 定位属性")]),t._v(" "),e("blockquote",[e("p",[t._v("理解嵌套表现以及 z-index 计算规则")])]),t._v(" "),e("p",[t._v("**一个观点要知道：**z-index 只对定位元素有作用")]),t._v(" "),e("p",[e("img",{attrs:{src:s(717),alt:"image-20200502234358831"}})]),t._v(" "),e("h3",{attrs:{id:"如果定位元素-z-index-没有发生嵌套"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果定位元素-z-index-没有发生嵌套"}},[t._v("#")]),t._v(" 如果定位元素 z-index 没有发生嵌套")]),t._v(" "),e("ol",[e("li",[t._v("后来居上的准则")]),t._v(" "),e("li",[t._v("哪个大，哪个上")])]),t._v(" "),e("h4",{attrs:{id:"后来居上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后来居上"}},[t._v("#")]),t._v(" 后来居上")]),t._v(" "),e("p",[e("img",{attrs:{src:s(718),alt:"image-20200502234607120"}})]),t._v(" "),e("h4",{attrs:{id:"哪个大哪个上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哪个大哪个上"}},[t._v("#")]),t._v(" 哪个大哪个上")]),t._v(" "),e("p",[e("img",{attrs:{src:s(719),alt:"image-20200502234633886"}})]),t._v(" "),e("h3",{attrs:{id:"如果定位元素-z-index-发生嵌套"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果定位元素-z-index-发生嵌套"}},[t._v("#")]),t._v(" 如果定位元素 z-index 发生嵌套")]),t._v(" "),e("p",[t._v("祖先优先原则，前提是：非 auto")]),t._v(" "),e("p",[e("img",{attrs:{src:s(720),alt:"image-20200502234841505"}})]),t._v(" "),e("p",[t._v("很好理解，看最祖先的层级来算。如果为 auto，则第一个覆盖了第二个")]),t._v(" "),e("p",[e("img",{attrs:{src:s(721),alt:"image-20200502235035278"}})]),t._v(" "),e("p",[t._v("为什么会这样呢？")]),t._v(" "),e("p",[t._v("在官网文档有对应的描述："),e("strong",[t._v("CSS2.1:z-index:auto")]),t._v("，\n当前层叠上下文的生成盒子层叠水平是 0， 盒子（除非是根元素）不会创建一个新的层叠上下文")]),t._v(" "),e("h2",{attrs:{id:"_3-css-中的层叠上下文和层叠水平"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-css-中的层叠上下文和层叠水平"}},[t._v("#")]),t._v(" 3. CSS 中的层叠上下文和层叠水平")]),t._v(" "),e("blockquote",[e("p",[t._v("元素层叠表现基础且 "),e("strong",[t._v("非常重要的概念")])])]),t._v(" "),e("h3",{attrs:{id:"层叠上下文（stacking-context）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文（stacking-context）"}},[t._v("#")]),t._v(" "),e("strong",[t._v("层叠上下文（stacking context）")])]),t._v(" "),e("p",[t._v("是 HTML 元素中的一个三维概念，表示元素在 z 轴上有了「可以高人一等」")]),t._v(" "),e("p",[e("img",{attrs:{src:s(722),alt:"image-20200502235522287"}})]),t._v(" "),e("p",[t._v("就是我们人眼看演示器，层叠上下文可以让这个元素在 z 轴上离我们更近。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(723),alt:"image-20200502235723276"}})]),t._v(" "),e("p",[t._v("上图，使用打比方的形式，让你能记住；")]),t._v(" "),e("p",[e("strong",[t._v("层叠上下文（stacking context）")]),t._v(" 是表示普通老百姓 HTML 元素当官了，离皇帝更近了。")]),t._v(" "),e("h3",{attrs:{id:"具有层叠上下文的元素有"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具有层叠上下文的元素有"}},[t._v("#")]),t._v(" 具有层叠上下文的元素有")]),t._v(" "),e("ul",[e("li",[t._v("页面根元素天生具有层叠上下问，称之为「根层叠上下文」   -- 皇亲国戚")]),t._v(" "),e("li",[t._v("z-index值为数值的定位元素也具有层叠上下文   -- 科考入选")]),t._v(" "),e("li",[t._v("其他属性   -- 其他当官途径")])]),t._v(" "),e("h3",{attrs:{id:"层叠水平（stacking-level）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层叠水平（stacking-level）"}},[t._v("#")]),t._v(" 层叠水平（stacking level）")]),t._v(" "),e("p",[e("strong",[t._v("层叠上下文中")]),t._v(" 的每个元素都有一个 "),e("strong",[t._v("层叠水平")]),t._v("，决定了同一个层叠上下文中元素在 z 轴上的显示顺序。")]),t._v(" "),e("p",[t._v("也是遵循「后来居上」和「谁大谁上」的层叠准则，该准则在层叠元素领域中是通用的。")]),t._v(" "),e("p",[t._v("用当官的来解释：所谓打狗看主人，每一个当官的家里儿孙、仆人什么的，都有一个论资排辈（即层叠水平），决定了在一起的时候，谁排在前面，离官员更近")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("层叠水平（stacking level）和 z-index 不是一个东西。普通元素也有层叠水平，而 z-index 只在定位元素上才有作用")])]),t._v(" "),e("h3",{attrs:{id:"层叠上下文的特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文的特性"}},[t._v("#")]),t._v(" 层叠上下文的特性")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("层叠上下文可以嵌套，组合成一个分层次的层叠上下文")]),t._v(" "),e("p",[t._v("解释：一个家，爸爸可以当官，孩子也可以同时当官的。这家族的官就当得比较有层次")])]),t._v(" "),e("li",[e("p",[t._v("每个层叠上下文和兄弟元素独立：")]),t._v(" "),e("p",[t._v("当进行层叠变化或渲染的时候，只需要考虑后代元素。")]),t._v(" "),e("p",[t._v("解释：自己当官，兄弟不沾光。有什么福利或则变故只有会影响自己的孩子们")])]),t._v(" "),e("li",[e("p",[t._v("每个层叠上下文是自成体系的：")]),t._v(" "),e("p",[t._v("当元素的内容被层叠后，整个元素被认为是在父层的层叠顺序中。")]),t._v(" "),e("p",[t._v("解释：每个当官的都有属于自己的小团体。当子孙或属下发生的排辈摩擦什么的，都是自己宅院的事情，不会影响官员自己和皇帝之间的距离。")])])]),t._v(" "),e("h2",{attrs:{id:"_4-元素的层叠顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-元素的层叠顺序"}},[t._v("#")]),t._v(" 4. 元素的层叠顺序")]),t._v(" "),e("p",[t._v("**层叠顺序 （stacking order）：**元素发生层叠时候有着特定的垂直显示顺序")]),t._v(" "),e("h3",{attrs:{id:"著名的-7-阶层叠水平（stacking-level）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#著名的-7-阶层叠水平（stacking-level）"}},[t._v("#")]),t._v(" 著名的 7 阶层叠水平（stacking level）")]),t._v(" "),e("p",[e("img",{attrs:{src:s(724),alt:"image-20200503093411819"}})]),t._v(" "),e("ol",[e("li",[e("p",[t._v("层叠顺序的意义")]),t._v(" "),e("p",[t._v("规范元素重叠时候的呈现规则")])]),t._v(" "),e("li",[e("p",[t._v("为何层叠顺序是这样的？")]),t._v(" "),e("p",[t._v("比如 float 元素不是应该更屌一点，为什么 inline 元素还在 float 元素上呢？")])])]),t._v(" "),e("p",[t._v("因为：更符合页面加载的功能和视觉呈现")]),t._v(" "),e("p",[e("img",{attrs:{src:s(725),alt:"image-20200503093627478"}})]),t._v(" "),e("h3",{attrs:{id:"感受下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#感受下"}},[t._v("#")]),t._v(" 感受下")]),t._v(" "),e("p",[t._v("内容元素元素层叠顺序比文字高")]),t._v(" "),e("p",[e("img",{attrs:{src:s(726),alt:"image-20200503093751223"}})]),t._v(" "),e("p",[t._v("上图图片浮动之后，文字会环绕，图片 -20px，如果文字层叠顺序比 float 要高，就会是上图效果这样，文字覆盖了图片")]),t._v(" "),e("p",[t._v("下面这个更直观，他们有 30 px 的重叠区域，在 7 阶层叠水平图中， inline-block 顺序要比 block 要高。 显示效果也说明了这一点")]),t._v(" "),e("p",[e("img",{attrs:{src:s(727),alt:"image-20200503093937615"}})]),t._v(" "),e("p",[t._v("还发现一点，绿色的文字居然覆盖了上面的背景色，这个也好解释："),e("strong",[t._v("背景色覆盖是层叠顺序")]),t._v("，文字覆盖是后来居上")]),t._v(" "),e("h2",{attrs:{id:"_5-z-index-与层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-z-index-与层叠上下文"}},[t._v("#")]),t._v(" 5. z-index 与层叠上下文")]),t._v(" "),e("blockquote",[e("p",[t._v("解释 z-index 的实际行为表现")])]),t._v(" "),e("p",[t._v("这里罗列了 3 个行为要点：")]),t._v(" "),e("ol",[e("li",[t._v("定位元素默 "),e("code",[t._v("z-index：auto")]),t._v(" 可以看成是 "),e("code",[t._v("z-index：0")])]),t._v(" "),e("li",[t._v("z-index 不为 auto 的定位元素会创建层叠上下文")]),t._v(" "),e("li",[t._v("z-index 层叠顺序的比较止步于父级层叠上下文")])]),t._v(" "),e("h3",{attrs:{id:"为何定位元素要覆盖普通元素？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为何定位元素要覆盖普通元素？"}},[t._v("#")]),t._v(" 为何定位元素要覆盖普通元素？")]),t._v(" "),e("p",[e("img",{attrs:{src:s(728),alt:"image-20200503095324884"}})]),t._v(" "),e("p",[t._v("两个元素在没有其他样式的加持下，后来居上，如上图，后来覆盖了先来的。")]),t._v(" "),e("p",[t._v("给先来的加上 "),e("strong",[t._v("定位元素")]),t._v("，就覆盖了后来的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(729),alt:"image-20200503095451008"}})]),t._v(" "),e("p",[t._v("可以这样来解释：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(730),alt:"image-20200503095543826"}})]),t._v(" "),e("p",[t._v("在 7 阶层叠水平表中，z-index:auto 高于水平盒子")]),t._v(" "),e("p",[e("img",{attrs:{src:s(731),alt:"image-20200503095627569"}})]),t._v(" "),e("h3",{attrs:{id:"z-index-与创建层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-index-与创建层叠上下文"}},[t._v("#")]),t._v(" z-index 与创建层叠上下文")]),t._v(" "),e("p",[e("img",{attrs:{src:s(732),alt:"image-20200503101237985"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(733),alt:"image-20200503101301189"}})]),t._v(" "),e("p",[t._v("让图片 -1，就看见图片到下面去了，给容器增加 0 ，又上来了")]),t._v(" "),e("p",[e("img",{attrs:{src:s(734),alt:"image-20200503101351816"}})]),t._v(" "),e("p",[t._v("这可以这样解释：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(735),alt:"image-20200503101427161"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(736),alt:"image-20200503101913920"}})]),t._v(" "),e("p",[t._v("box 是 absolute，但是是一个普通元素（默认为 auto，但是 auto 不创建层叠上下文）层叠上下文就不是 box 了")]),t._v(" "),e("p",[e("img",{attrs:{src:s(737),alt:"image-20200503102145424"}})]),t._v(" "),e("p",[t._v("图片就又上来了，是因为一直在说的， 负值 z-index 在 "),e("strong",[t._v("层叠上下文的背景色之上")]),t._v("！")]),t._v(" "),e("p",[t._v("###层叠顺序上讲： auto 与 0 的差异")]),t._v(" "),e("p",[t._v("从 "),e("strong",[t._v("层叠顺序")]),t._v("上讲， "),e("code",[t._v("z-index:auto")]),t._v(" 可以看成 "),e("code",[t._v("z-index:0")]),t._v(" ，但是从 "),e("strong",[t._v("层叠上下文")]),t._v(" 来讲，两者却有着本质差异！")]),t._v(" "),e("ul",[e("li",[t._v("auto ：不会创建层叠上下文")]),t._v(" "),e("li",[t._v("0 ： 会创建层叠上下文")])]),t._v(" "),e("p",[t._v("以上观点不包括 IE7 （是它的一个 bug 或则说是不符合标准的表现）")]),t._v(" "),e("h3",{attrs:{id:"z-index-受限于层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-index-受限于层叠上下文"}},[t._v("#")]),t._v(" z-index 受限于层叠上下文")]),t._v(" "),e("p",[t._v("啥意思呢？先看列子")]),t._v(" "),e("p",[e("img",{attrs:{src:s(738),alt:"image-20200503102902170"}})]),t._v(" "),e("p",[t._v("box1 是 "),e("strong",[t._v("定位")]),t._v(" 元素，创建额层叠上下文（z-index=0），box2 同样也是，但是 z-index 是 1，比 0 大，所以 box2 在上面，而里面的图片是依赖这个层叠上下文的")]),t._v(" "),e("p",[t._v("这章节最重要的是，要学会看为什么一些 z-index 底的元素反而在上面，最最重要的要去 "),e("strong",[t._v("套 7 阶层叠水平图的规范")]),t._v("。只要一套，基本上就懂了，还有边框和背景色、内容之分，所以要注意")]),t._v(" "),e("h2",{attrs:{id:"_6-其他-css-属性与层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他-css-属性与层叠上下文"}},[t._v("#")]),t._v(" 6. 其他 CSS 属性与层叠上下文")]),t._v(" "),e("blockquote",[e("p",[t._v("不只是 z-index")])]),t._v(" "),e("p",[t._v("本章讲解的是 z-index 的层叠上下文，其实还有其他的 CSS 属性会创建层叠上下文")]),t._v(" "),e("ol",[e("li",[t._v("z-index 值不为 auto 的 flex 项（父元素 "),e("code",[t._v("display:flex|inline-flex")]),t._v("）")]),t._v(" "),e("li",[t._v("元素的 opacity 值不是1；透明度")]),t._v(" "),e("li",[t._v("元素的 transform 值不是 none")]),t._v(" "),e("li",[t._v("元素 mix-blend-mode 值不是 normal；混合模式")]),t._v(" "),e("li",[t._v("元素的 filter 值不是 none；滤镜模式")]),t._v(" "),e("li",[t._v("元素的 isolation 值是 isolate")]),t._v(" "),e("li",[e("code",[t._v("postion:fixed")]),t._v(" 声明 （ chrome 等 "),e("code",[t._v("blink/webkit")]),t._v(" 内核浏览器）")]),t._v(" "),e("li",[t._v("will-change 指定的属性值为上面任意一个；与 GPU 加速渲染的东西")]),t._v(" "),e("li",[t._v("元素的 "),e("code",[t._v("-webkit-overflow-scrolling")]),t._v("设为 touch")])]),t._v(" "),e("p",[t._v("以上大多数的都是 CSS3 的特性")]),t._v(" "),e("h3",{attrs:{id:"display-flex-与层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-flex-与层叠上下文"}},[t._v("#")]),t._v(" "),e("code",[t._v("display:flex")]),t._v(" 与层叠上下文")]),t._v(" "),e("p",[e("img",{attrs:{src:s(739),alt:"image-20200503125859808"}})]),t._v(" "),e("p",[t._v("图片 "),e("code",[t._v("z-index:-1")]),t._v(" ，由于 box 不是层叠上下文元素，会去找根元素，所以图片在背景下面")]),t._v(" "),e("p",[e("img",{attrs:{src:s(740),alt:"image-20200503130023918"}})]),t._v(" "),e("p",[t._v("给 box 施加 "),e("code",[t._v("display:flex")]),t._v(" 图片上来了，说明 box 变成了一个层叠上下文元素；最重要的是，flex 的子元素的 z-index 值不是 auto。 他们两个要配合使用")]),t._v(" "),e("h3",{attrs:{id:"opacity-≠-1-与层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opacity-≠-1-与层叠上下文"}},[t._v("#")]),t._v(" opacity ≠ 1 与层叠上下文")]),t._v(" "),e("p",[e("img",{attrs:{src:s(741),alt:"image-20200503130455096"}})]),t._v(" "),e("p",[t._v("同样，box 是非层叠上下文元素，图片就穿过去了， 给 box 的透明度改变为 0.5 ，会发现它变成了层叠上下文元素")]),t._v(" "),e("p",[e("img",{attrs:{src:s(742),alt:"image-20200503130549896"}})]),t._v(" "),e("p",[e("strong",[t._v("结论：")]),t._v(" opacity 不等于 1 的元素是层叠上下文元素")]),t._v(" "),e("h3",{attrs:{id:"transform-≠-none-与层叠上下文元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transform-≠-none-与层叠上下文元素"}},[t._v("#")]),t._v(" transform ≠ none 与层叠上下文元素")]),t._v(" "),e("p",[e("img",{attrs:{src:s(743),alt:"image-20200503130749038"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(744),alt:"image-20200503130806351"}})]),t._v(" "),e("p",[e("strong",[t._v("结论：")]),t._v(" transform ≠ none 的元素是层叠上下文元素")]),t._v(" "),e("h3",{attrs:{id:"mix-blend-model-≠-normal-与层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mix-blend-model-≠-normal-与层叠上下文"}},[t._v("#")]),t._v(" mix-blend-model ≠ normal 与层叠上下文")]),t._v(" "),e("p",[e("img",{attrs:{src:s(745),alt:"image-20200503130936748"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(746),alt:"image-20200503130956950"}})]),t._v(" "),e("p",[t._v("tip: 图片中代码 screen 是 darken")]),t._v(" "),e("p",[t._v("背景是额外加的效果，如果是白色的话，混合模式看不到效果")]),t._v(" "),e("p",[t._v("**结论：**mix-blend-model ≠ normal 的元素是层叠上下文元素")]),t._v(" "),e("h3",{attrs:{id:"filter-≠-none-与层叠上下文元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-≠-none-与层叠上下文元素"}},[t._v("#")]),t._v(" filter ≠ none 与层叠上下文元素")]),t._v(" "),e("p",[t._v("这里的 filter 指的是， css3 里面的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(747),alt:"image-20200503131303257"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(748),alt:"image-20200503131327387"}})]),t._v(" "),e("p",[t._v("**结论：**filter ≠ none 的元素是层叠上下文元素")]),t._v(" "),e("h3",{attrs:{id:"isolation-isolate-与层叠上下文元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isolation-isolate-与层叠上下文元素"}},[t._v("#")]),t._v(" "),e("code",[t._v("isolation:isolate")]),t._v(" 与层叠上下文元素")]),t._v(" "),e("p",[t._v("与混合模式配合使用，希望不被混合模式混合的化，就设置该属性")]),t._v(" "),e("p",[e("img",{attrs:{src:s(749),alt:"image-20200503131532240"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(750),alt:"image-20200503131612996"}})]),t._v(" "),e("p",[e("strong",[t._v("结论：")]),e("code",[t._v("isolation:isolate")]),t._v(" 的元素是层叠上下文元素")]),t._v(" "),e("h3",{attrs:{id:"position-fixed-与层叠上下文元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#position-fixed-与层叠上下文元素"}},[t._v("#")]),t._v(" "),e("code",[t._v("position:fixed")]),t._v(" 与层叠上下文元素")]),t._v(" "),e("p",[e("img",{attrs:{src:s(751),alt:"image-20200503131738008"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(752),alt:"image-20200503131800006"}})]),t._v(" "),e("p",[e("strong",[t._v("结论：")]),e("code",[t._v("position:fixed")]),t._v(" 的元素是层叠上下文元素; 只在 Chrome 等 blink/webkit 内核浏览器")]),t._v(" "),e("h3",{attrs:{id:"will-change-与层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#will-change-与层叠上下文"}},[t._v("#")]),t._v(" "),e("code",[t._v("will-change")]),t._v(" 与层叠上下文")]),t._v(" "),e("p",[e("img",{attrs:{src:s(753),alt:"image-20200503131954528"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(754),alt:"image-20200503132012800"}})]),t._v(" "),e("p",[e("strong",[t._v("结论：")]),t._v(" "),e("code",[t._v("will-change")]),t._v("  的元素是层叠上下文元素")]),t._v(" "),e("h3",{attrs:{id:"webkit-overflow-scrolling-与层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webkit-overflow-scrolling-与层叠上下文"}},[t._v("#")]),t._v(" "),e("code",[t._v("-webkit-overflow-scrolling")]),t._v(" 与层叠上下文")]),t._v(" "),e("p",[t._v("在手机端才拥有的，这里无法展示")]),t._v(" "),e("h2",{attrs:{id:"_7-z-index-与其他-css-属性层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-z-index-与其他-css-属性层叠上下文"}},[t._v("#")]),t._v(" 7. z-index 与其他 CSS 属性层叠上下文")]),t._v(" "),e("blockquote",[e("p",[t._v("非定位元素层叠上下文和 z-index 关系大揭秘。 重点")])]),t._v(" "),e("p",[t._v("先上结论：")]),t._v(" "),e("ol",[e("li",[t._v("不支持 z-index 的层叠上下文元素的层叠顺序均是 "),e("code",[t._v("z-index:auto")]),t._v("级别")]),t._v(" "),e("li",[t._v("依赖 z-index 的层叠上下文元素的层叠顺序取决于 z-index 值")])]),t._v(" "),e("h3",{attrs:{id:"更完整的-7-阶层叠水平图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更完整的-7-阶层叠水平图"}},[t._v("#")]),t._v(" 更完整的 7 阶层叠水平图")]),t._v(" "),e("p",[e("img",{attrs:{src:s(755),alt:"image-20200503132514018"}})]),t._v(" "),e("h3",{attrs:{id:"举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),e("p",[e("img",{attrs:{src:s(756),alt:"image-20200503132726685"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(757),alt:"image-20200503132742622"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(758),alt:"image-20200503132830040"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(759),alt:"image-20200503132845300"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(760),alt:"image-20200503132915338"}})]),t._v(" "),e("p",[t._v("后面这 4 个图片的层叠上下文元素，层叠顺序与 auto 是一个级别")]),t._v(" "),e("h3",{attrs:{id:"第-2-点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-2-点"}},[t._v("#")]),t._v(" 第 2 点")]),t._v(" "),e("p",[t._v("依赖 z-index 的层叠上下文元素的层叠顺序取决于 z-index 值")]),t._v(" "),e("p",[t._v("依赖 z-index 值创建层叠上下文的情况：")]),t._v(" "),e("ol",[e("li",[t._v("position 值为 relative/absolute 或 fixed")]),t._v(" "),e("li",[e("code",[t._v("display:flex|inline-flex")]),t._v("容器的子 flex 项")])]),t._v(" "),e("p",[t._v("以上两种是需要使用 z-index 值来创建层叠上下文的")]),t._v(" "),e("p",[t._v("下图 1 是有层叠上下文的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(761),alt:"image-20200503133219850"}})]),t._v(" "),e("p",[t._v("后面的 box 的图片覆盖了前一个，这只有出现层叠上下文的情况下，才会后来居上原则。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(762),alt:"image-20200503133446756"}})]),t._v(" "),e("p",[t._v("当修改它的值为负数时，图片都跑到 box 背景下面去了，这是因为图片要找他的层叠上下文，但是 "),e("code",[t._v("display:flex")]),t._v(" 是普通元素，只是它的子项，也就是 图片才是层叠上下文元素；")]),t._v(" "),e("p",[e("img",{attrs:{src:s(763),alt:"image-20200503133734963"}})]),t._v(" "),e("p",[t._v("修改为 0 时，与 auto 一个级别的")]),t._v(" "),e("h3",{attrs:{id:"层叠上下文导致的有趣的现象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文导致的有趣的现象"}},[t._v("#")]),t._v(" 层叠上下文导致的有趣的现象")]),t._v(" "),e("p",[t._v("本节的类容你会了就知道是怎么回事了")]),t._v(" "),e("p",[e("img",{attrs:{src:s(764),alt:"image-20200503134618478"}})]),t._v(" "),e("p",[t._v("如上，效果是，给了一个渐入的效果，本来想实现，从透明慢慢变成可见的效果。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/z-index/%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%BC%E8%87%B4%E7%9A%84%E6%9C%89%E8%B6%A3%E7%9A%84%E7%8E%B0%E8%B1%A1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("层叠上下文导致的有趣的现象 demo 演示"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("实际上这个代码，只有在 opacity 1 的时候，才能看到图片上面的文字。")]),t._v(" "),e("p",[t._v("原因还是：层叠上下文的关系，"),e("strong",[t._v("透明度不为 1 的元素是由层叠上下文的")])]),t._v(" "),e("ol",[e("li",[t._v("元素的 opacity 值不是 1，的时候会创建层叠上下文，且这里没有指定 z-index，所以是 auto")]),t._v(" "),e("li",[t._v("定位元素也会创建层叠上下文，且这里没有指定 z-index，所以是  auto")]),t._v(" "),e("li",[t._v("他们的层级是一样的权重，都是 auto。后来居上，所以文字被覆盖掉了")]),t._v(" "),e("li",[t._v("（如果把 dom 顺序：p 标签放到图片后面，效果则比较完美）因为层叠水平是一样的，后来居上嘛。可以尝试修改下 z-index 的值，就能验证了")])]),t._v(" "),e("h2",{attrs:{id:"_8-z-index-相关实践分享"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-z-index-相关实践分享"}},[t._v("#")]),t._v(" 8. z-index 相关实践分享")]),t._v(" "),e("p",[t._v("1-7 全是讲解理论的。本节讲解最佳实践分享")]),t._v(" "),e("ol",[e("li",[t._v("最小化影响原则")]),t._v(" "),e("li",[t._v("不犯二准则")]),t._v(" "),e("li",[t._v("组件层级计数器")]),t._v(" "),e("li",[t._v("可访问性隐藏")])]),t._v(" "),e("h3",{attrs:{id:"最小化影响原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最小化影响原则"}},[t._v("#")]),t._v(" 最小化影响原则")]),t._v(" "),e("p",[t._v("该选择，在 relative 章节讲解过了")]),t._v(" "),e("p",[e("strong",[t._v("目的")]),t._v("： 避免 z-index 嵌套层叠关系混乱")]),t._v(" "),e("p",[e("strong",[t._v("原因：")])]),t._v(" "),e("ol",[e("li",[t._v("元素的层叠水平主要由所在的层叠上下文决定")]),t._v(" "),e("li",[t._v("ie7 "),e("code",[t._v("z-index:auto")]),t._v(" 也会新建层叠上下文")])]),t._v(" "),e("p",[e("strong",[t._v("做法")])]),t._v(" "),e("ol",[e("li",[t._v("避免使用定位属性（不产生层叠上下文）")]),t._v(" "),e("li",[t._v("定位属性从大容器平级分离为私有小容器")])]),t._v(" "),e("h3",{attrs:{id:"不犯二准则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不犯二准则"}},[t._v("#")]),t._v(" 不犯二准则")]),t._v(" "),e("p",[e("strong",[t._v("目的：")]),t._v(" 避免 z-index 混乱，一山比一山高的样式问题")]),t._v(" "),e("p",[t._v("**原因： ** 多人协作以及后期维护")]),t._v(" "),e("p",[t._v("**做法： ** 对于非浮层元素，避免设置 z-index 值，z-index 值没有任何道理需要超过 2（ 不犯二准则）")]),t._v(" "),e("p",[t._v("可以使用本章讲解的创建层叠上下文之类的方式来解决")]),t._v(" "),e("h3",{attrs:{id:"组件层级计数器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件层级计数器"}},[t._v("#")]),t._v(" 组件层级计数器")]),t._v(" "),e("p",[t._v("**目的： ** 避免浮层组件因 z-index 被覆盖的问题")]),t._v(" "),e("p",[t._v("**原因： **")]),t._v(" "),e("ol",[e("li",[t._v("总会遇到意想不到的高层级元素")]),t._v(" "),e("li",[t._v("组件的覆盖规则具有动态性")])]),t._v(" "),e("p",[t._v("比如弹框，后面弹出来的覆盖前面的弹框。")]),t._v(" "),e("p",[t._v("**做法： ** 组件层级计数器方法 ；通过 JS 获得 body 下子元素的最大 z-index 值。")]),t._v(" "),e("p",[t._v("作者一般会获取 body 下的子元素，判定并 +1 作为自己的 z-index 值")]),t._v(" "),e("h3",{attrs:{id:"负值-z-index-与可访问性隐藏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负值-z-index-与可访问性隐藏"}},[t._v("#")]),t._v(" 负值 z-index 与可访问性隐藏")]),t._v(" "),e("p",[t._v("**可访问性隐藏： ** 人肉眼不可见，但是辅助设备可以识别（比如把文字设置 left 为负数 -999，人眼看不见了，但是屏幕阅读器能看到）")]),t._v(" "),e("p",[t._v("解决方法：z-index 负值元素在层叠上下文的背景之上，其他元素之下")]),t._v(" "),e("p",[t._v("举个列子：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(765),alt:"image-20200503140620829"}})]),t._v(" "),e("p",[t._v("原始按钮特别的丑，可以使用右侧的方式，让原始按钮隐藏下去，通过 for 来关联按钮的 id")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/z-index/z-index%E9%9A%90%E8%97%8F%E5%8E%9F%E5%A7%8B%E6%8C%89%E9%92%AE.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("z-index隐藏原始按钮 demo 演示"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=i.exports},716:function(t,a,s){t.exports=s.p+"assets/img/image-20200502233800021.957597d1.png"},717:function(t,a,s){t.exports=s.p+"assets/img/image-20200502234358831.04a3921a.png"},718:function(t,a,s){t.exports=s.p+"assets/img/image-20200502234607120.2de3d4f4.png"},719:function(t,a,s){t.exports=s.p+"assets/img/image-20200502234633886.254e6c50.png"},720:function(t,a,s){t.exports=s.p+"assets/img/image-20200502234841505.ac923620.png"},721:function(t,a,s){t.exports=s.p+"assets/img/image-20200502235035278.32d8756e.png"},722:function(t,a,s){t.exports=s.p+"assets/img/image-20200502235522287.3a5d13b8.png"},723:function(t,a,s){t.exports=s.p+"assets/img/image-20200502235723276.d33ff83e.png"},724:function(t,a,s){t.exports=s.p+"assets/img/image-20200503093411819.43c97d0f.png"},725:function(t,a,s){t.exports=s.p+"assets/img/image-20200503093627478.91ab65b8.png"},726:function(t,a,s){t.exports=s.p+"assets/img/image-20200503093751223.a41bb9dd.png"},727:function(t,a,s){t.exports=s.p+"assets/img/image-20200503093937615.d7e0aff1.png"},728:function(t,a,s){t.exports=s.p+"assets/img/image-20200503095324884.96c86c24.png"},729:function(t,a,s){t.exports=s.p+"assets/img/image-20200503095451008.864630c9.png"},730:function(t,a,s){t.exports=s.p+"assets/img/image-20200503095543826.fb2f1667.png"},731:function(t,a,s){t.exports=s.p+"assets/img/image-20200503095627569.31790e9f.png"},732:function(t,a,s){t.exports=s.p+"assets/img/image-20200503101237985.b32616af.png"},733:function(t,a,s){t.exports=s.p+"assets/img/image-20200503101301189.3b2f5014.png"},734:function(t,a,s){t.exports=s.p+"assets/img/image-20200503101351816.358e9e22.png"},735:function(t,a,s){t.exports=s.p+"assets/img/image-20200503101427161.f7e8ae98.png"},736:function(t,a,s){t.exports=s.p+"assets/img/image-20200503101913920.36b9324a.png"},737:function(t,a,s){t.exports=s.p+"assets/img/image-20200503102145424.001b5cd3.png"},738:function(t,a,s){t.exports=s.p+"assets/img/image-20200503102902170.5a750197.png"},739:function(t,a,s){t.exports=s.p+"assets/img/image-20200503125859808.7b99a0a2.png"},740:function(t,a,s){t.exports=s.p+"assets/img/image-20200503130023918.c5f13a7d.png"},741:function(t,a,s){t.exports=s.p+"assets/img/image-20200503130455096.152103f1.png"},742:function(t,a,s){t.exports=s.p+"assets/img/image-20200503130549896.1ca465c9.png"},743:function(t,a,s){t.exports=s.p+"assets/img/image-20200503130749038.24f63518.png"},744:function(t,a,s){t.exports=s.p+"assets/img/image-20200503130806351.22add346.png"},745:function(t,a,s){t.exports=s.p+"assets/img/image-20200503130936748.2fed9455.png"},746:function(t,a,s){t.exports=s.p+"assets/img/image-20200503130956950.d378f3ab.png"},747:function(t,a,s){t.exports=s.p+"assets/img/image-20200503131303257.645979ef.png"},748:function(t,a,s){t.exports=s.p+"assets/img/image-20200503131327387.4d6e4284.png"},749:function(t,a,s){t.exports=s.p+"assets/img/image-20200503131532240.06edd967.png"},750:function(t,a,s){t.exports=s.p+"assets/img/image-20200503131612996.f3c8d662.png"},751:function(t,a,s){t.exports=s.p+"assets/img/image-20200503131738008.47f78196.png"},752:function(t,a,s){t.exports=s.p+"assets/img/image-20200503131800006.fa3f2a21.png"},753:function(t,a,s){t.exports=s.p+"assets/img/image-20200503131954528.fc65aa3e.png"},754:function(t,a,s){t.exports=s.p+"assets/img/image-20200503132012800.10620c7c.png"},755:function(t,a,s){t.exports=s.p+"assets/img/image-20200503132514018.10aee857.png"},756:function(t,a,s){t.exports=s.p+"assets/img/image-20200503132726685.ceea703d.png"},757:function(t,a,s){t.exports=s.p+"assets/img/image-20200503132742622.46e6fda7.png"},758:function(t,a,s){t.exports=s.p+"assets/img/image-20200503132830040.3cdc9fe8.png"},759:function(t,a,s){t.exports=s.p+"assets/img/image-20200503132845300.bdd7642a.png"},760:function(t,a,s){t.exports=s.p+"assets/img/image-20200503132915338.761aa321.png"},761:function(t,a,s){t.exports=s.p+"assets/img/image-20200503133219850.b533379d.png"},762:function(t,a,s){t.exports=s.p+"assets/img/image-20200503133446756.169b8749.png"},763:function(t,a,s){t.exports=s.p+"assets/img/image-20200503133734963.5d2af77a.png"},764:function(t,a,s){t.exports=s.p+"assets/img/image-20200503134618478.9e04738c.png"},765:function(t,a,s){t.exports=s.p+"assets/img/image-20200503140620829.b2f57005.png"}}]);