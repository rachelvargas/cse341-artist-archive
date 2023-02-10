// Controller for the metrics collection
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
//const {validationResult} = require('express-validator');


const getMetrics = async (req, res) => {
  try {
  const result = await mongodb
  .getDatabase()
  .db("artistarchive")
  .collection('metrics')
  .find(); 
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
  });
} catch (err) {
  res.status(500).json(err);
}
};

const getOne = async(req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid metric ID.');
  }
  const metricId = new ObjectId(req.params.id);

  try {
    const result = await mongodb 
    .getDatabase()
    .db("artistarchive")
    .collection('metrics')
    .find({_id: metricId});

    result.toArray().then((lists) => {
      if (lists){
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      } else {
        res.status(400).json(oneDB.error || 'An error has occured');
      }
    });

  } catch (err) {
    res.status(500).json(err);
  }
};


const newMetric = async (req, res) => {
 try {
  const metric = 
  {                                                     
    artist: req.body.artist,
    artistId: req.body.artistId,
    overallSales: req.body.overallSales,
    criticRemarks: req.body.criticRemarks,
    exhibitTurnOut: req.body.exhibitTurnOut
  };

  const response = await mongodb
  .getDatabase()
  .db("artistarchive")
  .collection('metrics')
  .insertOne(metric);

  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Task could not be performed');
  }
} catch (err) {
res.status(500).json(err);
}
};


const updateMetric = async( req, res) => {

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid id.');
  }
  try {
  const metricId = new ObjectId(req.params.id);
  const metric =
  { 
    artist: req.body.artist,
    artistId: req.body.artistId,
    overallSales: req.body.overallSales,
    criticRemarks: req.body.criticRemarks,
    exhibitTurnOut: req.body.exhibitTurnOut
  };

  const response = await mongodb
  .getDatabase()
  .db("artistarchive")
  .collection('metrics')
  .replaceOne({_id: metricId}, metric);
  res.setHeader('Content-Type', 'application/json');

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Task could not be performed');
}
} catch (err) {
  res.status(500).json(err);
}
};


const deleteMetric = async( req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid artwork ID.');
  }
  const metricId = new ObjectId(req.params.id);
  try {
  const response = await mongodb 
  .getDatabase()
  .db("artistarchive")
  .collection('metrics')
  .deleteOne({_id: metricId}, true); 

  if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'Task could not be performed');
  }
} catch (err) {
  res.status(500).json(err);
}
};
module.exports = { getMetrics, getOne, newMetric, updateMetric, deleteMetric }
