var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var c = 0;
for (i=0;i<6;i++) {
    var x = parseFloat(lines.shift());
    if (x>0) {
        c+=1;
    }
}
console.log(c + " valores positivos");