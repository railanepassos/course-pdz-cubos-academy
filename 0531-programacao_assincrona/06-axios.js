/**
 * Exemplo de Promise com Axius
 * https://axios-http.com/docs/intro
 * 
 */

/**
 * Comandos
 * npm init -y
 * npm i axios
 * criar arquivo index.js
 * 
 */

const axios = require('axios');

const cepPromise = axios.get('https://viacep.com.br/ws/01001000/json/');
cepPromise.then((response) => {
    console.log(response.data);
});

console.log(cepPromise);
