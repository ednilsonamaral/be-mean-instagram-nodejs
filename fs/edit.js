//editando o arquivo de forma async

//primeiro, leio o arquivo; se não der erro na leitura, então acrescento uma nova linha com texto
var fs = require('fs');

fs.readFile('arquivo.txt', 'utf-8', function (err, data) {
	if (err) throw err;

	var update = data + "\nNovo conteúdo no arquivo!";

	fs.writeFile('arquivo.txt', update, 'utf-8', function (err){
		if (err) throw err;

		console.log(update);
	});
});