var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());
var i = 1;

while (i <= 6) {
    if (entrada % 2 == 1) {
        console.log(entrada);
        entrada += 2
    }
    else {
        console.log(entrada + 1);
        entrada += 2;
    }
    i++
}