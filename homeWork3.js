//task 3.1
function returnArray(a, b, ...others){
    let multiply = 1;
    for(i of others){
        multiply *= i;
    }
    return [a + b, multiply]
}
console.log(returnArray(1, 2, 3, 4, 5, 6, 7, 8)) // [3, 20160]

//task 3.2
const user = {
    bank: "bog",
    address: "tbilisi"
}
const printadrress = (user = {}) => {
    console.log(user.address)
}
printadrress(user); // tbilisi

const user2 ={
    bank: "tbc"
}
const printadrress2 = (user2 = {}) => {
    console.log(user2.address2)
}
printadrress2(user); // undefined

//task 3.3
const worldCup = {
    organization: "Fifa",
    hostCountry: "Katari",
    countrys: {
        country1: "Ekvador",
        country2: "Nederland",
        country3: "Senegal"
    }
}
function makeNewWorldCup(worldCup) {
    const newWorldCup = {
        ...worldCup,
        countrys: {
            ...worldCup.countrys
        }
    }
    return newWorldCup;
}
console.log(makeNewWorldCup(worldCup))