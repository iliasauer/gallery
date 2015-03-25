module.exports = {
    dev: {
        options: {
            paths: ["src"],
            cleancss: false,
            sourceMap: true,
            sourceMapFilename: 'css/main.css.map',
            sourceMapRootpath: '/src/'
        },
        files: {
            "css/main.css": "css/less/main.less"
        }
    },
    prod: {
        options: {
            paths: ["src"],
            plugins: [
                new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                new (require('less-plugin-clean-css'))(cleanCssOptions)
            ],
            compress: true
        },
        files: {
            "css/main.css": "css/less/main.less"
        }
    }
};