console.log("javascript funcionando");

let firstName = 'Pedro';
let lastName = 'Barbosa';

console.log(firstName, lastName);

let age = 21;
age = 30;
console.log(age);

let itemName = 'Pen';
let price = 3;
let itemAvailable = true;
let itemColor = null;

console.log(typeof price);
console.log(itemName, price, itemAvailable, itemColor);

let pen = {
    itemName: 'Pen',
    price: 3.99,
    itemAvailable: true,
    itemColor: 'red'
}

pen.itemColor= 'Blue'
console.log(pen)
console.log(pen.itemName)

//Arrays
let cars = ['Gol', 'Uno', 'Palio', 'Celta', 'Onix']
console.log(cars[0])
cars[1] ="Fiesta";
console.log(cars) 

//Functions
function saleStatus(status, total){

    console.log('transaction; ' + status + '! Total amount $' + total)
}

saleStatus('approved', 200)

function discountCalc(price, discount){
    let final = total -total*(price*discount/200);
    return final
}

console.log('O valor com deconto é: R$' + valueDiscount(30, 200))
