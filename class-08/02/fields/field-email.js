module.exports = {
	type: String, 
	match: 
		[
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
			'Preencha um e-mail válido!'
		], 
		required: true
	}