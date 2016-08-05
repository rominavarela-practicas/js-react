//-------------------------CONST-------------------------//
const path    = require('path');
const next    = require('postcss-cssnext');
const partial_import = require('postcss-partial-import');

const debug = process.env.NODE_ENV !== "production";
console.log(`Mode: ${process.env.NODE_ENV}`);
console.log(`Debug: ${debug}`);

const PATHS = {
  // input
  js: path.join(__dirname, "dev/js"),
  style: path.join(__dirname, "dev/style"),
  images: path.join(__dirname, "dev/images"),
  // output
  bundle: path.join(__dirname, 'public/js/'),
  serve_static: '/js'
};

console.log("Paths:");
console.log(PATHS);
console.log();

//-------------------------DIRECTIVES--------------------//

module.exports = {
    entry: {
      index: path.join( PATHS.js , "index.jsx"),
      all: path.join( PATHS.js , "all.jsx")
    },
    output: {
        path: PATHS.bundle ,
        publicPath: PATHS.serve_static ,
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
          // jsx
          {
            test: /\.jsx?$/,
            loader: 'babel?cacheDirectory,presets[]=react,presets[]=es2015',
            include: PATHS.js
          },
          // images
          {
            test: /\.(jpg|png)$/,
            loader: 'url-loader?limit=25000',
            include: PATHS.images
          },
          // style
          { test: /\.s?css$/,
            loader: "style-loader!css-loader!postcss-loader",
            include: PATHS.style
          }
        ]
    },
    postcss: function () {
        return [partial_import,next];
    }
};
