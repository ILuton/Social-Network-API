const connection = require('../config/connection');
const { User } = require("../models/User")
const { Thought } = require("../models/Thought")
const mongodb = require('mongodb').MongoClient;
const { userData } = require('./data');
const express = require("express");

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/socialNetworkDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    // Drops any documents, if they exist
    db.collection('users').deleteMany({});
    db.collection('users').insertMany(userData, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res.ops);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);
