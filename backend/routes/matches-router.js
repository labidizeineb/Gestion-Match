// import express module
const express = require("express");
// Model Importation
const Match = require("../models/match");
const router=express.Router();


// Business Logic :matches
// Business Logic :Get All matches
router.get("/", (req, res) => {
    console.log("Here into BL : Get All matches");
    Match.find().then((docs) => {
      res.json({ matches: docs });
    });
  });
  // Business Logic : Get match by Id
  router.get("/:id", (req, res) => {
    console.log("Here into BL : Get match by Id");
    let id = req.params.id;
    Match.findOne({ _id: id }).then((doc) => {
      res.json({ match: doc });
    });
  });
  // Business Logic : Search match by score
  router.get("/search/:score", (req, res) => {
    let score = req.params.score;
    Match.find()
      .or([{ scoreOne: score }, { scoreTwo: score }])
      .then((docs) => {
        res.json({ matchesSerchedByScore: docs });
      });
  });
  // Business Logic : Delete match by Id
  router.delete("/:id", (req, res) => {
    console.log("Here into BL : Delete match by Id");
    let id = req.params.id;
    Match.deleteOne({ _id: id }).then((deleteResponse) => {
      deleteResponse.deletedCount
        ? res.json({ isDeleted: true })
        : res.json({ isDeleted: false });
    });
  });
  // Business Logic : Add match
  router.post("/", (req, res) => {
    console.log("Here into BL : Add match ", req.body);
    let match = new Match(req.body);
    match.save();
    res.json({ objectIsAdded: true });
  });
  // Business Logic : Update match
  router.put("/", (req, res) => {
    Match.updateOne({ _id: req.body._id }, req.body).then((updateResult) => {
      updateResult.nModified
        ? res.json({ isUpdated: true })
        : res.json({ isUpdated: false });
    });
  });
  
  // make router impotable from another files
module.exports = router;