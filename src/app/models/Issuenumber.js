const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IssuenumberSchema = new Schema({
	name: {
		type: String,
	},
	issue: {
		type: Number,
		//required: true
	}
})

module.exports = mongoose.model('issuenumbers', IssuenumberSchema)