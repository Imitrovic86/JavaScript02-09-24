const a = 7
const b = 5
const c= "5"

/* Logicki operatori
< manje
> vece
<= manje ili jednako
>= vece ili jednako
== jednako
=== indenticno
!= razlicito
!== neindenticno
*/
console.log("Poredjenje <:", a < b)
console.log("Jednakost ==:" , b == c)
console.log("indenticnost===:", b === c)

// && ( AND) - vraca true samo ako su leva i desna strana true 
console.log (a > b && b !=c)
// || (OR) - vraca true ako je bar jedna strana true
console.log ( a<b || b!==c)