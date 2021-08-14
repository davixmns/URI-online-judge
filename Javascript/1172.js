var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vetor = [];
for (i = 0; i < 10; i++) {
    var n = parseInt(lines.shift());
    vetor[i] = n;
    if (n <= 0) {
        console.log("X[" + i + "]" + " = 1");
    }
    else {
        console.log("X[" + i + "]" + " = " + vetor[i]);
    }
}