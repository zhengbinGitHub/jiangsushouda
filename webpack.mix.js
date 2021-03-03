const mix = require('laravel-mix');

const { env } = require('minimist')(process.argv.slice(2));

var rd = require('rd');


const path = {
    scss: {
        enter: './resources/assets/static/scss',
        output: 'public/assets/static/scss'
    },
    js: {
        enter: './resources/assets/static/js',
        output: 'public/assets/static/js'
    },
    modules: {
        enter: './resources/assets/static/modules',
        output: 'public/assets/static/modules'
    }
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


let fileArr = []

getFiles('scss');
getFiles('js');
getFiles('modules');
taskImage();

function taskImage() {
    mix.copyDirectory('./resources/assets/static/images','public/assets/static/images')
    mix.copyDirectory('./resources/assets/static/layui', 'public/assets/static/layui')
    mix.copyDirectory('./resources/assets/static/vender', 'public/assets/static/vender')
    mix.copyDirectory('./resources/assets/static/lib', 'public/assets/static/lib')
    mix.copyDirectory('./resources/assets/static/tpl', 'public/assets/static/tpl')
    mix.copyDirectory('./resources/assets/static/config.js', 'public/assets/static')
}
function getFiles(type) {
    fileArr = []
    let obj = {
        scss: /\.scss$/,
        js: /\.js$/,
        modules: /\.js$/
    }
    rd.eachFileFilterSync(path[type].enter, obj[type], function(f, s) {
        var f = f.split("jiangsushouda")[1].replace(/\\/ig, "/").substr(1);
        if (type == "scss") {
            mix.sass(f, path.scss.output + f.split("/scss")[1].replace(/scss/ig, "css"))
                .options({
                    processCssUrls: false,
                    postCss: [
                        require('postcss-css-variables')()
                    ]
                })
        }
        if (type == "js") {
            mix.js(f, path.js.output + f.split("/js")[1])
        }
        if (type == "modules") {
            mix.js(f, path.modules.output + f.split("/modules")[1])
        }
    });
}

if (mix.inProduction()) {
    mix.version()
} else {
    mix.sourceMaps()
}

//隐藏右下角提醒
mix.disableNotifications();
