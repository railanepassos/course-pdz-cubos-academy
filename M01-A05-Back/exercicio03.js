const produtosConsumidos = {
    nomeProduto: ["Mouse", "Teclado", "Headphone"],
    precoUnitario: [999, 554, 8500],
    quantidadeComprada: [1, 1, 1]
}

const comanda = {
    nomeCliente: "Railane",
    idadeCliente: 26,
    produtosConsumidos
}

let valorTotal = 0;
let cont = 0;

for (let valor of comanda.produtosConsumidos.precoUnitario) {
    valorTotal += (valor/100) * comanda.produtosConsumidos.quantidadeComprada[cont];
    cont ++;
}

/**
 * Solução professor
 * 
 * let totalAPagar = 0;
 * for( let item of comanda.produtos) {
 *  totalAPagar = totalAPagar + (item.quantidade * item.precoUnit);
 *  // outra forma de fazer a mesma coisa
 *  // totalAPagar += item.quantidade * item.precoUnit; 
 * }
 * 
 * console.log(`${comanda.nome}, o valor total a ser pago é de R$ ${totalAPagar/100}`);
 */

console.log(`Olá ${comanda.nomeCliente}, o valor a ser pago R$ ${valorTotal.toFixed(2)}`);