/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.

 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

let primeNumbers = [];

// Función que verifica si un número es primo
// Número primo: divisible exactamente por 1 y por sí mismo
// Número compuesto: tiene más de dos factores
// 1 no es ni primo ni compuesto

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Función que captura los números primos en el array "primeNumbers"
function findPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    }
}

// Llamar a la función con un límite
findPrimes(100);
console.log(primeNumbers);
