console.log("Ejercicio uno");

const volumenCubo = (lado) => (lado * lado * lado);
console.log(`El volumen del cubo es de: ${volumenCubo(3)}`);

console.log("--------------");
console.log("Ejercicio dos");

const holaNombre = (nombre) => `Hola ${nombre}`;
console.log(holaNombre("Pedro"));

console.log("--------------");
console.log("Ejercicio tres");

const numeros = (rango) => {
    for (let i = 1; i <= rango; i++) {
        console.log(i);
    }
}
numeros(5);

console.log("---------------");
console.log("Ejercico cuatro");

const isVocal = (vocal) => {
    vocal = vocal.toLowerCase();
    if (vocal == 'a' || vocal == 'e' || vocal == 'i' || vocal == 'o' || vocal == 'u') {
        return true;
    }
    return false;
}
console.log(isVocal("I"));

console.log("---------------");
console.log("Ejercicio cinco");

const upperCadena = (cadena) => (cadena.toUpperCase());

console.log(upperCadena("Buenos días gente"));

console.log("-------------");
console.log("Ejercicio seis");

const primeraLetra = (nombre) => (nombre[0]);
console.log(primeraLetra("Juan"));

console.log("--------------");
console.log("Ejercicio siete");

const cantidadVocales = (cadena) => {
    cadena = cadena.toLowerCase();
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u') {
            contador++;
        }
    }
    return contador;
}
console.log(`La cadena tiene ${cantidadVocales("Santiago")} vocales`);

console.log("-----------");
console.log("Ejercicio ocho");

const cadenaSinVocales = (cadena) => {
    cadena = cadena.toLowerCase();
    let nuevaCadena = cadena.replace(/[aeiou]/g, "");
    return nuevaCadena;
}
console.log(cadenaSinVocales("Tiene"));

console.log("------------------");
console.log("Ejercicio nueve");

const random = () => (Math.floor(Math.random() * 20) + 1);
console.log(random());

console.log("------------------");
console.log("Ejercicio diez");

const isPositivo = (numero) => {
    if (numero >= 0) {
        return `El número ${numero} es positivo`;
    }
    return `El  número ${numero} es negativo`;
}
console.log(isPositivo(1));

console.log("------------------");
console.log("Ejercicio once");

function isPermitido(edad, estatura, permisoParental) {
    if (edad > 17 && estatura > 1.50) {
        return "Puede ingresar";
    } else if (edad < 18 && permisoParental && estatura > 1.50) {
        return "Puede ingresar";
    } else {
        return "No puede ingresar";
    }
}

let edad = 15;
let estatura = 1.74;
let permisoParental = true;
console.log(isPermitido(edad, estatura, permisoParental));

console.log("----------------------");
console.log("Ejercicio doce");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function generarClave(tamaño) {
    let contrasenna = []

    for (let i = 0; i < tamaño; i++) {
        let random = Math.floor(Math.random() * characters.length);
        contrasenna.push(characters[random]);
    }
    return contrasenna.join('');
}

console.log(generarClave(5));

console.log("--------------------");
console.log("Ejercicio trece");

function facturacion(monto, medioPago) {
    medioPago = medioPago.toUpperCase();
    if (medioPago != 'E' && medioPago != 'D' && medioPago != 'C') {
        return "El medio de pago es incorrecto"
    }
    if (monto < 200) {
        return "No tiene descuento";
    } else if (monto >= 200 && monto <= 400 && medioPago == 'E') {
        return "Tiene un descuento del 30%";
    } else if (monto >= 200 && monto <= 400 && medioPago == 'D') {
        return "Tiene un descuento del 20%";
    } else if (monto >= 200 && monto <= 400 && medioPago == 'C') {
        return "Tiene un descuento del 10%"
    } else if (monto > 400) {
        return "Tiene un descuento del 40%";
    }
}

let monto = 190;
let medioPago = "C";

console.log(facturacion(monto, medioPago));

console.log("----------------");
console.log("Ejercicio Catorce");

const operacion = (numeroUno, numeroDos, operacion) => {
    operacion = operacion.toLowerCase();
    if (operacion == "suma") {
        return numeroUno + numeroDos;
    } else if (operacion == "resta") {
        return numeroUno - numeroDos;
    } else if (operacion == "división") {
        return numeroUno / numeroDos;
    } else if (operacion == "multiplicación") {
        return numeroUno * numeroDos;
    } else {
        return "Operación no valida";
    }
}

const operacionDos = (numeroUno, numeroDos, operacion) => {
    operacion = operacion.toLowerCase();
    switch (operacion) {
        case "suma":
            return numeroUno + numeroDos;

        case "resta":
            return numeroUno - numeroDos;

        case "división":
            return numeroUno / numeroDos;
        default:
        case "multiplicación":
            return numeroUno * numeroDos;
    }
}

console.log(operacion(2, 2, "suma"));
console.log(operacionDos(4, 4, "Resta"));


console.log("------------");
console.log("Ejercicio quince");

const cantidadBases = (cadena) => {
    cadena = cadena.toUpperCase();
    let baseA = "A";
    let contadorA = 0;
    let baseT = "T";
    let contadorT = 0;
    let baseC = "C";
    let contadorC = 0;
    let baseG = "G";
    let contadorG = 0;

    let union = []

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] != "A" && cadena[i] != "T" && cadena[i] != "C" && cadena[i] != "G") {
            return "Hay una base que no corresponde";
        }
        if (cadena[i] == "A") {
            contadorA++;
        } else if (cadena[i] == "T") {
            contadorT++;
        } else if (cadena[i] == "C") {
            contadorC++;
        } else if (cadena[i] == "G") {
            contadorG++;
        }
    }
    union.push(`La cantidad de A es: ${contadorA}`);
    union.push(`La cantidad de T es: ${contadorT}`);
    union.push(`La cantidad de C es: ${contadorC}`);
    union.push(`La cantidad de G es: ${contadorG}`);
    return union.join(" - ");;
}

console.log(cantidadBases("AACAGT"));

console.log("----------------");
console.log("Ejercicio dieciseis");

const celsiusToFahrenheit = (celsius) => ((celsius * 1.8) + 32);

const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) / 1.8);

console.log(celsiusToFahrenheit(5));

console.log(fahrenheitToCelsius(41));

console.log("--------------------");
console.log("Ejercicio diecisiete");

const calcularArea = (ancho, largo) => (ancho * largo);

const calcularPerimetro = (ancho, largo) => (2 * (ancho + largo));

console.log(calcularArea(5, 3));
console.log(calcularPerimetro(5, 3));

console.log("------------------");
console.log("Ejercicio dieciocho");

const esPrimo = (numero) => {
    let contador = 0;
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }
    if (contador > 0) {
        return false;
    }
    return true;
}

const respuesta = (numero) => {
    if (esPrimo(numero)) {
        console.log("El número es primo");
    } else {
        console.log("El número no es primo");
    }
};

respuesta(5);

console.log("---------------------");
console.log("Ejercicio diecinueve");

const calcularPromedio = (notaUno, notaDos, notatres) => (notaUno + notaDos + notatres) / 3;

const isAprobado = (promedio) => {
    if (promedio >= 6) {
        return true;
    } else {
        return false;
    }
}

const mostrarResultado = (notaUno, notaDos, notaTres) => {
    const promedio = calcularPromedio(notaUno, notaDos, notaTres);
    if (isAprobado(promedio)) {
        console.log("El estudiante aprobó la materia");

    } else {
        console.log("El estudiante reprobó la materia, mejor suerte para la próxima");

    }
};

mostrarResultado(5, 6, 6);

console.log("-----------");
console.log("Ejercicio veinte");

const charactersDos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const generarContrasenna = (palabra) => {
    const adicional = 5;

    for (let i = 0; i < adicional; i++) {
        let random = Math.floor(Math.random() * charactersDos.length);
        palabra += charactersDos[random];
    }
    return palabra;
}

const mostrarContrasenna = (palabra) => {
    console.log(generarContrasenna(palabra));
}

mostrarContrasenna("Hugo");