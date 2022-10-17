const inputRef = document.querySelector("#name-input")
console.log(inputRef);
const spanRef = document.querySelector("#name-output")
console.log(spanRef);

inputRef.addEventListener('input', (e) => {
    spanRef.textContent = e.target.value ? e.target.value : "Anonymous"
    
})

// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".