//! 1

//!! за допомогою for:

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// for (let i = 0; i < friends.length; i++) {

//     string += friends[i];

//     if (i !== friends.length - 1) {
//       string += ', ';
//     }
// }

// console.log(string);

//!! за допомогою join:

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// console.log(friends.join(', '))

//! 3, 4, 5

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

console.log(cards);

cards.splice(2, 1 );
console.log(cards);

cards.splice(2, 1, "Карточка-6");
console.log(cards);

cards.splice(3, 0, 'Карточка-4');
console.log(cards);