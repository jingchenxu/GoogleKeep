module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'

  // EXAMPLE
  // https://www.example.com/project/v1.1/index.html
  // baseUrl becomes /project/v1.1/

  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',

  // where to output built files
  // outputDir: 'dist',

  // where to put static assets (js/css/img/font/...)
  // assetsDir: 'assets',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  // lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // runtimeCompiler: false,

  // babel-loader skips `node_modules` deps by default.
  // explicitly transpile a dependency with this option.
  // transpileDependencies: [ /* string or regex */ ],

  // generate sourceMap for production build?
  // productionSourceMap: false,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // chainWebpack: () => {},
  // configureWebpack: () => {},

  // CSS related options
  // css: {
  // extract CSS in components into a single CSS file (only in production)
  // can also be an object of options to pass to extract-text-webpack-plugin
  // extract: true,

  // Enable CSS modules for all css / pre-processor files.
  // This option does not affect *.vue files.
  // modules: false,

  // enable CSS source maps?
  // sourceMap: false,

  // pass custom options to pre-processor loaders. e.g. to pass options to
  // sass-loader, use { sass: { ... } }
  // loaderOptions: {}
  // },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  // parallel: require('os').cpus().length > 1,

  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

  // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: false,
    compress: true
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
  }

  // options for 3rd party plugins
  // pluginOptions: {
  //   // ...
  // }
}
