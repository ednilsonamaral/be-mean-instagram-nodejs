//deletando o arquivo de forma async
var fs = require('fs');

fs.unlink('arquivo.txt', function (err){
	if (err) throw err;
});