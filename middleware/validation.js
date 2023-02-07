// Validation middleware
const validator = require('../helpers/validation.js');

const saveShowtime = (req, res, next) => {
    const validationRule = {
        artist : 'required|string',
        artistId : 'required|string',
        currentlyShowing : 'required|string',
        openingDate: 'required|string',
        closingDate : 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      console.log(validationRule);
      console.log(req.body);
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
    saveShowtime 
}