let accountAge = 32

let strAccountAge = String(accountAge)
console.log(typeof strAccountAge)


let numberAccountAge = Number(strAccountAge)
console.log(typeof numberAccountAge)

console.log(Number(undefined));
// "32" ==> 32 and type will be converted to number
// "32acv" ==> Nan (Not a number ) but type will be converted to number
// "null" ==> 0 but type will be converted to number
// "undefined" ==> Nan but type will be converted to number

let numberIsLoggedIn = undefined
let boolIsLogedIn = Boolean(numberIsLoggedIn)

console.log(typeof boolIsLogedIn)
console.log(boolIsLogedIn)

// "" ==> false
// undefined ==> false
// null ==> false
// "xsnxos" ==> true
// 212 ==> true
// 0 ==> false