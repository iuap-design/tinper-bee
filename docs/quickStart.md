### 快速上手

Iuap Design React 致力于提供给程序员愉悦快速的开发体验


在开始之前，推荐学习 <a href="http://facebook.github.io/react">React</a> 和 <a href="http://www.nodeclass.com/api/ECMAScript6.html">ES2016</a>

#### 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。 我们提供了一套 npm + webpack 的开发工具链来辅助开发。

#### 获取开发脚手架

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



#### 开始使用

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
