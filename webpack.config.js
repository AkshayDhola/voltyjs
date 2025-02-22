var path = require('path');

module.exports = {
    entry: './src/Volty.js',
    mode:'production',
    output: {
        path: path.resolve('build'),
        filename: 'Volty.js',
        library: 'Volty',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'gsap': 'gsap',
    }
}