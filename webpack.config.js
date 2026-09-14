import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",

  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
