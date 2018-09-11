const mysql = require('mysql')

class DBconnection {
  constructor (host, port, username, password, database) {
    this.host = host
    this.port = port
    this.username = username
    this.password = password
    this.database = database
    this.connection = {}
  }

  makeConnection () {
    let connection = mysql.createConnection({
      host: this.host,
      user: this.username,
      password: this.password,
      database: this.database
    })
    this.connection = connection
    return connection
  }

  makeSelect (selecString) {
    let me = this
    let promise = new Promise(function (resolve) {
      me.connection.query(selecString, function (error, results, fields) {
        if (error) {
          // throw error
          return console.log(err.message)
        } else {
          // console.dir(results)
          resolve(JSON.parse(JSON.stringify(results)))
        }
      })
    })
    return promise
  }

  deleteConnection () {
    this.connection.end()
  }
}

module.exports = DBconnection
