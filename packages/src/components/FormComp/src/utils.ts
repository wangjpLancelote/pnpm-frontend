import { ICalcFormRowsParamers, IFormCompProps } from "./type";

export function deepClone<T = any>(target: any): T {
  // 定义一个变量
  let result: any;
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === "object") {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = []; // 将result赋值为一个数组，并且执行遍历
      for (const i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone<T>(target[i]));
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null;
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {};
      for (const i in target) {
        result[i] = deepClone<T>(target[i]);
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target; // 常量拷贝
  }
  // 返回最终结果
  return result;
}

/**
 * 计算行数，列数
 * 计算行列的关系
 * @param target 组件
 */
export const useCalcFormRows = (target: any, itemsField: string) => {
  if (!target.formCols) target.formCols = 1;
  const reTarget: IFormCompProps & ICalcFormRowsParamers & any = deepClone(target);
  reTarget[itemsField] = reTarget[itemsField].map((v: any) => {
    if (v.cols && v.cols > 24) v.cols = 24;
    if (!v.cols) v.cols = 1; // 默认给1个栅格，一行三列
    return v;
  });
  if (reTarget.formCols === 1) {
    return reTarget[itemsField].map((item: any) => {
      return [item];
    });
  }
  let temp: any[] = [];
  const res = [];
  const max = 24;
  while (reTarget[itemsField].length > 0) {
    const head = reTarget[itemsField].shift();
    const headCols = head?.cols || 0;
    if (!temp.length) {
      temp.push(head);
      if (headCols >= max) {
        res.push(temp);
        temp = [];
        continue;
      }
    } else {
      if (temp.length + 1 < (reTarget.formCols || 1)) {
        temp.push(head);
        continue;
      } else {
        if (
          headCols +
            temp.reduce((prev, current) => {
              return (prev += current.cols);
            }, 0) <=
          max
        ) {
          temp.push(head);
          res.push(temp);
          temp = [];
          continue;
        } else {
          res.push(temp);
          temp = [head];
          if (!reTarget[itemsField].length) {
            res.push([head]);
          }
          continue;
        }
      }
    }
  }
  return res;
};

/**
 * 动态计算列数
 * @param innerWidth 分辨率
 * @returns formCols
 */
export const autoFixSpan = (innerWidth: number) => {
  let formCols = 3;
  if (innerWidth < 768) return (formCols = 1);
  if (innerWidth >= 1920) return (formCols = 6);
  if (innerWidth >= 1280) return (formCols = 4);
  if (innerWidth >= 992) return (formCols = 3);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  if (innerWidth >= 768) return (formCols = 2);
};

/**
 * 计算layout布局
 * @param item formItems
 * @param count 每一行的数量
 * @param firstRow 是否是首行
 * @returns span
 */
export const calcColSpan = (item: any, count: number, firstRow: boolean) => {
  const cols = item.cols;
  if (cols) {
    if (firstRow) return Math.ceil(18 / count);
    return cols;
  }
  if (firstRow) {
    return Math.ceil(20 / count);
  }
  return Math.ceil(24 / count);
};
