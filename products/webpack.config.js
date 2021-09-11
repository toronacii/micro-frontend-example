const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8101
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'PRODUCTS',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap'
      },
      shared: ['faker']
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}