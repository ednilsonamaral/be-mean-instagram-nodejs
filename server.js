var http = require('http');
var fs = require('fs');

http.createServer(function (request, response){
var path = 'desafio'+ request.url;

//verificando se ele encontra o diretorio, caso não encontre, criar
try{
	fs.accessSync('desafio', fs.F_OK);
} catch (e){
	fs.mkdirSync('desafio');
}

try{
	fs.accessSync(path, fs.R_OK);

	if(fs.lstatSync(path).isDirectory()){
		response.writeHeader(200, {"Content-Type": "text/html"});
		
		try{
			var indexPath = path+'/index.html';
			response.write(fs.readFileSync(indexPath, 'utf-8'));
		}catch(e){
			var dir = fs.readdirSync(path);
			
			dir.forEach(nome =>{
				response.write('<a href="'+ request.url +'/'+ nome +'">'+ nome +'</a><br>');
			});
		}
	} else {
		var typeFile = path.split(".");
	
		switch(typeFile[typeFile.length-1]){
			case 'css':
				response.writeHead(200, {"Content-Type": "text/css"});
				break;
			case 'html':
				response.writeHead(200, {"Content-Type": "text/html"});
				break;
			case 'jpg':
				response.writeHead(200, {"Content-Type": "image/jpeg"});
				break;
			case 'gif':
				response.writeHead(200, {"Content-Type": "image/gif"});
				break;
		}
		
		response.write(fs.readFileSync(path));
	}
} catch(e){
	response.writeHeader(404, {"Content-Type": "text/html;charset=utf-8"});
	response.write('Página não encontrada');
}

response.end();

}).listen(3000, function(){
	console.log("Servidor rodando em localhost:3000");
});