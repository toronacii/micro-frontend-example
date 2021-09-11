const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8102
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'CART',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/bootstrap'
      },
      shared: ['faker']
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}