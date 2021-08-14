var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseFloat(lines.shift());
var y = parseFloat(lines.shift());

var m = y;

if(x > y) {
    m = x;
    x = y;
}

while(x<m) {
    if (x%5==2.0 || x%5==3.0) {
        console.log(x);
    } 
    x+=1
}
