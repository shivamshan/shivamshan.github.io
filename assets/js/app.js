document.addEventListener('DOMContentLoaded', () => {




//card options
const cardArray=[
    {
        name:'aniruddh',
        img: 'images/aniruddh.jpg'
    },
    {
        name:'aniruddh',
        img: 'images/aniruddh.jpg'
    },
    {
        name:'anuj',
        img: 'images/anuj.jpg'
    },
    {
        name:'anuj',
        img: 'images/anuj.jpg'
    },
    {
        name:'dishant',
        img: 'images/dishant.jpg'
    },
    {
        name:'dishant',
        img: 'images/dishant.jpg'
    },
    {
        name:'shivam',
        img: 'images/shivam.jpg'
    },
    {
        name:'shivam',
        img: 'images/shivam.jpg'
    },
    {
        name:'shritam',
        img: 'images/shritam.jpg'
    },
    {
        name:'shritam',
        img: 'images/shritam.jpg'
    },
    {
        name:'swetank',
        img: 'images/swetank.jpg'
    },
    {
        name:'swetank',
        img: 'images/swetank.jpg'
    }


]
cardArray.sort(() => 0.5- Math.random())

const grid=document.querySelector('.grid')
const resultDisplay=document.querySelector('#result')
var cardsChosen=[]
var cardsChosenId=[]
var cardsWon=[]

function createBoard(){
    for(let i=0;i < cardArray.length; i++){
        var card=document.createElement('img')
            card.setAttribute('src', 'images/blank_desgn.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
    }
   
}
//check for matches
function checkForMatch(){
    var cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenId[0]
    const optionTwoId=cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src','images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src','images/blank_desgn.jpg')
        cards[optionTwoId].setAttribute('src','images/blank_desgn.jpg')
        alert('Sorry,try again')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent= cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent ='Congratulations! You found them all'
    }
}



//flip your card
function flipCard(){
    var cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,500)
        
    }
}


createBoard()






})