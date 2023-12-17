const os = require('os');
const user = os.userInfo();
console.log(user);
console.log(`the system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    totalMem: os.release(),
    freeMem: os.freemem(),
}
console.log(currentOS);