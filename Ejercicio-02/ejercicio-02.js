'use strict'

function multiplication(multiplicador, multiplicando){
    let suma=0;
    for (let i=0; i < multiplicador; i++){
        suma= suma+ multiplicando;
    }
    return suma;
}

let firstNumber=Number(prompt(" Ingrese el multiplicador"));
let secondNumber=Number(prompt("Ingrese el multiplicando"));

let total=multiplication(firstNumber, secondNumber);
alert("El resultado es: "+ total);