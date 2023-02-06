// Validation middleware
const validator = require('../helpers/validation.js');

const saveArt = (req, res, next) => {
  const validationRule = {
    pieceName : 'required|string',
    description : 'required|string',
    artistId : 'required|int',
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
        artistId : 'required|integer',
        currentlyShowing : 'required|boolean',
        openingDate: 'required|date',
        closingDate : 'required|date'
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

module.exports = {
  saveArt, saveArtist, saveShowtime
};