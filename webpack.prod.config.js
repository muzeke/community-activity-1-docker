const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // entry point for the application, where webpack starts bundling
  entry: './src/index.ts',

  // specify the mode, either 'development' or 'production'
  mode: 'production',

  // specify the target environment, in this case Node.js
  target: 'node',

  // specify how to handle different types of modules
  module: {
    rules: [
      {
        // use ts-loader to handle TypeScript files
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  // specify how to resolve different file extensions
  resolve: {
    extensions: ['.ts', '.js'],
  },

  // specify the output file name and location
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // specify the plugins used for the build
  plugins: [
    // clean the 'dist' directory before building
    new CleanWebpackPlugin(),
    // polyfill for Node.js core modules that are missing in Lambda environment
    // new NodePolyfillPlugin(),
  ],

  // specify the optimization configuration for the build
  optimization: {
    // minimize the output using Terser
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  // specify the source map generation configuration
  devtool: 'nosources-source-map',
};
