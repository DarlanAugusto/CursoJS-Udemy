const fruits = ['Apple', 'Pear', 'Banana'];

for(let key in fruits) {
    console.log(fruits[key]);
}

const person = {
    name: 'Darlan',
    lastName: 'Silva',
    age: 19
}

for(let key in person) {
    console.log(key, person[key]);
}