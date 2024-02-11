const a=5
const b=7
let c= "7"

console.log (a+b)
console.log (a+c) // "5" + "7" => "57"
console.log (a+Number(c))
console.log (String(a)+b) // eksplicitna konverzija

console.log (parseInt("5"))
console.log (parseFloat("5")) // U memoriji 5.0

const d = a < b ? "jeste" : "nije"
console.log ("d:", d)

const godine=33
const f = godine<18? "maloletan" : "punoletan"
console.log(f)