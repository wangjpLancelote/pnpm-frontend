/**
 * 根据打完包之后生成的script src 的hash值去判断代码是否更新
 *
 * @param options.timer 轮询时间
 *
 * const up = new webUpdater({ timer: 2000})
 *
 * up.on('update', () => {console.log('更新了')})
 */

const equals = (a: any, b: any) => a.length === b.length && a.every((v: any, i: any) => v === b[i]);

export class webUpdater {
  oldScript: any[] | null;
  newScript: any[] | null;
  dispatch: Record<string, any>;
  constructor(options?: any) {
    this.oldScript = []; //存储第一次值也就是script 的hash 信息
    this.newScript = []; //获取新的值 也就是新的script 的hash信息
    this.dispatch = {}; //小型发布订阅通知用户更新了
    if (import.meta.env.PROD) {
      this.init(); //初始化
      this.timing(options?.timer); //轮询
    }
  }

  async init() {
    const html = await this.getHtml();
    this.oldScript = this.parserScript(html);
  }

  async getHtml() {
    const html = await fetch("/").then((res) => res.text()); //读取index html
    return html;
  }

  parserScript(html: string) {
    const reg = new RegExp(/<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/gi); //script正则
    return html.match(reg); //匹配script标签
  }

  //发布订阅通知: 'no-update' | 'update'
  on(key: string, fn: (...args: any) => void) {
    (this.dispatch[key] || (this.dispatch[key] = [])).push(fn);
    return this;
  }

  compare(oldArr: any[] | null, newArr: any[] | null) {
    if (!equals(oldArr, newArr)) {
      this.dispatch["update"].forEach((fn: any) => {
        fn();
      });
    } else {
      // this.dispatch['no-update'].forEach((fn) => {
      //   fn()
      // })
    }
  }

  timing(time = 60000) {
    //轮询
    setInterval(async () => {
      const newHtml = await this.getHtml();
      this.newScript = this.parserScript(newHtml);
      this.compare(this.oldScript, this.newScript);
    }, time);
  }
}
