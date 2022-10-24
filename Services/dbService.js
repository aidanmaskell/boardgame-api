const MongoClient = require('mongodb').MongoClient
const url = "mongodb://root:password@localhost:27017"

const getCollection = async () => {
    const connection = await MongoClient.connect(url)
    const db = connection.db('cuttlefish')
    return db.collection('squidsnladders')
}

module.exports = getCollection