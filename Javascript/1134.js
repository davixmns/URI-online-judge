var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x;
var i = 0;
var alcool = 0;
var gasolina = 0;
var diesel = 0;
while(i==0) {
    x = parseInt(lines.shift());

    if (x==1) {
        alcool++;
    } else if (x==2) {
        gasolina++;
    } else if (x==3) {
        diesel++
    }
    if (x==4) {
        i++;
    }
}
console.log("MUITO OBRIGADO");
console.log("Alcool: "+ alcool);
console.log("Gasolina: "+ gasolina);
console.log("Diesel: "+ diesel);