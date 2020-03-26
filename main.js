//Controla el ciclo de vida de la aplicación y ventana.
const {app, BrowserWindow} = require('electron') 

//Cuando todo se haya cargado, mediante el evento ready empezaremos
function createWindow() {

    let win = new BrowserWindow({
        width: 600,
        height:400,
        backgroundColor: '#ffffff',
        // icon: `file://${__dirname}/dist/imagen.png`
    })

    // win.loadFile('index.html')
    win.loadURL('file://'+ `${__dirname}`+'/dist/index.html')

    //Abrimos las opciones de desarrollador en browser
    // win.webContents.openDevTools()

    //Liberams los recursos referentes a la ventana
    win.on('closed', function() {
        win = null
    })
}

//Creamos la nueva ventana
app.on('ready', createWindow)

app.on('activate', function() {

    if(win === null)
        createWindows()
})