const pessoa = {
    nome: "Railane",
    idade: 26,
    altura: 1.63,
    temCNH: true,
    apelidos: ["Rai", "Lane"]

};

// "Railane tem 26 anos, 1.53m de altura, possui CNH e os seguintes apelidos: 
//  - Rai
//  - Lane
//  "

// console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH == true ? 'possui CNH' : 'não possui CNH'} e os apelidos: ${pessoa.apelidos[0]}`);

/*
    if (pessoa.temCNH == true) {
        console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, possui CNH e os apelidos: ${pessoa.apelidos[0]}`);
    } else {
        console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, não possui CNH e os apelidos: ${pessoa.apelidos[0]}`);

    }
*/

/*
    let textoCNH = "";
    if (pessoa.temCNH) {
        textoCNH = "possui";

    } else {
        textoCNH = "não possui";
    }
    console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH e os apelidos: 
    - ${pessoa.apelidos[0]}
    - ${pessoa.apelidos[1]}`);
*/

let textoCNH = "";
if (pessoa.temCNH) {
    textoCNH = "possui";

} else {
    textoCNH = "não possui";
}
console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH e os apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
    
}