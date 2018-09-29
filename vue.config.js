//vue-cli3 配置文件
var webpack = require("webpack") //这是我们添加的



module.exports = {
    //关闭es-lint 提示
    lintOnSave: false,
    devServer: {
        overlay: {
            warnings: false,
            errors: true
        },
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery',
            })
        ],
    }

}