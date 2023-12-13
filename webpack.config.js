const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
      port: "9500",
      static: ["./dist"],
      open: true,
      hot: true ,
      liveReload: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(txt|jpg|png|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              context: "",
              emitFile: true,
              name: "images/[path][name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "",
        },
      ],
    }),
  ]
};
