const nomes = ["Railane", "Davi", "Sindel", "Bob"];
console.log(`${nomes.length} - ${nomes}`);

// Metodo de um array que remove primeiro elemento de um array
nomes.shift();
console.log(`${nomes.length} - ${nomes}`);

// Metodo de um array que insere um ou mais elementos no começo de um array
nomes.unshift("Joana","Railane", "Maria");
console.log(`${nomes.length} - ${nomes}`);
