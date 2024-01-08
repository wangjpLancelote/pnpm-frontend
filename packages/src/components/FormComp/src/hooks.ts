import { ISelectOption, TGenericCallback } from "./type";
import { useDict } from "@/utils/dict";
import { ElOption } from "element-plus";
import { h } from "vue";

/**
 * 获取dict对应的options
 * @param props ISelectOption
 * @returns []
 */
export const useOptions = (props: ISelectOption): Array<any> => {
  if (props.dict) {
    return useDict(props.dict)[props.doct];
  }
  if (typeof props.options === "function") {
    return props.options();
  }
  return props.options || [];
};

/**
 * 组件是否禁用
 * @param disabled boolean | TGenericCallback<boolean>
 * @returns false
 */
export const useDisabled = (disabled: (boolean | TGenericCallback<boolean>) & any) => {
  if (typeof disabled === "boolean") {
    return disabled;
  } else if (typeof disabled === "function") {
    return disabled();
  }
  return false;
};

/**
 * dict下的valueKey
 * @param props any
 * @returns string
 */
export const useValueKey = (props: any) => {
  if (props.valueKey) {
    return props.valueKey;
  }
  return props.fieldProp ? props.fieldProp.value : "dictItem";
};

/**
 * 获取select option 显示的label值
 * @param {*} row 下拉行数据
 * @param {*} props 组件配置项
 */
function getSelectOptionShowLabel(row: any, props: any) {
  const labelKey = useLabelKey(props);

  if (typeof labelKey === "string") {
    return row[labelKey];
  } else if (Array.isArray(labelKey)) {
    const valueList: any[] = [];
    labelKey.forEach((key) => {
      if (row[key]) {
        valueList.push(row[key]);
      }
    });
    return valueList.join("-");
  }
}

/**
 * 格式化select下拉选option的label
 * @param {*} row 下拉选行数据
 * @param {*} labelKey
 * @param {*} props 组件配置项
 * @returns
 */
function formatSelectOptionLabel(row: any, props: any) {
  if (props.formatSelectOptionLabel instanceof Function) {
    return props.formatSelectOptionLabel(row);
  }
  return getSelectOptionShowLabel(row, props);
}

/**
 * 格式化select下拉选option的展示的label
 * @param {*} row 下拉选行数据
 * @param {*} labelKey
 * @param {*} props 组件配置项
 * @returns
 */
export function formatSelectShowLabel(row: any, props: any) {
  if (props.formatSelectShowLabel instanceof Function) {
    return props.formatSelectShowLabel(row);
  }
  if (props.isFormatShowLabel) {
    return formatSelectOptionLabel(row, props);
  }
  return getSelectOptionShowLabel(row, props);
}

/**
 * dict下的labelKey
 * @param props any
 * @returns string
 */
export const useLabelKey = (props: any) => {
  if (props.valueKey) {
    return props.labelKey;
  }
  return props.fieldProp ? props.fieldProp.label : "dictItemName";
};

/**
 * 渲染options列表
 * @param options 数组
 * @param props 属性
 * @param optionClick options列指定的点击方法
 * @returns VueElement
 */
export const useSelectOptionsRender = (options: Array<any>, props: any, optionClick: any = null) => {
  const valueKey = useValueKey(props);
  const { selectLabelMaxWidth, readonly } = props;
  // label是否设置最大宽，是否需要渲染ui-ellipsis组件
  const useEllipsis = typeof selectLabelMaxWidth === "boolean" && selectLabelMaxWidth;
  return options.map((item, index) => {
    // 下拉选项展示的label值
    const showLabel = formatSelectShowLabel(item, props);

    // select下拉框选择展示提示信息
    // const tipsRender = h(
    //   'el-tooltip',
    //   {
    //     attrs: { placement: 'top' },
    //     props: { content: showTips }
    //   },
    //   showTips ? [h('span',{ class: 'kui-icon-question-fill ui-tips-icon' })] : '');
    return h(
      // 'el-option',
      ElOption,
      {
        key: item[valueKey],
        class: useEllipsis ? "select-item-ellipsis" : "",
        value: item[valueKey],
        label: formatSelectOptionLabel(item, props), // 选中后输入框中显示的label值
        disabled: item.disabled || readonly,
        props: {
          value: item[valueKey],
          label: formatSelectOptionLabel(item, props) // 选中后输入框中显示的label值
        },
        onClick: () => {
          if (optionClick instanceof Function) {
            optionClick(item, index);
          }
        }
      },
      {
        default: () =>
          props.labelValue // labelValue为true时，code显示在右侧
            ? [showLabel, h("span", { class: "select-option-code" }, { default: () => item[valueKey] })]
            : showLabel
      }
    );
  });
};
