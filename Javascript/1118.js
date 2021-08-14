var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    var i = 0;
    var soma = 0;

    while (i < 2) {
        var x = parseFloat(lines.shift());
        if (x >= 0 && x <= 10) {
            soma = soma + x;
            i++;
        }
        else {
            console.log("nota invalida");
        }
    }

    var media = soma / 2;
    console.log("media = " + media.toFixed(2));
    if (i == 2) {
        console.log("novo calculo (1-sim 2-nao)");

        var escolha;
        while (true) {
            escolha = parseInt(lines.shift());
            if (escolha == 1 || escolha == 2) {
                break;
            } else {
                console.log("novo calculo (1-sim 2-nao)");
            }
        }
        if (escolha == 2) {
            break;
        }
    }

}
