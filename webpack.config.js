const path = require('path');

module.exports = {
  // The entry point for the application, where Webpack starts building the dependency graph.
  entry: './src/index.ts',
  // Tells Webpack that we're building for Node.js, so it can use Node.js-specific optimizations.
  target: 'node',
  // specify the source map generation configuration
  devtool: 'source-map',
  // Sets the mode to "development", which enables useful development features like source maps.
  mode: 'development',
  // Defines how Webpack should handle different types of modules, such as TypeScript files.
  module: {
    rules: [
      {
        // Applies the "ts-loader" to all ".ts" and ".tsx" files.
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // Specifies which extensions Webpack should try to resolve when importing modules.
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // Defines how the output of the build should be structured and where it should be placed.
  output: {
    // The name of the output file, which will be "index.js".
    filename: 'index.js',
    // The directory where the output file(s) should be placed.
    path: path.resolve(__dirname, 'dist'),
  },
};
