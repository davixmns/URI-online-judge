var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i = 1;
var valores = lines.shift("xxx");
var[x,y] = valores.split(" ")
while (i==1) {
    x = parseInt(x);
    y = parseInt(y);
    if (x==y) {
        i++        
    }
    if (x>y) {
        console.log("Decrescente");
    }
    if (x<y) {
        console.log("Crescente");
    }
}