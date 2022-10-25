const sqliteConnection = require ('../../sqlite')

const createUsers =  require ('./createUsers')

async function migrationsRun(){
  const tables = [
    createUsers
  ].join('')
  sqliteConnection().then(db => db.exec(tables)).catch( error => console.error(error))

}
module.exports = migrationsRun