//Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.
function meuNome(nome, callback){
  if (typeof nome === 'string') {
    return callback(null, nome);
  } else {
    var err = new Error("Digite uma string, parça!");

    return callback(err, null);
  }
}

meuNome("Ednilson Amaral", function (err, nome){
  if (err) {
    console.log(err);
  } else {
    console.log(nome);
  }
});