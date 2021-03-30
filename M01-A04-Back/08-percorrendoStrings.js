const palavra = "Alemahnha";

let encontrado = false;
for (let letra of palavra) {
    if (letra === 'h') 
    {
        encontrado = true;
        console.log(`A palavra ${palavra} contem a letra h.`);
        break;

    }
}

if(!encontrado) {
    console.log("A palavra nao contem a letra h");
}