var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var a = 0;
var b = 1;
var c;
var linha = "";

for (i = 1; i <= n; i++) {
    if (i == n) {
        linha = linha + a;
    }
    else {
        linha = linha + a + " ";
    }
    c = a + b;
    a = b;
    b = c;
}
console.log(linha);