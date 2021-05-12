/*
 * @Author: raoqidi
 * @Date: 2021-05-12 09:33:04
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-12 11:24:07
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/vue.config.js
 */
module.exports = {
  chainWebpack: (config) => {
    // config.module
    //   .rule("ts-loader")
    //   .test(/\.tsx?$/)
    //   .loader("ts-loader")
    //   .exclude(/node_modules/)
    //   .options.appendTsSiffixTo(/\.vue$/);
  },
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
  },
};
