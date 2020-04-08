const path = require("path");
const pxtorem = require('postcss-pxtorem')
const { name } = require("./package");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  outputDir: `./dist`,
  assetsDir: "static",
  filenameHashing: true,
  devServer: {
    host: "127.0.0.1",
    disableHostCheck: true,
    port: 9003,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", `${resolve("src")}`);
    let oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            resolve("src/style/var.scss/var.scss"),
            resolve("src/style/var.scss/mixins.scss")
          ]
        })
        .end();
    });
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: ``,
      },
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    },
  }
};
