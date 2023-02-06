const mongodb = require('../db/connect.js');
//const ObjectId = require('mongodb').ObjectId;


const getDB  = async (req, res) => {
  const allDB = await mongodb.getDatabase().db('artistarchive').collection('artworks').find();
  allDB.toArray().then((dbs) => {
    if (dbs){
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(dbs);
    } else {
      res.status(400).json(allDB.error || 'An error has occured');
    }
  });

};

  module.exports = {getDB};