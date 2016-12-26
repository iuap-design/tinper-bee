### 安装

>使用npm安装

>从github获取我们的源码

>使用工具获取


#### 使用npm安装

推荐使用npm安装。不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
可以通过 npm 直接安装到项目中，使用 import 或 require 进行引用。

```
npm install --save tinper-bee
```


#### 从github获取我们的源码

```

git clone git@github.com:iuap-design/tinper-bee.git

```
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
然后从build目录下获取js源码，在assets目录下获取css样式文件，在style里面获取字体文件。在本地项目中进行相应引用。

#### 使用工具获取

如果你是一个新的项目，推荐使用我们提供的开发脚手架和开发工具进行开发。开发脚手架里面内置了我们的组件库和一些常用开发构建流程。

```
npm install -g uba

uba init bee-boilerplate-light your-projectname
```
