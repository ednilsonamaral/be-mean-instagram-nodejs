//Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma

function soma(n1, n2, callback){
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var result = (n1 + n2) / 2;

    return callback(null, result);
  } else {
    var err = new Error("Digite um número, parça!");

    return callback(err, null);
  }
}

soma(8, 4, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});