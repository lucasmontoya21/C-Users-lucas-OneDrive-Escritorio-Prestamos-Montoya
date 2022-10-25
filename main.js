
alert ("bienvenidos al simulador de prestamos");

let montoSolicitado = parseInt(prompt("ingrese el monto a solicitar: "));{
    alert("Perfecto! ahora ingresa la cantidad de pagos a realizar")
}

let cantidadDeCuotas = prompt( "ingrese la cantidad de cuotas, temporalmente solo contamos con la modalidad 12 cuotas disculpe!");

while(cantidadDeCuotas != "12"){
    console.log (cantidadDeCuotas);
    cantidadDeCuotas = prompt("ingrese la cantidad de cuotas, temporalmente solo contamos con la modalidad 12 cuotas disculpe!");
}

let cuotas = parseInt(12)

function division(montoSolicitado, cantidadDeCuotas){
    let resultado = montoSolicitado / cantidadDeCuotas;
    return resultado;
}

let resultadoDivision = division(montoSolicitado, cuotas);
alert("perfecto su monto a abonar es " + resultadoDivision + " pesos por mes")



