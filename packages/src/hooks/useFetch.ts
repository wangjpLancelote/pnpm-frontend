import { AxiosResponse } from 'axios';
import { MayRef } from './types';
/**
 * fetch hooks
 * @param HandleQuery queryFunction
 * @param query queryData
 * @returns {}
 */
export const useFetch = <T>(HandleQuery: (...args: any) => Promise<any>, query: MayRef<Record<string, any>>, dataProp?: string) => {
  const loading = ref<boolean>(true);
  const data = ref<T | undefined | AxiosResponse>();
  const error = ref<Error | undefined>();

  const setData = async () => {
    const rt = await HandleQuery(query);
    console.log('rt', rt);
    data.value = rt;
    loading.value = false;
  };
  return {
    loading,
    setData,
    data,
    error
  };
};