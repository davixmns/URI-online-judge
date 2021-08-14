var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vetor = [];
var i;
var n;
for (i = 0; i < 100; i++) {
    n = parseFloat(lines.shift());
    if (n <= 10) {
        vetor[i] = n;
        console.log("A[" + i + "] = " + vetor[i].toFixed(1));
    }
}