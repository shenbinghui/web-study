[IMEI号管理系统]
【技术栈】
express+nodejs+mongodb+vue

【node】
需要安装的依赖模块：
1、express
2、mongoose
3、body-parser

【vue】
1、vue-xlsx-table


【流程】
这里不用express直接创建
1、npm init  创建package.json
2、新建index.js 作为服务端的入口文件
3、npm install --save express
4、使用MVC架构
M:数据模型
V:视图页面
C:路由逻辑


【需要优化的地方】
1、配置文件使用config-lite ??
2、自定义一个模块，如何全局使用，不需要每次都import或者require

【解决过的问题】
1、element ui table 单元格如何可编辑
2、axios发送post请求，数据如何发送