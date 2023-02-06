const express = require('express');
const app = express();
app.set('view engine', 'ejs')

displayHome = app.get('/', (req, res) => {
    // const data =
    //   'Portfolio App'

    //GITHUB AUTH HOME
    // res.render('home');

    // OIDC HOME
    res.send(req.oidc.isAuthenticated() ? res.render('home') : res.render('login'))
    // res.send(req.oidc.isAuthenticated() ? res.render('login') : res.render('home'))
  });


  module.exports = {
    displayHome
  };

