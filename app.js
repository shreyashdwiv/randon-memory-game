const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
      
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },

    {
      
        name: 'hotdog',
        img: 'images/hotdog.png',
    },

    {
      
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
      
        name: 'milkshake',
        img: 'images/milkshake.png',
    },


    {
      
        name: 'pizza',
        img: 'images/pizza.png',
    },


/////////////////////

    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
      
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },

    {
      
        name: 'hotdog',
        img: 'images/hotdog.png',
    },

    {
      
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
      
        name: 'milkshake',
        img: 'images/milkshake.png',
    },


    {
      
        name: 'pizza',
        img: 'images/pizza.png',
    }
   
]

cardArray.sort(() => 0.5 - Math.random()) 



const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardChosen =  []
let cardChosenId = []
const cardsWon = []

function createBoard() {
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()


function checkMatch() {

    const cards = document.querySelectorAll('img')
    if(cardChosenId[0] == cardChosenId[1]){
        alert('ypu chose the same')
    }
     if(cardChosen[0] == cardChosen[1]){
    alert('you found a match')
    cards[cardChosenId[0]].setAttribute('src', 'images/white.png')
    cards[cardChosenId[1]].setAttribute('src', 'images/white.png')
    
    cards[cardChosenId[0]].removeEventListener('click', flipCard)
    cards[cardChosenId[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }
    else {
        cards[cardChosenId[0]].setAttribute('src', 'images/blank.png')
    cards[cardChosenId[1]].setAttribute('src', 'images/blank.png')
    }
    cardChosen=[]
    cardChosenId=[]

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'congo you win'
    }
}



function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2) {
        setTimeout( checkMatch, 250)
    }
}

