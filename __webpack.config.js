import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: path.join(__dirname, 'dist/src/es6/cs6.js'),
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist/bundle/'),
        filename: 'bundle2.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    }
}