var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var e = parseInt(lines.shift());
var i = 1;


while (i<=e) {
    if (i%2==0) {
        console.log(i+"^2 = "+(i*i));
    }
    i++
}