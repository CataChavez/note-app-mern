require('dotenv').config()
const app = require('./app')
require('./db/dataBase')

async function main(){
    await app.listen(app.get('port'))
    console.log('Server ON en PORT:', app.get('port'))
}

main();



