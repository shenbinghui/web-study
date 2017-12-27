module.exports = {
    devtool:'eval-source-map',
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/
        }]
    }
};