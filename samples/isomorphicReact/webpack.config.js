var path = require('path');

module.exports = {
    entry: {
        index: './src/main/webapp/app/app.js',
        books: './src/main/webapp/app/books.js'
    },
    output: {
        path: './src/main/webapp/dist',
        publicPath: '/static/',
        filename: 'bundle-[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src/main/webapp'),
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url?limit=10000&prefix=assets/!img'
            }
        ]
    }
};
