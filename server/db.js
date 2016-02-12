var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var db = {};

//******DATABASE SET UP

db.dbURI = 'mongodb://localhost/ballotize';
mongoose.connect(db.dbURI);
db.Schema = mongoose.Schema;
db.roomSchema = new db.Schema ({
  roomcode: { type: String, required: true, unique: true },
  categories: {},
  candidates: {},
  voters: {},
  results: {}
});
db.roomSchema.plugin(uniqueValidator);
db.Room = mongoose.model('Room', db.roomSchema);


module.exports = db;