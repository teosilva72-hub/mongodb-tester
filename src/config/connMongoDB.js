const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const url = 'mongodb://localhost:27017/mongod';

async function connect() {
    try{
        const client = new MongoClient(process.env.MONGO_HOST);
        await client.connect();
        client.db(process.env.MONGO_DATABASE);
        console.log('conexão mongodb ok');
    }catch(error){
        console.log(error);
    }
}
module.exports = connect()