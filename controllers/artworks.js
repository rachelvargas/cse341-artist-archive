const mongodb = require('../db/connect.js');
//const ObjectId = require('mongodb').ObjectId;


const getDB  = async (req, res) => {
  try {
    console.log("@controller");
    const allDB = await mongodb.getDatabase().db('artistarchive').collection('artworks').find();
    allDB.toArray((err, dbs) => {
      if (err) {
        console.log("@controlleriferr");
        res.status(400).json({ message: err });
      }
      console.log("@controllerelse200");
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(dbs);
      console.log("@controllerelse200");
    });
  } catch (err) {
    console.log("@controllercatch");
    res.status(500).json(err);
    console.log("@controllercatch8");
  }

  };

module.exports = {getDB};