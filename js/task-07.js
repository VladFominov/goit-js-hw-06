// 1. палучить ссылки на инпут и спан
const inputRef = document.querySelector('#font-size-control')
console.log(inputRef)
const spanRef = document.querySelector('#text')
console.log(spanRef)

// 2. добавить фонт сайз в спан


// 3. написать функцию-колбэк и передать в прослушивание

const changeFontSize = (e) => {
    spanRef.style.fontSize = e.currentTarget.value  + "px";  
}

// 4.повесить прослушивание на инпут
inputRef.addEventListener('input', changeFontSize)
 



// Напиши скрипт, який реагує на зміну значення input#font - size - control
//     (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.