import {
  ElAutocomplete,
  ElCheckbox,
  ElCheckboxGroup,
  ElDatePicker,
  ElInput,
  ElInputNumber,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElSelect,
  ElSelectV2,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect
} from "element-plus";
import FormComp from "..";
import formCompRow from "..";

export type FormCompInstance = InstanceType<typeof FormComp>;
export type FormCompRowInstance = InstanceType<typeof formCompRow>;

/**
 * 通用查询的表单组件
 */
export const commonSearchComponent: string[] = [
  "el-input",
  "el-select",
  "el-date-picker",
  "el-checkbox-group",
  "el-checkbox",
  "el-radio-group",
  "el-radio",
  "el-input-number",
  "el-switch",
  "el-time-picker",
  "el-time-select",
  "el-rate",
  "el-select-v2",
  "el-radio-button",
  "el-autocomplete"
];

/**
 * 组件的shallowReactive
 */
export const commonSearchReactive = {
  "el-input": ElInput,
  "el-select": ElSelect,
  "el-date-picker": ElDatePicker,
  "el-checkbox-group": ElCheckboxGroup,
  "el-checkbox": ElCheckbox,
  "el-radio-group": ElRadioGroup,
  "el-radio": ElRadio,
  "el-input-number": ElInputNumber,
  "el-switch": ElSwitch,
  "el-time-picker": ElTimePicker,
  "el-time-select": ElTimeSelect,
  "el-rate": ElRate,
  "el-select-v2": ElSelectV2,
  "el-radio-button": ElRadioButton,
  "el-autocomplete": ElAutocomplete
};
