var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var ng = 0;
var escolha = 0;
var empates = 0;
var vinter = 0;
var vgremio = 0;
while (escolha == 0) {
    var valores = lines.shift("XXX");
    var [inter, gremio] = valores.split(" ");
    inter = parseInt(inter);
    gremio = parseInt(gremio);
    if (inter>gremio) {
        vinter++;
    }
    if (inter<gremio) {
        vgremio++;
    }
    if (inter==gremio) {
        empates++;
    }
    console.log("Novo grenal (1-sim 2-nao)");
    numero = parseInt(lines.shift());
    ng++
    if (numero == 2) {
        escolha++;
    }
}
console.log(ng + " grenais");
console.log("Inter:"+vinter);
console.log("Gremio:"+vgremio);
console.log("Empates:"+empates);

if (vinter>vgremio) {
    console.log("Inter venceu mais");
}
else if (vinter<vgremio) {
    console.log("Gremio venceu mais");
}
else if (vinter==vgremio) {
    console.log("Nao houve vencedor")
}


