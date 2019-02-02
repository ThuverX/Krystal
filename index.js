const {app,BrowserWindow,ipcMain} = require('electron')


let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 950, height: 400,transparent:true,frame:false,resizable:false})
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

const client = require('discord-rich-presence')('541228950572105728')

ipcMain.on('updateRPC',(e,data) => {
    client.updatePresence(data)
})