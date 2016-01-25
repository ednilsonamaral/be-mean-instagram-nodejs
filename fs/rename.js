//renomeando arquivo de forma async
var fs = require('fs');

fs.rename('arquivo.txt', 'arquivoRenomeado.txt', function (err, data) {
	if (err) throw err;
});