const accountId = 8520147
let accountEmail = "vaibhav@hotmail.com"
var accountPassword = "haha"
accountCity = "FDB"

console.log(accountEmail)

/*
    Prefer not to use "var" because of the issue with block scope
    and functional scope.

*/

accountEmail = "vigeelante1@google.com"
accountPassword = "ahaha"
accountCity = "Jaipur"

console.table([accountEmail , accountPassword , accountCity])