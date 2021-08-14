var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var i = 0;
while (i<10000) {
    if (i%x==2) {
        console.log(i);
    }
    i++
} 