export default {
  entry: "src/index.js",
  extraBabelPlugins: [
    "transform-runtime",
    "transform-decorators-legacy",
    "transform-class-properties",
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ],
  env: {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  proxy: {
    "/api": {
      // "target":"https://wework2018apis-dev.azure-api.cn/", //dev
      "target": "https://wework2018apis.azure-api.cn/",  //prot
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]],
  publicPath: '/',
  // publicPath: 'http://popularize.9-a-m.com/west/',
};
