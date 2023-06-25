
// const MongoClient = require('mongodb').MongoClient;
//or

const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017';
const client= new MongoClient(url);

async function dbConnect()
{ 
    let result = await client.connect();
    database= result.db('e-comm');
    return database.collection('product');
  
}
module.exports= dbConnect;