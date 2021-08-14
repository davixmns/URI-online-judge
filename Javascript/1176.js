var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var fib = [];
fib[0] = 0
fib[1] = 1

for (i = 2; i <= 60; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}

var qtd = parseInt(lines.shift());

for(i=1; i<=qtd;i++) {
    var pos = parseInt(lines.shift());
    console.log("Fib("+pos+") = "+fib[pos]);
}