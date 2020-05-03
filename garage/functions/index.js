"use strict";

const functions = require("firebase-functions");

require("dotenv").config();

const co = require("co");
const mongodb = require("mongodb");

const uri = process.env.MONGODB;

exports.garages = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  co(function* () {
    const client = yield mongodb.MongoClient.connect(uri);

    const docs = yield client
      .db("Garages")
      .collection("garages")
      .find()
      .toArray();
    res.send(docs);
  }).catch((error) => {
    res.send("Error: " + error.toString());
  });
});
