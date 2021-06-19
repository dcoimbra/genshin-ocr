const mongoose = require('mongoose');

const artifactSchema = mongoose.Schema({
  name: { type: String, required: true },
  set: { type: String, required: true },
  level: { type: Number, required: true },
  maxLevel: { type: Number, required: true },
  equippedTo: { type: String },
  mainStat: { type: String, required: true },
  mainStatBonus: { type: String, required: true },
  subStats: { type: [{ type: String }], required: true },
  subStatsBonuses: { type: [{ type: String }], required: true }
});

module.exports = mongoose.model('Artifact', artifactSchema);
