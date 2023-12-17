const {readFileSync, writeFileSync} = require('fs');

const f = readFileSync('./content/first.txt', 'utf8');
const s = readFileSync('./content/second.txt', 'utf8');
//console.log(f,s);
/* const fs = require('fs');
fs.read */
writeFileSync (
'./content/result-sync.txt',
`Here is the result : ${f}, ${s}`
)
const t = readFileSync('./content/result-sync.txt', 'utf8');
console.log(t);