var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var cpares = 0;
var cimpares = 0;
var cpositivos = 0;
var cnegativos = 0;
var n;

for (i=0;i<5;i++){
    n = parseInt(lines.shift());

    if (n%2==0) {
        cpares+=1;
    } 
    if (n%2!=0) {
        cimpares+=1;
    }
    if (n>0) {
        cpositivos+=1;
    } 
    if (n<0) {
        cnegativos+=1;
    }
}
console.log(cpares + " valor(es) par(es)");
console.log(cimpares + " valor(es) impar(es)");
console.log(cpositivos + " valor(es) positivo(s)");
console.log(cnegativos + " valor(es) negativo(s)");