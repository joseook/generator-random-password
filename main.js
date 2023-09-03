const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});

// Adicione esta parte para lidar com a mensagem 'password-copied'
ipcMain.on('password-copied', (event, password) => {
    const message = `Senha copiada com sucesso: ${password}`;
    
    dialog.showMessageBox(mainWindow, {
        type: 'info',
        title: 'Senha Copiada',
        message: message,
        buttons: ['OK']
    });
});
