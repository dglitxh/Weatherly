const path = require('path');
const { output } = require('../YdxCodes/Javascript/restaurant/webpack.config');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development'
}