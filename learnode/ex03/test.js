const fs = require('fs');

var buf = fs.readFile(process.argv[2], func = (err, buf) =>{
console.log(buf.toString().split('\n').length - 1);
});
