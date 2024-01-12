const postcssPxToRem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    require('postcss-preset-env'),
    postcssPxToRem({
      rootValue: 37.5,
      // rootValue({ file }) {
      //   return file.indexOf('vant') !== -1 ? 37.5 : 75
      // },
      propList: ['*'],
      selectorBlackList: ['.nopost', 'html'], // 过滤掉.nopost-开头的class,不进行rem转换
      mediaQuery: false, // 允许在媒体查询中转换`px`
      // minPixelValue: 2, //px小于1的不会被转换
    }),
  ],
}

/**
   *
   * 如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 rootValue 配置调整为:
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};
   *
   */
