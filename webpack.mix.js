const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js').vue();
mix.postCss('resources/css/app.css', 'public/css').vue();


mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve("resources"),
            "@js": path.resolve(__dirname, 'resources/js'),
            '@components': path.resolve(__dirname, 'resources/js/components/'),
            '@store':       path.resolve(__dirname, 'resources/js/store'),
        }
    },
    output: {
        chunkFilename: 'chunks/[name].[contenthash].js',
    }
}).vue();;
