// let inputX = prompt('Введіть перший доданок', 0);
// let inputY = prompt('Ведіть другий доданок', 0);

// let x = Number(inputX);
// let y = Number(inputY);

// let sum = x + y;

// alert(`${x} + ${y} = ${sum}`);

let product1 = 'Папір офісний А4, 80г/м2, 500арк, білий';
let product2 = 'Біндери для паперу, 51мм, чорний';
let product3 = 'Ручки кулькові, сині, 50шт/уп, корпус прозорий';

let productPrice1 = 544.99;
let productPrice2 = 332.87;
let productPrice3 = 89.1;

let quality1 = +prompt(
  `Вкажіть кількість продуктів '${product1}', ціна ${productPrice1}`,
  0
);
let quality2 = +prompt(
  `Вкажіть кількість продуктів '${product2}', ціна ${productPrice2}`,
  0
);
let quality3 = +prompt(
  `Вкажіть кількість продуктів '${product3}', ціна ${productPrice3}`,
  0
);
let totalPrice = 0;

totalPrice += productPrice1 * quality1;
totalPrice += productPrice2 * quality2;
totalPrice += productPrice3 * quality3;

alert(`Загальна сума ${totalPrice}`);
