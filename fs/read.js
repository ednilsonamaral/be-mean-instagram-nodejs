//lendo o arquivo de forma async
var fs = require('fs');

fs.readFile('arquivo.txt', 'utf-8', function (err, data){
	if (err) throw err;

	console.log(data);
});