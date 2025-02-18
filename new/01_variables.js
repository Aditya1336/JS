const accountId = 123456
let accountName = "Adi"
var accountNo = "1336"
accountCity = "Malkapur"

/*
    Dont use var as it struggles with block  scope and functional scope
*/

accountName = "tya"
accountNo = "250804"
console.log(accountId)
console.table([accountId,accountName,accountNo,accountCity])
