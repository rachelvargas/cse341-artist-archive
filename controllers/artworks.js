const mongodb = require('../db/connect.js');
const ObjectId = require('mongodb').ObjectId;


const getDB  = async (req, res) => {
  try {
    const allDB = await mongodb.getDatabase().db('artistarchive').collection('artworks').find();
    allDB.toArray().then((dbs) => {
      if (dbs){
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dbs);
      } else {
        res.status(400).json(allDB.error || 'An error has occured');
      }
    });
} catch (err) {
  res.status(500).json(err);
}

};

const getArtwork = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid artwork ID.');
    }
    const id = new ObjectId(req.params.id);
    try {
    const oneDB = await mongodb.getDatabase().db('artistarchive').collection('artworks').find({ _id: id});

    oneDB.toArray().then((dbs) => {

      if (dbs){
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dbs[0]);

      } else {
        res.status(400).json(oneDB.error || 'An error has occured');
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }

  };

const createArtwork = async (req, res) => {
  try {
    const newArtwork = {
      pieceName : req.body.pieceName,
      description : req.body.description,
      artistId : BSON.ObjectId(req.body.artistId),
      artist: req.body.artist,
      style : req.body.style,
      genre : req.body.genre,
      showing : req.body.showing,
      date : req.body.date,
      picLink : req.body.picLink
    };
      const resp = await mongodb.getDatabase().db('artistarchive').collection('artworks').insertOne(newArtwork);
      if (resp.acknowledged) {
        res.status(201).json(resp);
      } else {
        res.status(500).json(resp.error || 'Task could not be performed');
      }
  } catch (err) {
    res.status(500).json(err);
  }
    };

const updateArtwork = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid artwork ID.');
    }
    const id = new ObjectId(req.params.id);

    const newArtwork = {
      pieceName : req.body.pieceName,
      description : req.body.description,
      artistId : req.body.artistId,
      artist: req.body.artist,
      style : req.body.style,
      genre : req.body.genre,
      showing : req.body.showing,
      date : req.body.date,
      picLink : req.body.picLink
    };

    const resp = await mongodb.getDatabase().db('artistarchive').collection('artworks').replaceOne({_id: id}, newArtwork);
    if (resp.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(resp.error || 'Task could not be performed');
  }
  } catch (err) {
    res.status(500).json(err);
  }
};
    
const deleteArtwork = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid artwork ID.');
    }
    const id = new ObjectId(req.params.id);
    
    const resp = await mongodb.getDatabase().db('artistarchive').collection('artworks').deleteOne({_id: id});
    if (resp.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(resp.error || 'Task could not be performed');
  }
} catch (err) {
  res.status(500).json(err);
}
}

  module.exports = {getDB, createArtwork, getArtwork, updateArtwork, deleteArtwork};

