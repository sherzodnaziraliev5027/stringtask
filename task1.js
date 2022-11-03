let str='ahb acb aeb aeeb adcb axeb';

let reg=/a[a-zA-Z]*b/g;
let finding=str.match(reg)
console.log(finding)