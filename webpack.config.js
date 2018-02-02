const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            //parsing vue file
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            //parsing css file
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        //    parsing img file
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name]-aaa.[ext]'
                        }
                    }
                ]
            },
        //    parsing styles
            {
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader',


                ]
            }


        ]
    }
};