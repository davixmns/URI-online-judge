var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for (i = 0; i < n; i++) {
    var input = lines.shift("XXX");
    var [x, y] = input.split(" ");
    x = parseInt(x);
    y = parseInt(y);
    if (y == 0) {
        console.log("divisao impossivel");
    }
    var c = x / y;
    if (isFinite(c)) {
        console.log(c.toFixed(1));
    }
}