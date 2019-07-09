module.exports = {
  css: {
    loaderOptions: {
      // передача настроек в sass-loader
      sass: {
        data: '@import "@/scss/mixins.scss";',
      },
    },
  },
};
