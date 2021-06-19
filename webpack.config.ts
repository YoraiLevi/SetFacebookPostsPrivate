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
import {default as FacebookBulkPrivacyoptions} from "./FacebookBulkPrivacy/options"
const FacebookBulkPrivacy : webpack.Configuration = {
  mode: dev ? 'development' : 'production',
  entry: './FacebookBulkPrivacy/index.ts',
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
    filename: 'FacebookBulkPrivacy.user.js',
    path: path.resolve(__dirname, 'dist/FacebookBulkPrivacy'),
  },
  plugins: [
    new WebpackUserscript(FacebookBulkPrivacyoptions)
  ],
  devServer:{
    contentBase: path.join(__dirname, 'dist/FacebookBulkPrivacy'),
    writeToDisk: true
  }
}
export default [HelloMonkey,FacebookBulkPrivacy]