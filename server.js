var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var config = require("./config");
var Ticket = require("./app/models/tickets.model");

var app = express();

mongoose.connect(config.db, function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("connected to mlab");
      }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var router = express.Router();

router.use(function(req,res,next){
  console.log("someone is interacting with our app");
  next();
});

router.get('/', function(req, res, next){
  res.json({"message": 'welcome to our api'});
  next();
});

router.route('/tickets')
  .post(function (req, res){
    var ticket = new Ticket({
      createdBy: req.body.createdBy,
      severity: req.body.severity,
      status: req.body.status,
      cancelledReason: req.body.cancelledReason,
      cancelledOtherDescription: req.body.cancelledOtherDescription,
      comment: req.body.comment,
      description: req.body.description
    });

    ticket.save(function(err){
      if(err){
        res.send(err);
        return;
      }
      res.json({"message":"Ticket created"});
    });
  })

  .get(function(req, res){
    Ticket.find(function(err,tickets){
      if(err){
        res.send(err);
        return;
      }
      res.send(tickets);
    });
  });

app.use('/api',router);

app.listen(config.PORT, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("server listening at port : " +config.PORT);
  }
});
