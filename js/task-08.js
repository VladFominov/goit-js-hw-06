
const form = document.querySelector(".login-form");

const onSubmit = (event) => {
      event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    const emailVal = email.value;
    const passVal = password.value;
    console.log(emailVal)
    console.log(passVal)
    if (!emailVal || !passVal) {
        return alert ('Не всі поля заповнені!')
    }

    const formData = {
        email: emailVal,
        password: passVal, 
    }
    console.log(formData)
    event.target.reset()
 }

 form.addEventListener('submit', onSubmit)
// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, 
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//  Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
