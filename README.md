# vitepress-rc
基于`vitepress`的文档工具，支持引入react组件，mdx扩展

参照`dumi`，移植组件 API 的动态显示 

![demo](demo.gif)

# Todo

- [ ] 打包
	- [x] 普通打包
	- [ ] ssr 需要修改 useEffect 的逻辑
- [ ] 导航下拉
- [ ] 多语言
- [ ] 对比vitepress的一些注入全局变量/方法，以及配置项完善，例如`$withBase`，`themeConfig`
- [ ] 搜索： **本地开发时的实时搜索暂时没有好方案，因为开始没有对所有md进行预编译，如果进行全文件预编译，耗时会长，启动慢，不符合快速开发。初步方案：1.命令行执行全文件遍历编译写入，2.打包时写入，3.支持接入Algolia**
- [ ] 下一页，上一页
- [ ] md 最新更新时间
- [ ] 在github上编辑此页
- [ ] slugMenu 独立
- [ ] 在线编辑代码：**考虑到强依赖`jspm`，实际在线编译需要动态下载，导致初始化需等待，一定程度上违背了文档快速展示的初衷，尽量减少使用，使用静态代码展示**
	- [ ] 本地组件代码和线上代码编辑区分（因为React单实例，不能同时支持两个？），考虑打包体积等问题，是否统一走线上
	- [ ] sandbox
	- [ ] 优化：骨架 loading 卡顿，异步更新已卸载的React报错
- [ ] 静态代码展示
- [ ] 快捷提示支持 [remark-directive](https://github.com/remarkjs/remark-directive)
- [ ] 站点模式（首页）
- [ ] 自身Api文档，区别于vitepress
- [ ] 发布，Test，CI等建设
- [ ] mobile预览支持
- [ ] 其他优化，例如 markdown 编译后 p 标签内嵌 div 异常报错（虽不影响）


