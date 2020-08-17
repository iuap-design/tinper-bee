# tinper-bee 组件库更新文档

## 1、组件更新
组件库提供了自动脚本，获取所有基础组件的最新版本号，执行命令：
```
npm run getVersion
```
执行上述命令后，获取到的最新版本信息会存放在 `./utils/comNew.json` 文件中。如下所示：
```
{
    "bee-affix": "1.0.18",
    "bee-alert": "2.0.1",
    "bee-anchor": "0.0.6",
    //...
    "bee-tree": "2.1.22",
    "bee-tree-select": "0.0.7",
    "bee-upload": "2.1.3"
}
```
将获取到的版本信息，拷贝到 package.json 文件中的 dependencies 属性中即可。
> 注意：所有组件需要锁死版本号

## 2、更新 changelog 
梳理本次发版的更新日志，格式规范示例：
- bee-button@2.0.0
    - 🌟 [ Feature ] 新增了xx功能
    - 🐞 [ Fixbug ] 解决了xx问题
    - 💄 [ Update ] 优化了xx功能

整理好后添加到 CHANGELOG.md 文件中。  
如果忘记了本次修改的内容，可以去每个组件 github 仓库的 release 上查看近期的更新记录。

## 3、更新图标字体文件（非必需）
字体图标更新频率很低，一般不用修改。如果本次发版需要更新字体图标，则需将字体文件拷贝至 `./style/utils/*` 目录下。  
> 参考文档：[tinper-bee使用CDN修改字体图标——iconfont更新手册](https://github.com/tinper-bee/react-components-docs/blob/master/tinper-bee%E4%BD%BF%E7%94%A8CDN%E4%BF%AE%E6%94%B9%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87%E2%80%94%E2%80%94iconfont%E6%9B%B4%E6%96%B0%E6%89%8B%E5%86%8C.md)

## 4、更新多语资源（非必需）
如果本次发版 bee-locale 组件有更新，则需要把 bee-locale/build 目录下的三个语言包，同步到 `tinper-bee/locale` 文件中。

## 5、新增组件（非必需）
tinper-bee 中含有 66 个基础组件，如果需要新增基础组件，具体步骤如下：
1. 在 package.json 中新增 dependencies 
1. 在 tinper-bee/components 和 tinper-bee/lib 目录下分别新增文件夹
1. 在 tinper-bee/index.js 中增加新组件引入和导出
1. 在 tinper-bee/style/component.scss 中新增组件样式文件引入

## 6、更新依赖
```
npm install
```
<!--- 用淘宝镜像安装会报错-->
<!--- 高版本安装会报错-->

## 7、打包编译
```
npm run build
```

## 8、兼容 IE
找到文件 `build/tinper-bee.js`，搜索关键字：  
```
candidates.find
```  

将以下内容
```
var supported = candidates.find(function (eventName) {
    return "on" + eventName in document;
  });
```
替换为
```
var supported = "";
for(var k = 0; k++; k < candidates.length) {
	if(candidates[k] === "on" + eventName in document){
		supported = candidates[k];
	}
}
```

## 9、测试
在 [tinper-bee-overview](https://github.com/tinper-bee/tinper-bee-overview) 工程中，安装本地的tinper-bee

```
npm install -S ../tinper-bee //相对路径的tinper-bee目录。
```

在 tinper-bee-overview 根目录执行

```
npm run dev
```

进行测试验证，是否有错误，样式错误等。

## 10、发布
1. 测试通过后，修改 `package.json` 中的 version，以及 `index.js` 中的 version
1. 执行 `npm publish` 发布

## 11、更新 CDN 
登录阿里oss客户端，找到目录：`oss://iuap-design-cdn/static/tinper-bee/`
1. 新建本次发布版本（如 2.3.4 ）的文件夹，上传构建好的资源，包含：assets、build、style、theme 文件
1. 更新前备份 latest 资源。将 `tinper-bee/latest/` 中的资源拷贝到 `tinper-bee/latest-back/` 中，以方便回滚
1. 更新 latest 中的资源，包含：assets、build、style、theme 文件


## 12、生成 release
打开地址：https://github.com/iuap-design/tinper-bee/releases
1. 点击 `Draft a new release` 按钮
1. 按如下步骤填写 release 信息
![image](https://user-images.githubusercontent.com/33412781/90361528-0b23d980-e091-11ea-89bc-dd307078bc53.png)
1. 点击 Publish release 按钮

## 13、更新官网
涉及三个工程的更新：
- https://github.com/iuap-design/design.yonyoucloud (首页)
- https://github.com/iuap-design/bee.tinper.org (基础组件)
- https://github.com/iuap-design/acs.tinper.org (应用组件)

首页更新：
1. 修改 `ucf.config.js` 文件中的 `global_env` 全局变量，改成最新版本号
2. 在开发者中心，执行生产环境流水线

基础组件/应用组件更新：
1. 获取一个新的 github token，地址：`https://github.com/settings/tokens`，在 `app/utils/getRelease.js` 中填写 auth 对象 token 属性
1. 执行 `npm run writeFile`
1. 提交代码
（注意：提交代码前，需要把 token 删掉）
1. 在开发者中心，执行生产环境流水线

## 14、在开源中国发布更新资讯
格式参考往期资讯

[OSCHINA地址](https://www.oschina.net/p/tinper-bee)

## 15、更新主题定制server端文件
1. 安装主题定制功能的cli工具
```
npm install tinper-bee-theme-cli -g
```
2. 每次发版后都需要手动更新服务器

执行下述命令，输入版本号，即可完成更新
```
tinper-theme update
```