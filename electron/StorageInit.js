/**
 * @author jcxu
 * @description 初始化本地数据库
 * @todo 后期修改为单例
 */

const Nedb = require('nedb')

class StorageInit {
  constructor (filePath = './data/rosa.db', autoLoad = true) {
    this.filepath = filePath
    this.autoload = autoLoad
    this.db = new Nedb({
      filename: 'rosa',
      filepath: './data/rosa.db',
      autoload: true,
      inMemoryOnly: false,
      timestampData: true,
      onload: function (error) {
        if (error) {
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
      me.db.find(DATA, (err, ret) => {
        if (err) {
          reject(err)
        } else {
          resolve(ret)
        }
      })
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
