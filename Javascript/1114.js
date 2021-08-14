var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var i = 0;
var x;
while (i==0) {
    x = parseInt(lines.shift());
    if (x==2002) {
        console.log("Acesso Permitido");
        i++
    } else {
        console.log("Senha Invalida");
    }
}