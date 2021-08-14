var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var somadora = 0
var contagem = 0;
var n;

for (i=0;i<6;i++) {
    n = parseFloat(lines.shift());

    if (n>0) {
        contagem += 1;
        somadora += n
    }
}
var media = somadora/contagem;

console.log(contagem + " valores positivos");
console.log(media.toFixed(1));