---
title: React配置Webpack开发环境
date: 2019-05-04 17:05:46
layout: post
categories: React
tags: Webpack
excerpt: React配置Webpack开发环境
---

## react脚手架

**create-react-app**

```bash
# 安装
npm install create-react-app -g

# 运行
create-react-app <folder>
```

## 手动搭建

*package.json*

```js
{
  "name": "react-project",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "flux": "^3.1.3",
    "immutable": "^4.0.0-rc.12",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-redux": "^7.1.0",
    "react-router-dom": "^5.0.1",
    "redux": "^4.0.1",
    "redux-immutable": "^4.0.0",
    "redux-promise-middleware": "^6.1.0",
    "whatwg-fetch": "^3.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "@babel/preset-react": "^7.0.0",
    "autoprefixer": "^9.6.0",
    "babel-loader": "^8.0.6",
    "css-loader": "^2.1.1",
    "file-loader": "^4.0.0",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.12.0",
    "postcss-loader": "^3.0.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "url-loader": "^2.0.0",
    "webpack": "^4.33.0",
    "webpack-cli": "^3.3.3",
    "webpack-dev-server": "^3.7.1"
  },
  "scripts": {
    "serve": "webpack-dev-server --bonjour"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

*webpack.config.js*

```js
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const PATH = {
	input: path.join(__dirname, "./src/main.js"),
	output: path.join(__dirname, "./dist")
}
module.exports = {
	mode: "development",
	entry: {
		app: PATH.input
	},
	output: {
		path: PATH.output,
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/env","@babel/react"]
                    }
                }
			},
			{
				test: /\.(css|sass|scss)$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true
						}
					},
					"sass-loader"
				]
			},
			{
				test: /\.(jpg|png|gif)$/i,
				use: {
					loader: "url-loader",
					options:{
                        name:"[name][hash].[ext]",
                        limit:100,
                        outputPath:"./img"
                    }
				}
			},
			{
				test: /\.(eot|otf|fon|font|ttf|ttc|woff|woff2|svg)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "[path][name].[ext]",
                        outputPath:"./iconfont"
					}
				}
			},
		]
	},
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"index.html"
        })
    ],
	devServer: {
		proxy: {

			}
		}
	},
    resolve:{
        alias:{
            "@":path.join(__dirname,"src"),
			"@components":path.join(__dirname,"src/components"),
			"@common":path.join(__dirname,"src/common"),
			"@api":path.join(__dirname,"src/api"),
			"@actions":path.join(__dirname,"src/actions"),
			"@store":path.join(__dirname,"src/store")
        }
    }
}
```

*postcss.config.js*

```js
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer()
    ]
};
```

创建index.html、app.js、main.js等
