// creating the cards array
const cardsArray = [
    {
        name:'fries',
        img:'./images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'./images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'./images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'./images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'./images/milkshake.png',
    },
    {
        name:'pizza',
        img:'./images/pizza.png',
    },
    {
        name:'fries',
        img:'./images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'./images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'./images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'./images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'./images/milkshake.png',
    },
    {
        name:'pizza',
        img:'./images/pizza.png',
    },
]
// to sort the array in a random fashion 
// this function will do the job as random returns a value from 0 to 1 and each time it will  either be greater than 0.5 or lesser than 0.5 
cardsArray.sort(()=> 0.5 - Math.random());

// grabbing the div element with id = "grid"
const grid = document.querySelector("#grid");
createBoard();
// function to create a board for the game 
function createBoard(){
    for(let i = 0 ;i<cardsArray.length ; i++){
        const card = document.createElement('img');
        card.setAttribute("src" , "./images/blank.png");
        card.setAttribute("data-id" , i);
        card.addEventListener("click" , flipCard);
        grid.appendChild(card); 
    }   
}
let cardsChoosen =[];
let cardsChoosenId =[];
let score = 0;


// fucntion to check if it was a match
function checkMatch(){
    let cards = document.querySelectorAll('img');
    if(cardsChoosen[0]===cardsChoosen[1]){
        // setting the background to white if there is a match
        cards[cardsChoosenId[0]].setAttribute('src' , 'images/white.png');
        cards[cardsChoosenId[1]].setAttribute('src' , 'images/white.png');
        // removing the event listner if we found a match
        cards[cardsChoosenId[0]].removeEventListener ('click' , flipCard);
        cards[cardsChoosenId[1]].removeEventListener ('click' , flipCard);
        score+=1;
    } else{
        cards[cardsChoosenId[0]].setAttribute('src' , 'images/blank.png');
        cards[cardsChoosenId[1]].setAttribute('src' , 'images/blank.png');
    }
    if(score ===(cardsArray.length)/2){
        alert('you found them all!!');
        window.location.reload();
    }
    cardsChoosen = [];
    cardsChoosenId = [];
}

// function to flip a card when we click it 
function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChoosen.push(cardsArray[cardId].name);   
    cardsChoosenId.push(cardId);   
    this.setAttribute("src" , cardsArray[cardId].img); 
    if(cardsChoosen.length===2){
        setTimeout(checkMatch , 500);
    }
   
}