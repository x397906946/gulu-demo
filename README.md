# 轱辘 - 利用Vue制作的简易UI框架

[![Build Status](https://www.travis-ci.org/x397906946/gulu-demo.svg?branch=master)](https://www.travis-ci.org/x397906946/gulu-demo)

作者： Mr.X

## 介绍

学习Vue过程中做的简易UI框架

## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在CSS中开启 border-box
    ```
    *, *::before, *::after {box-sizing: border-box;}
    
    ```
    IE 8 及以上浏览器均支持此样式
    
    还需要设置默认颜色等变量（后续将改为SCSS变量）
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: red;
     }
    ```
    IE 15 及以上浏览器均支持此样式
 
2. 安装 gulu
   ```angular2
   npm i --save gulu-demo 
   ```

3. 引入 gulu
    ```
    import {Button, ButtonGroup, Icon} from 'gulu-demo'
    import 'gulu-demo/dist/index.css'
    
    export default {
        name: 'app',
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
