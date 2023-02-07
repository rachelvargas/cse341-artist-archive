const express = require('express');
const app = express();
app.set('view engine', 'ejs')

displayHome = app.get('/', (req, res) => {

    // OIDC HOME
    res.send(req.oidc.isAuthenticated() ? res.render('home') : res.render('login'))

  });


  module.exports = {
    displayHome
  };

