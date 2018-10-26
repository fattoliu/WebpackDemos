module.exports = {
    /* 
        指定多个入口
    */
    entry: {
        home: './js/home',
        signup: './js/signup',
        home_es6: './js/home_es6',
        signup_es6: './js/signup_es6',
    },
    output: {
        /* 
            filename 不再是写死的文件名，而是上面 entry
            定义的 key，比如：home、signup
        */
        filename: '[name].bundle.js',
        /* 
            放在当前目录的 dist（ distributable：可分发的）目录下
        */
        path: __dirname + '/dist',
    },
    mode: 'development',
}