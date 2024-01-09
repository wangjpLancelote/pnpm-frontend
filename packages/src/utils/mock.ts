/**
 * 模拟返回数据
 * @param {*} data
 * @returns
 */
export const mockRequest = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
