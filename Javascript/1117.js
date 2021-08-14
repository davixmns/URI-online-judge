var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i = 0;
var soma = 0;
while(i<2) {
    var x = parseFloat(lines.shift());
    if (x>=0 && x<=10) {              
        soma = soma + x;
        i++
    } 
    else {
        console.log("nota invalida");
    }
}
var media = soma/2;
console.log("media = " + media.toFixed(2))