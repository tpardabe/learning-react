var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      historyApiFallback: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders:'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
         }
      ]
   }
}
module.exports = config; 