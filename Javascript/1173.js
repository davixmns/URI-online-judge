var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vetor = [];
var n = parseInt(lines.shift());
for (i = 0; i < 10; i++) {
    vetor[i] = n;
    console.log("N[" + i + "] = " + n)
    n*=2
}