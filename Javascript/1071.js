var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

var soma = 0;

if (x > y) {
    var auxiliar = x;
    x = y;
    y = auxiliar;
}

for (var i = x + 1; i < y; i++) {
    if (i % 2 != 0) {
        console.log(i)
        soma += i;
    }
}
console.log(soma);
