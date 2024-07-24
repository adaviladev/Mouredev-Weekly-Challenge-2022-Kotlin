/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const isAnagram = (firstWord, secondWord) => {

    let word1 = firstWord.toLowerCase();
    let word2 = secondWord.toLowerCase();

    if (word1 === word2) {
        console.log("Both words are the same");
        return;
    }

    let word1Arr = word1.split('').sort();
    let word2Arr = word2.split('').sort();
    console.log(word1Arr);
    console.log(word2Arr);

    // Convert arrays to strings for comparison
    if (word1Arr.join('') === word2Arr.join('')) {
        console.log("It's an Anagram");
    } else if (word1Arr.join('') !== word2Arr.join('')) {
        console.log("It's not an Anagram");
    } else {
        console.log("Both words are the same")
    }
}

isAnagram("Roma", "Amor");
