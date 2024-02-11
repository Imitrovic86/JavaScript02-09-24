const cena = 100 
let region = "ca"
region=region.toUpperCase()


if(region === "UK") {
    console.log("Cena za UK:", cena * 1.15)
    console.log("Porez:", cena * 0.15)
} else if (region === "US" || region == "CA") {
    console.log("Cena za US/CA:", cena *1.13)
    console.log("Porez:", cena * 0.13)
} else if (region=== "RS") {
    console.log("Cena za RS:", cena *1.2)
    console.log("Porez:", cena * 0.2)
} else if(region==="Rest") {
    console.log ("Cena za ostatak sveta", cena * 1.25)
    console.log("Porez:", cena * 0.25)
}else { 
    console.log(" Vrednost koju ste zadali nije validan region.")
}