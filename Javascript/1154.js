var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i = 0;
var s = 0;
while(true) {
    var idade = parseInt(lines.shift());
    if(idade<0) {
        break;
    }
    else {
        s+=idade;
    }
    i++
}
var media = s/i;
console.log(media.toFixed(2));