import path from 'path';
import * as glob from 'glob';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { PurgeCSSPlugin } from 'purgecss-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  devServer: {
    static: {
        directory: path.join(import.meta.dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,

  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.scss$/i,
            use: [
                //"style-loader", 
                MiniCssExtractPlugin.loader,
                "css-loader", 
                {
                    loader: "sass-loader",
                    options: {
                        sassOptions: {
                            quietDeps: true,
                        },
                    },
                },
            ],
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new PurgeCSSPlugin ({
        paths:glob.sync(`./src/**/*`, { nodir: true }),
    }),
  ],
  
};