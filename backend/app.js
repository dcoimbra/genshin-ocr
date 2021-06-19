const { APP_BASE_HREF } = require('@angular/common');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const Artifact = require('./models/artifact');
const { resolveForwardRef } = require('@angular/core');

const app = express();

mongoose.connect("mongodb+srv://username:password@genshinocr.m0le9.mongodb.net/GenshinOCR?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database')
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
                "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/artifacts", (req, res, next) => {
  const artifact = new Artifact({
    name: req.body.name,
    set: req.body.set,
    level: req.body.level,
    maxLevel: req.body.maxLevel,
    equippedTo: req.body.equippedTo,
    mainStat: req.body.mainStat,
    mainStatBonus: req.body.mainStatBonus,
    subStats: req.body.subStats,
    subStatsBonuses: req.body.subStatsBonuses
  });

  artifact.save().then(createdArtifact => {
    res.status(201).json({
      message: 'Artifact added successfully',
      artifactId: createdArtifact._id
    });
  });
});

app.get('/api/artifacts', (req, res, next) => {

  Artifact.find().then(documents => {
    res.status(200).json({
      message: "Artifacts fetched successfully",
      artifacts: documents
    });
  });
});

app.delete("/api/artifacts/:id", (req, res, next) => {
  Artifact.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Artifact deleted" });
  });
});

module.exports = app;
