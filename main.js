const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')
const LoadConfig = require('./electron/LoadConfig')
const DBconnection = require('./electron/DBconnection')
const StorageInit = require('./electron/StorageInit')
let fs = require('fs')
let path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // 创建浏览器窗口。
  win = {}

  if (process.env.NODE_ENV === 'devlopment') {
    win = new BrowserWindow({
      width: 1200,
      height: 700
    })
    win.loadURL('http://localhost:8088')
    // 打开开发者工具
    win.webContents.openDevTools()
  } else {
    win = new BrowserWindow({
      width: 800,
      height: 600
    })
    win.loadURL(`file://${__dirname}/dist/index.html`)
  }

  // 如果用户为注册用户 则与服务器同步数据
  // 读取本地文件
  let config = new LoadConfig()
  // 创建数据库连接
  let connection = new DBconnection(config.host, config.port, config.username, config.password, config.database)
  connection.makeConnection()
  let tableList = connection.makeSelect('show tables')
  tableList.then(function (res) {
    console.dir(res)
    setTimeout(function () {
      win.webContents.send('loadTable', res)
    }, 3000)
  })
  connection.deleteConnection()

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。

// 在页面渲染完成后，通知主进程将数据给他
ipcMain.on('renderFinish', (event, value) => {
  console.log('--------->', 'render finished', value)
  let storage = new StorageInit()
  storage.SEARCH({}).then(function (res) {
    console.log('--------->', 'load pageList')
    win.webContents.send('initNoteList', res)
  })
})

// 添加note
ipcMain.on('addNote', (event, value) => {
  console.log('--------->', 'addNote')
  let storage = new StorageInit()
  storage.INSERT(value).then(function (res) {
    console.dir(res)
  })
})

// 修改软件配置
ipcMain.on('updateSettings', (event, value) => {
  console.log('--------->', 'updateSettings')
})
