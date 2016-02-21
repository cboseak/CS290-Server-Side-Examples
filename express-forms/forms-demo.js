var express = require('express');

var expApp = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

expApp.use(bodyParser.urlencoded({ extended: false }));
expApp.use(bodyParser.json());

expApp.engine('handlebars', handlebars.engine);
expApp.set('view engine', 'handlebars');
expApp.set('port', 4000);

expApp.get('/', function(req,res){
  res.render('home');
});

expApp.get('get-data', function(req,res){
  //establishing object with default values
  var itemsToDisplay = {  params1 : 'no data sent',
                          params2 : 'no data sent',
                          params3 : 'no data sent',
                          params4 : 'no data sent',
                          params5 : 'no data sent',
                          params6 : 'no data sent',
                          params7 : 'no data sent'};
  //setting values based on parameters in query
  itemsToDisplay.params1 = req.query.param1;
  itemsToDisplay.params2 = req.query.param2;
  itemsToDisplay.params3 = req.query.param3;
  itemsToDisplay.params4 = req.query.param4;
  itemsToDisplay.params5 = req.query.param5;
  itemsToDisplay.params6 = req.query.param6;
  itemsToDisplay.params7 = req.query.param7;

  res.render('p1', itemsToDisplay.params1);
  res.render('p2', itemsToDisplay.params2);
  res.render('p3', itemsToDisplay.params3);
  res.render('p4', itemsToDisplay.params4);
  res.render('p5', itemsToDisplay.params5);
  res.render('p6', itemsToDisplay.params6);
  res.render('p7', itemsToDisplay.params7);
});


