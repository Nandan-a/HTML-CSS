var express = require('express')
var appp = express()

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: false}))

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/trgdb';
var db;

MongoClient.connect(url,function(err,dbase){
    if(err) return console.Console;ongamepadconnected(err)
    db = dbase;
})

app.get('Mongoform.html',function(req,res){
    res.sendFile('Mongoform.html',{root : __dirname});

})

app.post('/submit-data',function(req,res){
    res.sendFile(req.body.name + "Submitted succesfully");
    db.collection('userdata').save(req.body,function(err,result){
        if(err) return console.log(err)
    })

})