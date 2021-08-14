var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var c = 0;
var n;
for (i=0;i<5;i++) {
    n = parseInt(lines.shift());
    if (n%2==0) {
        c+=1;
    }
}
console.log(c + " valores pares");