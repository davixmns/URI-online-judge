var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var fator = 1;
for (i=n; i!=0; i--) {
    fator*=i;
}
console.log(fator);