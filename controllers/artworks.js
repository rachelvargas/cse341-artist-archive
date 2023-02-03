const mongodb = require('../db/connect.js');
//const ObjectId = require('mongodb').ObjectId;


const getDB  = async (req, res) => {
    console.log("@controller");
    const allDB = await mongodb.getDatabase().db('artistarchive').collection('artworks').find();
    console.log('@donemongodb');
    allDB.toArray().then((dbs) => {
      console.log('@donemongodb2');
      res.status(200).json(dbs);
      console.log('@donemongodb3');
    });

  };

module.exports = {getDB};