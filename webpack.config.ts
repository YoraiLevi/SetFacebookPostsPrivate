import path from "path";
import WebpackUserscript from 'webpack-userscript';
import webpack from "webpack";
import {Configuration} from "webpack-dev-server"

const dev = process.env.NODE_ENV === 'development'

import {default as HelloMonkeyoptions} from "./HelloMonkey/options"
const HelloMonkey : webpack.Configuration = {
  mode: dev ? 'development' : 'production',
  entry: './HelloMonkey/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'HelloMonkey.user.js',
    path: path.resolve(__dirname, 'dist/HelloMonkey'),
  },
  plugins: [
    new WebpackUserscript(HelloMonkeyoptions)
  ],
  devServer:{
    contentBase: path.join(__dirname, 'dist/HelloMonkey'),
    writeToDisk: true
  }
}

export default [HelloMonkey]