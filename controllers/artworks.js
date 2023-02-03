const mongodb = require('../db/connect.js');
//const ObjectId = require('mongodb').ObjectId;


const getDB  = async (req, res) => {
    const allDB = await mongodb.getDatabase().db('artistarchive').collection('artworks').find();
    allDB.toArray().then((dbs) => {
      res.status(200).json(dbs);
      
    });

  };

module.exports = {getDB};