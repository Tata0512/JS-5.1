//task1 start
let userBase = {};

for(let i = 1; i <= 10; i++) {
    let name = prompt('Введите имя пользователя ' + i);
    let age = prompt('Введите возраст пользователя ' + i);
    
    userBase[i] = {name, age}
}

for(let id in userBase) {
    console.log('Пользователь - ' + id);
    console.log('Имя - ' + userBase[id].name);
    console.log('Возраст - ' + userBase[id].age);
}

console.log(userBase);
//task1 complete

//task2 start
let basket = receipt();
let orderedFood = Object.keys(basket);
let totalPrice = 0;
let order = '';
let delivery = 9000;

console.log(`Вы заказали:`);


for(let i = 0; i < orderedFood.length; i++) {
    let food = orderedFood[i];
    let info = basket[food].info;
    let price = basket[food].price;
    totalPrice += price;
    order += `${food} ${info}, `



totalPrice += delivery;

}

console.log(`${order} | Общая стоимость ${totalPrice} сум с доставкой (${delivery})`);






