function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}

const body = document.body;
const btnRef = document.querySelector('.change-color');
console.log(btnRef)
const spanRef = document.querySelector('.color');
console.log(spanRef)

const onClick = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
   spanRef.innerHTML =  randomColor;
}

btnRef.addEventListener('click', onClick)




// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color 
//   і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
