var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
for (i = 0; i < n; i++) {
    var div = 0;
    var x = parseInt(lines.shift());

    for (ii = 1; ii <= x; ii++) {
        if (x%ii==0) {
            div++
        }
    }
    if(div==2) {
        console.log(x + " eh primo");
    } else {
        console.log(x + " nao eh primo");
    }
}