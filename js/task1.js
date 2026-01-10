//Tasks.
//Variables and types. Basics of functions

//1
function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//2
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

//3
function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  return contentWidth + paddingWidth * 2 + borderWidth * 2;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

//4
const value = 'Total';
console.log(typeof value);

//5
const age = 25;
const message = 'I am ';

console.log(`${message} ${age} years old`);

//6
const width = '120.5px';
const widthNumber = parseFloat(width);
console.log(Number(widthNumber));

//7
const isOnline = false;
const isAdmin = false;

const canAccessContent = isOnline === isAdmin;
console.log(canAccessContent);

//8
let userName;
let userAge = null;

console.log(userName);
console.log(userAge);

//9
function sayHello() {
  return 'Hello world!';
}
sayHello();

console.log(sayHello());

//10
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
getFullName();
console.log(getFullName('John', 'Doe'));

//11
function sum(num1, num2) {
  return num1 + num2;
}
sum(5, 7);
console.log(sum(5, 7));

//12
function multiply(a, b) {
  const result = a * b;
  return result;
}
console.log(multiply(4, 6));

//13
const arr = [1, 1, 2, 3, 3, 4, 5];

const unique = arr => {
  return arr.filter((v, i) => {
    return arr.indexOf(v) === i;
  });
};
console.log(unique(arr));

//second variant
const arr2 = [1, 1, 2, 3, 3, 4, 5];
const unique2 = arr2 => {
  const result = [];
  const seen = new Set();

  for (const value of arr2) {
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  }
  return result;
};
console.log(unique2(arr2));

//14
const arr3 = [5, 3, 8, 1];
// const newArr = [...arr3];
// newArr[0] = 6;
const newArr = arr3.with(0, 7);
console.log(newArr, arr3);
