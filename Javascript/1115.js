var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i = 0;

while (i==0) {
    var input = lines.shift("xxx");
    var [x,y] = input.split(" ");
    x = parseInt(x);
    y = parseInt(y);
    if (x>0&&y>0) {console.log("primeiro");} 
    if (x<0&&y>0) {console.log("segundo");}
    if (x<0&&y<0) {console.log("terceiro");} 
    if (x>0&&y<0) {console.log("quarto");} 
    if (x==0||y==0) {i++}

}