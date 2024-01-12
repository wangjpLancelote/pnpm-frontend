const postcssPxToRem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    require('postcss-preset-env'),
    postcssPxToRem({
      rootValue: 100,
      propList: ['*'],
      selectorBlackList: ['.nopost', 'html'], // 过滤掉.nopost-开头的class,不进行rem转换
      mediaQuery: false, // 允许在媒体查询中转换`px`
      minPixelValue: 2, //px小于1的不会被转换
    }),
  ],
}

/**
 * 宽屏使用vw
 * 设计稿宽度/20
 * (100/设计稿宽度)*100
 * 移动端使用rem 同时全局样式中添加
  html {
    font-size: 5.208333vw;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 560px) {
    html {
      font-size:62.5px;
    }
  }
 */
