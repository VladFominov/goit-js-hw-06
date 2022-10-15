const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map(ingredient => {
  const li = document.createElement('Li'); 
  li.textContent = ingredient;
  li.classList = 'Item';
  return li;
})

const ulRef = document.querySelector('#ingredients')
console.log(ulRef)
ulRef.append(...list);
// const li1 = document.createElement('Li')
// const li2 = document.createElement('Li')
// const li3 = document.createElement('Li')
// const li4 = document.createElement('Li')
// const li5 = document.createElement('Li')
// const li6 = document.createElement('Li')
// li1.textContent = ingredients[0]
// console.log(li1)
// li2.textContent = ingredients[1]
// li3.textContent = ingredients[2]
// li4.textContent = ingredients[3]
// li5.textContent = ingredients[4]
// li6.textContent = ingredients[5]

// li1.classList = 'Item';
// li2.classList = 'Item';
// li3.classList = 'Item';
// li4.classList = 'Item';
// li5.classList = 'Item';
// li6.classList = 'Item';
// ulRef.append(li1, li2, li3, li4, li5, li6);
// console.log(ulRef)
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.