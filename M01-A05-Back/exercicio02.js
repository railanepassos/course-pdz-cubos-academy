const produtosConsumidos = {
    nomeProduto: ["Mouse", "Teclado", "Headphone"],
    precoUnitario: [999, 554, 8500],
    quantidadeComprada: [5, 10, 30]
}

const comanda = {
    nomeCliente: "Railane",
    idadeCliente: 26,
    produtosConsumidos
}

console.log(`Nome atual: ${comanda.nomeCliente}`);
console.log(`Idade atual: ${comanda.idadeCliente}`);

comanda.nomeCliente = "Davi";
comanda.idadeCliente = 27;
console.log(`Nome atualizado: ${comanda.nomeCliente}`);
console.log(`Idade atualizada: ${comanda.idadeCliente}`);

let valorProduto = (produtosConsumidos.precoUnitario[2] / 100).toFixed(2);
console.log(`Primeiro produto consumido: ${produtosConsumidos.nomeProduto[0]}`);
console.log(`Valor do ultimo produto consumido: R$ ${valorProduto}`);

/*
const comanda = {
    nomeCliente: "Railane",
    idadeCliente: 26,
    produtosConsumidos : [
      {
          nome: "Mouse",
          produtosConsumidos: 1500,
          quantidadeComprada: 5
      },
      {
          nome: "Headphone",
          precoUnitario: 554,
          quantidadeComprada: 10
      },
      {
          nome: "Teclado",
          precoUnitario: 883,
          quantidadeComprada: 27
      },
    ]
}

// Imprimindo primeiro produto consumido
console.log(comanda.produtosConsumidos[0].nome);

// Imprimindo valor do ultimo produto
cosole.log(comanda.produtosConsumidos[comanda.produtosConsumidos.length - 1].precoUnitario);

 */

