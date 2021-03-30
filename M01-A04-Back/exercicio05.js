/**
 * Faça um programa que busque pelo nome "João" numa lista de nomes e 
 *  imprima na leta o indice que ele se encontra.
 *  Caso não encontre imprima "não encontrado".
 */

const nomes = ['Railane', 'Maria', 'Davi', 'João'];
let encontrado = false;

for (i = 0; i < nomes.length; i++) {
    const item = nomes[i];

    if (item === "João") {
        console.log(`O nome João foi encontrado na posição ${i}`);
        encontrado = true;
        break

    }
}

if (!encontrado) {
    console.log("A palavra não foi encontrada.");
}