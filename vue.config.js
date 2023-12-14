module.exports = {
    publicPath: "./",
    outputDir: 'passageway',
    runtimeCompiler: true,
    // 插件配置
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                'productName': 'passageway',//生成exe的名字
                "appId": "aaa",//包名  
                "copyright": "xxx",//版权信息
                "directories": { // 输出文件夹
                    "output": "electron_output",
                },
                "nsis": {
                    "oneClick": false, // 是否一键安装
                    "allowElevation": true, // 允许请求提升。若为false，则用户必须使用提升的权限重新启动安装程序。
                    "allowToChangeInstallationDirectory": true, //是否允许修改安装目录
                    "installerIcon": "./public/favicon.ico",// 安装时图标
                    "uninstallerIcon": "./public/favicone.ico",//卸载时图标
                    "installerHeaderIcon": "./public/favicon.ico", // 安装时头部图标
                    "createDesktopShortcut": true, // 是否创建桌面图标
                    "createStartMenuShortcut": true,// 是否创建开始菜单图标
                    "shortcutName": "passageway", // 快捷方式名称
                    "runAfterFinish": false,//是否安装完成后运行
                },
                "win": {
                    "icon": "./public/favicon.ico",//图标路径
                    "target": [
                        {
                            "target": "nsis", //利用nsis制作安装程序
                            "arch": [
                                "x64", //64位
                            ]
                        }
                    ]
                }
            },
            nodeIntegration: true
        },
    }
}
