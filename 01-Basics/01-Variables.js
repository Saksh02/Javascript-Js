const accountId = 192948;

let accountEmail = "saks@google.dev"

var accounPassword = "12345"

accountCity = "Hyderabad"
let accountState;

// accountId = 38; not allowed

accountEmail = "ss@tesla.dev";
accounPassword = "1713";
accountCity = "Bengaluru";

console.log(accountId);

/*
    avoid using var because of 
    scope in block of javascript
*/

console.table([accounPassword, accountEmail, accountCity, accountId, accountState]);
