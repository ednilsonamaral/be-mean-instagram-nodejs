function toUpper (v) {
	return v.toUpperCase();
}

module.exports = {
	type: String, 
	match: /^./i,
	get: toUpper
}