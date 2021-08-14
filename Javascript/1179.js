var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vpar = [];
var vimpar = [];
var cpar = 0;
var cimpar = 0;
for (var c = 0; c < 15; c++) {
    var x = parseInt(lines.shift());

    if (x % 2 == 0) {
        vpar[cpar] = x;
        cpar++;
    }
    if (x % 2 != 0) {
        vimpar[cimpar] = x;
        cimpar++;
    }
    if (cpar == 5) {
        cpar = 0;
        for (var j = 0; j < vpar.length; j++) {
            console.log("par[" + j + "] = " + vpar[j]);
        }
    }
    if (cimpar == 5) {
        cimpar = 0;
        for (var k = 0; k < vimpar.length; k++) {
            console.log("impar[" + k + "] = " + vimpar[k]);
        }
    }
}

for (var l = 0; l < cimpar; l++) {
    console.log("impar[" + l + "] = " + vimpar[l]);
}

for (var m = 0; m < cpar; m++) {
    console.log("par[" + m + "] = " + vpar[m]);
}

