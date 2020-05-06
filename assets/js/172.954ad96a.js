(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1112:function(e,s,r){"use strict";r.r(s);var n=r(15),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_044-库存服务代码调试以及打印日志观察服务的运行流程是否正确"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_044-库存服务代码调试以及打印日志观察服务的运行流程是否正确"}},[e._v("#")]),e._v(" 044. 库存服务代码调试以及打印日志观察服务的运行流程是否正确")]),e._v(" "),r("p",[e._v("创建数据库 product_inventory，两个字段 Integer product_id、Long inventory_cnt")]),e._v(" "),r("p",[e._v("测试场景：")]),e._v(" "),r("ol",[r("li",[e._v("一个写请求：")]),e._v(" "),r("li",[e._v("写请求模拟耗时操作：休眠 10 秒")]),e._v(" "),r("li",[e._v("在写休眠中，来一个读请求")])]),e._v(" "),r("p",[e._v("观察日志，是否按照预想流程和结果进行；")]),e._v(" "),r("p",[e._v("在这之前，需要再关键位置添加日志打印，笔记就不贴代码了；")]),e._v(" "),r("p",[e._v("在数据库插入一条数据")]),e._v(" "),r("div",{staticClass:"language-sql line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INSERT")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("eshop"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("product_inventory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("product_id"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("inventory_cnt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VALUES")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'1'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'100'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h2",{attrs:{id:"redis-中无数据情况下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-中无数据情况下"}},[e._v("#")]),e._v(" redis 中无数据情况下")]),e._v(" "),r("p",[e._v("在以上场景的基础下，先来模拟 redis 中无数据的情况下的流程是否正确，因为刚好往数据库中增加了数据，还没有往 redis 中增加数据。 正好测试这个场景")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// 写请求\nhttp://localhost:6001/updateProductInventory?productId=1&inventoryCnt=99\n// 读请求\nhttp://localhost:6001/getProductInventory?productId=1\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("日志信息")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('2019-04-06 20:55:16.257  INFO 9420 --- [nio-6001-exec-1] c.m.c.e.i.w.ProductInventoryController   : 更新商品库存请求：商品id=1，库存=99\n2019-04-06 20:55:16.258  INFO 9420 --- [nio-6001-exec-1] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 20:55:16.375  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":false,"productId":1}\n2019-04-06 20:55:16.376  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 写请求：{"forceRfresh":false,"productId":1}\n2019-04-06 20:55:16.440  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 已删除缓存：商品 ID=1\n2019-04-06 20:55:16.440  INFO 9420 --- [pool-1-thread-2] .c.e.i.r.ProductInventoryDBUpdateRequest : 写请求：模拟写耗时操作，休眠 10 秒钟\n// 上面开始模拟耗时操作了\n2019-04-06 20:55:17.970  INFO 9420 --- [nio-6001-exec-2] c.m.c.e.i.w.ProductInventoryController   : 读取商品库存请求：商品id=1\n2019-04-06 20:55:17.971  INFO 9420 --- [nio-6001-exec-2] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 20:55:18.190  INFO 9420 --- [nio-6001-exec-2] c.m.c.e.i.w.ProductInventoryController   : 超时 200 毫秒退出尝试，商品 ID=1\n2019-04-06 20:55:18.190  INFO 9420 --- [nio-6001-exec-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 数据库获取商品，商品 ID=1\n// 等待超时，并从数据库获取，获取到了 100 的库存\n2019-04-06 20:55:18.234  INFO 9420 --- [nio-6001-exec-2] c.m.c.e.i.w.ProductInventoryController   : 缓存未命中，在数据库中查找，商品 ID=1，结果={"inventoryCnt":100,"productId":1}\n2019-04-06 20:55:18.234  INFO 9420 --- [nio-6001-exec-2] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 20:55:26.497  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 已更新数据库：商品 ID=1，库存=99\n// 写完成之后，开始读请求的处理\n2019-04-06 20:55:26.499  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":false,"productId":1}\n2019-04-06 20:55:26.499  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 读请求：{"forceRfresh":false,"productId":1}\n2019-04-06 20:55:26.499  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 1+1 达成，1 写 1 读：{"forceRfresh":false,"productId":1}\n2019-04-06 20:55:26.499  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 数据库获取商品，商品 ID=1\n2019-04-06 20:55:26.503  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 设置缓存：{"inventoryCnt":99,"productId":1}\n// 下面的是强制刷新缓存，由于前面耗时操作，导致直接读库并强制刷新缓存操作\n2019-04-06 20:55:26.515  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":true,"productId":1}\n2019-04-06 20:55:26.515  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 数据库获取商品，商品 ID=1\n2019-04-06 20:55:26.523  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 设置缓存：{"inventoryCnt":99,"productId":1}\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br"),r("span",{staticClass:"line-number"},[e._v("25")]),r("br")])]),r("h2",{attrs:{id:"基于缓存中有库存测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于缓存中有库存测试"}},[e._v("#")]),e._v(" 基于缓存中有库存测试")]),e._v(" "),r("p",[e._v("与上面例子一样，只不过通过了一次测试，现在缓存中有数据了，再继续执行相同的测试操作，观察日志,\n库存由 99 变成 98")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// 写请求\nhttp://localhost:6001/updateProductInventory?productId=1&inventoryCnt=98\n// 读请求\nhttp://localhost:6001/getProductInventory?productId=1\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("日志输出")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('2019-04-06 21:03:00.913  INFO 9420 --- [nio-6001-exec-6] c.m.c.e.i.w.ProductInventoryController   : 更新商品库存请求：商品id=1，库存=98\n2019-04-06 21:03:00.913  INFO 9420 --- [nio-6001-exec-6] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 21:03:00.913  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:03:00.913  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 写请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:03:00.924  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 已删除缓存：商品 ID=1\n2019-04-06 21:03:00.924  INFO 9420 --- [pool-1-thread-2] .c.e.i.r.ProductInventoryDBUpdateRequest : 写请求：模拟写耗时操作，休眠 10 秒钟\n2019-04-06 21:03:02.925  INFO 9420 --- [nio-6001-exec-7] c.m.c.e.i.w.ProductInventoryController   : 读取商品库存请求：商品id=1\n2019-04-06 21:03:02.925  INFO 9420 --- [nio-6001-exec-7] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 21:03:03.147  INFO 9420 --- [nio-6001-exec-7] c.m.c.e.i.w.ProductInventoryController   : 超时 200 毫秒退出尝试，商品 ID=1\n2019-04-06 21:03:03.147  INFO 9420 --- [nio-6001-exec-7] .m.c.e.i.s.i.ProductInventoryServiceImpl : 数据库获取商品，商品 ID=1\n2019-04-06 21:03:03.159  INFO 9420 --- [nio-6001-exec-7] c.m.c.e.i.w.ProductInventoryController   : 缓存未命中，在数据库中查找，商品 ID=1，结果={"inventoryCnt":99,"productId":1}\n2019-04-06 21:03:03.159  INFO 9420 --- [nio-6001-exec-7] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 21:03:10.937  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 已更新数据库：商品 ID=1，库存=98\n2019-04-06 21:03:10.938  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:03:10.938  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 读请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:03:10.938  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 1+1 达成，1 写 1 读：{"forceRfresh":false,"productId":1}\n2019-04-06 21:03:10.938  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 数据库获取商品，商品 ID=1\n2019-04-06 21:03:10.945  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 设置缓存：{"inventoryCnt":98,"productId":1}\n2019-04-06 21:03:10.957  INFO 9420 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":true,"productId":1}\n2019-04-06 21:03:10.957  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 数据库获取商品，商品 ID=1\n2019-04-06 21:03:10.962  INFO 9420 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 设置缓存：{"inventoryCnt":98,"productId":1}\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br")])]),r("p",[e._v("对于在 200 毫秒内无法返回的数据，无论 redis 中是否存在初始库存数据，流程都一样")]),e._v(" "),r("h2",{attrs:{id:"基于-200-毫秒内返回写操作完成测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于-200-毫秒内返回写操作完成测试"}},[e._v("#")]),e._v(" 基于 200 毫秒内返回写操作完成测试")]),e._v(" "),r("p",[e._v("修改休眠时间，让写操作在 200 毫秒内能正常完成")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// 写请求\nhttp://localhost:6001/updateProductInventory?productId=1&inventoryCnt=97\n// 读请求\nhttp://localhost:6001/getProductInventory?productId=1\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("日志输出")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('2019-04-06 21:07:42.997  INFO 20676 --- [nio-6001-exec-1] c.m.c.e.i.w.ProductInventoryController   : 更新商品库存请求：商品id=1，库存=97\n2019-04-06 21:07:42.998  INFO 20676 --- [nio-6001-exec-1] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 21:07:43.209  INFO 20676 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:07:43.209  INFO 20676 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 写请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:07:43.242  INFO 20676 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 已删除缓存：商品 ID=1\n2019-04-06 21:07:43.242  INFO 20676 --- [pool-1-thread-2] .c.e.i.r.ProductInventoryDBUpdateRequest : 写请求：模拟写耗时操作，休眠 100 毫秒\n2019-04-06 21:07:43.302  INFO 20676 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 已更新数据库：商品 ID=1，库存=97\n2019-04-06 21:07:43.622  INFO 20676 --- [nio-6001-exec-2] c.m.c.e.i.w.ProductInventoryController   : 读取商品库存请求：商品id=1\n2019-04-06 21:07:43.624  INFO 20676 --- [nio-6001-exec-2] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 21:07:43.629  INFO 20676 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:07:43.630  INFO 20676 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 读请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:07:43.630  INFO 20676 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 1+1 达成，1 写 1 读：{"forceRfresh":false,"productId":1}\n2019-04-06 21:07:43.630  INFO 20676 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 数据库获取商品，商品 ID=1\n2019-04-06 21:07:43.658  INFO 20676 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 设置缓存：{"inventoryCnt":97,"productId":1}\n2019-04-06 21:07:43.687  INFO 20676 --- [nio-6001-exec-2] c.m.c.e.i.w.ProductInventoryController   : 在缓存中找到，商品 ID=1\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br")])]),r("p",[e._v("由于上面是休眠 100 毫秒，200 毫秒超时，所以人工请求没法模拟出来。")]),e._v(" "),r("p",[e._v("下面的日志输出是休眠 5 秒，10 秒超时")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('2019-04-06 21:12:22.725  INFO 21740 --- [nio-6001-exec-1] c.m.c.e.i.w.ProductInventoryController   : 更新商品库存请求：商品id=1，库存=97\n2019-04-06 21:12:22.726  INFO 21740 --- [nio-6001-exec-1] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 21:12:22.830  INFO 21740 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:12:22.831  INFO 21740 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 写请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:12:23.006  INFO 21740 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 已删除缓存：商品 ID=1\n2019-04-06 21:12:23.006  INFO 21740 --- [pool-1-thread-2] .c.e.i.r.ProductInventoryDBUpdateRequest : 写请求：模拟写耗时操作，休眠 5 秒钟\n2019-04-06 21:12:23.939  INFO 21740 --- [nio-6001-exec-2] c.m.c.e.i.w.ProductInventoryController   : 读取商品库存请求：商品id=1\n2019-04-06 21:12:23.940  INFO 21740 --- [nio-6001-exec-2] c.e.i.s.i.RequestAsyncProcessServiceImpl : 路由信息：key=1,商品 ID =1,队列 index=1\n2019-04-06 21:12:28.047  INFO 21740 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 已更新数据库：商品 ID=1，库存=97\n2019-04-06 21:12:28.050  INFO 21740 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 处理请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:12:28.050  INFO 21740 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 读请求：{"forceRfresh":false,"productId":1}\n2019-04-06 21:12:28.050  INFO 21740 --- [pool-1-thread-2] c.m.c.e.i.r.RequestProcessorThread       : 1+1 达成，1 写 1 读：{"forceRfresh":false,"productId":1}\n2019-04-06 21:12:28.050  INFO 21740 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 数据库获取商品，商品 ID=1\n2019-04-06 21:12:28.070  INFO 21740 --- [pool-1-thread-2] .m.c.e.i.s.i.ProductInventoryServiceImpl : 设置缓存：{"inventoryCnt":97,"productId":1}\n2019-04-06 21:12:28.086  INFO 21740 --- [nio-6001-exec-2] c.m.c.e.i.w.ProductInventoryController   : 在缓存中找到，商品 ID=1\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br")])]),r("p",[e._v("可以看到，在等待超时中，会不断获取缓存中的信息，找到则返回。")]),e._v(" "),r("p",[e._v("此时查看数据库和缓存中的数据都是一致的。")]),e._v(" "),r("h2",{attrs:{id:"讲师旁白"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#讲师旁白"}},[e._v("#")]),e._v(" 讲师旁白")]),e._v(" "),r("p",[e._v("后续方案，包括本次的方案都是针对我自己遇到过的特殊场景设计出来的，\n可能这个方案不一定 100% 适合其他场景，需要改造")]),e._v(" "),r("p",[e._v("再者，可能方案比较复杂，及时之前实施过，可能有一部分细节没有讲解到，会导致一些漏洞，\n这个也是可以理解的")]),e._v(" "),r("p",[e._v("本课程主题是缓存架构，主要是架构和设计思想，有些许漏洞希望理解")]),e._v(" "),r("p",[e._v("课程真正最重要的，不是给你一套 100% 包打天下的代码，而是一种设计思想，\n多种设计思想组合起来就是某种架构")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("该方案目前并未关注分布式情况下的多服务实例场景，\n从这个来看，架构上和一定的代码落地，的确是比较明确和清晰，\n是不是说在面试中只要掌握了这种架构思想就能加分一点呢？")])])])}),[],!1,null,null,null);s.default=t.exports}}]);