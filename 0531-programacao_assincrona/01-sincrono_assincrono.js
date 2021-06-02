/**
 * Sincrono - Execucao de forma sequencial
 *      - whatsapp um modelo de comunicacao sincrona
 * Assincrono - Execucao de forma náo linear
 *      - e-mail um modelo de comunicaço assincrona
 * 
 */


/**
 * Abaixo temos um exemplo de código sincrono
 */
let soma = 0;

for (let i = 0; i < 10 ; i++) {
    soma += 10; 
}
console.log("depois da soma");
console.log(soma);

/**
 * Abaixo temos um exemplo de código assincrono
 */
console.log("antes");

setTimeout(() => {
    console.log("No meio");

}, 1000);

console.log("depois");

