<img src="http://tinper.org/assets/images/bee.png" width="120" />

# tinper-bee

[![npm version](https://img.shields.io/npm/v/tinper-bee.svg)](https://www.npmjs.com/package/tinper-bee)
[![Build Status](https://img.shields.io/travis/iuap-design/tinper-bee/master.svg)](https://travis-ci.org/iuap-design/tinper-bee)
[![Coverage Status](https://coveralls.io/repos/github/iuap-design/tinper-bee/badge.svg?branch=master)](https://coveralls.io/github/iuap-design/tinper-bee?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/tinper-bee.svg?style=flat)](https://npmjs.org/package/tinper-bee)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/iuap-design/tinper-bee.svg)](http://isitmaintained.com/project/iuap-design/tinper-bee "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/iuap-design/tinper-bee.svg)](http://isitmaintained.com/project/iuap-design/tinper-bee "Percentage of issues still open")


tinper-bee（[官网链接](http://bee.tinper.org/) ）是一套基于 React.js 的开源组件库，它从丰富的企业级中后台应用场景中实战沉淀而来，为复杂应用的快速开发提供一致性 UI 解决方案。

## 关键特性

- 遵循设计语言/规范，提供一致性 UI 体验
- 提供完善、高质量的基础组件体系，以及基于之上的业务组件体系
- 详细的文档+示例的友好使用体验，提供友好易用的API文档
- 提供具备强大功能的 Grid 组件，满足多种复杂业务场景需求
- 六大公共特性：支持兼容性处理、支持全键盘能力、支持国际化、支持多端适配 、支持自定义主题、企业级特性

## 快速开始
### 安装 tinper-bee

可使用 npm、cnpm、yarn 以及 ynpm 来安装组件库以及组件。

```
npm install tinper-bee --save
```

### 项目中使用 tinper-bee

为了方便用户单独处理样式和js文件，所以我们对js和css进行了单独的打包。

```
import React,{ Component } from 'react';

//tinper-bee 组件库js引用
import { Button,Panel } from 'tinper-bee';

//tinper-bee 组件库 css 引用
import 'tinper-bee/assets/tinper-bee.css';

//项目样式
import './index.less';

class Example extends Component{
  constructor(props) {
   super(props);
 }

  render(){
    return (
    <Panel>
      hello world
    </Panel>)
  }
}

export default Example；

```

### 使用CDN

[版本号查阅](http://bee.tinper.org/tinper-bee/changelog)

css样式

```
//引入指定版本号
<link href="//design.yonyoucloud.com/static/tinper-bee/[版本号]/assets/tinper-bee.css">

//始终引入最新版本
<link href="//design.yonyoucloud.com/static/tinper-bee/latest/assets/tinper-bee.css">
```

js

```
//始终引入最新版本
<script src="//design.yonyoucloud.com/static/tinper-bee/[版本号]/build/tinper-bee.js"></script>

//引入指定版本号
<script src="//design.yonyoucloud.com/static/tinper-bee/latest/build/tinper-bee.js"></script>
```

并且，在你的webpack处，配置

```
externals: {
   'tinper-bee': 'TinperBee'
}
```

### 注意事项

另外，有几个组件因为使用的第三方的包比较大，所以我们没有将它们打包进tinper-bee.js，只是对他进行了转码，引入方式略有变化，包含组件如下。

Datepicker日期选择组件、Timepicker时间选择组件、Dnd拖拽组件、Calendar日历组件。

这些组件使用如下方式引入，不需要单独引入样式。 css的引入方式不变

```
import Datepicker from 'tinper-bee/lib/Datepicker';

import Timepicker from 'tinper-bee/lib/Timepicker';

import Dnd from 'tinper-bee/lib/Dnd';

import Calendar from 'tinper-bee/lib/Calendar';

import Carousel from 'tinper-bee/lib/Carousel';

import Viewer from 'bee-viewer';
```

## 目录及文件说明

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

## 开发文档

开发文档详见[这里](https://github.com/iuap-design/tinper-bee/docs)。

如果你的项目要兼容ie8，见 [这里](https://github.com/iuap-design/neoui-react/blob/master/docs/react-ie8.md)。

更多内容请移步我们的[官网](http://bee.tinper.org/)

[tinper-bee组件组织](https://github.com/tinper-bee)

## 参与讨论和开发

如在使用过程中遇到任何问题，可以在[这里](https://github.com/iuap-design/tinper-bee/issues)提交issue反馈；

或者直接fork代码到你的github仓库，提交pull request给我们。

有紧急问题可以直接邮件给我（Email：guoyff@yonyou.com）


## 开发及构建

开发者可以一起参与为 tinper-bee 贡献代码，同时也可以基于 tinper-bee 进行二次开发或封装插件。

[tinper-bee components organization](https://github.com/tinper-bee)

## 目录结构

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

## 构建工具

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
