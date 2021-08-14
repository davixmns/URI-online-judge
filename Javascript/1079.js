var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for(i=0; i<=n; i++) {
    var valores = lines.shift("XXX");
    var [x,y,z] = valores.split(" "); 
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    var c = ((x*2)+(y*3)+(z*5))/10;
    console.log(c.toFixed(1));   
}