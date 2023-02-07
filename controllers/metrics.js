// Controller for the metrics collection
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
//const {validationResult} = require('express-validator');


const getMetrics = async (req, res, next) => {
  try {
  const result = await mongodb
  .getDb()
  .db("artistarchive")
  .collection('metrics')
  .find();
  console.log(result)  
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
    console.log(lists);
  });
} catch (error) {
  console.error(error  || 'Error: The metrics could not be get.')
}
};

const getOne = async(req, res, next) => {
  try {
    const metricId = new ObjectId(req.params.id);
    console.log(metricId);
    const result = await mongodb 
    .getDb()
    .db("artistarchive")
    .collection('metrics')
    .find({_id: metricId});
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
      console.log(lists);
    });
  } catch (error) {
    res.status(500).json({error:"This is an invalid id"});
    //console.error(error);
  }
};

const newMetric = async (req, res) => {
//const errors = validationResult(req)
if (!errors.isEmpty()){
  return res.status(422).json({
    errors: errors.array()
  })
} try {
  const metric = 
  {                                                     
    artist: req.body.artist,
    artistId: req.body.artistId,
    overallSales: req.body.overallSales,
    criticRemarks: req.body.criticRemarks,
    exhibitTurnOut: req.body.exhibitTurnOut
   

  };
  const response = await mongodb
  .getDb()
  .db("artistarchive")
  .collection('metrics')
  .insertOne(movie);
  res.setHeader('Content-Type', 'application/json');
  if (response.acknowledged) {
    res.status(204).json(response);
    console.log(response);
  } else {
    res.status(500).json(response.error || 'Error: The metric could not be update.');
    console.log(error)
  }
} catch(error){
  return res.status(500).json(error || 'Error: The m couetric ld not be update.');
  console.log(error)
} 
};

const updateMetric = async(error, req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid id.');
    }
  const metricId = new ObjectId(req.params.id);
  const metric =
  { 

    artist: req.body.artist,
    artistId: req.body.artistId,
    overallSales: req.body.overallSales,
    criticRemarks: req.body.criticRemarks,
    exhibitTurnOut: req.body.exhibitTurnOut,
    

  };
  const response = await mongodb
  .getDb()
  .db("artistarchive")
  .collection('metrics')
  .replaceOne({_id: metricId}, metric);
  res.setHeader('Content-Type', 'application/json');
  if (response.modifiedCount > 0) {
    res.status(204).send();
    console.log(response);
  } else {
    res.status(500).json(response.error || 'Error: The metric could not be update.');
  }
} catch(error){
  return res.status(500).json(error || 'Error: The metric could not be update.');
  console.log(error)
}
};
const deleteMetric = async(error, req, res) => {
  try {
  const metricId = new ObjectId(req.params.id);
  const response = await mongodb 
  .getDb()
  .db("artistarchive")
  .collection('metrics')
  .deleteOne({_id: metricId}, true); 
  res.setHeader('Content-Type', 'application/json');  
  if (response.modifiedCount > 0) {
    res.status(200).send();
    console.log(response);
  } else {
    res.status(500).json(response.error || 'Error: The metric could not be deleted.');
  }
} catch (error) {
  return res.status(500).json(error || 'Error: The metric could not be update.');
  console.log(error);

}
};
module.exports = { getMetrics, getOne, newMetric, updateMetric, deleteMetric }
