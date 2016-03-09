module.exports = {
	first: {type: String, match: /^./i},
	last: {type: String, match: /^./i}
},{
	toObject: {virtuals: true},
	toJSON: {virtuals: true}
}