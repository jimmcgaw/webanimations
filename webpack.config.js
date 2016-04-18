module.exports = {
    entry: "./static/jsx/index.jsx",
    output: {
        path: './static/js',
        filename: "index.js"
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets : ['react', 'es2015']
              }
            },
            {
              test: /\.jsx$/,
              loader: 'babel-loader',
              query: {
                presets : ['react', 'es2015']
              }
            },
            {
              test: /\.coffee$/,
              loader: 'coffee-loader'
            },
            {
              test: /\.css$/,
              loader: "style!css"
            }
        ]
    }
};
