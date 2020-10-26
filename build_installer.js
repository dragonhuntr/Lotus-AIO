const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const APP_DIR = path.resolve(__dirname, './Lotus-win32-x64');

const OUT_DIR = path.resolve(__dirname, './windows_installer');

const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    description: 'Swag bruv',
    exe: 'Lotus',
    name: 'Lotus',
    manufacturer: 'Thomas0001',
    version: '0.0.1',

    ui: {
        chooseDirectory: true
    }
})

msiCreator.create().then(function(){
    msiCreator.compile();
})