/**
 *  Abaixo exemplo de promessas ultiliznado uma função para retornar o longradouro apartir de um cep.
 */

function obterLogradouro(cep) {
    const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const logradouroPromise = responsePromise.then((response) => response.data.logradouro
    );
    return logradouroPromise;

}

obterLogradouro("43700000").then((logradouro) => console.log(logradouro));

