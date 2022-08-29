module.exports = {
    devServer: {
        historyApiFallback: true,
        allowedHosts: "all",
        proxy: {
            '/api': {
                target: 'http://119.3.188.68:9001', //接口域名
                changeOrigin: true,             //是否跨域
                ws: false,                       //是否代理 websockets
                secure: false,                   //是否https接口
                pathRewrite: { '^/api' : '' }
            }
        }
    }
};
