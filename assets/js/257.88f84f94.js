(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1279:function(_,v,t){"use strict";t.r(v);var s=t(15),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_084-hystrix-与高可用系统架构：资源隔离-限流-熔断-降级-运维监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_084-hystrix-与高可用系统架构：资源隔离-限流-熔断-降级-运维监控"}},[_._v("#")]),_._v(" 084. hystrix 与高可用系统架构：资源隔离+限流+熔断+降级+运维监控")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("Tip")]),_._v(" "),t("p",[_._v("高能预警：本 tip 是学习完 hystrix 章节后补充的，看每一小结的标题都会让你热血沸腾，\n实际上在讲解 hystrix 的时候，我发现与 "),t("a",{attrs:{href:"https://github.com/Netflix/Hystrix/wiki/How-it-Works",target:"_blank",rel:"noopener noreferrer"}},[_._v("官网教程"),t("OutboundLink")],1),_._v(" 雷同，")]),_._v(" "),t("p",[_._v("最重要的是说以商品缓存作为业务背景来解决一些问题，这个业务场景太少了，\n在讲解 hystrix 功能时，只是把官网里面的例子换成了商品信息（不是绝对，只是用法），\n而没有一个比较合适的业务场景；比如页面在获取店铺信息时，遇到请求失败？在请求商品信息时获取失败？\n不知道是我没有注意到还是说根本没有这类似的背景讲解，只是在针对功能来用商品信息讲解用法")]),_._v(" "),t("p",[_._v("在框架的使用上，个人觉得应该是在场景上才能理解的，比如为什么手游「赤潮」中进入游戏时加载界面，\n显示的头像偶尔是不正确的，这种是不是就是使用了降级机制呢？")])]),_._v(" "),t("p",[_._v("前半部分，专注高并发这一块的缓存架构，怎么承载高并发？在各种高并发导致的令人崩溃的异常场景下，还能运行")]),_._v(" "),t("p",[_._v("接下来会花大部分章节讲解怎么保证高可用性：在各种系统的各个地方有乱七八糟的异常和故障的情况下，整套缓存系统还能继续健康的 run 着")]),_._v(" "),t("p",[_._v("网上会有一些将高可用的知识：HA、HAProxy 组件，主备服务间的切换，这就做到了高可用性，\n主备实例，多冗余实例只是高可用最最基础的东西")]),_._v(" "),t("p",[_._v("接下来会讲解在什么样的情况下，可能会导致系统的崩溃？以及系统不可用，针对各种各样的一些情况，\n然后我们用什么技术，去保护整个系统处于高可用的一个情况下")]),_._v(" "),t("p",[_._v("高可用有很多方式，本课程使用 hystrix")]),_._v(" "),t("h2",{attrs:{id:"hystrix-是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-是什么？"}},[_._v("#")]),_._v(" hystrix 是什么？")]),_._v(" "),t("p",[_._v("netflix 美国流媒体巨头、世界最大的收费视频网站；\n几年前整个网站经常出故障，可用性不太高，他们 api 团队为了提升高可用性，开发了一个框架 hystrix。")]),_._v(" "),t("p",[_._v("hystrix 提供了高可用相关的各种各样的功能，确保在 hystrix 的保护下，整个系统可以长期处于\n高可用的状态，如 99.99%；")]),_._v(" "),t("p",[_._v("最理想的状态下，软件故障不应该导致整个系统的崩溃，服务器硬件故障可用通过服务的冗余来保证，\n唯一有可能导致系统彻底崩溃，就是类似于机房停电，自然灾害等状况")]),_._v(" "),t("p",[_._v("不可用和产生的一些故障或者 bug 的区别：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("不可用：")]),_._v(" "),t("p",[_._v("是完全不可用，整个系统完全崩溃")])]),_._v(" "),t("li",[t("p",[_._v("部分故障或 bug：")]),_._v(" "),t("p",[_._v("只是一小部分服务出问题")])])]),_._v(" "),t("h2",{attrs:{id:"高可用系统架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高可用系统架构"}},[_._v("#")]),_._v(" 高可用系统架构")]),_._v(" "),t("p",[_._v("资源隔离、限流、熔断、降级、运维监控 而这些也是 hystrix 提供的功能")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("资源隔离：让某一刻东西在故障的情况下，不会耗尽系统所有资源，如线程资源")]),_._v(" "),t("p",[_._v("一个真实的遭遇，线上某块代码 bug，导致大量线程死循环，又创建大量线程，\n最后系统资源被耗尽。崩溃")]),_._v(" "),t("p",[_._v("资源隔离的话，比如限制只能使用 10 个线程，那么这一块出问题，也不会影响整个系统")])]),_._v(" "),t("li",[t("p",[_._v("限流")]),_._v(" "),t("p",[_._v("高并发流量涌入，比如突然间一秒钟 100 完 QPS，系统完全承受不住，直接崩溃。\n限流可以只对 10 万 QPS 进行服务，其他的都拒绝。这种情况下就是在你双 11 抢东西付款\n的时候，老是告诉你系统繁忙的情况，但是偶尔又可以刷出来")])]),_._v(" "),t("li",[t("p",[_._v("熔断：连续故障，则在一段时间内直接拒绝服务")]),_._v(" "),t("p",[_._v("我自己最近遇到的就是 zuul 中的路由转发，当某一个服务连续转发失败（如那个服务根本没有启动），\n则在一分钟内直接返回异常信息，而不是继续转发，继续等待异常")])]),_._v(" "),t("li",[t("p",[_._v("降级：")]),_._v(" "),t("p",[_._v("如 mysql 挂了，系统发现了，自动降级，从内存里存的少量数据中，去提取一些数据出来。\n疑问：这样的数据在什么场景下使用使用呢？")])]),_._v(" "),t("li",[t("p",[_._v("运维监控：")]),_._v(" "),t("p",[_._v("监控 + 报警 + 优化，各种异常的情况，有问题就及时报警，然后对症下药")])])]),_._v(" "),t("h2",{attrs:{id:"如何讲解这块内容？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何讲解这块内容？"}},[_._v("#")]),_._v(" 如何讲解这块内容？")]),_._v(" "),t("p",[_._v("如何将 eshop-cache，核心的缓存服务改造成高可用的架构？")]),_._v(" "),t("p",[_._v("由于合作方的一些小要求，打算吧 hystrix 中的一部分内容，单拉出来，做成一个免费的小课程，作为福利发放出去，\n那么会重新写一个 eshop-cache-ha，和之前的业务场景衔接起来")]),_._v(" "),t("p",[_._v("eshop-cache，在各级缓存数据都失效的情况下，会重新从源系统中调用接口，依赖源系统去查询 mysql 数据库去重新获取数据，\n如果你的各种依赖的服务有了故障，那么很可能会导致你的系统不可用")]),_._v(" "),t("p",[_._v("怎么使用 hystrix 对系统进行各种高可用性的系统加固，来应对各种不可用的情况；")]),_._v(" "),t("p",[_._v("所以会在 eshop-cache-ha 上去写代码，hystrix 做服务高可用这一块的内容，\n还是基于商品详情页缓存架构这个业务背景，重新写代码，这样的话相对来说就比较独立，这章节就是高可用架构")]),_._v(" "),t("p",[_._v("简而言之，系统在 hystrix 的保护下，不会完全崩溃，就算所有依赖都失效了，那么也还能提供一些最最基础的简单服务；")]),_._v(" "),t("p",[_._v("上面的介绍很多地方现在以我本人的知识储备是完全想不到在什么场景下还能提供简单服务？是什么效果？这吸引力还是很大的")]),_._v(" "),t("p",[_._v("redis 挂掉，放在缓存雪崩那一章节讲解，雪崩，redis 必然挂，mysql 有较大概率挂掉，系统在风雨飘摇中")]),_._v(" "),t("p",[_._v("之前一个真实的项目，我们多个项目都用了公司里公用的缓存的存储，缓存彻底挂了、雪崩了，\n导致各种业务系统全部崩溃，崩溃了好几个小时，导致公司损失了大量的资金的损失，\n其中导致公司损失最大的负责人，受到了很大的处分")])])}),[],!1,null,null,null);v.default=r.exports}}]);