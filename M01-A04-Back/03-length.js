const nomes = ["Railane", "Davi", "Sindel", "Bob"];
let tamanho = nomes.length;

console.log(`${tamanho} - ${nomes}`);

nomes[tamanho ++] = "Mais um item";
console.log(`${tamanho} - ${nomes}`);
