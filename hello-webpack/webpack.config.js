module.exports = {
    entry: './a',
    /**
     * 加了 output 之后，package.json 中配置的 script：
     * "build": "node_modules/.bin/webpack a.js -o bundle.js"
     * 中的 a.js -o bundle.js 就可以删了
     */
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    /* 声明模式：
        development：开发模式
            打包出来的 js 是经过格式化的
        production：线上模式
            打包出来的 js 去除了空格等多余的字符
        none：
            会去除默认行为
     */
    mode: 'development'
}