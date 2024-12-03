console.log("Ejemplo uno con función flecha...");

const isAprobado = (notaUno, notaDos, notaTres, notaCuatro, notaCinco) => {
    let sumaNotas = notaUno + notaDos + notaTres + notaCuatro + notaCinco;
    let resultado = sumaNotas / 5;

    if (resultado >= 3) {
        return "Materia aprobada";
    } else {
        return "Materia no aprobada";
    }
}

console.log(isAprobado(3, 2, 3, 3, 3));

console.log("Ejemplo uno función normal...");

function esAprobado(notaUno, notaDos, notaTres, notaCuatro, notaCinco) {
    let sumaNotas = notaUno + notaDos + notaTres + notaCuatro + notaCinco;
    let resultado = sumaNotas / 5;

    if (resultado >= 3) {
        return "Materia aprobada";
    } else {
        return "Materia no aprobada";
    }
}

console.log(esAprobado(3, 3, 3, 3, 3));

console.log("Ejemplo dos");

console.log("Ejemplo dos con función flecha...");

const areaFFlecha = (altura, base) => altura * base;

console.log(`El área del rectángulo con la función flecha es: ${areaFFlecha(5, 5)}`);

console.log("Ejemplo dos con función normal...");

function areaFNormal(altura, base) {
    return altura * base;
}

console.log(`El área del rectángulo con la función normal es: ${areaFNormal(4, 4)}`);

console.log("-------------");

const perimetroFlecha = (altura, base) => 2 * (altura + base);

console.log(`El perimetro del rectángulo con la función flecha es: ${perimetroFlecha(5, 5)}`);

function perimetroNormal(altura, base) {
    return (2 * (altura + base));
}

console.log(`El perimetro del rectángulo con la función normal es: ${perimetroNormal(4, 4)}`);