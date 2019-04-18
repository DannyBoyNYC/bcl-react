var webpack = require('webpack');
var path = require('path');

var outFilename = "./target/html-renderer/jslib/[name].js";

module.exports = {
  entry: {
	  vendor: ["jquery"],
	  publications:"./src/main/webapp/jslib/publications.js"
  },
  output: {
    path: __dirname,
    filename: outFilename
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
  plugins: [
	  new webpack.ProvidePlugin({
		    $: "jquery",
		    jQuery: "jquery"
	  }),
      new webpack.optimize.CommonsChunkPlugin({
	        names: ['vendor'],
	        filename: outFilename
      })
  ]
}
