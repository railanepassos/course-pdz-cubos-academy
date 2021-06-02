/* 
 *  Event Loop, ou seja, ciclo de eventos que mantem o nodeJs ativo
 * Link da aula.: https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/31/05/2021/aula/e12827a0-8c67-4293-92aa-d5763020a2f7/db6b814a-b7b6-4cf7-80ad-b70cdafc79e8
 * 
 *  "O Event Loop tem um trabalho simples — para monitorar a call stack e a fila de retorno. Se a call stack estiver vazia, ela pegará o primeiro evento da fila e a empurrará para a call stack, que efetivamente a executa.
 *  Link complementar.: https://medium.com/reactbrasil/como-o-javascript-funciona-o-event-loop-e-o-surgimento-da-programa%C3%A7%C3%A3o-ass%C3%ADncrona-5-maneiras-de-18d0b8d6849a
 * 
 * Abaixo temos o exemplo da aula onde primeiro é feito a leitura de um arquivo e posteriormente a leitura de outro em seguida, ao final da primeira leitura o resultado é exibido assim como a da seguinta mas não em uma ordem sequencial, pois pode acontecer da leitura do segundo arquivo levar menos tempo que o primeiro. 
 */

const fs = require("fs");

console.log("Olá");

fs.readFile("arquivo-exemplo-0.txt", (err, data) => {
    if (err) {
        console.log("Erro: ", err);

    } else {
        console.log("Leu com sucesso o primeiro arquivo: ", data);

    }
});

fs.readFile("arquivo-exemplo-1.txt", (err, data) => {
    if (err) {
        console.log("Erro: ", err);

    } else {
        console.log("Leu com sucesso o segundo arquivo: ", data);

    }
});

console.log("Fim!");

/**
 *  Abaixo temos um exemplo de API rodando na por 8000 onde ela sempre estara "escutando" nessa porta e rodando eventos(requisições) e enviando resposta. Então o nodeJs sempre fará esse papel de escutar eventos e enviar respostas de acordo com cara requisição.
 */

 const express = require("express");
 const app = express();
 app.get("/", (req, res) => {
     res.send("Olá!");
 
 });
 
 app.listen(8000);