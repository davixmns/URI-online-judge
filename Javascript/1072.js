var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var cin = 0;
var cout = 0;
for (i=0;i<n;i++) {
    var x = parseInt(lines.shift());

    if (x>=10&&x<=20) {
        cin++
    } else {
        cout++
    }
}
console.log(cin + " in");
console.log(cout + " out");