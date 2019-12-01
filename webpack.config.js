const path = require('path');

module.exports = {
    entry: {
        app: './js/app.js',
        search: './js/search.js',
        display: './js/display.js',
        map: './js/map.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
};