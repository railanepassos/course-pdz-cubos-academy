const temIngresso = true;
const censura = 16;
const idade = 16;

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("Pessoa possui idade permitida. \n Liberar entrada !");
    } else {
        console.log("Idade não permitida. \n Entrada não deve ser liberada !")
    }
} else {
    console.log("Entrada não deve ser liberada pois ingresso não foi apresentado!");
}