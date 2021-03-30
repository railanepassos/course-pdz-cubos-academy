/**
 * Faça um programa que conte quantas letras a(apénas as minusculas) tem em uma determinada palavra
 */

let contadorLetra = 0;
const palavra = "XXXaaaAAAA";

for (let letra of palavra) {

    if (letra === 'a') {
        contadorLetra ++        
    }
    
}
if (contadorLetra != 0){
    let ternarioLetra = contadorLetra > 1 ? 'letras' : 'letra';
    console.log(`A palavra ${palavra} contem ${contadorLetra} ${ternarioLetra} 'a'.`);
} else {
    console.log(`A palavra ${palavra} contem não contem a letra 'a'.`);

}

/**
 * Resolução professor
 * 
 * const palavra = "amarelinha";
 * let quantidade = 0;
 * 
 * for (let letra of palavra) {
 *  if (letra === "a"){
 *      quantidade ++;
 * }
 * }
 * 
 * if (quantidade === 0) {
 *      console.log(`Não há nenhuma letra "a" nessa palavra.`);
 * 
 * } else if ( quantidade === 1) {
 *      console.log(`Há uma letra "a" nessa palavra.`);
 * } else {
 *      console.log(`Tem ${quantidade} letras "a" nessa palavra.`);
 * } 
 * 
 */
