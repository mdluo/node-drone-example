const { getCollection } = require('../external/db');

const collectionName = 'users';

async function index() {
  const collection = await getCollection(collectionName);
  const result = await collection.find({}).toArray();
  return result;
}

async function create(user) {
  const collection = await getCollection(collectionName);
  const { ops } = await collection.insertOne(user);
  return ops[0];
}

module.exports = {
  index,
  create,
};
