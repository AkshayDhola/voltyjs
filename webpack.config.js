import path from 'path';

export default{
    entry:"./src/App.js",
    mode:"production",
    output:{
        path:path.resolve("dist"),
        filename:"volty.js",
        libraryTarget:"commonjs"
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                options:{
                    presets:['@babel/preset-react']
                }
            },
            {
                test:/\.css?$/i,
                use:["style-loader","css-loader"]
            }
        ]
    }
}