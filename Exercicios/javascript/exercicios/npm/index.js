const lodash = require("lodash")

console.log(lodash.isArray([1, 2, 3, 4]))
console.log(lodash.kebabCase("pintos enormes"))      

const names = ["gustavo", "glenda", "jujuba"]
const jsonString = JSON.stringify(names);
console.log(jsonString)