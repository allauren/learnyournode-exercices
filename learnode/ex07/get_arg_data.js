const http = require('http');

module.exports = (str, callback) =>{

let ret = [];

let req = http.get(str, function(res) {

  res.setEncoding('utf8');
  res.on('data', (data)=>{
  ret.push(data);
  })
  res.on('end', ()=>{
	callback(null, ret);
  })
}).on('error', function(err) {
console.log('coucou je sors ici');
 return callback(err.message);
}); 
req.end()
}
