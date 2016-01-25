//criando o arquivo de forma async
var fs = require('fs');

fs.writeFile("./arquivo.txt", "Hello, world!", function(err, result){
	if (err) throw err;

	console.log(result);
});