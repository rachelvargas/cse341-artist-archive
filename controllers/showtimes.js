const mongodb = require('../db/connect.js');
const ObjectId = require('mongodb').ObjectId;

///here for another deployyyy testt
const getDB  = async (req, res) => {
  try {
    const allDB = await mongodb.getDatabase().db('artistarchive').collection('showtimes').find();
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

const getShowtime = async (req, res) => {
  
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid showtime ID.');
    }
    const id = new ObjectId(req.params.id);
    try {
    const oneDB = await mongodb.getDatabase().db('artistarchive').collection('showtimes').find({ _id: id});
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

const createShowtime = async (req, res) => {
  try {
    const newShowtime = {
      artist : req.body.artist,
      artistId : req.body.artistId,
      currentlyShowing : req.body.currentlyShowing,
      openingDate: req.body.openingDate,
      closingDate : req.body.closingDate,
    };
      const resp = await mongodb.getDatabase().db('artistarchive').collection('showtimes').insertOne(newShowtime);
      if (resp.acknowledged) {
        res.status(201).json(resp);
      } else {
        res.status(500).json(resp.error || 'Task could not be performed');
      }
  } catch (err) {
    res.status(500).json(err);
  }
    };

const updateShowtime = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid showtime ID.');
    }
    const id = new ObjectId(req.params.id);

    const newShowtime = {
        artist : req.body.artist,
        artistId : req.body.artistId,
        currentlyShowing : req.body.currentlyShowing,
        openingDate: req.body.openingDate,
        closingDate : req.body.closingDate,
    };

    const resp = await mongodb.getDatabase().db('artistarchive').collection('showtimes').replaceOne({_id: id}, newShowtime);
    if (resp.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(resp.error || 'Task could not be performed');
  }
  } catch (err) {
    res.status(500).json(err);
  }
};
    
const deleteShowtime = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid showtime ID.');
    }
    const id = new ObjectId(req.params.id);
    
    const resp = await mongodb.getDatabase().db('artistarchive').collection('showtimes').deleteOne({_id: id});
    if (resp.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(resp.error || 'Task could not be performed');
  }
} catch (err) {
  res.status(500).json(err);
}
}

module.exports = {getDB, createShowtime, getShowtime, updateShowtime, deleteShowtime};