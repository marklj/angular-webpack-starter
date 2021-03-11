import webpack from "webpack";

export const config: webpack.Configuration = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: 'Content/bundle/',
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [{
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    },],
  },
}