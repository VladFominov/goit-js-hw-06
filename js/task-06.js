const inputRef = document.querySelector('#validation-input')
console.log(inputRef)



const dataLength = Number(inputRef.dataset.length);

const isInputValid = (e) => {
    inputRef.classList.remove('valid', 'invalid');
    
    if (dataLength === e.target.value.length) {
          
        inputRef.classList.add('valid')
    }
  else  {
        inputRef.classList.add('invalid')
    } 
    
}
inputRef.addEventListener('blur',isInputValid)











// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.