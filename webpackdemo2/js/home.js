var base = require('./base');
var open = base.open;
var msg = base.msg;
if (open) {
    document.body.innerHTML =
        `<a href="../page/signup.html">注册</a>`;
    console.log('msg: ', msg);

}