/**
 * Na compra de um determinado produto, 
 *  o cleinte consegue um desconto de 10% caso pague a vista.
 * Caso queira parcelar, a loja parcela em até 6X sem juros,
 *  mas sem desconto.
 * Imprima na tela uma mensagem explicando para o cliente como
 *  ele tem que pagar, incluindo valor da parcela.
 */

const qtdParcelas = 3;
const vlProduto = 10000;

// To-do finalizar
if (qtdParcelas === 1) {
    let vlAPagarEmReais = ((vlProduto * 10) /100).toFixed(2);
    console.log(`O produto será pago a vista e o valor final com 10% de desconto é ${vlAPagarEmReais}`);
} else {
    let vlAPagarEmReais = (vlProduto/ qtdParcelas/ 100).toFixed(2);
    console.log(`O produto será parcelado em ${qtdParcelas}X e o valor de casa parcela será de ${vlAPagarEmReais}, totalizando ${vlProduto}`);
}