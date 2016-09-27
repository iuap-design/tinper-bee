# neoui-react


[neoui-react](http://design.yyuap.com/) 是基于 `UI` 设计语言 `iUAP Design` 和 `React` 实现的组件库，为开发者提供从产品界面设计到前端开发的完整生态。

## 核心能力

### 丰富的组件

neoui-react 包含丰富的react组件

## 开始使用
```
import { Button } from 'neoui-react';

ReactDOM.render(<Button />, mountNode);

```


### 获取neoui

- 直接从github获取我们的源码
```
git clone git@github.com:iuap-design/neoui-react.git
```

- 使用CDN
```
```
- 使用npm安装

```
npm install neoui-react
```


### 版本说明

当前neoui-react框架的版本为0.0.1。


### 目录及文件说明

提供的资源目录结构
```
/
│
├─assets
│      base.css
│      component.css
│
├─build
│      neoui-react.js
│      neoui-react.min.js
│
└─


```

### 开发文档

开发文档详见[这里](https://github.com/iuap-design/neoui-react/docs)。

如果你的项目要兼容ie8，见 [这里](https://github.com/iuap-design/neoui-react/blob/master/docs/react-ie8.md)。

更多内容请移步我们的[官网](http://design.yyuap.com/)

### 6.参与讨论和开发

如在使用过程中遇到任何问题，可以在[这里](https://github.com/iuap-design/neoui-react/issues)提交issue反馈；

或者直接fork代码到你的github仓库，提交pull request给我们。

有紧急问题可以直接邮件给我（Email：guoyff@yonyou.com）


## 开发及构建

开发者可以一起参与为 neoui-react 贡献代码，同时也可以基于 neoui-react 进行二次开发或封装插件。

### 目录结构

```
bower.json
CHANGELOG.md
CONTRIBUTING.md
build/
assets/
docs/
gulpfile.js
package.json
README.md
style/
tests/
webpack.conf.js
```

### 构建工具

neoui-react 使用 [gulp.js](http://gulpjs.com/) 和 [webpack](https://webpack.github.io/)  构建项目。

克隆项目文件:

```
$ git clone git@github.com:iuap-design/neoui-react.git
```

然后进入目录安装依赖：

```
$ npm install
```

接下来，执行 `gulp`：

```
$ gulp
```


## 反馈

[Bug 反馈及需求提交](CONTRIBUTING.md)

## 版本号
