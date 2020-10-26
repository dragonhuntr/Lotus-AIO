const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const ipc = require('electron').ipcMain
const dialog = electron.dialog;


let win;

app.on('ready', () => {
    let main = null
    let loading = new BrowserWindow({width:400, height:300, frame:false, icon: __dirname + '/assets/Icon.png'})

    loading.once('show', () => {
        main = new BrowserWindow({width:1800, height:800, minWidth:1600, minHeight:600, webPreferences: {
            nodeIntegration: true
        }, frame: false, icon: __dirname + '/assets/Icon.png', show: false })
        main.webContents.once('dom-ready', () => {
            main.show()
            loading.hide()
            loading.close()
        })
        main.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
    })
    loading.loadURL(url.format({
        pathname: path.join(__dirname, 'loading.html'),
        protocol: 'file:',
        slashes: true
    }));
    loading.webContents.on('did-finish-load', function() {
        loading.show();
    });
});

//Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platorm !== "darwin"){
       app.quit(); 
    }
});

