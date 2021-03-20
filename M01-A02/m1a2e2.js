// Programadores fizeram uma convenção e decidiram que 
//  variaveis se cria com letras minusculas (CamelCase)
let idade = 29;
let alturaEmMetros = 1.53;

console.log(idade);
console.log(alturaEmMetros);

// String template
console.log(`Minha idade é ${idade} anos e minha altura é ${alturaEmMetros} metros.`);

// Quando declaramos uma variavel do tipo var ocorre um processo chamado de “hoisting”, 
//  isso significa que você consegue usar a variavel antes de declarar, o que pode ser
//  ultil em algumas situações porem inlegivel. 
// Mais informações consultar Aula 7 ou o link >> https://medium.com/devzera/um-guia-para-entender-javascript-hoisting-com-vari%C3%A1veis-usando-let-e-const-45e0a62b16e2 <<

// No exemplo abaixo a variável é declarada e recebendo valores depois, porem é possivel imprimi-la no console
// É recomendado o uso do var em casos muito especificos não sendo indicaso sua ultilização
console.log (exemplo);
var exemplo = "exemplo de “hoisting”";

// É possivel declarar mais de uma variavel na mesma linha conforme abaixo
let x=10, y=2;
const nome = "Railane", sobrenome = "Passos";