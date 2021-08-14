var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vetor = [];
var i = 0;

while (i < 20) {
    var n = parseInt(lines.shift());
    vetor[i] = n;
    i++
}
var aux = 0;
var c = vetor.length;
var meio = Math.floor(c / 2);

for (i = 0; i < meio; i++) {
    aux = vetor[i];
    vetor[i] = vetor[c - i - 1];
    vetor[c - i - 1] = aux;
}

i = 0;
while (i < c) {
    console.log("N[" + i + "] = " + vetor[i]);
    i++
}