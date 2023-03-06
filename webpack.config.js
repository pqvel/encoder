var Encore = require('@symfony/webpack-encore');

Encore
   .enableStimulusBridge('./assets/controllers.json')
   /* Установим путь куда будет осуществляться сборка */
   .setOutputPath('web/build/')
   /* Укажем web путь до каталога web/build */
   .setPublicPath('/build')
   /* Каждый раз перед сборкой будем очищать каталог /build */
   .cleanupOutputBeforeBuild()
   /* Добавим наш главный файл ресурсов в сборку */
   .addStyleEntry('styles', './assets/app.scss')
   .addEntry('app', './assets/app.js')
   /* Включим поддержку sass/scss файлов */
   .enableSassLoader()
   .enableSingleRuntimeChunk()
   
   /* В режиме разработки будем генерировать карту ресурсов */
   .enableSourceMaps(!Encore.isProduction());
   
/* Экспортируем финальную конфигурацию */
module.exports = Encore.getWebpackConfig();