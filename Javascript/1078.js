var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());

for (i=1; i<=10; i++) {
    console.log(i+" x "+x+" = "+i*x)  
}