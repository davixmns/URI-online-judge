var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function arredonda(v) {
    var y = v.toFixed(6);

    if(y.charAt(y.length-2)== '5' &&
    y.charAt(y.length-1)=='0') {
        var aux = y.split('');
        aux[y.length-2] = '0';
        y = parseFloat(aux.join(''));
    } else{
        y = v.toFixed(4);
    }
    return y;
}

var x = parseFloat(lines.shift());
var v = [];
for (i = 0; i < 100; i++) {
    v[i] = x;
    x = x / 2;
    console.log("N[" + i + "] = " + arredonda(v[i]));
}