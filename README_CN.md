<img src="http://tinper.org/assets/images/bee.png" width="120" />

# tinper-bee

[![npm version](https://img.shields.io/npm/v/tinper-bee.svg)](https://www.npmjs.com/package/tinper-bee)
[![Build Status](https://img.shields.io/travis/iuap-design/tinper-bee/master.svg)](https://travis-ci.org/iuap-design/tinper-bee)
[![Coverage Status](https://coveralls.io/repos/github/iuap-design/tinper-bee/badge.svg?branch=master)](https://coveralls.io/github/iuap-design/tinper-bee?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/tinper-bee.svg?style=flat)](https://npmjs.org/package/tinper-bee)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/iuap-design/tinper-bee.svg)](http://isitmaintained.com/project/iuap-design/tinper-bee "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/iuap-design/tinper-bee.svg)](http://isitmaintained.com/project/iuap-design/tinper-bee "Percentage of issues still open")



tinper-bee（[官网链接](http://bee.tinper.org/) ）是基于 `UI` 设计语言 `iUAP Design` 和 `React` 实现的组件库，为开发者提供从产品界面设计到前端开发的完整生态。

## 关键特性

- 组件支持可插拔使用
- 提供丰富基础组件
- 文档齐全，使用简单
- 丰富的企业级特性应用组件
- 支持组件的扩展和自定义

## 核心能力

### 丰富的组件

tinper-bee 包含丰富的react组件

## 开始使用
```
import { Button } from 'tinper-bee';

ReactDOM.render(<Button />, mountNode);

```


### 获取tinper-bee

- 直接从github获取我们的源码
```
git clone git@github.com:iuap-design/tinper-bee.git
```

- 使用CDN
```
```
- 使用npm安装

```
npm install --save tinper-bee
```


### 版本说明

当前tinper-bee框架的版本为0.0.1。


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
│      tinper-bee.js
│      tinper-bee.min.js
│
└─


```

### 开发文档

开发文档详见[这里](https://github.com/iuap-design/tinper-bee/docs)。

如果你的项目要兼容ie8，见 [这里](https://github.com/iuap-design/neoui-react/blob/master/docs/react-ie8.md)。

更多内容请移步我们的[官网](http://bee.tinper.org/)

[tinper-bee组件组织](https://github.com/tinper-bee)

### 6.参与讨论和开发

如在使用过程中遇到任何问题，可以在[这里](https://github.com/iuap-design/tinper-bee/issues)提交issue反馈；

或者直接fork代码到你的github仓库，提交pull request给我们。

有紧急问题可以直接邮件给我（Email：guoyff@yonyou.com）


## 开发及构建

开发者可以一起参与为 tinper-bee 贡献代码，同时也可以基于 tinper-bee 进行二次开发或封装插件。

[tinper-bee components organization](https://github.com/tinper-bee)

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

tinper-bee 使用 [gulp.js](http://gulpjs.com/) 和 [webpack](https://webpack.github.io/)  构建项目。

克隆项目文件:

```
$ git clone git@github.com:iuap-design/tinper-bee.git
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
