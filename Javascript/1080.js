var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nmaior = -1;
var posição;

for (i = 1; i <= 100; i++) {
    var entrada = parseInt(lines.shift());
    if (nmaior < entrada) {
        nmaior = entrada;
        posição = i;
    }
}
console.log(nmaior);
console.log(posição);