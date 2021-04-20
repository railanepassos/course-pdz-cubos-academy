const array = ['Railane', 'Davi', 'Bob', 'Sindel', 'Railane, Sindel, Davi e Bob'];
const greaterTen = array.find(x => x.length > 10);

if (greaterTen) {
    console.log(`This values is greater Ten ==> "${greaterTen}"`);
} else {
    console.log("Value greater ten not found.");
}