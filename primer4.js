const t = "ovo je neki tekst"
    //0123456...
console.log(t)
const tUpper = t.toUpperCase()
console.log(tUpper)
const tLower=t.toLowerCase()
console.log(tLower)

console.log("CharAt:" , t.charAt(4))
console.log("CharCodeAt:" , t.charCodeAt(4))

console.log("Includes:" , t.includes("je"))
console.log("IndexOf:" , t.indexOf("je"))

console.log("Replace:" , t.replace("e" , "*")) //ne menja t
console.log("Replace (regex):" , t.replace(/e/g, "*"))

console.log("Substring:" , t.substring(4,11))

/*let t = "ovo je neki tekst"
console.log(t)
t = t.toUpperCase()
console.log(t)*/