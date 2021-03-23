const saldo = 10;

// condição ? valor retornado se true : valor retornado se false
const unidade = (saldo === 1 ? "real" : "reais");
console.log (`Ele tem ${saldo} ${unidade}`);
console.log (`Ele tem ${saldo} ${saldo === 1 ? "real" : "reais"}`);


/*
if ( saldo === 1) {
    console.log (`Ele tem ${saldo} real`);
    
} else {
    console.log (`Ele tem ${saldo} reais`);

}
*/