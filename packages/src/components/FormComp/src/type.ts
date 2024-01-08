import { VueElement, Slot, Events } from "vue";

/**
 * 基础回调函数类型
 */
export type TBaseCallback = <T>(args?: any) => T;

/**
 * 带有范型的回调函数类型
 */
export type TGenericCallback<T> = (args?: T) => T;

/**
 * 返回Vue组件实例的函数类型
 */
export type TReturnVueInstance = (args?: any) => VueElement;

/**
 * 表单label类型
 */
export type TFormLabel = string | TReturnVueInstance;

/**
 * 事件触发器的key
 */
export type TEventHandle = keyof Events;

/**
 * 常用基础事件处理
 */
export interface BaseEvents {
  optionClick: MouseEvent; // 会在selection options上处理点击事件
  change: TBaseCallback;
  blur: TBaseCallback;
  focus: TBaseCallback;
  clear: TBaseCallback;
  input: TBaseCallback;
}

/**
 * 额外的事件处理
 * 如visible-change等使用频率很少的事件
 */
export interface ExtraEvents {
  [propName: string]: TBaseCallback;
}

/**
 * 表单组件的组件类型
 */
export interface IFormItems {
  tag: string | VueElement | TReturnVueInstance; // 组件元素
  prop: string; // 组件对应的value绑定的字段
  label?: TFormLabel; // 组件的label
  props?: Record<string, any>; // 组件自带的其他属性
  events?: Partial<Partial<BaseEvents> | ExtraEvents>; // 组件的事件触发器，有对组件额外事件处理时调用
  dict?: string; // 字典key值，一般用在select、radio、checkbox等组件
  renderSlot?: Slot; // 组件slots
  style?: CSSStyleDeclaration; //组件样式
  cols?: number; // 单组件所占的栅格数 1 - 24范围，栅格布局，无默认值，优先以formCols的值为主
  span?: number;
  offset?: number;
  formItemAttrs?: any; // el-form-item的属性值
  renderLabel?: any; // 渲染label的渲染器
}

/**
 * 表单组件的值类型
 */
export interface IFormModel {
  [propName: string]: any;
}

/**
 * 表单组件的类型
 */
export interface IFormCompProps {
  formItems?: Array<IFormItems>; // 组件元素数组
  formModel?: IFormModel; // 组件value字段的{key: value}对象
  autoSearch?: boolean; // 是否在表单值发生改变时查询
  showButtons?: boolean; // 是否显示查询和刷新按钮
  buttons?: Slot; // 查询和刷新按钮可以自定义插槽
  disabled?: boolean | TGenericCallback<boolean>; // 组件是否禁用
  formCols?: number; // 组件每一行放置的列数，例如：3，则表示，一行会放3列组件，每列上的组件宽度不一定均分，需要和组件的cols结合做响应式布局(如果有)。默认均分宽度，即栅格24 / formCols
}

/**
 * select的属性类型
 */
export interface ISelectOption {
  dict?: string;
  options?: Array<any> | TBaseCallback | [];
  [propName: string]: any;
}

export type TCompType<T> = T | VueElement | TReturnVueInstance;

export interface ICalcFormRowsParamers {
  formItemsCols: Array<Pick<IFormItems, "cols">>;
}
