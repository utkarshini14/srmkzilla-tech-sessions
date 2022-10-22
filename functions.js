const evenOdd = require('./file.js');

function myFunction(name) {
  console.log('My name is', name);
}

const myFunction2 = (name) => {
  console.log('My name is', name);
};

myFunction('Utkarshini');
myFunction2('Utkarshini');

console.log(evenOdd(2)); // Even

const function3 = (array, number) => {
  return array.map((i) => {
    return i + number;
  });
};

console.log(function3([1, 2, 3], 5)); // [ 6, 7, 8 ]

const names = [
  'John',
  'Andy',
  'Joe',
  'Johnson',
  'Smith',
  'Williams',
  'Kathryne',
  'Adella',
  'Nancey',
  'Stuart',
];

let listofname = names.map((name) => {
  if (name.length < 6) {
    return name;
  }
});
console.log(listofname);

let listofname2 = names.filter((name) => name.length < 6);
console.log(listofname2);

names.forEach((name) => {
  if (name.length < 6) {
    console.log(name);
  }
});
