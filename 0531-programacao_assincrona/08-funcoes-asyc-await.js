/**
 * Forma de excrever mais legivel.
 * 
 * */ 

const axios = require('axios');

async function obterLogradouro(cep) {
    // Feito o pedido ao viacep (requisição) e eperar promessa
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    // Resposta já com o valor do logradouro, diferente do exemplo anterior onde é necessário tratar a resposta para obter o que se precisa.
    return response.data.logradouro;

}
//obterLogradouro2("40279030").then((logradouro) => console.log(logradouro));

async function exibirLogradouros(ceps) {
    for (const cep of ceps) {
        console.log(cep, "=>", await obterLogradouro(cep));

    }
}

exibirLogradouros(["43700000", "40279030"]);