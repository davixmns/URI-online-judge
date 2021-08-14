var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var i = 0;
var x = 1;
while (i < n) {
    console.log("%d %d %d %s", x++, x++, x++, 'PUM');
    x++
    i++
}
