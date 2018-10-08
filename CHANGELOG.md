## 1.6.1
- bee-message 修复在生命周期函数中调用报错的问题
- bee-notification react16的兼容
- bee-dnd：升级依赖组件；新增横向排序、多列排序示例；增加多个api 
- bee-affix修改container传值为null的容错处理
- bee-select：解决输入框失焦后仍保持聚焦状态的问题；增加 open 参数控制下拉框的展开收起
- bee-table：锁定加个边界线；按条件和值进行过滤；拖拽改变列宽；修改表头th添加className问题；safair下checkbox无法选中问题；动态设置固定列交互修改；内容超出当前dom宽度时，自动出现滚动条

## 1.6.0
- bee-table
  1.动态设置固定列，固定列关联的列自动固定，增加回调函数
  2. bee-table排序功能，去掉列筛选功能后，排序上下箭头类名改变，样式丢失
  3. bee-table 过滤组件通过tinper-bee引入路径问题
- bee-select dropdownMatchSelectWidth属性，为false时，下拉框的内容不取决于输入框

## 1.5.9
- bee-input-number disabled后仍然可以点击bug
- bee-locale文件名规范化修改
- bee-form-control 去掉 showClose showPop 警告
- bee-select 增加示例。
- bee-modal 里面加了三个demo
- bee-table 
   1. 优化上千条数据渲染性能
   2. 数表结构中使用固定列时，固定列的高度取值问题
   3. table有纵向滚动条，列过多时，滚动下不对齐
   4. bee-table重新验证示例，修改4个示例的Bug
- bee-transfer 
- bee-menus 增加选中获取自定义data对象的示例
- bee-panel增加代码复制功能，增加代码示例展示板Demo
- bee-tooltip加判断，无overlay不渲染tooltip-arrow,tooltip-inner
- bee-locale文件名规范化

## 1.5.8
- bee-input-number 增加了disabled属性，新增2个demo示例

## 1.5.7

- bee-affix horizontal的无效果问题、以及demo 修改。
- bee-input-number 增加了disabled属性，新增2个demo示例

## 1.5.6

- 去掉components/Con/index.js 

## 1.5.5

- bee-table 
  1. newMuleteSelct 设置 disable 属性。
  2. 多列进行排序，某一列点击，会影响到其他列的排的默认箭头的颜色
  3. 排序默认选中箭头。
  4. 表格中tree结构，点+-号时也会触发onRowClick事件，希望不触发。
  5. 增加demo，文档。

- bee-inputnumber 组件，当disabled设成true时，仍可点击左右的+-号改变数据

- bee-tooltip组件，希望能根据内容来自动往上浮动或者往下浮动（上方没有空间时往下浮动，下方没有空间时往上浮动

- bee-affix组件，改浏览器视口宽度以后，Affix的宽度没有重算

- bee-select、bee-menus 当组件width 小于正常width的时候，文字和下拉框需要做省略处理。

- bee-form-control   新增清空功能

- bee-form 新增demo和文档

- bee-tooltip、bee-overlay 内容查出边界时，内容会自动切换弹出方位。

## 1.5.4

- bee-table 列过滤bug修复。
- 表格列宽的功能下架。

## 1.5.3
 
- bee-table 新增综合示例。

## 1.5.2

- Modal组件在React16中更新报错。

## 1.5.1

- InputNumber组件在Table中样式受影响
- FromControl组件search状态disabled时，clear icon 仍可用
- FromControl组件增加onBlur事件

## 1.5.0

- Table组件重构mixin和render增强功能，修改用法。
- Table修复固定列滚动错行问题
- FromControl的ie9兼容问题
- Transfer的Modal渲染不加载问题
- Checkbox组件优化非双击不延迟
- Tree组件优化非双击事件不延迟

## 1.4.2

- 修复Table组件显示错误bug

## 1.4.1

- 修复Table组件1.1.5显示bug

## 1.4.0

- Datepicker组件的日期范围添加className
- Dnd组件内部没有根据新的state重新渲染bug
- Table组件可动态设置固定列
- Table组件表头可动态设置
- Table组件表头支持拖拽
- Table组件表头可拖拽修改列宽度

## 1.3.7

- Table固定列和展开行同时使用时，固定列展开高度不一致问题

## 1.3.6

- Checkbox单击事件增加默认props
- Table组件全选功能组件透传给table

## 1.3.5

- Checkbox增加单击事件

## 1.3.4

- Tree组件增加双击事件
- Checkbox组件增加双击事件

## 1.3.3

- Transfer组件搜索的返回值由e修改为value

## 1.3.2

- FormControl组件修复搜索功能报错问题

## 1.3.1

- Tree组件新增treeNode的title（叶子的名称）支持修改Class，style;switcher(树前边的空span)支持修改Class，style。

## 1.3.0

- Popover组件解决受控制时，显示bug
- Message组件增加style参数，让用户修改样式
- ForItem组件，className传递位置错误
- Table组件，新增haveExpandIcon,控制是都显示展开行Icon，这个参数只在使用了expandedRowRender时才有效
- Datepicker组件修复onChange事件重复触发问题，增加getCalendarContainer支持自定义渲染容器节点

## 1.2.10

- 修复Tab组件，多页签展示时，箭头不垂直居中问题

## 1.2.9

- 修复Tree组件，异步加载时显示loading的图片
- 修复ProgressBar顶部导航样式问题

## 1.2.8

- 修复Button, FormControl, ProgressBar按需加载样式问题。

## 1.2.7

- Radio: 修复disabled时无法设置默认值问题

## 1.2.6

- Menus: 修改dark主题下选中样式变蓝bug
- ProgressBar: 增加顶部进度条(feat)
- Checkbox: 与Radio组件统一样式
- FormControl: 修复onChange控制value显示时，显示滞后bug
- Table: 修复全选功能中使用rowKey参数bug

## 1.2.5

- Rate: 修复样式不正确问题

## 1.2.4

- Carousel: 从tinper-bee打包文件中拿出，因为依赖的第三方组件不兼容ie。

## 1.2.2

- 增加按需加载功能

## 1.2.1

- 修复分页组件上一页属性bug

## 1.2.0

- 新增Carousel轮播图组件
- 修复Select下拉框宽度不一致问题
- 日期选择增加了图标及自定义图标
- Form组件增加valuePropsName设置如何获取子元素props

## 1.1.1

- 修复Dropdown选中，父组件销毁时，下拉菜单未消失。
- 修复Table增加行列合并。
- 修复Select下拉宽度，向上渲染弹出两次，增加data Props。
- 修复Form，自定义组件更新value;校验逻辑修改，增加多个校验正则。
- 修复Datepicker组件rangepicker为一个输入框显示。

## 1.1.0

- 增加Locale多语组件
- 增加Popover气泡卡片组件

## 1.0.0

- 支持React v16版本
- 增加Timeline组件
- 增加Dnd拖拽组件
- 增加表单校验


