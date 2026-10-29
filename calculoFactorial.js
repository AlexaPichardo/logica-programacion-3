function calcularFactorial(numero) {
    // 1. Validar que la entrada sea un número válido y entero positivo
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        return "Error: El número ingresado no es válido o no es un entero positivo.";
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    return `El factorial de ${numero} es: ${factorial}`;
}

// Pruebas en consola
console.log(calcularFactorial(5)); 
console.log(calcularFactorial(6));
console.log(calcularFactorial(7));
console.log(calcularFactorial(9));
console.log(calcularFactorial(3));