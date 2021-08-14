var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var s = 1;
var t = 1;
   for (i = 1; i <= 100; i++) {
    	s += t + 2 / i*2;
   }
console.log(s.toFixed(2));
