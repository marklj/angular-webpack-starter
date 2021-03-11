import CompressionWebpackPlugin from 'compression-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import * as webpack from 'webpack';


export const config: webpack.Configuration = {
    mode: 'production',
    node: false,
    output: {
      publicPath: 'content/bundle/',
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.css/,
            use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
        },],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log', 'console.warn', 'console.error'], // remove all console.log/warnings/errors
                    },
                },
            }),
        ],
    },
    plugins: [
        new webpack.IgnorePlugin({}),
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: 'style.css',
        //     chunkFilename: '[id].[hash].css',
        //   }),

        new CompressionWebpackPlugin({
            filename: "[path][base].gz",
            algorithm: 'gzip',
            test: /\.(ts|js|html|css|svg|eot)$/,
            minRatio: 0.8,
          }),
    ]

}