/**
 * @author jcxu
 * @description 配置文件操作
 */
let fs = require('fs')
let path = require('path')

class LoadConfig {
  constructor (host, port, username, password) {
    console.log('constructor')
    this.host = host
    this.port = port
    this.username = username
    this.password = password
    this.loadConfig()
  }

  loadConfig () {
    let data = fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8')
    // 读取出来的竟然是string
    data = JSON.parse(data)
    this.host = data.host
    this.port = data.port
    this.username = data.username
    this.password = data.password
    this.database = data.database
  }

  static init () {
    console.log('static init')
  }
}

module.exports = LoadConfig
