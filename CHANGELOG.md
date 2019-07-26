## tinper-bee 2.1.3
- bee-datepicker@2.2.2
    - 🐞 [Fixbug]解决 ie11 中，日期框的清除按钮 X 有2个不同样式重叠的问题。
- bee-datepicker@2.2.3
    - 🐞 [Fixbug]value.localeData 做容错处理。
    - 🐞 [Fixbug]传入的 value 通过 moment 格式化。
    - 🐞 [Fixbug]阻止日期面板的 onMouseOver 事件冒泡，解决外层 Tooltip 显示异常的问题。
    - 🐞 [Fixbug]RangePicker 组件，输入开始时间后，聚焦到结束时间会清空开始输入框的问题。[#267](https://github.com/iuap-design/tinper-bee/issues/267)
- bee-dnd@1.1.3
    - 🌟 [Feature]新增网格排序，解决模态框里不能使用拖拽排序的问题。
    - 🐞 [Fixbug]解决列表拖拽被遮挡的问题。
- bee-table@2.1.8
    - 🌟 [Feature]增加行拖拽开始时的回调函数 onDragRowStart。[#264](https://github.com/iuap-design/tinper-bee/issues/264)
    - 🐞 [Fixbug]解决 onRowClick 回调函数中，事件对象属性均为 null 的问题。
    - 🐞 [Fixbug]解决了内存泄漏问题。
    - 🐞 [Fixbug]解决 utils.js 文件路径找不到的问题。
    - 🐞 [Fixbug]当传入的 columns 为空时，不绑定拖拽事件。
- bee-menus@2.0.8
    - 🐞 [Fixbug]解决 keyboard 为 false 时，绑定了键盘事件的问题。
- bee-menus@2.0.9
    - 🐞 [Fixbug] 解决切换焦点时触发了 onKeyDown 事件的问题。
- bee-search-panel@3.0.1
    - 🌟 [Feature]新增属性 isExpandedBtn，用于控制收起/展开按钮是否显示。
- bee-colorpicker@0.0.11
    - 🌟 [Feature]新增 title 属性，自定义标题文字
    - 🌟 [Feature]新增 cacelBtn 属性，自定义取消按钮文字
    - 🌟 [Feature]新增 confirmBtn 属性，自定义确认按钮文字。
- bee-complex-grid@2.0.23
    - 🐞 [Fixbug]解决表头传入 Icon 图标，未正常显示的问题。[#269](https://github.com/iuap-design/tinper-bee/issues/269)

## tinper-bee 2.1.2
- bee-datepicker@2.2.0
    - 🐞 [Fixbug]禁用态日期输入框去掉 hover 样式。
    - 🌟 [Feature]日期面板上的输入框在失焦或按 `Enter` 键时进行校验。[#227](https://github.com/iuap-design/tinper-bee/issues/227)
    - 🌟 [Feature]增加 `defaultPanelShown` 属性，设置日期组件显示/隐藏的默认状态。[#226](https://github.com/iuap-design/tinper-bee/issues/226)
    - 🌟 [Feature]输入框值为空时，回填默认值并关闭面板。
- bee-page-layout@1.0.1
    - 🐞 [Fixbug]入口文件中引用的 “Pagelayout” 的 l 改为大写。[#258](https://github.com/iuap-design/tinper-bee/issues/258)
- bee-select@2.0.14
    - 🐞 [Fixbug]清空功能的关闭图标错误。[#252](https://github.com/iuap-design/tinper-bee/issues/252)
- bee-dropdown@2.0.8
    - 🐞 [Fixbug]延迟属性改用Overlay提供的。解决鼠标快速移入移出后，下拉框不消失的问题。
- bee-dropdown@2.0.9
    - 🌟 [Feature]delay 单位改为毫秒。
- bee-modal@2.0.20
    - 🐞 [Fixbug]解决点击模态框 Header 区域，产生错位的问题。
    - 🌟 [Feature]提供 `centered` 属性，支持垂直居中展示 Modal。[#259](https://github.com/iuap-design/tinper-bee/issues/259)
- bee-complex-grid@2.0.22
    - 🐞 [Fixbug]设置 expandIconAsCell 属性后样式错乱的问题。
- bee-table@2.0.8-nc.6
    - 🐞 [Fixbug]querySelector容错处理。
- bee-table@2.1.6
    - 🌟 [Feature]table无数据时，支持通过 `hideHeaderScroll` 隐藏表头滚动条。[#207](https://github.com/iuap-design/tinper-bee/issues/207)
- bee-radio@2.0.14
    - 🐞 [Fixbug]解决传入 selectedValue={0} 时，组件未接收的问题。
- bee-tree@2.0.17 
    - [Fixbug]含有复选框的场景中，操作按钮溢出问题。

## tinper-bee 2.1.1
- bee-loading-state@2.0.2
    - 🐞 [Fixbug]解决 loading 组件升级带来的样式问题。
- bee-popover@3.0.2
    - 🌟 [Feature]新增显示状态改变时触发的回调 `onVisibleChange`。[#223](https://github.com/iuap-design/tinper-bee/issues/223)
- bee-input-number@2.0.17
    - 🐞 [Fixbug] 解决输入框值为 null 时，报错的问题。
- bee-tree@2.0.16
    - 🐞 [Fixbug]调用 `filterTreeNode` 方法时增加判断，容错处理。
    - 🌟 [Feature]快捷键操作节点状态扩展，增加移动状态。[#232](https://github.com/iuap-design/tinper-bee/issues/232)
    - 🐞 [Fixbug] onUlFocus事件中ul获取焦点兼容处理,防止已选中的节点再次选中
    - 🌟 [Feature] 增加mustExpandable属性，支持用户自定义禁用的节点是否可以展开收起，默认不可以展开。
- bee-datepicker@2.1.2
    - 🐞 [Fixbug] 解决open属性无效问题。
    - 🌟 [Feature] 新增自定义弹出位置api。
    - 🐞 [Fixbug] 解决rangepicker清空报错问题。
    - 🌟 [Feature] 值更改回调中的 Moment 对象增加类型参数 type，用于区分 date、month、range、week、year 五种日期类型。
    - 🐞 [Fixbug] RangePicker 只选择开始日期，并关闭面板时，清空了输入框中的值，导致 UI 和数据不一致的问题。[#244](https://github.com/iuap-design/tinper-bee/issues/244)
    - 🐞 [Fixbug]在行过滤中出现呼出后不可点击的问题。
    - 🐞 [Fixbug]RangePicker 支持在失焦事件中，以数组的形式，返回开始输入框和结束输入框的值。
    - 🐞 [Fixbug]Rangpicker 快速点击3次及以上同一天会清空值。[#221](https://github.com/iuap-design/tinper-bee/issues/221)
- bee-complex-grid@2.0.21
    - 🐞 [Fixbug]排序表格，最后一列的排序图标及数字被遮盖问题。[#250](https://github.com/iuap-design/tinper-bee/issues/250)
- bee-table@2.1.5
    - 🌟 [Feature]行拖拽对触摸屏的支持。[#199](https://github.com/iuap-design/tinper-bee/issues/199)
    - 🌟 [Feature]拖拽改变列顺序的交互改进。
    - 🐞 [Fixbug]单选功能，当行内容出现换行时，固定列出现错位的问题。
    - 🐞 [Fixbug]解决表格图标样式覆盖了自定义图标的问题。[#240](https://github.com/iuap-design/tinper-bee/issues/240)
    - 🐞 [Fixbug]table拖拽改变列宽度 onDropBorder 回调中返回的width值不正确。[#242](https://github.com/iuap-design/tinper-bee/issues/242)
    - 🐞 [Fixbug]在渲染 TableHeader 时，增加容错处理。[#248](https://github.com/iuap-design/tinper-bee/issues/248)
    - 🐞 [Fixbug]表格多选和折叠功能同时启用时，多选和折叠图标全部显示在第一列。[#246](https://github.com/iuap-design/tinper-bee/issues/246)
    - 🐞 [Fixbug]滚动加载，支持单元格合并。
    - 🐞 [Fixbug]表格 column 为空时拖拽报错，容错处理。
    - 🐞 [Fixbug]解决checkbox 不选中问题。
    - 🐞 [Fixbug]解决拖拽时，文字不能拖拽的问题。
- bee-table@2.0.8-nc.4 
    - 🐞 [Fixbug]修改了补丁，解决了拖拽表格宽度不够，断裂的问题。
- bee-drawer@0.0.5 
    - 🌟 [Feature] ncc drawer下有dnd，列表元素错位问题。
- bee-dropdown@2.0.7
    - 🌟 [Feature] 新增延迟显示隐藏需求。
- bee-modal@2.0.17
    - 🌟 [Feature] 新增限制拖拽范围功能


## tinper-bee 2.1.0
- bee-drawer@0.0.4
    - 🌟 [Feature] 增加 `closeIcon` 属性，自定义关闭图标。[#210](https://github.com/iuap-design/tinper-bee/issues/210)
- bee-overlay@1.0.30
    - 🌟 [Feature] 增加rootClose的回调函数`onHide`
    - 🐞 [Fixbug] 修改Protypes校验，解决 Popover 组件的 warning
- bee-tooltip@2.1.2
    - 🌟 [Feature] placement 参数增加 `topLeft` `topRight` `rightTop` `rightBottom` `bottomRight` `bottomLeft` `leftBottom` `leftTop` 八个位置取值
    - 🌟 [Feature] 增加 `id` 属性
    - 🌟 [Feature] 增加 `onHide` 弹出层隐藏时触发的回调
- bee-popover@3.0.1
    - 💄 [Update] 组件基于 bee-tooltip 重构，解决弹出层关闭时间较长的问题。[#198](https://github.com/iuap-design/tinper-bee/issues/198)
- bee-datepicker@2.0.43
    - 🌟 [Feature] DatePicker、RangePicker 日期面板内的输入框增加失去焦点的回调。[#217](https://github.com/iuap-design/tinper-bee/issues/217)
- bee-complex-grid@2.0.19
    - 🐞 [Fixbug] multiSelect 参数兼容老版本，解决设置 true 无效的问题
    - 🐞 [Fixbug] 滚动加载场景中，多选回调参数bug
    - 🐞 [Fixbug] Excel 导出功能，width 设置为百分比时，添加默认导出宽度为 150px
    - 🐞 [Fixbug] 导出 exportHidden 优先级高于 ifshow
- bee-message@2.1.0
    - 🌟 [Feature] 支持通过 style 参数设置通栏样式
- bee-input-number@2.0.16
    - 🌟 [Feature] 优化左右按钮的样式。
- bee-table@2.1.3
    - 🌟 [Feature] 单选表格，行选中后再次点击可取消选中
    - 🐞 [Fixbug] 表格前端多列排序规则调整为以用户传入的sorter规则优先
    - 🐞 [Fixbug] 解决拖拽时候，表头是文字的时候不能拖拽的问题
- bee-radio@2.0.12
    - 🌟 [Feature] 支持 `defaultValue` 设置默认值，组件内部增加 onChange 方法。
    - 🐞 [Fixbug] Radio 节点支持数组和对象两种数据格式。

## tinper-bee 2.0.13
- 🌟 [Feature]补充 bee-input-group-addon 组件样式。
- bee-tree-select@0.0.5
    - 🐞 [Fixbug]解决Select组件样式被覆盖问题。[#205](https://github.com/iuap-design/tinper-bee/issues/205)
- bee-radio@2.0.10
    - 🐞 [Fixbug]解决 RadioGroup 只有一个 Radio 时报错的问题。[#191](https://github.com/iuap-design/tinper-bee/issues/191)
- bee-timepicker@2.0.4
    - 🐞 [Fixbug]设置 12 小时制的时间选择面板样式错乱问题。[#201](https://github.com/iuap-design/tinper-bee/issues/201)
    - 🐞 [Fixbug]format 格式化时间问题。[#202](https://github.com/iuap-design/tinper-bee/issues/202)
- bee-datepicker@2.0.41
    - 🌟 [Feature]RangePicker增加 `open` 属性和 `onOpenChange` 回调函数。[#205](https://github.com/iuap-design/tinper-bee/issues/205)
    - 🐞 [Fixbug] 日期范围控件enter无法把时间带回输入框。[#183](https://github.com/iuap-design/tinper-bee/issues/183)
    - 🌟 [Feature] 新增showClose属性控制外层输入框关闭按钮。[#200](https://github.com/iuap-design/tinper-bee/issues/200)
    - 🌟 [Feature] Rangepicker新增onHoverChange回调。[#203](https://github.com/iuap-design/tinper-bee/issues/203)
    - [Feature] 新增onPanelChange日期面板改变时的回调
- bee-table@2.1.0
    - 🌟 [Feature]去掉Table重复的id。[#185](https://github.com/iuap-design/tinper-bee/issues/185)
- bee-colorpicker@0.0.10
    - 🌟 [Feature]新增 `disabledAlpha` API，设置是否禁用透明度
- bee-loading@1.1.2 
    - 🌟 [Feature]支持传入自定义加载图标
- bee-select@2.0.13
    - 🐞 [Fixbug]firefox 45，Select兼容问题
- bee-complex-grid@2.0.16
    - 🐞 [Fixbug]含有排序图标的列，宽度较小引起的表格错位问题
- bee-modal@2.0.15
    - 🐞 [Fixbug]解决模态框拖拽到顶部时，Header 被导航栏覆盖，导致无法继续操作的问题
    - 🐞 [Fixbug]解决设置 `backdropClassName` 无效的问题
- bee-input-group-addon@2.0.1
    - 🐞 [Fixbug]修复无背景无边框的样式问题
- bee-input-group@2.0.3
    - 🐞 [Fixbug]修复按钮的样式问题

## tinper-bee 2.0.12
🌟 新增树选择器组件。
- bee-radio@2.0.9
    - [bugFix] 解决RadioGroup只有一个radio时报错问题
- bee-input-number@2.0.15
    - [bugFix] 解决配合form重置无法清空内容bug
    - [bugFix] 解决输入数字infinity的问题
    - [bugFix] 大于最大值或者小于最小值时不可输入
- bee-datepicker@2.0.36
    - [Feature] RangePicker新增 showTime 选择时间api
    - [Feature] datepicker rangepicker 面板内输入框错误提示自定义
    - [Feature] RangePicker format支持传入数组
    - [Feature] RangePicker 快捷键顺序修改
- bee-table@2.0.25
    - [Feature]增加 `singleSelect` 单选功能的高阶函数
    - [Fixbug]解决嵌套表格节点数据展开后没有下拉 icon 的问题
    - [Feature]“暂无数据”支持多语
    - [Fixbug]解决传入 `emptyText` 方法报错问题
    - [Fixbug]使用 `rowKey` 的表格，行拖拽无法使用的问题
    - [Feature]提供行拖拽的回调函数 `onDropRow`
    - [Fixbug]解决行拖拽无法拖拽至第一行的问题
    - [Fixbug] 在没有数据，表头列过多时，表头滚动条隐藏了，无法拖拽
	- [Fixbug] 所有数据都为disabled状态，表头checkbox默认是选中bug
	- [Fixbug] 模态框中使用Table，滚动条宽度计算不准确
- bee-form-control@2.0.3
    - [Feature]带容器的输入框去掉多余的ClassName
- bee-tabs@2.0.6 
    - [Fixbug]解决左侧 Tabs 内嵌套上侧 Tabs 时，数据未显示的问题
- bee-locale@0.0.14
    - [Feature]补充 Table 多语
- bee-pagination@2.0.8
    - [Fixbug]解决动态传入items为0时，分页页码未更新问题
- bee-checkbox@2.0.6
    - [Fixbug]在CheckboxGroup内单独设置checkbox的disabled属性未生效问题
- bee-tree@2.0.12
	- [Feature]增加ext属性，支持用户自定义扩展属性
- bee-tree-select@0.0.3
    - [Feature]新增树选择器组件

## tinper-bee 2.0.11
- [Feature] 图标字体文件本地化，提供本地加载和CDN资源两种访问方式
- [Feature] 组件库assets目录提供四套默认主题样式（含tinper默认）
- bee-table@2.0.19
    - [Fixbug]嵌套表格收起展开的字体图标改为css实现
    - [Feature] 支持用户自定义展开和关闭图标
    - [Fixbug] 解决IE11下removeEventListiner报错bug
- bee-switch@2.0.5
    - [Fixbug]解决控制台警告问题
- bee-tabs@2.0.5
    - [Fixbug]解决嵌套表格的子模块为Tabs页签时，表格显示异常问题
- bee-notification@2.0.2
    - [Fixbug]解决控制台警告问题
- bee-message@2.0.4
    - [Fixbug]解决组件第二次调用create方法报错问题
- bee-menus@2.0.7
    - [Fixbug]解决鼠标缓慢移动时，横向菜单消失的问题
- bee-progress-bar@2.0.1
    - [Fixbug]进度条的 label 文字与进度条重叠
    - [Feature]网页顶部进度条由蓝色改为渐变红，且高度由2px改为3px
- bee-collapse@1.0.2
    - [Fixbug]解决折叠展开效果卡顿问题
- bee-button@2.0.11
    - [Feature]主按钮的文字颜色取消主题关联
- bee-autocomplete@2.0.3
    - [Fixbug]解决组件搜索逻辑不正确的问题
    - [Fixbug]暴露`show`参数，外部可控
- bee-modal@2.0.11
    - [Feature] bee-modal组件，新增了设置拖拽容器class样式的功能
    - [Feature] 性能优化:改变窗口大小加判断
    - [Feature] 依赖modal版本bee-overlay
- bee-select@2.0.12
    - [Feature]带输入的下拉框可支持自定义的输入
- bee-dropdown@2.0.6
    - [Fixbug] 去掉clsPrefix警告
- bee-tree@2.0.12
    - [Fixbug] checkStrictly为false时动态改变数据源造成的onCheck回调参数错误问题
    - [Feature] 优化是否是叶子节点判断方法

## tinper-bee 2.0.10
- bee-dropdown@2.0.5
    - [Feature] 新增disabled是否禁用属性
- bee-datepicker@2.0.33
    - [Feature] 新增 dropdownClassName 面板类名
    - [Feature] 日期校验不正确，不关闭日期面板
    - [Feature] rangepicker tab按键切换
    - [Featrue] 新增closeIcon 自定义鼠标划过清空内容的icon
- bee-input-number@2.0.9
    - [Feature] 值可以为空
    - [Fixbug] 最大值最小值无效bug
- bee-modal@2.0.9
    - [Feature]error语义模态框图标换为uf-exc-c
- bee-form-control@2.0.2
    - [Feature]新增onkeydown回调
- bee-overlay@1.0.26
    - [Fixbug]解决Position传入positionTop和positionLeft无效的问题
    - [Fixbug]解决警告："Refs Must Have Owner Warning"
- bee-table@2.0.17
    - [Feature]树形表格的图标换成箭头
    - [Fixbug]解决无滚动条时，拖拽行报错问题
    - [Feature]优化过滤列样式
    - [Fixbug]解决表体滚动时表头未同步滚动的问题
    - [Feature]多选表格，调整复选框为水平居中对齐
    - [Fixbug]固定列多出一行导致滚动错位问题
    - [Feature]支持用户自定义展开和关闭图标
- bee-transfer@2.0.12
    - [Fixbug]解决复选框和节点间的间距过宽的问题
    - [Fixbug]解决动态改变targetKeys时，列表数据未更新的问题
    - [Fixbug]解决控制台警告问题
    - [Feature]选中节点去掉hover样式
    - [Feature]支持自定义右侧已选列表的排列顺序
    - [Feature]增加`appendToBottom`参数，支持将已选项添加到右侧列表末尾
    - [Fixbug]解决dataSource为空时报错的问题
- bee-colorpicker@0.0.9
    - [Feature]增加disabled参数，设置是否禁用
- bee-popover@2.0.2
    - [Fixbug]解决设置`positionLeft`和`positionTop`属性无效的问题
- bee-icon@1.0.11
    - [Feature]更新Table无数据的字体图标
- tinper-bee-core@2.0.31
    - [Feature]更新Table无数据的字体图标
    - [Feature]规范提示类组件语义色
    - [Feature]增加字体大小变量
- bee-notification@2.0.1
    - [Fixbug]关闭按钮替换为Icon图标，解决 `x` 符号乱码问题
- bee-message@2.0.3
    - [Feature]组件交互按新规范优化
    - [Feature]关闭按钮距右的间距改为16px
- bee-cascader@2.1.4
    - [Feature]增加 `inputValue` API，支持自定义输入框展示内容
- bee-modal@2.0.9
    - [Feature]error模态框的图标换成“uf-exc-c”
- bee-step@2.0.1
    - [Feature]按新规范优化组件
- bee-loading@1.1.1
    - [Feature]Loading图片本地化

## tinper-bee 2.0.9
- bee-drawer@0.0.2
    - [Feature]Drawer 抽屉组件。【新增组件】
- bee-affix@1.0.15
    - [Feature]将页面元素钉在可视范围。【新增组件】
- bee-carousel@3.0.0
    - [Feature]新增组件
- bee-table@2.0.15
    - [Feature]tinper-bee中上一个版本为2.0.12。
    - [Feature]增加了拖拽行数据交换列功能，通过设置rowDraggAble的属性即可实现。
    - [Fixbug] 解决了过滤列在滚动的时候，样式问题。
    - [Fixbug] 表头交换顺序、表头拖拽列宽 功能以及API优化，在IE 11上卡顿问题、内存泄漏问题、以及交互体验修改升级。
    - [Fixbug] multiSelect 和 newmultiSelect 功能不同步问题。
    - [Fixbug] 表头字体大小，目前均为12px。
    - [Fixbug] filterColumn内容超出8个字显示省略号，filterColumn 中item字体为12px，点击文字。
    - [Fixbug] filterColumn 点击文字可选中行。
    - [Fixbug] 每行第一列padding-left为12px，其他默认8px。
    - [Fixbug] 增加表格内容是否显示在一行headerDisplayInRow、bodyDisplayInRow。
    - [Feature]增加`size`API，支持三种数据显示密度：宽松、标准、紧凑 (v@2.0.13)
    - [Feature]表格默认行高规范为40px  (v@2.0.13)
- bee-switch@2.0.4 
    - [Feature]新增onKeyDown回调，enterKeyDown开关控制enter事件
- bee-select@2.0.11
    - [Feature]新增onKeyDown回调，enterKeyDown开关控制enter事件
    - [Feature]新增下拉框自定义属性功能
- bee-timepicker@2.0.3
    - [Feature]新增onKeyDown回调
- bee-datepicker@2.0.28
    - [Feature]新增onKeyDown回调
- bee-anchor@0.0.4
    - [Fixbug]升级 gumshoejs
- bee-overlay@1.0.23 
    - [Feature]新增自定义属性 popData
- bee-modal@2.0.8
    - [ Feature ] bee-modal组件，新增了宽高拖拽resize功能 (v2.0.6)
    - [Feature]语义模态框，内容区去掉margin (v2.0.6)
    - [Fixbug]解决单独使用Modal组件，使用API方法调用时报错：React is not define 的问题  (v2.0.7)
    - [Fixbug]解决控制台打印warning的问题  (v2.0.8)
- bee-tabs@2.0.4
    - [Fixbug]去掉内容区的内联样式：height:100%
- bee-radio@2.0.8
    - [Fixbug]解决无文本的单选按钮，Label高度过高的样式问题
    - [Fixbug]解决无文本的单选按钮，Label高度过高的样式问题
- bee-colorpicker@0.0.8
    - [Fixbug]解决ColorPicker设置value属性，色块没有随之改变的问题
- bee-transfer@2.0.9
    - [Feature]增加`draggable`参数，设置是否可以通过拖拽进行穿梭和排序
    - [Feature]增加`showCheckbox`参数，设置是否显示复选框Checkbox
- bee-pagination@2.0.7
    - [FixBug]解决单独引用组件时，缺少Select样式的问题
- bee-message@2.0.2
    - [Fixbug]解决Message组件被Modal组件遮盖的问题
    - [Fixbug]解决Message.config()方法无效的问题
- bee-tree@2.0.10
    - [Fixbug]解决树节点过宽的问题
    - [Fixbug]树节点宽度改为calc(100%-40px)
- bee-popover@2.0.1
    - [Fixbug]解决`placement`属性设置为`topRight`时，控制台打印warning的问题
- bee-overlay@1.0.24
    - [Fixbug]补充`placement`属性的取值范围，解决`placement`属性设置为`topRight`时，控制台打印warning的问题
- bee-search-panel@3.0.0
    - [Fixbug]修改了showOperation 无效的bug，且发布3.x.x(结构性变化)。

## tinper-bee 2.0.8
- bee-drawer@0.0.2
    - [Feature]Drawer 抽屉组件。【新增组件】
- bee-affix@1.0.15
    - [Feature]将页面元素钉在可视范围。【新增组件】
- bee-carousel@3.0.0
    - [Feature]新增组件
- bee-table@2.0.15
    - [Feature]tinper-bee中上一个版本为2.0.12。
    - [Feature]增加了拖拽行数据交换列功能，通过设置rowDraggAble的属性即可实现。
    - [Fixbug] 解决了过滤列在滚动的时候，样式问题。
    - [Fixbug] 表头交换顺序、表头拖拽列宽 功能以及API优化，在IE 11上卡顿问题、内存泄漏问题、以及交互体验修改升级。
    - [Fixbug] multiSelect 和 newmultiSelect 功能不同步问题。
    - [Fixbug] 表头字体大小，目前均为12px。
    - [Fixbug] filterColumn内容超出8个字显示省略号，filterColumn 中item字体为12px，点击文字。
    - [Fixbug] filterColumn 点击文字可选中行。
    - [Fixbug] 每行第一列padding-left为12px，其他默认8px。
    - [Fixbug] 增加表格内容是否显示在一行headerDisplayInRow、bodyDisplayInRow。
    - [Feature]增加`size`API，支持三种数据显示密度：宽松、标准、紧凑 (v@2.0.13)
    - [Feature]表格默认行高规范为40px  (v@2.0.13)
- bee-switch@2.0.4 
    - [Feature]新增onKeyDown回调，enterKeyDown开关控制enter事件
- bee-select@2.0.11
    - [Feature]新增onKeyDown回调，enterKeyDown开关控制enter事件
    - [Feature]新增下拉框自定义属性功能
- bee-timepicker@2.0.3
    - [Feature]新增onKeyDown回调
- bee-datepicker@2.0.28
    - [Feature]新增onKeyDown回调
- bee-anchor@0.0.4
    - [Fixbug]升级 gumshoejs
- bee-overlay@1.0.23 
    - [Feature]新增自定义属性 popData
- bee-modal@2.0.8
    - [ Feature ] bee-modal组件，新增了宽高拖拽resize功能 (v2.0.6)
    - [Feature]语义模态框，内容区去掉margin (v2.0.6)
    - [Fixbug]解决单独使用Modal组件，使用API方法调用时报错：React is not define 的问题  (v2.0.7)
    - [Fixbug]解决控制台打印warning的问题  (v2.0.8)
- bee-tabs@2.0.4
    - [Fixbug]去掉内容区的内联样式：height:100%
- bee-radio@2.0.8
    - [Fixbug]解决无文本的单选按钮，Label高度过高的样式问题
    - [Fixbug]解决无文本的单选按钮，Label高度过高的样式问题
- bee-colorpicker@0.0.8
    - [Fixbug]解决ColorPicker设置value属性，色块没有随之改变的问题
- bee-transfer@2.0.9
    - [Feature]增加`draggable`参数，设置是否可以通过拖拽进行穿梭和排序
    - [Feature]增加`showCheckbox`参数，设置是否显示复选框Checkbox
- bee-pagination@2.0.7
    - [FixBug]解决单独引用组件时，缺少Select样式的问题
- bee-message@2.0.2
    - [Fixbug]解决Message组件被Modal组件遮盖的问题
    - [Fixbug]解决Message.config()方法无效的问题
- bee-tree@2.0.10
    - [Fixbug]解决树节点过宽的问题
    - [Fixbug]树节点宽度改为calc(100%-40px)
- bee-popover@2.0.1
    - [Fixbug]解决`placement`属性设置为`topRight`时，控制台打印warning的问题
- bee-overlay@1.0.24
    - [Fixbug]补充`placement`属性的取值范围，解决`placement`属性设置为`topRight`时，控制台打印warning的问题
- bee-search-panel@3.0.0
    - [Fixbug]修改了showOperation 无效的bug，且发布3.x.x(结构性变化)。


## tinper-bee 2.0.7
- bee-form@2.0.11
    - [Feature]去掉输入框最小宽度限制
    - [Feature]优化表单示例的错误提示，新增警告icon
- bee-radio@2.0.7
    - [Feature]按UI规范优化RadioButton的样式
    - [Feature]文字大小由14px修改为12px
    - [Feature]解决label无内容时，选中样式错位的问题
    - [Fixbug]解决disabled态的按钮被覆盖在panel面板下的问题
    - [Feature]优化RadioButton的样式
- bee-checkbox@2.0.5
    - [Feature]文字大小由14px修改为12px
- bee-tabs@2.0.3
    - [Feature]规范顶部border样式
- bee-modal@2.0.5
    - [Feature]增加`draggable`参数支持可拖拽能力
    - [Feature]提供Modal.method()，支持使用API的方式调用组件
    - [Feature]关闭图标颜色改为#505F79
    - [Feature]模态框box-shadow改为：0 4px 6px Rgba(23, 43, 77, .3)
    - [Feature]模态框border样式改为：1px solid  Rgba(9, 30, 68, 0.08)
    - [Feature]模态框modal-body中的文字大小改为12px
    - [Feature]字体颜色统一为#212121
    - [Feature]图标字体的font-weight改为500
    - [Feature]标题和正文部分间距增加到8px
- bee-colorpicker@0.0.7
    - [Feature]增加透明度设置
    - [Feature]提供默认的hex和rgb值
    - [Feature]增加placeholder属性设置
    - [Feature]自动计算hover和active，返回色值对象
    - [Feature]修改onChange事件，返回包含`class`、`rgb`、`hex`属性的对象
    - [Feature]选中色块中的图标颜色根据背景色动态计算
    - [Feature]样式修复
    - [Fixbug]解决下拉框选择颜色后，关闭弹窗，再次打开时，选择项未保存的问题
    - [Fixbug]解决选择颜色后点击取消按钮，选择项被保存的问题
    - [Fixbug]alpha最大值改为100
    - [Feature]alpha的输入框改用InputGroup组件
    - [Feature]增加alpha修改后颜色预览区域的背景图
- bee-switch@2.0.3
    - [Feature]按新规范更新组件
- bee-pagination@2.0.6
    - [Fixbug]解决依赖组件的CSS打包问题
- bee-transfer@2.0.8
    - [Feature]升级依赖
- bee-clipboard@2.0.1
    - [Feature]升级依赖
- bee-select@2.0.9
    - [Feature]下拉框禁用状态与输入框统一
    - [Feature]多选下拉的选中状态标识改为主题红色#f53c32
- bee-tree@2.0.9
    - [Feature]升级依赖
    - [Feature]组件样式按规范调整
- bee-autocomplete@2.0.2
    - [Feature]增加参数`show`，控制自动匹配列表的展开和隐藏
    - [Feature]提供下拉框选中时触发的回调函数`onSelectOption`
- bee-table@2.0.12
    - [Feature]优化嵌套子表格的样式
- bee-search-panel@2.0.12
    - [Feature]加多语
    - [Fixbug]查询清空按钮显示隐藏bug
- bee-locale@0.0.13
    - [Feature]新增search-panel多语字典
- bee-datepicker@2.0.21
    - [Fixbug]年月快捷键bug修复
    - [Fixbug]年组件报错bug
- bee-tag@0.0.2
    - [Feature]新增bee-tag标签组件
    
## tinper-bee 2.0.6
- [feature] 新增bee-anchor 锚点组件
- [Fix]bee-table (2.0.6 ~ 2.0.10)
    - 去掉lib中多选中的checkbox的引用
    - 修改checkbox样式
    - 行过滤点击已选的无效
    - table拖拽后，表格宽度没有同步bug
- [Fix]bee-datepicker (2.0.10 ~ 2.0.19)
    - 选择日期后焦点回到输入框
    - 日期容器增加className
- [Fix]bee-search-panel (2.0.8 ~ 2.0.10)
    - 升级组件，按照 HeadContainer(常驻区)、AdvancedContainer(收起区) 两部分。
- [Feature]bee-dnd@1.1.2，文字颜色规范为#212121
- [Feature]bee-tree@2.0.7
    - 统一边框色
    - 复选框样式问题
- [Feature]bee-colorpicker@0.0.2
    - 新增拾色器组件
    - [Fixbug]解决清空输入框后，再次选择色值无效的问题
- [Feature]bee-pagination@2.0.5，组件改为默认带边框，支持通过noBorder属性去掉边框
- [Feature]bee-tooltip@2.0.4，去掉tooltip的透明度
- [Feature]bee-table@2.0.9
    - 修改表头背景色、分割线颜色、文字颜色
    - 操作列示例统一使用bee-popconfirm组件 
- [Feature]bee-button@2.0.10
    - 次按钮背景色改为 #ECEFF1，hover和active态背景色改为 #DFE1E6
- [Feature]bee-loading(1.0.6 ~ 1.0.9)
    - v1.0.7之后的版本将废弃`color`API
    - 遮罩层透明度由0.7改为0.4
    - 更换了loading加载的图标
    - 修改loading转速
    - 规范不同尺寸的loading图标大小
    - 解决loading遮罩层没有固定在全屏显示的问题
    - 规范loading描述的文字样式
- bee-cascader(2.1.3 ~ 2.1.3)
    - [Fixbug]解决清空已选后，下拉面板中的状态未更新问题
    - [Feature]placeholder字体大小统一为12px，禁用图标色为#c1c7d0
    - [Fixbug]解决Safari浏览器中下拉面板错位的问题
- [Feature]bee-menus(2.0.4 ~ 2.0.6)
    - 优化“dark”主题的menus样式
- [Feature]bee-checkbox@2.0.4
    - 修改复选框间的margin
- [Feature]bee-form@2.0.9
    - 封装Form/FormItem组件，将体验规范预置在组件内部


## tinper-bee 2.0.5
- [Feature]bee-tabs@2.0.2，优化 bee-tabs 组件交互体验及对应示例
- [Feature]bee-menus@2.0.4，统一选中色、文字色、图标色、禁用文字色规范
- [Feature]bee-cascader@2.1.1，统一选中色、边框规范，修改示例数据
- [Feature]bee-dropdown@2.0.4，统一选中色、文字色规范
- [Feature]bee-select@2.0.8
    - 统一选中色、文字色、禁用文字色规范。
    - 多选设置默认值为字符串时报错加适配
- [Feature]bee-calendar@2.0.4，统一选中色、hover背景色、禁用文字色规范
- [Feature]bee-timepicker@2.0.2，统一选中色、文字色、禁用文字色规范
- [Feature]bee-tree@2.0.6，统一选中色、文字色、禁用文字色规范
- [Feature]bee-datepicker@2.0.10，
    - 统一选中色、文字色、禁用文字色规范
    - 解决双击触发两次change的bug
    - 解决ie11下背景透明bug
- [Feature]bee-city-select@2.0.1，统一选中色、边框颜色规范
- [Fixbug]bee-pagination@2.0.4，解决dataNum值为0时，数据没有更新的Bug
- bee-dnd@1.1.1
    - [Feature]按UI规范优化组件交互效果
    - [Fixbug]解决拖动到不同容器时，样式未保持在拖动样式的问题
- [Fixbug]bee-table@2.0.7
    - package.json中的文件，在组件代码中的使用情况。
    - 所有示例中的依赖，全部换成tinper-bee的依赖。
    - 排查key错误，修改table的源码进行处理，2个地方。
    - 去掉lib中多选中的checkbox的引用
    - 修改checkbox样式
    - 行过滤点击已选的无效
    - table拖拽后，表格宽度没有同步bug
-[Fixbug]bee-input-group-addon@2.0.0、bee-input-group@2.0.2
    去掉边框处理，影响到input-number组件问题，且要依赖升级。
-bee-input-number@2.0.7 
    [Fixbug]依赖组件升级、以及样式修改。
    [Fixbug]解决外边框与输入框有空隙问题
- [Feature]tinper-bee-core@2.0.26
    - 规范bee-modal不同尺寸的宽度
    - 修改表头背景色和表格分割线颜色的默认值

## tinper-bee 2.0.4
- [Fixbug]bee-button@2.0.8，解决按钮active态错误问题
- [Bugfix]bee-dropdown@2.0.3，解决部分下拉菜单缺失hover状态的问题
- [Feature]bee-checkbox@2.0.3
    - 按新UI规范优化组件
    - CheckboxGroup增加`disabled`参数
    - Checkbox增加`inverse`参数，提供两种样式的复选框
- [Feature]bee-radio@2.0.3
    - 按UI规范更新组件
    - 增加`inverse`参数，提供两种样式的单选框
- [Feature]bee-rate@2.0.3，去掉focus样式
- bee-cascader@2.1.0，组件整体重构，按UI规范更新组件
    - [Fixbug]解决选择后，下拉面板中没有保留已选信息的问题
    - [Fixbug]解决选择一级选项并清空，再次选择同一选项时，值选不上的问题
    - [Feature]增加清空已选功能
    - [Feature]增加指定默认值
    - [Feature]增加expandTrigger参数，鼠标hover时展开菜单功能
    - [Feature]增加disabled禁用状态
    - [Feature]增加changeOnSelect属性，点选每级菜单选项值都会发生变化
    - [Feature]增加size属性，设置不同尺寸的级联菜单
- bee-table@2.0.6
    - [Fixbug]升级checkbox
    - [Fixbug]链接文字样式修改
    - [Fixbug]去掉lib中多选中的checkbox的引用
    - [Fixbug]修改checkbox样式
    - [Fixbug]行过滤点击已选的无效
- [Feature]bee-datepicker@2.0.8
    - [Fixbug]Datapicker 输入框右侧图标没有居中。
    - [Fixbug]日历卡片没有使用最新的form-control、选中日历
- [Feature]bee-autocomplete@2.0.1 相关2.0主题依赖组件升级,bee-form-control 需要升级


## tinper-bee 2.0.3

- [Feature]bee-input-group@2.0.1
    - 输入框行高统一为32px
    - 依赖组件升级
- [Feature]bee-datepicker@2.0.8
    - Datapicker 输入框右侧图标没有居中。
    - 日历卡片没有使用最新的form-control、选中日历
- [Feature]bee-input-number@2.0.2
    - 按UE规范优化组件样式
    - 组件样式重构,按照最新的UE规范进行调整组件。
- [Feature]bee-complex-grid@2.0.1
    - 增加表格行hover背景色变量
- [Feature]bee-input-group@2.0.1
    - 输入框行高统一为32px
    - 依赖组件升级
- bee-datepicker@2.0.8
    - [Fix]Datapicker 输入框右侧图标没有居中。 
    [Fix] bee-datepicker  修复rangepicker的disabled功能
- [Feature]bee-input-number@2.0.2
    - 按UE规范优化组件样式
    - 组件样式重构
- [Feature]bee-table@2.0.4
    - 增加表格行hover背景色变量
- [Feature]bee-complex-grid@2.0.1
    - 增加表格行hover背景色变量
- [Feature] bee-cascader 新增动态options功能
- Table
    [Fixbug]数据过少不撑满整个容器时，解决滚动条占位问题
    [Feature]滚动条样式封装，使不同浏览器显示一致
    [Feature]增加heightConsistent属性，解决固定列内容过长导致行高度不统一问题
    [Fixbug] hover出现操作列时，当这行的焦点消失时，对应的操作列隐藏，与该行的动作同步。
     [Fixbug] 增加表格行hover背景色变量的抽取。
- Tree
    [Feature]优化onFocus事件，提供异步、同步两种回调方式
    [Fixbug]解决子节点点击时也会触发onFocus问题
    [Fixbug] 解决点击事件onSelect 延迟触发问题



## tinper-bee 2.0.2

- [Fixbug] 修复bee-select 警告问题。
- [Fixbug] 统一单独引用组件和从tinper-bee中引用组件中的大小写bee-autocomplete 统一为大小驼峰。
- [Fixbug] bee-button-group 带背景色的按钮之间加1px的白色分割线
- [Feature]bee-button@2.0.5
    - 按钮点击后的focus状态和默认样式保持一致
    - 所有按钮的disable状态，去掉hover和active样式
- [Feature]bee-tree@2.0.2
    - 去掉树节点hover时的描边
    - disable态的树节点去掉hover样式
- bee-dropdown@2.0.2
    - [Feature]下拉菜单去掉边框
    - [Fixbug]多级下拉示例的下拉面板错位了
- [Fixbug]下组件为组件相互依赖的版本不对问题的修改，所有均更新为2.0.x版本。影响组件包括如下【bee-select、bee-modal、bee-transfer、bee-cascader、bee-button-group、bee-table、bee-autocomplete、bee-panel】
    bee-form, bee-menus 1.1.0 升级


## tinper-bee 2.0.1升级内容【主题定制、组件优化】

- [Feature] 所有的基础组件由之前的蓝色(#2db7f5)改为红色(#F53C32)，影响范围-(80%组件)。
- [Feature] 下拉式组件，影响范围-[select、autocomplete、datepicker、calendar、dropdown、table、tree、menu]
    - hover背景色变为灰色，hover文字色变为蓝色。
    - 下拉背景色变为深蓝，选中的文字色变为白色。
    - 底部按钮文字色由红色变为蓝色
- [Feature] 在tinper-bee.css 中增加 Datepicker、Calendar 组件的样式。
- [Feature] timepicker
    - 选中的文字色变为主题蓝色
    - bee-timepicker 外层输入框加清空功能
- [Update、Feature]bee-datepicker
    - 底部按钮文字色变为蓝色、所有类型默认增加输入框。
    - 新增快捷键功能：f2打开面板，enter关闭面板
- [Fixbug] 去掉组件中^的版本号，改成具体版本号
- [Fixbug] 修改component中大小写问题。
- [Feature] bee-button
  - 文字颜色由黑色变为主题蓝色 、带边框按钮的文字颜色改为黑色。
  - "size"API 增加取值默认大小“md”
- [Feature] bee-calendar
   - 选中日期的文字色由黑色变为白色
- bee-slider
   - [Feature]锚点色和滑动条色由"info"浅蓝变为"primary"主题蓝色。
- [Feature] bee-pagination
   - 默认页码按钮 由带边框变为无边框、背景色由蓝色变为深灰色、分页去掉确认按钮(可自定义)
- [Feature]bee-menus
    - bee-menus 最外层暴露 tabIndex属性
- bee-table@1.6.41
    - [Feature]Table组件hover某行，动态渲染菜单
    - [Feature]Table组件固定列滚动时显示阴影
    - [Fixbug]Table 拖拽场景下className连到一起的问题 
    - [Feature]表格行内链接文字色由默认的超链接色变为主题蓝色
    - [Fixbug]Table 新增行数达到一定数量会有一个断层
    - [Fixbug]Table 动态控制表格外层显示隐藏，第一次加载的数据渲染不出来
    - [Feature]嵌套表格两个都是bigData场景，动态控制某行是否可以展开
    - [Feature] 前端排序增加回调，返回排序后的数据
    - [Fixbug] 表格行内编辑时，单元格获取焦点时，表格会增加2px问题
- [Fixbug] bee-message
    - 解决使用时报错的问题
- [Fixbug] bee-input-number
    - 解决小数点后无法输入 0 的Bug
- [Fixbug] bee-dropdown
    - 第一个宽度小于按钮，第二个太宽不撑开bug
    - 解决下拉背景色透明问题
- [Feature] bee-loading
    - 修改loading图标
- [Feature] bee-loading-state
    - 显示loading时，默认不给button显示遮罩层、用loadingText替换button的文字
- [Feature]bee-autocomplete
    - hover背景色和文字色关联主题，支持定制
- [Feature] 所有的组件圆角为3px。
- [Feature] 输入框、下拉框 size 统一为40(大)、32(中)、26(小)。
- [Feature] 边框色由之前的(#d9d9d9)调整为(#a5adba)，影响范围-[be-button、be-select、be-form-control、be-cascader、be-timepicker、be-datepicker、be-upload、be-badge、be-autocomplete、be-pagination、be-tooltip、be-input-number、be-city-select]
- [Feature] 主题色由之前的蓝色变为红色(#E60012)，影响范围-(80%组件)。
- [Feature] input 示例中，所有输入框行高32px，，影响范围-组件中带有输入框的组件。
- [Fixbug] be-menus 组件bug修复，缺少部分依赖组件。
- [Fixbug] bee-input-number 组件本身多边框重叠bug修复。

### tinper-bee (2.0.1) 组件升级风险组件

- [Risk] bee-button 不提倡使用button的默认颜色，默认颜色即为primary色。
- [Risk] bee-cascader、bee-timepicker、bee-datepicker 在单独使用时，需要手动引入css样式。
- [Risk] bee-pagination
      1. 默认页码按钮变为无边框
      2. 选中的页码背景色变为深灰色
      3. 默认分页去掉确认按钮，支持自定义传入
- [Risk] bee-select、bee-autocomplete、bee-datepicker、bee-calendar选项的hover背景色变为灰色
- [Risk] "primary"主题色变更，影响的组价如下:
    1. bee-rate 文字和图标的填充色，变为"primary"主题色。
    2. bee-timeline 、bee-slider 的"info"色，变为"primary"主题色。
    3. bee-breadcrumb、bee-tree 文字颜色，变为"primary"主题色。
    4. bee-timepicker 选中的文字色，变为"primary"主题色。
    5. bee-tabs hover状态标签文字颜、选中竖线，变为"primary"主题色。
    6. bee-datepicker hover背景色由浅蓝变为灰色、select背景色、按钮文字色 变为"primary"主题色。选中的文字色由黑色变为白色。
    7.  bee-table  行内链接文字色，变为"primary"主题色。
- [Risk] Autocomplete 在tinper-bee的应用改为AutoComplete。

## 1.6.10-alpha.5
- [Feature] 在tinper-bee.css 中增加 Datepicker、Calendar 组件的样式。

## 1.6.10-alpha.4

- [Feature] bee-autocomplete  1.0.4 --> 1.1.0
- [Feature] ee-badge 1.0.3 --> 1.1.3
- [Feature] form-control 1.1.8 --> 1.1.10 
- [Feature] bee-datepicker V2.0.1  --> 2.0.2
- [Feature] bee-calendar V2.0.0 --> 2.0.1


## 1.6.10-alpha.3

- [Fix] timepicker、datepicker 版本更新
- [Fix] bee-cascader 2.0.0

## 1.6.10-alpha.1

- [Fix] 去掉组件中^的版本号，改成具体版本号
- [Fix] 修改component中大小写问题
- [Feature] 2.0主题内容


## 1.6.10

- [Fix] bee-popconfirm@1.0.15 添加第二优先级渲染方向功能、添加onRootClose的API、添加自定义确定取消按钮
- [Fix] bee-tooltip@1.0.14 添加可配置container的API
- [Fix] bee-popover@1.0.6 添加可配置container的API
- [Fix] bee-grid@1.0.11 增加是否有分页的api(上个版本0.2.44)
- bee-table@1.6.35(上个版本1.6.35)
     1. [Feature] 支持多表头列的排序功能、增加是否开启快捷键功能、自定义列对齐方式、修改表格交换列逻辑修复city-select 组件内部select警告。
     2. [Feature]  增加获取拖拽列宽的colgroup的id、以及table 的id。
- [Fix] bee-select@1.1.8 下拉item高度改为30px
- [Fix] bee-slider@1.0.3 竖直方向的slider重叠问题 V1.0.3
- [Fix] bee-datepicker@1.3.12 新增外层输入框可输入功能
- [Fix] bee-input-number@1.2.2 新增显示千分符的功能

## 1.6.9

- [Fix] bee-table@1.6.21 快捷键修复
- [Fix] bee-tabs@1.0.9 快捷键修复。
- [Fix] bee-menu@0.1.9 快捷键修复。
- [Fix] bee-tree 快捷键修复。
- [Fix] bee-dropdown@1.0.3 快捷键修复。

## 1.6.8

- bee-table@1.6.21
     1. [Feature] 支持快捷键 ↑ ，↓ ，tab 快捷键操作，以及新增快捷键的api。
     2. [Feature]  增加懒加载功能 ，支持大数据量加载。
- [Feature] bee-tabs@1.0.9 增加tabIndex api。
- [Feature] bee-menu@0.1.9 支持快捷键操作。
- [Feature] bee-tree 支持快捷键操作， ↑ ，↓  选中功能。
- [Feature] bee-dropdown@1.0.3 新增快捷键。
- [Feature] bee-tooltip@1.0.14 增加鼠标滑过API。
- [Feature] bee-message@1.0.13 将icon改为默认不显示

-  应用组件部分 
   [Fix] ac-attachment 添加disabled按钮禁用选项

## 1.6.7 

- [Fix] bee-pagination 添加dataNumSelect数组中有不是数字的容错处理，选中此项将items设置为1即只显示1页(上一个版本是1.0.2)
- [Fix] bee-overlay 添加window.resize触发更新窗口位置的功能 
- [Fix] bee-tooltip  添加window.resize触发更新窗口位置的功能 
- [Fix] bee-popover  添加window.resize触发更新窗口位置的功能  
- [Fix] bee-popconfirm  添加window.resize触发更新窗口位置的功能  
- [Fix] bee-table(上个版本1.5.18)
  1. 解决交换列咋ie上报错的问题
  2. 合计逻辑重构、合计浮点数，合计时，精确到2位小数
  3. 过滤行没有数据的时候不执行回调、清除值只清空存在的值，不多次回调
  4. 增加 Hover状态是否同步到左侧Checkbox属性syncHover
  5. 优化tableheader代码、注释、文档补全
  6. 实现过滤行新功能，增加可设置单独条件属性filterDropdownIncludeKeys
  7. 去掉过滤的一些限制
  8. 固定列滚动条不可拖拽
  9. 解决行过滤能拖拽问题、解决行过滤事件丢失问题
  10. 标题全选问题解决
  11. 拖拽横向滚动条兼容固定列
  12. Table组件增加了指定的下拉条件设置API:filterDropdownIncludeKeys
  13. 交换列和拖拽改变列宽共存问题。
  14. 拖拽激活区宽度超长导致滚动条显示bug
  - [Fix,Feature] bee-complex-grid(上个版本是0.2.44)
   1. 增加导出excel功能。
   2. 增加模板示例功能
   3. 最后一个非固定列不可以fix
   4. 动态设置是否显示列过滤bug。
   5. 增加导出示例、导出单独设置数据源、是否要在导出中隐藏某列、修改demo 示例以及文档

## 1.6.5

- [Fix] bee-input-number 去掉输入非数字错误提示， onChange改为数值类型
- [Feature] bee-radio 全键盘问题修改
- [Feature] bee-form-control type='search' 改造
- [Feature] bee-datepicker 全键盘操作
- [Fix] bee-panel uf 样式去掉
- [Feature] bee-table 
  1. 表格过滤支持数值过滤下拉
  2. 过滤行添加InputNumber组件来支持数值操作，增加对应多语资源，Icon颜色修改
  3. 增加onFilterChange、onFilterClear
  4. 整合回调参数集合
- [Feature] bee-complex-grid 
  1. 拖拽激活区宽度超长导致滚动条显示bug
  2. 增加是否可过滤API-columnFilterAble
  3. 固定列在过滤栏位上显示但不可以点击

## 1.6.4
- [Feature] bee-checkbox 新增group功能、支持全键盘操作
- [Fix] bee-modal 修改width适配 、number警告、 修复无法在style中设置width的问题
- [Feature] bee-radio 支持全键盘操作
- [Feature] bee-datepicker 全键盘操作
- [Fix] bee-popover 修复箭头指向的bug 
- bee-table 
   [Fix]1. 拖拽动态显示滚动条 * table warning 宽度NAN警告处理。
   [Feature]2. 交换列、拖拽列宽共存问题。
   [Fix]3. 交换列有阴影错误问题。
   [Feature]4. bee-table 增加过滤行数值型输入、数值型条件选择

## 1.6.3
- bee-select 计算宽度性能问题，键盘快捷键
- bee-step 升级，1px抖动 
- bee-menu srcollIntoView 报错
- bee-form-control 示例无法输入
- bee-city-select更新语言包
- bee-modal 关闭图标改为uf-close
- bee-input-number样式更改，无法输入小数
- bee-notification 添加键盘esc关闭功能
- bee-message 添加键盘esc关闭功能
- bee-popconfirm 修复浏览器边界箭头指向的bug
- bee-tooltip 添加visible API 
- bee-overlay 添加visible API
- ac-input-locale加了form表单校验
- bee-table
  1. 把newmultiSelect和multiSelect代码合并。
  2. 修复表头全选进入选中问题。
  3. 拖拽列和交换列在通一个示例中使用。

## 1.6.2
- bee-select  多选的下拉框闪、配合form在onBlur校验时报错
- bee-overlay 加判断去掉 clearTimeout
- bee-affix affix容器动态宽高时，减少affix位置的计算次数
- bee-input-number 在form下传string改number警告
- bee-viewer  新增组件图片查看器
- bee-locale   新增繁体语言
- bee-table 
  1. 过滤行为空条件删除.
  2. 过滤行失去焦点事件还原。npm install -S bee-s
  3. 支持表头出现滚动条。
  4. grid封装了推拽、交换列、过滤列、合计、多选、排序、等复杂table功能，提供过去列属性和table属性API

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


