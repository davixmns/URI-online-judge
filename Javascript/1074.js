var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var x;
var i = 0;
while (i < n) {
    x = parseInt(lines.shift());
    if (x == 0) {
        console.log("NULL");
    } if (x%2==0 && x>0) {
        console.log("EVEN POSITIVE");
    } if (x%2==0 && x<0) {
        console.log("EVEN NEGATIVE");
    } if (x%2!=0 && x>0) {
        console.log("ODD POSITIVE");
    } if (x%2!=0 && x<0) {
        console.log("ODD NEGATIVE");
    }
    i++
}