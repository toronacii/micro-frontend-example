const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8100
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'PRODUCTS@http://localhost:8101/remoteEntry.js',
        cart: 'CART@http://localhost:8102/remoteEntry.js',
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}