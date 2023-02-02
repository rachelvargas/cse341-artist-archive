const mongodb = require('../db/connect.js');
//const ObjectId = require('mongodb').ObjectId;


const getDB  = async (req, res) => {
  try {
    const allDB = await mongodb.getDatabase().db('artistarchive').collection('artworks').find();
    allDB.toArray((err, dbs) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(dbs);
    });
  } catch (err) {
    res.status(500).json(err);
  }

  };

  module.exports = {getDB};