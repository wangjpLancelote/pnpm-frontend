## ui-com-form

通用表单组件。

### **属性**

| 参数             | 说明                                                                                                                                                                                   | 类型    | 默认值 | 可选值                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | -------------------------- |
| title            | 表单标题                                                                                                                                                                               | String  | ''     | -                          |
| visible          | 是否显示                                                                                                                                                                               | Boolean | false  | true/false                 |
| isDialog         | 是否以对话框显示，若不配置，默认根据传入的表单项 formItems 或 kuiFormItems 进行判断，小于等于 15 个时，显示对话框                                                                      | Boolean | null   | true/false                 |
| dialogWidth      | 对话框宽度，当为 0 时取默认值，根据列数判断，1 列为页面的 30%，2 列为页面的 50%                                                                                                        | Number  | 0      | -                          |
| dialogMinWidth   | 对话框最小宽度，只对表单显示 2 列时有效                                                                                                                                                | Number  | 680    | -                          |
| isShowButton     | 按钮区域是否显示                                                                                                                                                                       | Boolean | true   | true/false                 |
| isShowSubmitBtn  | 提交按钮是否显示                                                                                                                                                                       | Boolean | true   | true/false                 |
| submitBtnLoading | 提交按钮的 loading 状态                                                                                                                                                                | Boolean | false  | true/false                 |
| labelWidth       | 表单 label 宽度                                                                                                                                                                        | String  | 100px  | -                          |
| labelPosition    | 表单 label 对齐方式                                                                                                                                                                    | String  | right  | right/left/top             |
| formModel        | 表单 model                                                                                                                                                                             | Object  | {}     | -                          |
| formItems        | 表单配置，具体配置可查看[formItems 属性](#formItems 属性)说明                                                                                                                          | Array   | []     | -                          |
| kuiFormItems     | 兼容 kui-form 的配置，formItems 和 kuiFormItems 只能配置一个。具体配置可查看[formItems 属性](#formItems 属性)配置说明                                                                  | Array   | []     | -                          |
| colNums          | 表单展示列数，当为 0 时，在对话框形式下，表单个数<=7 时，显示 1 列；当>7 且<=15 时，显示 2 列。在页面形式下，默认显示 2 列。<br />对话框表单，最多显示 2 列；页面表单，最多显示 3 列。 | Number  | 0      | -                          |
| formDisabled     | 全部表单项是否禁用                                                                                                                                                                     | Boolean | false  | true/false                 |
| draggable        | 【对话框形式表单有效】对话框是否可拖动                                                                                                                                                 | Boolean | true   | true/false                 |
| dialogBtns       | 【对话框形式表单有效】对话框按钮配置，具体配置可参考**kui-dialog**组件配置说明                                                                                                         | Array   | []     | -                          |
| dialogWidth      | 【对话框形式表单有效】对话框宽度，0 时取默认值，根据列数判断，1 列为页面的 30%，2 列为页面的 50%                                                                                       | Number  | 0      | -                          |
| dialogMinWidth   | 【对话框形式表单有效】对话框最小宽度，只对表单显示 2 列时有效                                                                                                                          | Number  | 680    | -                          |
| customClass      | 【对话框形式表单有效】dialog 的 custom-class 属性，Dialog 的自定义类名                                                                                                                 | String  | -      | -                          |
| isFixed          | 【页面形式表单有效】按钮是不是固定在屏幕下面,若为 false,按钮跟随内容下面。                                                                                                             | Boolean | true   | true/false                 |
| isGroup          | 【页面形式表单有效】是否分组, 表单项较多时需要分组, 具体配置可查看[formItems 分组](#formItems分组)说明                                                                                 | Boolean | false  |                            |
| tipsInfo         | 标题提示信息                                                                                                                                                                           | String  | ''     | -                          |
| tipsType         | 标题提示类型                                                                                                                                                                           | String  | info   | success/warning/info/error |
| tipsIcon         | 标题信息是否显示图标                                                                                                                                                                   | Boolean | true   | true/false                 |
| tipsClose        | 标题信息是否可关闭                                                                                                                                                                     | Boolean | true   | true/false                 |
| height           | 【页面形式表单有效】表单页面高度                                                                                                                                                       | Number  | 0      | -                          |
| isShowAnchor     | 【页面形式表单有效】分组表单是否显示锚点                                                                                                                                               | Boolean | false  | true/false                 |
| extendAnchorList | 【页面形式表单有效】扩展锚点列表，用于自定义插槽 otherSlot 中内容也与锚点关联                                                                                                          | Array   | []     | -                          |

#### formItems 属性

| 参数            | 说明                                                                                                                                                 | 类型          | 可选值                                                   | 默认值 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------- | ------ |
| prop            | 表单 model 字段                                                                                                                                      | String        | 传入的 formModel 中字段                                  | -      |
| label           | 标签文本，支持国际化配置，如：$t[ownInfo.renyuan_bianhao]                                                                                            | String        | -                                                        | -      |
| type            | 渲染的组件名，formItems 属性有效，传入时，需填写完整的组件名，如 kui-input                                                                           | String        | 已经注册的组件名                                         | -      |
| mold            | 渲染的组件名，kuiFormItems 属性有效，传入时需省略前缀 kui-                                                                                           | String        | 已经注册的 kui 为前缀的组件名                            | -      |
| visible         | 表单项是否显示                                                                                                                                       | Boolean       | true/false                                               | true   |
| required        | 是否必填                                                                                                                                             | Boolean       | true/false                                               | false  |
| validator       | 表单项自定义校验                                                                                                                                     | Function      | -                                                        | -      |
| rules           | 表单校验规则                                                                                                                                         | Array\|Object | el-form-item 的校验规则配置                              | -      |
| props           | 渲染的组件属性(使用 kuiFormItems 时可不配置 props，其属性可与 label 属性同级传入)                                                                    | Object        | 参考[formItems props 属性](#formItems props 属性)说明    | {}     |
| event           | 渲染的组件抛出的事件<br />其中 kui-select 组件，扩展了 kui-option 的点击事件，入参为当前点击的 option 项配置和索引，optionClick: (item, index) => {} | Object        | -                                                        | {}     |
| renderSlot      | 适用于 input 组件 slot 内容的渲染，使用 render 函数                                                                                                  | Function      | -                                                        | -      |
| extend          | 渲染扩展组件，适用于一个表单项绘制两个组件的情况                                                                                                     | Object        | 配置同 formItems，示例参考[extend 配置](#extend配置)说明 |        |
| formItemAttrs   | el-form-item 额外参数                                                                                                                                | Object        | -                                                        | {}     |
| isCustomGrid    | 是否使用默认栅格，如果为 false，需要传入 span 和 offset 属性                                                                                         | boolean       | true/false                                               | false  |
| span            | 【isCustomGrid=true 时有效】表单项栅格数                                                                                                             | Number        | 0<num<=24                                                | -      |
| offset          | 【isCustomGrid=true 时有效】表单项左侧偏移栅格数                                                                                                     | Number        | 0<num<=24                                                | -      |
| isCustomContent | 表单项是否使用自定义内容，如果为 true 则栅格为 24，适用于在表单配置中渲染占满一行的自定义组件                                                        | Boolean       | true/false                                               | false  |
| reviewFields    | 【复核模式（action = R、RV）】复核时，新旧值对比的字段配置，适用组合字段表单项                                                                       | Array         | -                                                        | -      |
| renderLabel     | 自定义表单 label 内容                                                                                                                                | Function      | -                                                        | -      |
| colNums         | 配置表单项所占列数                                                                                                                                   | Number        | 1,2,3(3 为表单项显示 3 列时有效)                         | 1      |
| prompt          | 字段提示信息，当配置时，在对应输入框右侧有个问号图标，鼠标移入图标时显示提示。                                                                       | string        | -                                                        | -      |

#### formItems props 属性

除了支持**渲染的组件所有属性**以外，还增加以下属性：

| 参数                    | 说明                                                                                                                                                                                                                                                                                                       | 类型            | 可选值     | 默认值                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------- | --------------------------------------------------------- |
| ref                     | 组件 ref 定义                                                                                                                                                                                                                                                                                              | String          | -          | -                                                         |
| dict                    | 字典值，一般用于获取字典项用作下拉列表值，支持格式如：30001（字典号）、<br />30001\|include:1,2（字典号\|include:字典值 1,字典值 2）、<br />30001:1\|include:1,2（字典号:itemType\|include:字典值 1,字典值 2）<br/><br />其中 include 为包含字典值，include 关键词位置还可以配置 exclude，配置不包含字典值 | String          | -          | -                                                         |
| ~~url~~                 | ~~查询接口，一般用于结果集作下拉列表值~~                                                                                                                                                                                                                                                                   | ~~String~~      | ~~-~~      | ~~-~~                                                     |
| param                   | 查询接口的参数，配合 url 使用                                                                                                                                                                                                                                                                              | Object          | -          | {}                                                        |
| options                 | 选项列表，优先级：dict>url>options                                                                                                                                                                                                                                                                         | Array\|Function |            |                                                           |
| fieldProp               | 选项列表属性指定 value、label、key 字段                                                                                                                                                                                                                                                                    | Object          | -          | {value: "dictItem",key: "dictItem",label: "dictItemName"} |
| labelValue              | 下拉列表是否显示 value 字段                                                                                                                                                                                                                                                                                | Boolean         | true/false | false                                                     |
| children                | el-checkbox-group 下的 el-checkbox、el-radio-group 下的 el-radio 的属性配置                                                                                                                                                                                                                                | Object          | -          | {}                                                        |
| formatSelectOptionLabel | 【select 组件有效】格式化下拉 option 的 label 值，用于选中值之后，输入框中展示的值                                                                                                                                                                                                                         | Function        | -          | (row) 下拉选行数据                                        |
| isFormatShowLabel       | 【select 组件有效】是否格式化 option 展示值，如果为 true 且 formatSelectOptionLabel 存在，则显示 formatSelectOptionLabel 返回的值                                                                                                                                                                          | Boolean         | true/false | false                                                     |
| formatSelectShowLabel   | 【select 组件有效】格式化 option 展示值，用于 option 组件 label 值和显示值不一致的情况                                                                                                                                                                                                                     | Function        | -          | (row) 下拉选行数据                                        |

#### extend 配置

```javascript
const formItems = [
	{
    	type: "kui-select",
        prop: "feeCalcFormula",
        label: "计费公式",
        required: true,
        props: {
           options: this.feeCalcFormulaList,
           valueKey: "formulaId",
           labelKey: ["formulaId", "formulaDescr"],
           showInputTooltip: true,
           clearable: true,
           style: {
             width: "calc(100% - 20px)"     // 需要设置宽度，否则默认占100%
           }
         },
        // extend里的配置同formItems单个表单项配置一致
         event: {
           change: this.changeFormula
         },
         extend: {
           type: "kui-button",
           props: {
             type: "text",
             icon: "el-icon-setting",
             style: {
               width: "20px"                // 需要设置宽度，否则默认占100%
             },
             disabled: this.drawerModel.feeCalcFormula !== "1003"
           },
           event: {
             click: this.openFormulaDialog
           }
         }
    }
];
```

[formItems 分组](#formItems分组)

| 参数           | 说明                                                                               |
| -------------- | ---------------------------------------------------------------------------------- |
| groupName      | 分组 title                                                                         |
| groupList      | 同 formItems 配置                                                                  |
| btns           | 分组右侧按钮,格式为：[{icon: "el-icon-delete", click: () => {}, disabled: true}]   |
| visible        | 整个分组是否显示，可传入 Function、boolean 值，默认为 true                         |
| id             | 分组 id,当不设置时，默认获取索引值供锚点跳转。若分组列表长度有改变，需要设置 id 值 |
| contentVisible | 分组初始渲染时是否展开，默认为 true                                                |

### **方法**

| 方法名        | 说明                        | 参数                                                                                                                   |
| ------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| comFormRef    | 获取 com-form 组件 Ref 对象 | -                                                                                                                      |
| elFormRef     | el-form 组件 Ref 对象       | -                                                                                                                      |
| resetFields   | 表单重置                    | -                                                                                                                      |
| clearValidate | 清除表单校验                | *props*传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                              |
| scrollTo      | 滚动条滚动至目标元素        | (className, isTimeout = false):className 为目标元素样式名；isTimeout 为当第一次获取不到目标元素时，是否延时 300ms 获取 |

### **事件**

| 事件名           | 说明                                                                                                                | 参数                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| on-submit        | 表单提交                                                                                                            | -                          |
| on-cancel        | 页面返回                                                                                                            | -                          |
| on-form-grids    | 表单栅格数，参数类型为数组，长度为 2：[offset, span]                                                                | [offset, span]             |
| on-height-change | 【页面形式表单有效】内容部分高度改变事件; _height 为不包含底部滚动条的高度 containBarHeight 为包含底部滚动条的高度_ | {height, containBarHeight} |

### 插槽

| 名称       | 说明                               |
| ---------- | ---------------------------------- |
| -          | 默认插槽，自定义内容区域           |
| title      | 自定义标题内容                     |
| headerSlot | 自定义页面标题栏右侧               |
| otherSlot  | 定义表单之外的内容                 |
| btns       | 自定义按钮                         |
| tips       | 【对话框形式有效】提示信息插槽     |
| content    | 【对话框形式有效】提示信息下方插槽 |

### 示例

```html
<!-- 测试 -->
<template>

</template>

<script lang="ts">

</script>

<style lang="scss" scoped>

</style>

```

### 更新日志

#### V1.0.0

\_\_2023_08_24

1. 初始化版本
2. 布局还需要优化

#### V1.0.1
