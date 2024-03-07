var { app, BrowserWindow } = require('electron');
var path = require('path');
var url = require('url');
var win;
function createWindow() {
    win = new BrowserWindow({
        width: 1080,
        height: 1920,
        frame: false,
    });
    win.setFullScreen(true);

    win.loadURL(url.format({
        // 配置被打包的静态资源路径
        // pathname: path.join(__dirname, 'index.html'),
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true,
    }));

    // win.once('ready-to-show', () => {
    //     win.show()
    // })

    win.on('closed', () => {
        win = null
    });
}

app.on('ready', () => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
