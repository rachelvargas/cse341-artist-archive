// Controller for the artists collection
const mongodb = require('../db/connect');
const ObjId = require('mongodb').ObjectId;
// const Project = require('../models/projectSchema');
// const {projSchema} = require('../helpers/validation_schema')

const getData = async (req, res) => {
  try{
    const result = await mongodb
    .getDatabase()
    .db('artistarchive')
    .collection('artists')
    .find();
  result.toArray().then((lists) => {
    if (lists){
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    } else {
      res.status(400).json(result.error || 'An error has occured');
    }
   
  });
} catch (err){
  res.status(400).json({ message: err.message });
}
};

const getArtistById = async (req, res) => {
  if (!ObjId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid project id to find a project.');
}
const userId = new ObjId(req.params.id);
  try{
    const result = await mongodb
    .getDatabase()
    .db('artistarchive')
    .collection('artists')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    if (lists){
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    } else {
      res.status(400).json(result.error || 'An error has occured');
    }
   
  });
} catch (err){
  res.status(400).json({ message: err.message });
}
};

const createArtist = async (req, res) => {
try {
    const newArtist = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    overallGenre : req.body.overallGenre,
    showing: req.body.showing,
    metrics : req.body.metrics
    };
    const result = await mongodb
    .getDatabase()
    .db('artistarchive')
    .collection('artists')
    .insertOne(newArtist);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result);

} catch (err) {
    res.status(500).json({ message: err.message });
}
    };

const updateArtist = async (req, res) =>{
    if (!ObjId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to update a contact.');
    }
    const userId = new ObjId(req.params.id);
    const artist = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        overallGenre : req.body.overallGenre,
        showing: req.body.showing,
        metrics : req.body.metrics
    }
    
    try{
        const result = await mongodb
        .getDatabase()
        .db('artistarchive')
        .collection('artists').replaceOne({ _id: userId }, artist);
        if (result.modifiedCount > 0){
        res.status(204).send(); 
        }else {
        res.status(500).json(result.error || 'An error has occured');
    }} catch (err){
        res.status(500).json({ message: err.message });
    }
    };
    
    const removeArtist = async (req, res) =>{
    if (!ObjId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to delete a contact.');
    }
    const userId = new ObjId(req.params.id);
    
    try{
        const result = await mongodb
        .getDatabase()
        .db('artistarchive')
        .collection('artists').deleteOne({ _id: userId }, true);
        if (result.deletedCount > 0){
        res.status(200).send(); 
        }else {
        res.status(500).json(result.error || 'An error has occured');
    }} catch (err){
        res.status(500).json({ message: err.message });
    }
    };

  

module.exports = {
    getData, getArtistById, createArtist, updateArtist, removeArtist
};