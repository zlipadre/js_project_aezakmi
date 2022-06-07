// Kreiranje petlje koja sadrzati podatke o karticama i dodavanje u niz, ima 6 * 2 kartica
const cardArray = [
    {
        name: `fries`,
        img: `./images/fries.png`
    },
    {
        name: `cheeseburger`,
        img: `./images/cheeseburger.png`
    },
    {
        name: `hotdog`,
        img: `./images/hotdog.png`
    },
    {
        name: `ice-cream`,
        img: `./images/ice-cream.png`
    },
    {
        name: `milkshake`,
        img: `./images/milkshake.png`
    },
    {
        name: `pizza`,
        img: `./images/pizza.png`
    },
    {
        name: `fries`,
        img: `./images/fries.png`
    },
    {
        name: `cheeseburger`,
        img: `./images/cheeseburger.png`
    },
    {
        name: `hotdog`,
        img: `./images/hotdog.png`
    },
    {
        name: `ice-cream`,
        img: `./images/ice-cream.png`
    },
    {
        name: `milkshake`,
        img: `./images/milkshake.png`
    },
    {
        name: `pizza`,
        img: `./images/pizza.png`
    }   
]
// Rendom mesa karte algoritam 
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector(`#grid`);
const resultDisplay = document.querySelector('#result');
// Kreiramo niz cardChosen u koji posle unosimo elemente koji su izabrani
let cardChosen = [];
let cardChosenID = [];
const cardWon = [];
// Funkcija za kreiranje tabele sa karticama 
function createBoard() {
    // For petlja za kreiranje kartica i dodavanje u grid
    for(let i = 0; i < cardArray.length; i++) {
        // Kreirali smo element img i dodali ga u karticu
        const card = document.createElement(`img`);
        console.log(card);
        // Dodali smo atribut src i dodali smo putanju do slike
        card.setAttribute('src', './images/blank.png');
        // Dodali smo atribut data-id i dodali smo id kartice (i)
        card.setAttribute(`data-id`, i);
        // Dodali smo atribut onclick i dodali smo funkciju flipCard(Znaci na klik se izvrsava funkcija flipCard)
        card.addEventListener('click', flipCard);
        // Dodali smo karticu u grid
        gridDisplay.appendChild(card);
    }
}

createBoard();
// Kreirana funkcija za proveru da li su kartice iste ili razlicite 
function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneID = cardChosenID[0];
    const optionTwoID = cardChosenID[1];
    console.log(`check for match`);
    if (optionOneID === optionTwoID) {
        cards[optionOneID].setAttribute('src', './images/blank.png');
        cards[optionTwoID].setAttribute('src', './images/blank.png');
        alert(`You have cliced the same image!`);
    }

    // Proveravamo da li su kartice iste ili razlicite, ako jesu dodeljujemo atribut src za karticu kao da je izabrana
    if(cardChosen[0] === cardChosen[1]) {
        alert(`You found a match`);
        // 
        cards[optionOneID].setAttribute('src', './images/white.png');
        cards[optionTwoID].setAttribute('src', './images/white.png');
        cards[optionOneID].removeEventListener('click', flipCard);
        cards[optionTwoID].removeEventListener('click', flipCard);
        cardWon.push(cardChosen);
    } else {
        cards[optionOneID].setAttribute('src', './images/blank.png');
        cards[optionTwoID].setAttribute('src', './images/blank.png');
        alert(`Sorry, try again`);
    }

    resultDisplay.textContent = cardWon.length;
    cardChosen = [];
    cardChosenID = [];

    // Proveravamo da li smo pobedili 
    if (cardWon.length === cardArray.length / 2) {
        resultDisplay.innerHTML = `Congratulations! You found all the matches!`;
    }
}

// Funkcija koja izvrsava okretanje kartica 
function flipCard() {

    console.log(cardArray)
    // Kreiramo const cardId i dodeljujemo mu vrednost atributa data-id kartice
    const cardId  = this.getAttribute(`data-id`);
    // Proveravamo unos koji smo izvukli iz cardArray[cardId].name (npr. fries)
    console.log(cardArray[cardId].name);
    // Guramo karticu u niz cardChosen
    cardChosen.push(cardArray[cardId].name);
    cardChosenID.push(cardId);
    console.log(`cliced`, cardId);
    console.log(cardChosen);
    // Unosimo za atribut src putanju do slike kartice
    this.setAttribute('src', cardArray[cardId].img);
    // Proveravamo da li smo izabrali dva ista elementa ako jesmo izvrsavamo funkciju checkMatch
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}