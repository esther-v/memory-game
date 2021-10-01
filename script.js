const cards = document.querySelectorAll('.card');

let returnedCard = false;
let firstCard, secondCard;
let lock = false;

cards.forEach(card =>{
    card.addEventListener('click', showCard)
})

function showCard(){

    if(lock) return;
   
    this.childNodes[1].classList.toggle('active');

    if(!returnedCard){

        returnedCard = true;
        firstCard = this;
        return;
    }

    returnedCard = false;
    secondCard = this;

    compare();
}

function compare(){

    if(firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')){

        firstCard.removeEventListener('click', showCard);
        secondCard.removeEventListener('click', showCard)

    } else {

        lock = true;
        setTimeout(() => {

            firstCard.childNodes[1].classList.remove('active');
            secondCard.childNodes[1].classList.remove('active');

            lock = false;
        }, 1500)
    }
}

function randomCards(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
}

randomCards();