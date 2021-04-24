function solucao(list) {
    let mediaDeposited = 0;
    let countArray = list.length;
    for (let item of list) {
        mediaDeposited += item;
    }
    mediaDeposited = mediaDeposited / countArray;
    console.log(`The average amount deposited is R$ ${mediaDeposited.toFixed(2).replace(".",",")}`)
}

let amountsDeposited = [1,2,3,4];
solucao(amountsDeposited);