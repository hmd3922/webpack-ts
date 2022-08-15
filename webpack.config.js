// eslint-disable-next-line @typescript-eslint/no-var-requires
const  path  = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const  HtmlWebpackPlugin  = require('html-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } =  require( 'clean-webpack-plugin')
// eslint-disable-next-line no-undef
console.log(path.resolve(__dirname, 'src'))
// eslint-disable-next-line no-undef
module.exports = {
  entry : './src/index.ts',
  output : {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve : {
    extensions: ['.js', '.ts', 'tsx']
  },
  module : {
    rules: [{
      // loader配置
      test: /\.tex?$/,
      use: 'ts-loader',
      exclude: /node_mondules/
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  stats : 'errors-only',
  devServer : {
    static: {
      // eslint-disable-next-line no-undef
      directory: path.join(__dirname, 'public')
    },
    // stats: { 'errors-only': true
    // },
    compress: false,
    host: 'localhost',
    port: 8089
  },
  plugins : [
    // 插件配置
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
}

