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
    let final = price -price*(price-discount/200);
    return final
}

console.log('O valor com deconto é: R$' + discountCalc(30, 200))





let num1 = 1;
let num2 = 2;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 % num2)
console.log(num1 ** num2)
console.log(Math.sqrt(25))

//Operadores de atibuição

let num3 = 10;
console.log(num3 +=20);
console.log(num3 -=20);
console.log(num3 *=20);
console.log(num3 /=20);

//Operadores de comparação 

let num4 = 10

console.log(num4>0)
console.log(num4<0)
console.log(num4>=10)
console.log(num4<=10)
console.log(num4 > num1)

console.log(num4 !=10)
console.log(num4 == 10)

//Operadores de igualdade

let num5 = 1
let num6 = '1'
console.log(num5 == num6);
console.log(num5 === num6);

//Operadores Ternários

let driver= 120;
let speed = driver>120? 'Above':'Below';
console.log(speed);

//Operadores Lógicos com Strings
let temIdadeMinima = false;
let temTituloEleitor = true;

let podeVotar = temIdadeMinima && temTituloEleitor;
console.log(podeVotar);

let podeViajar = !podeVotar;
console.log(podeViajar);

//Operadores Logicos com strings 

let corCliente = undefined
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque

console.log(corVendida)