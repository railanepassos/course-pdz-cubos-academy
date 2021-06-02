/**
 * Modo fs notion para come;ar a trabalhar com arquivos
 */

/**
 * Exemplo de execucao de forma sincrona
 */
 const fs = require("fs");

 console.log("antes de ler");
 console.log(fs.readFileSync("02.txt").toString());
 console.log("depois de ler");
 
 /**
 * Exemplo de execucao de forma assincrona
 */