module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'ts-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx'
        ]
    }
};