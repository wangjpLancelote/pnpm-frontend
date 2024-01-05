import { AxiosResponse } from 'axios';
import { computed } from 'vue';
import { MayRef } from './types';

/**
 * 计算通用页面的table最大高度
 * @param containerRef containerRef
 * @param formRef formRef
 * @returns number
 */
export const useTableMaxHeight = (containerRef: any, formRef: any, extraRef?: any) => {
  const maxHeight = computed(() => {
    const containerHeight = containerRef.value?.clientHeight || 0;
    const formHeight = formRef.value?.clientHeight || 0;
    if (extraRef && extraRef.value) {
      return containerHeight - formHeight - extraRef.value?.clientHeight - 95;
    }
    return containerHeight - formHeight - 95;
  });
  return {
    maxHeight
  };
};

/**
 * 未知数据结构返回axiosResponse
 * 避免出现访问到null值导致的页面崩溃或者白屏【降级处理】
 */
export const unkownAxiosResponse: Partial<AxiosResponse<any>> = {
  msg: '',
  Message: '',
  rows: [],
  Items: [],
  Count: 0,
  IsSuccess: false,
  total: 0
};

/**
 * 用于处理axios的function函数，省去变量定义的步骤
 * @param handleQuery axios function (...args: any) => Promise<any>
 * @param params MayRef<Record<string, any>>
 */
export const useQuery = async (
  handleQuery: (...args: any) => Promise<AxiosResponse>,
  params?: MayRef<Record<string, any>>,
  statement?: (...args: any) => boolean
): Promise<Partial<AxiosResponse>> => {
  try {
    const result: AxiosResponse = await handleQuery(params);
    let boolState: boolean = result ? true : false;
    if (statement) {
      boolState = statement();
    }
    if (boolState) {
      return result;
    } else {
      return Promise.resolve(unkownAxiosResponse);
    }
  } catch {
    return Promise.resolve(unkownAxiosResponse);
  }
};
