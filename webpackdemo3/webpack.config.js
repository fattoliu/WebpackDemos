module.exports = {
    entry: {
        index: './js/index',

    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            /* 此处顺序很重要，越后面的越先加载，倒叙执行 */
            use: ['style-loader', 'css-loader']
        }]
    }
}