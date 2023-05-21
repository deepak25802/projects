let firstCard  , secondCard ;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let started = false;
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let btn = document.querySelector(".btn");
let cardsEl = document.querySelector("#cards-el");
let cards =[];

function getRandomCard(){
    let no = Math.floor(Math.random()*13)+1;
    if(no==1)
        return 11;
    if(no>=11)
        return 10;
    return no;
}
function newCard(){
    if(isAlive===true&&hasBlackJack===false){

        let card = getRandomCard();
        cards.push(card);
        sum+=card;
        renderGame();
    }
}
function startGame(){
    if(isAlive===false||hasBlackJack===true){
        started=false;
    }
    if(started===false){

        cards = [];
        firstCard = getRandomCard();
        secondCard = getRandomCard();
        cards.push(firstCard);
        cards.push(secondCard);
        sum = firstCard + secondCard;
        isAlive = true;
        hasBlackJack = false;
        cardsEl.textContent= "Cards: ";
        renderGame();
        started = true;
    }
}
function renderGame(){
    sumEl.textContent="Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i = 0 ;i<cards.length;i++){
        cardsEl.textContent +=cards[i] + " "
    }
    if(sum<=20){
        message= "Do you want to draw a new card?";
    } else if(sum===21){
        message = "You've got Blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}