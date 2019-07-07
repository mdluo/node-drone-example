const { MongoClient } = require('mongodb');

const dbHost = process.env.DB_HOST || 'localhost';
const client = new MongoClient(`mongodb://${dbHost}`);

async function getDB(dbName = 'example') {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}

async function getCollection(collectionName) {
  const db = await getDB();
  return db.collection(collectionName);
}

module.exports = {
  getDB,
  getCollection,
};
