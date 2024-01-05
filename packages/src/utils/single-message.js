import { ElMessage as defaultMsg } from 'element-plus';

let messageInstance = null;
/**
 * Message提示单例，只显示最新一条提示信息
 * @param options
 */
const singleMessage = (options) => {
  if (options.message.includes('请勿重复提交，请稍候再试')) {
    return;
  }
  if (messageInstance) {
    messageInstance.close();
  }
  options.showClose = true;
  messageInstance = defaultMsg(options);
};
['error', 'success', 'info', 'warning'].forEach((type) => {
  singleMessage[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return singleMessage(options);
  };
});
export const Message = singleMessage;
