import {
    open,
    msg
} from './base_es6';

if (open) {
    document.body.innerHTML =
        `<a href="../page/signup.html">注册(我是用 es6语法写的)</a>`;
    console.log('msg: ', msg);

}