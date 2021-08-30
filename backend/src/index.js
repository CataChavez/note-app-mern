require('dotenv').config
const app = require('./app')
require('./db/dataBase')

async function main(){
    await app.listen(3000)
    console.log('Server ON')
}

main();



