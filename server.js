var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var config = require("./config");

var app = express();

mongoose.connect(config.db, function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("connected to mlab");
      }
});


app.listen(config.PORT, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("server listening at port : " +config.PORT);
  }
});
