# 更新文档

很多步骤可以做成自动化。

### 组件更新

- 确认要更新的组件版本， 然后更新

只有几个组件因为兼容性问题和体积过大问题，没有打包进tinper-bee。包含bee-calendar，bee-carousel，bee-datepicker，bee-dnd，bee-timepicker组件。

这几个组件如下更新：
```
npm install -D bee-carousel

```

其他组件，package.json中保持固定版本，既不带`^`, 如下更新：

```
// 下载具体版本
npm install -D bee-button@1.0.2
```

### 更新日志

现在更新日志仍需要手动。收集大家更新内容。然后手动添加到CHANGELOG.md文件中。

```
## 1.5.1

- InputNumber组件在Table中样式受影响
- FromControl组件search状态disabled时，clear icon 仍可用
- FromControl组件增加onBlur事件
```

### 打包编译

```
npm run build
```

### 测试

在[tinper-bee-overview](https://github.com/tinper-bee/tinper-bee-overview.git)工程中，安装本地的tinper-bee

```
npm install -S ../tinper-bee//相对路径的tinper-bee目录。
```

在tinper-bee-overview根目录执行

```
npm run dev
```

进行测试验证，是否有错误，样式错误等。

### 发布

修改package.json的版本号，发布：
```
npm publish
```

### 生成release

提交git，在[github](https://github.com/iuap-design/tinper-bee/releases)生成一个release。

### 传cdn

打开阿里oss客户端，直接上传。

[assets,build,style]

上传

## github 上发布tag

1. 【tinper-bee】新建tag->输入版本号->tinper-bee->之前写的log复制-->保存
2. 下载当前release->解压->上传cdn
3. 更新文档工程【bee.tinper.org】