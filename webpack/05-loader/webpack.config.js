module.exports = {
    devtool: 'eval-source-map',
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','react']
                    }
                },
                exclude:/node_nodules/
            }
        ]
    }
};