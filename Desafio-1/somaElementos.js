function solucao(lista) {
      let resultado = 0;
      for (let item of lista) {
          resultado += item;
      }
      console.log(`O valor total depositado é R$ ${resultado.toFixed(2).replace(".",",")}`)
}

let valoresDepositados = [1,2,3,4];
solucao(valoresDepositados);