var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());
var i=1;

while(i<=entrada){
    if(i % 2 == 1) {
        console.log(i);
    }   
    i+=1;
}