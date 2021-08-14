var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var n = lines.shift()
var v = [1000];
var aux;

for (j = 0; j < n; j++) {
    v[j] = parseInt(lines.shift());
}

for (var i = v.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        if (v[j] > v[j + 1]) {
            aux = v[j];
            v[j] = v[j + 1];
            v[j + 1] = aux;
        }
    }
}
for (k = 0; k < v.length; k++) {
    console.log(v[k]);
}