# 快速上手

Iuap Design React 致力于提供给程序员愉悦快速的开发体验




在开始之前，推荐学习 <a href="http:facebook.github.io/react">React</a> 和 <a href="http://www.nodeclass.com/api/ECMAScript6.html">ES2016</a>

# 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。 我们提供了一套 npm + webpack 的开发工具链来辅助开发。

## 获取开发脚手架

使用uba工具来初始化项目

```
npm install -g uba
uba init bee-boilerplate-light your-projectname
cd your-projectname && npm install
npm run start
```
这样就启动了开发工程。

#### 脚手架目录说明

```

│
├─app
│   ├─components //编写组件
│   ├─containers //容器
│   ├─index.html //页面文件
│   ├─index.js   //入口js文件
│
├─test //编写页面测试用例
│      
│
└─


```

#### 脚手架指令说明

- npm run dev 运行项目服务，进行开发调试
- npm run build 进行项目编译打包，输入静态文件
- npm run lint 执行语法测试
- npm run test 执行测试
- npm run clean 清空build输出目录

## 获取tinper-bee

当然如果你已经有了自己的react项目或者自己配置好了react开发脚手架，并且想试一试我们组件库，那么你可以直接获取我们的组件库。

- 直接动github获取我们的源码

```

git clone git@github.com:iuap-design/tinper-bee.git

```
- 使用npm安装

```
npm install --save tinper-bee

```

- 使用CDN

暂时未开启



## 组件库使用文件说明

编译后的js代码在build文件夹内，包含压缩版本和非压缩版本。样式文件存放在assets文件夹内。

```

│
├─assets
│      tinper-bee.css
│
├─build
│      tinper-bee.js
│      tinper-bee.min.js
│
└─


```
## 开始使用

以`button`为例子

#### 样式引用
为了满足多样的需求，我们对样式进行了单独打包，请引用单独的样式文件。

- 在html中通过link标签

```
<link rel="stylesheet" href="../node_modules/tinper-bee/assets/tinper-bee.css">

```
路径更换为你的路径。

- 在组件内引入
```
import 'tinper-bee/assets/tinper-bee.css';
```

#### 组件引用

```

import { Button } from 'tinper-bee';

ReactDOM.render(<Button />, mountNode);


```
## 参与讨论和开发

如在使用过程中遇到任何问题，可以在[这里](https://github.com/iuap-design/tinper-bee/issues)提交issue反馈；

或者直接fork代码到你的github仓库，提交pull request给我们。

有紧急问题可以直接邮件给我（Email：guoyff@yonyou.com）


## 开发及构建

开发者可以一起参与为 tinper-bee 贡献代码，同时也可以基于 tinper-bee 进行二次开发或封装插件。

[tinper-bee](https://github.com/tinper-bee)
