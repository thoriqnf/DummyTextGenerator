module.exports = {
  entry: './src/index.js',
  output: {
    path:'./dist',
    filename:'bundle.js'
  },
  module: {
    loadersL [{
      test: /\.jsx?$/,
      exclude:/node_modules\,
      loader:babel-loader,
      query: {
        presets:['es2015', 'react']
      }
    }]
  }
}
