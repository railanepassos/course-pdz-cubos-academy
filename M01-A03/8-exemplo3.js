const temIngresso = true;
const taComOsPais = false;
const censura = 16;
const idade = 12;

/*
if (temIngresso === true && idade >= 18 || temIngresso === true && taComOsPais === true) {
    console.log("Entrada liberada!");

} else {
    console.log("Entrada não liberada!");
}
*/

if (temIngresso) {
    if (idade >= censura || taComOsPais) {
        console.log("Entrada liberada!");
        
    } else {
        console.log("Entrada não liberada por idade!");

    }
} else {
    console.log("Entrada não liberada por falta de ingresso!");

}