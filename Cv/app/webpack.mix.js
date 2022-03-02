let mix = require('laravel-mix');

mix.sass('src/sass/index.scss', 'css/').sourceMaps()
    .ts('src/ts/index.ts', 'ts/').sourceMaps()
    .ts('src/ts/slider.ts', 'ts/').sourceMaps()
    .setPublicPath('dist');
