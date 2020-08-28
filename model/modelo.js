const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Work = Schema({
	"id": Number,
	"brand": String,
	"description": String,
	"image": String,
	"price": Number,
	"half": Number,
	"palindromo": Number
});

module.exports = mongoose.model('wallmart', Work,'wallmart');


