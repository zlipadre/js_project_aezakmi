
// Variable u JS imamo var, let, const
// let - varijabla koja se moze menjati
// const - varijabla koja se ne moze menjati
// Uvek koristimo const ako je moguce, let ako nije, jer const je konstantna tako da je najbolje sve varijable koristiti u const formatu, pa ih posle promeniti u let ako znamo da cemo kasnije menjati tu varijablu.
console.log(`DATA TYPES`);
// DATA TYPES
// Primitive data types : String, Number, Boolean, Null, Undefined, Symbol

// String varijabla
const name = 'John Doe';

// Number varijabla
const age = 45;
const rating = 4.5;

// Boolean varijabla
const isCool = true;

//Null varijabla predstavlja prazan objekat ili varijablu koja nema vrednost
const x = null;

// Undefined varijabla
const y = undefined;
let z; // z je undefined

console.log(`CONCATENATION`);    
// CONCATENATION - konkatenacija stringova - koristimo + za konkatenaciju stringova i za konkatenaciju brojeva i stringova.

console.log(`My name is ${name} and I am ${age} years old.`); // My name is John Doe and I am 45 years old. Ovo predstavlja Template String koji se koristi za konkatenaciju stringova.

console.log(`METODE I PROPERTIES`);
// METODE I PROPERTIES
// Metode su funkcije koje se izvrsavaju na objektu.
// Properti su vrednosti koje se nalaze u objektu.

const s = 'Hello World';
console.log(s.length); // 11 - vraca duzinu stringa s - 11 znakova u stringu 
console.log(s.toUpperCase()); // toUpperCase - vraca string u velikim slovima
console.log(s.substring(0, 5)); // Hello - vraca string od 0 do 5 znakova
console.log(s.split('')); // vraca niz stringova koji su razdvojeni po zadatom znaku

console.log(`ARRAYS`);
// ARRAYS - nizovi - nizovi su kolekcije podataka koje se mogu sortirati i pretrazivati.

const numbers = new Array(1, 2, 3, 4, 5); // kreiramo niz sa 5 elemenata
console.log(numbers); // [1, 2, 3, 4, 5]

const fruits = ['apples', 'oranges', 'pears']; // kreiramo niz sa 3 elemenata
console.log(fruits); // ['apples', 'oranges', 'pears']
console.log(fruits[1]); // oranges - vraca element sa indeksom 1

fruits[3] = 'grapes'; // dodajemo element sa indeksom 3
console.log(fruits); // ['apples', 'oranges', 'pears', 'grapes']

fruits.push('mangos'); // dodajemo element na kraj niza
console.log(fruits); // ['apples', 'oranges', 'pears', 'grapes', 'mangos']

fruits.unshift('strawberries'); // dodajemo element na pocetak niza
console.log(fruits); // ['strawberries', 'apples', 'oranges', 'pears', 'grapes', 'mangos']

fruits.pop(); // uklanja element sa kraja niza

console.log(Array.isArray(fruits)); // true - proverava da li je objekat niz

console.log(fruits.indexOf('oranges')); // 1 - vraca indeks elementa koji smo trazili

console.log(`OBJECTS LITERALS`);
// OBJECTS LITERALS - objekti - objekti su strukture podataka koje se mogu sortirati i pretrazivati.

// Object literal - kreiramo objekat sa kljucevima i vrednostima koristeci {} - objekti se kreiraju u obliku objekta 
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    // U objektu mozemo da definisemo jos objekata
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
// vracamo vrednost odredjenog objekta ovde npr person.firstName
console.log(person.firstName);

const { firstName, lastName,address:{city}} = person; // destrukturisanje objekta
console.log(firstName);

person.email = 'stefan@gmail.com'; // dodavanje novog elementa u objekat

console.log(`ARRAYS OF OBJECTS`);
// ARRAYS OF OBJECTS

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text); // Meeting with boss;

const todoJSON = JSON.stringify(todos); // pretvaranje objekta u JSON string
console.log(todoJSON);

console.log(`FOR PETLJA`);
// LOOPS - petlje - petlje se koriste za iteraciju kroz nizove i objekte
// FOR LOOP - for petlja - petlja se koristi za iteraciju kroz nizove i objekte

for(let i = 0; i < 10; i++){
    console.log(`For Loop Number: ${i}`);
}

// FOR Loop kroz nizove
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
}

console.log(`While PETLJA`);
// WHILE LOOP - while petlja - petlja se koristi za iteraciju kroz nizove i objekte
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// forEach, map, filter 
console.log(`FOR EACH`);
// forEach - koristi se za iteraciju kroz nizove i objekte
todos.forEach(function(todo) {
    console.log(todo.text);
});

console.log(`MAP`);
// map - koristi se za iteraciju kroz nizove i objekte
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

console.log(`FILTER`);
// filter - koristi se za iteraciju kroz nizove i objekte
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);

console.log(`CONDITIONAL STATEMENTS`);
// CONDITIONAL STATEMENTS - uslovi - uslovi se koriste za izvrsavanje odredjenog koda u zavisnosti od uslova

// IF ELSE STATEMENT - if else uslov - uslov se koristi za izvrsavanje odredjenog koda u zavisnosti od uslova
const u = 10;
if (u === 10) {
    console.log('u is 10');
} else if(u >10) {
    console.log('u is greater than 10');
} else {
    console.log(`u is not 10`);
}

// TERnARY OPERATOR - ternarni operator - uslov se koristi za izvrsavanje odredjenog koda u zavisnosti od uslova

const b = 10;

const color = b > 10 ? `red` : `blue`; // ako je b vece od 10 onda je boja crvena, a ako nije onda je plava
console.log(color); // blue

switch(color) {
    case 'red':
        console.log(`color is red`);
        break;
    case 'blue':
        console.log(`color is blue`);
        break;
    default:
        console.log(`color is not red or blue`);
        break;
}

console.log(`FUNCTIONS`);
// FUNCTIONS - funkcije - funkcije se koriste za definisanje koda koji se vise puta koristi
// FUNCTION DECLARATION - deklaracija funkcije - deklaracija funkcije se koristi za definisanje koda koji se vise puta koristi
function addNums(num1, num2) {
    return num1 + num2;
}

console.log(addNums(2, 3)); // 5

console.log(`ARROW FUNCTIONS`);
// ARROW FUNCTION - arrow funkcija - arrow funkcija se koristi za definisanje koda koji se vise puta koristi

const addNums1 = (num1, num2) => num1 + num2;
console.log(addNums1(2,3)); // 5


console.log(`OBJECT ORIENTED PROGRAMMING`);
// OBJECT ORIENTED PROGRAMMING - OOP - objektno orijentisano programiranje - objektno orijentisano programiranje se koristi za definisanje koda koji se vise puta koristi

console.log(`Constuctor Function`);
// Constuctor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


console.log(`Instantiate object`);
// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.firstName);

console.log(person1.getBirthYear());
console.log(person2.getFullName());


console.log(`CLASSES`);
// CLASSES - klase - klase se koriste za definisanje koda koji se vise puta koristi
class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new PersonClass(`Stefan`, `Krstic`, `3-6-1970`);
console.log(person3.getFullName());
console.log(person3.getBirthYear());

console.log(`DOM - Document Object Model`);
//DOM - document object model - DOM - DOM se koristi za manipulaciju sa HTML elementima
console.log(window);
console.log(`Single element selectors`);
// Single element selectors
// document.getElementById() - vraca element sa zadatim id-om ili null ako element ne postoji

document.querySelector(`h1`); // vraca prvi element koji odgovara zadatom selektoru ili null ako element ne postoji


console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

console.log(`Multiple element selectors`);
// Multiple element selectors

console.log(document.querySelectorAll(`li`)); // vraca niz svih elementa koji odgovaraju zadatom selektoru
console.log(document.getElementsByClassName(`item`)); // vraca niz svih elementa koji odgovaraju zadatom selektoru

const item = document.querySelector(`.item`);

const ul = document.querySelector(`.items`);

// ul.remove(); // brise element
// ul.lastElementChild.remove(); // brise poslednji element

ul.firstElementChild.textContent = `Hello`; // menja text u prvom elementu
ul.children[1].innerText = `Brad`; // menja text u drugom elementu
ul.lastElementChild.innerHTML = `<h4>Brad</h4>`; // menja text u poslednjem elementu

const btn = document.querySelector(`.btn`);
btn.style.background = `red`;

btn.addEventListener(`click`, (e) => {
    e.preventDefault();
    // document.querySelector(`btn`).style.cursor = `pointer`;
    document.querySelector(`#my-form`).style.background = `#ccc`;
    // document.querySelector(`body`).classList.add(`bg-dark`);
    document.querySelector(`.items`).lastElementChild.innerHTML = `<h1>Hello</h1>`
});







