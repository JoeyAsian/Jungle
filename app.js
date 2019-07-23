const express = require('express');
const app = express();
const database = require('./models');

app.set("view engine", "ejs");

app.use(express.static('./public'));

app.get('/login', function (req, res) {
  res.render('Login');
});

app.get('/forgotPass', function (req, res) {
  res.render('ForgotPass');
});

app.get('/SignUp', function (req, res) {
  res.render('SignUp');
});

app.get('/ChildFav', function (req,res) {
  res.render('ChildFav')
})


app.get('/homepage', function (req, res) {
    res.render('homepage')
    console.log(err)
  })


 database.sequelize.sync().then(function(){
    app.listen(3000, function(err){
        if (err)
            console.log(err)
        console.log('Server is live on port: ' + 3000)
    })
});