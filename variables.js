const accountId= 22458
let accountEmail="abc@gmail.com"
var accountPassword="0987654"
accountCity="Kolkata"

console.table([accountId,accountEmail,accountPassword,accountCity])

/*  let and var are changeable but const cannot be changed
    Using var is not preferred because of issue in block scope and variable scope
    A variable can also be declared without using variable type eg.- accountCity
*/
accountEmail="kjgl@gmail.com"
accountPassword="8521499"
accountCity="Hooghly"

console.table([accountId,accountEmail,accountPassword,accountCity])