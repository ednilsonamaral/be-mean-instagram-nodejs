//console.log(__dirname);

//console.log(__filename);

/*
function mostra(){
	console.log("Hello, world, após 3 segundos!");
}

setTimeout(mostra, 3000);
*/


/*
function printHello(){
   console.log( "Hello, World, após 2 segundos e depois dá um CLEAR!");
}

var t = setTimeout(printHello, 5000);

clearTimeout(t);
*/

/*
const time = setInterval(() => console.log("Hello, again and again and again!"), 1000);


setTimeout(() => {
	clearInterval(time);	
}, 5000);
*/

process.on('exit', function(code) {
  setTimeout(function() {
    console.log("Está rodando essa bagaça!");
  }, 0);
  
  console.log('Sobre esse código:', code);
});

console.log("Código finalizado, vlw flw!");