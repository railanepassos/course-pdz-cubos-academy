/**
 * Criar array com 5 nomes de países
 * Adicione um país ao fim da lista
 * Imprima a lista na tela
 * Remova um país do fim da lista
 * Imprima a lista na tela
 * Adicione um país do fim da lista
 * Imprima a lista na tela
 * Remova um paises do inicio da lista
 * Imprima a lista na tela
 * Imprima o último país da lista na tela
 * Imprima o segundo país da lista na tela
 * Imprima o país de indice 2 na tela
 */

const paises = ["Brasil", "Canadá", "Inglaterra", "Africa do Sul", "Portugal", "Alemanha"];

paises.push("China");
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift("Japão");
console.log(paises);

paises.shift();
console.log(paises);

/**
 * Solução que usei
 *      let tamanho = paises.length - 1;
 *      console.log(paises[tamanho]);
 *  
 */

/**
 * Solução apontada pelo professor
 */
const ultimoPais = paises[paises.length - 1];
console.log(paises);

console.log(paises[1]);
console.log(paises[2]);

