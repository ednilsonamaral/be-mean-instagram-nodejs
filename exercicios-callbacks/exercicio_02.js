//Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

function soma(n1, n2, callback){
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var result = n1 + n2;

    return callback(null, result);
  } else {
    var err = new Error("Digite um número, parça!");

    return callback(err, null);
  }
}

soma(5, 5, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});