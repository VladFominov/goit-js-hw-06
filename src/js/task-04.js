
const counterRef = document.querySelector('#counter');
console.log(counterRef);
const btnDec = counterRef.firstElementChild
console.log(btnDec);
const btnInc = counterRef.lastElementChild
console.log(btnInc);

const display = document.querySelector('#value');
console.log(display);

 let counterValue = 0;

console.log(counterValue);



btnDec.addEventListener("click", () => {
    counterValue -= 1;
    display.innerHTML =  counterValue
});

btnInc.addEventListener('click', () => {
    counterValue += 1;
    display.innerHTML = counterValue;
});  


// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//  та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

