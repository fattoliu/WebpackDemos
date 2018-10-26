import {
    debug
} from './base';
/*
 当需要导入一个ndoe 无法识别的文件时，需要用 loader，
 此处引入 css，需要安装 css-loader  style-laoder:
 npm i css-loader style-loader -D
 安装完之后，需要修改 webpack.config.js,添加 module

 如果有多个 css 导入，后面导入的会覆盖前面的
*/
import '../css/base.css';

console.log('debug: ', debug);