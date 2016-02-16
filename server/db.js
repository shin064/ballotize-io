var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');

var db = {};

//******DATABASE SET UP

db.dbURI = 'mongodb://localhost/ballotize';
mongoose.connect(db.dbURI);
db.Schema = mongoose.Schema;
db.roomSchema = new db.Schema ({
  roomcode: { type: Number, required: true},
  topic: { type: String },
  owner: { type: String },
  options: {}, //name of options
  numberOfWinners: { type: Number },
  voters: {}, //what each voter voted
  results: [], //array of numbers
  done: { type: Boolean }
}, {toJSON:{minimize:false}});
//db.roomSchema.plugin(uniqueValidator);
db.Room = mongoose.model('Room', db.roomSchema);

module.exports = db;