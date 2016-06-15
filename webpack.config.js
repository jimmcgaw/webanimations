module.exports = {
    entry: "./app/App.js",
    output: {
        path: './static/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets : ['react', 'es2015']
              }
            }
        ]
    }
};
