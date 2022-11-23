// დავალება 1.

function equality(a, b){
    if (a === b){
        return "It's equal";
    } else{
        return "It's not equal";
    }
}
console.log(equality(a, b))


//დავალება 2.

function convertToCelsius(farenheit){
    if (typeof farenheit !== "number"){
        return false;
    } else{
        return (farenheit - 32) / 5 * 9;
    }
}
console.log(convertToCelsius(farenheit))


//დავალება 3.

function calculation(a, b, operator){
    if (typeof a !== "number" && typeof b !== "number" && operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*"){
        return false;
    } else if (b == 0 && operator === "/"){
        return false;
    } else if (operator === "+"){
        return a + b;
    } else if (operator === "-"){
        return a - b;
    } else if (operator === "/"){
        return a / b;
    } else {
        return a * b;
    }
}
console.log(calculation(a, b, operator))
