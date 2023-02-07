// Validation middleware
const validator = require('../helpers/validation.js');

const saveArt = (req, res, next) => {
  const validationRule = {
    pieceName : 'required|string',
    description : 'required|string',
    artistId : 'required|string',
    artist: 'required|string',
    style : 'required|string',
    genre : 'required|string',
    showing : 'required|string',
    date : 'required|string',
    picLink : 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Something is wrong with the information supplied',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveArtist = (req, res, next) => {
    const validationRule = {
        firstName: 'required|string',
        lastName: 'required|string',
        overallGenre: 'required|string',
        showing: 'required|string',
        metrics: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Something is wrong with the information supplied',
          data: err
        });
      } else {
        next();
      }
    });
  };

  const saveShowtime = (req, res, next) => {
    const validationRule = {
        artist : 'required|string',
        artistId : 'required|string',
        currentlyShowing : 'required|string',
        openingDate: 'required|string',
        closingDate : 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      console.log(status);
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Something is wrong with the information supplied',
          data: err
        });
      } else {
        next();
      }
    });
  };

  const saveMetric = (req, res, next) => {
    const validationRule = {
        artist : 'required|string',
        artistId : 'required|string',
        currentlyShowing : 'required|string',
        openingDate: 'required|string',
        closingDate : 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      console.log(status);
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Something is wrong with the information supplied',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
  saveArt, saveArtist, saveShowtime, saveMetric
};