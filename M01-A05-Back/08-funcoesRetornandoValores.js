function verificarMaioridade (nomePessoa, idadePessoa) {
    if (idadePessoa > 17) {
        // console.log(`${nomePessoa} é maior de idade !`);
        return true;

    } else {
        // console.log(`${nomePessoa} não é idade !`);
        return false;

    }
}

let nome = "Saria";
let idadePessoa = 22;
let ehMaiorDeIdade = verificarMaioridade(nome, idadePessoa);

console.log(ehMaiorDeIdade);