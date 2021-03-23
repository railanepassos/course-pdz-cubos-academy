/**
 * []   Na compra de um determinado produto, 
 *      o cliente consegue um desconto de 10% caso pague a vista.
 * []   Caso queira parcelar, a loja parcela em até 6X sem juros,
 *      mas sem desconto.
 * []   Imprima na tela uma mensagem explicando para o cliente como
 *      ele tem que pagar, incluindo valor da parcela.
 * []   Cliente poderá dividir em até 12X
 * []   Ao dividir entre 7x e 12x será aplicado juros de 1% ao mês
 * []   formula M = C.(1+i)°n
 */

const qtdParcelas = 12;
const vlProduto = 10000;


if (qtdParcelas === 1) {
    let vlAPagarEmReais = ((vlProduto * 10) /100).toFixed(2);
    console.log(`O produto será pago a vista e o valor final com 10% de desconto é ${vlAPagarEmReais}`);
} else if (qtdParcelas >= 2 &&qtdParcelas <= 6) {
    let vlAPagarEmReais = (vlProduto/ qtdParcelas/ 100).toFixed(2);
    console.log(`O produto será parcelado em ${qtdParcelas}X e o valor de cada parcela será de ${vlAPagarEmReais}, totalizando ${vlProduto}`);
} else if (qtdParcelas <= 12){
    let vlComJuros = vlProduto * Math.pow((1 + 0.01), qtdParcelas);
    let vlAPagarEmReais = (vlComJuros/ qtdParcelas/ 100).toFixed(2);
    console.log(`O produto será parcelado em ${qtdParcelas}X e o valor de cada parcela será de ${vlAPagarEmReais}, totalizando ${vlProduto}`);
} else {
    console.log(`Não é possivel dividir essa quantidade de parcelas.`);

}