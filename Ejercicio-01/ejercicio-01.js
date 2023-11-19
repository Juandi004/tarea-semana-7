'use strict'

let personAge=Number(prompt("Introduzca el año de su nacimiento"));

function calculateAge(){
    let currentYear=2023;
    let finalAge=currentYear-personAge;
    alert("Su edad es: "+finalAge);
}

calculateAge();