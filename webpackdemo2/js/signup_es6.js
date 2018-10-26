import {
    open,
    msg
} from './base_es6';

if (open) {
    document.body.innerHTML =
        `<h1>欢迎入坑</h1>`;
} else {
    document.body.innerHTML =
        `<h1>暂不开放注册</h1>`;
}