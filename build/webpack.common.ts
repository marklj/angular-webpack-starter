import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import * as webpack from 'webpack';
import { paths } from './paths';

export const config: webpack.Configuration = {
  entry: {
    portal: [`${paths.sourcePath}/index.ts`]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: paths.outputPath,
    publicPath: 'bundle/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      minChunks: 3,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          minChunks: 1,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.(html)$/,
        use: 'html-loader',
        exclude: /(node_modules|cache|Views)/,
      },
      {
        test: /\.(woff|woff2|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            // outputPath: paths.outputPath,
            // publicPath: function () {
            //   return 'Content/bundle';
            // },
            esModule: false,
          }
        },]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            name: '[name].[hash].[ext]',
            esModule: false,
            // outputPath: paths.outputPath,
            // publicPath: paths.outputPath
          },
        },],
      },
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        loader: 'svg-url-loader',
        options: {
          limit: 8192,
          encoding: 'base64',
          stripdeclarations: true,
          iesafe: true,
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.html'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({}),
    new ESLintPlugin({
      context: paths.sourcePath,
      extensions: ['ts', 'html'],
      exclude: ['node_modules'],
      fix: true,
      formatter: 'codeframe',
      // failOnError: true,
      // emitError: true,
      // emitWarning: true,
    }),
  ],
}
