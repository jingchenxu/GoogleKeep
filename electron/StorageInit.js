/**
 * @author jcxu
 * @description 初始化本地数据库
 * @todo 后期修改为单例
 */

const Nedb = require('nedb')
const { Notification } = require('electron')
const { dialog } = require('electron')

class StorageInit {
  constructor (filePath = './data/rosa.db', autoLoad = true) {
    this.filepath = filePath
    this.autoload = autoLoad
    this.db = new Nedb({
      filename: '/jingchenxu/GoogleKeep/rosa.db',
      filepath: '/jingchenxu/GoogleKeep/rosa.db',
      autoload: true,
      inMemoryOnly: false,
      timestampData: true,
      onload: function (error) {
        if (error) {
          console.log('初始化失败')
          dialog.showMessageBox({
            type: 'info',
            title: '1214',
            message: JSON.stringify(error)
          }, function (res) {
            console.dir(res)
          })
          console.dir(error)
        } else {
          console.log('database loading')
        }
      }
    })
  }

  INSERT (DATA) {
    let me = this
    let result = new Promise(function (resolve, reject) {
      me.db.insert(DATA, (err, ret) => {
        if (err) {
          reject(err)
        } else {
          resolve(ret)
        }
      })
    })
    return result
  }

  GET (DATA) {
    let me = this
    let result = new Promise(function (resolve, reject) {
      me.db.findOne(DATA, (err, ret) => {
        if (err) {
          reject(err)
        } else {
          resolve(ret)
        }
      })
    })
    return result
  }

  SEARCH (DATA) {
    let me = this
    let result = new Promise(function (resolve, reject) {
      if (me.db.find) {
        me.db.find(DATA, {}, (err, ret) => {
          if (err) {
            dialog.showMessageBox({
              type: 'info',
              title: '1214',
              message: 'chenggong'
            }, function (res) {
              console.dir(res)
            })
            reject(err)
          } else {
            dialog.showMessageBox({
              type: 'info',
              title: '1214',
              message: 'shibai'
            }, function (res) {
              console.dir(res)
            })
            resolve(ret)
          }
        })
      } else {
        dialog.showMessageBox({
          type: 'info',
          title: '1214',
          message: 'meiyou'
        }, function (res) {
          console.dir(res)
        })
      }
    })
    return result
  }

  UPDATE (DATA) {

  }

  REMOVE (DATA) {
    let me = this
    console.dir(DATA)
    // id 作为主键
    let params = {
      id: DATA.id
    }
    let result = new Promise(function (resolve, reject) {
      me.db.remove(params, {}, (err, ret) => {
        console.dir(params)
        if (err) {
          reject(err)
        } else {
          resolve(ret)
        }
      })
    })
    return result
  }

  DELETE (DATA) {

  }
}

module.exports = StorageInit
