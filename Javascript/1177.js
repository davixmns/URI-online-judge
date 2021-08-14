var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var v = [];

for (i = 0; i < 1000; i++) {
    v[i] = i % n;
    console.log("N[" + i + "] = " + v[i])
}