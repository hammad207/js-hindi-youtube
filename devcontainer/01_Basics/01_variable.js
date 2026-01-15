const accountId = 144553
let accountEmail = "hamad@gmail.com"
var accountPassword = "1234"
let accountState;
accountCity = "multan"
// accountId = 2 not allowed

accountEmail = "multan@email.com"
accountPassword = "121212"
accountCity = "lahore"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity, accountState]);
