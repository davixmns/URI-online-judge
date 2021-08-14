var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtd = parseInt(lines.shift());
var valores = lines.shift("xxx");
var vetor = valores.split(" ")

for (var i = 0; i < qtd; i++) {
    vetor[i] = parseInt(vetor[i]);
}
var menor;
var posicao;
menor = vetor[0];
posicao = 0;

for (var j = 1; j < qtd; j++) {
    if (vetor[j] < menor) {
        menor = vetor[j];
        posicao = j;
    }
}
console.log("Menor valor: " + menor);
console.log("Posicao: " + posicao)
