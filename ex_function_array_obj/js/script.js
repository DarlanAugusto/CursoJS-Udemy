let persons = [];
let person;
const form = document.querySelector("#formUserData");
const results = document.querySelector(".results");

form.addEventListener("submit", pushPerson);

function pushPerson(event) {
    event.preventDefault();
    
    person = getPerson();
    if(!person) return;

    persons.push(person);

    results.innerHTML += `<h2>${person.name} ${person.lastName}, ${person.age} anos e ${person.height}m de altura.</h2>`;

    clearFields();
    
    console.log(persons);
}

function getPerson() {
    const firstName = document.querySelector("#name");
    const lastName = document.querySelector("#lastName");
    const age = document.querySelector("#age");
    const height = document.querySelector("#height");

    if(firstName.value == '' || lastName.value == '' || age.value == '' || height.value == '') {
        alert('Por favor, preencha todos os campos!');
        return false;
    }

    return {
        name: firstName.value,
        lastName: lastName.value,
        age: age.value,
        height: height.value
    }
}

function clearFields() {
    const firstName = document.querySelector("#name");
    const lastName = document.querySelector("#lastName");
    const age = document.querySelector("#age");
    const height = document.querySelector("#height");

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    height.value = '';
}