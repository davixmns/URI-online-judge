var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nj = parseInt(lines.shift());

var vetor = lines.shift("xxx");
var [saq, bloq, ataq] = vetor.split(" ");
vetor1 = []
vetor2 = [];

for (var i = 0; i < nj; i++) {
    var nome = lines.shift("nome");
    for (j = 0; j < 2; j++) {
        saq = parseInt(saq);
        bloq = parseInt(bloq);
        ataq = parseint(ataq);
    }
}
var saques = (vetor[3] * 100) / vetor[0];
var bloqueios = (vetor[4] * 100) / vetor[1];
var ataques = (vetor[5] * 100) / vetor[2];

console.log("Pontos de Saque: " + saques.toFixed(2) + " %.");
console.log("Pontos de Bloqueio: " + bloqueios.toFixed(2) + " %.");
console.log("Pontos de Ataque: " + ataques.toFixed(2) + " %.");