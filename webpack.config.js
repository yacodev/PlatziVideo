const path = require('path');
const HtmlWebPackPlugin = require ('html-webpack-plugin');
module.export = {
  entry: './src/index.js',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },
  resolve:{
    extensiones:['.js','.jsx']
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader:"babel-loader"
        }
      },
      {
        test:/\.html$/,
        use: [
          {
            loader:'html-loader'
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template:'./public/index.html',
      filaname:'./index.html'
    }),
  ]
};