// let drawButton = document.getElementById("drawButton") 
// drawButton.addEventListener("click", function(){

//     let Imput = document.getElementById("Imput")
//     let numberCard = Imput.value
//     let container = document.getElementById("container")
//     container.innerHTML = " ";
//     for( let i = 0; i < numberCard; i++){

//         container.innerHTML += `<div class="cardStyle">
//                     <div class="suit-top">
//                         <p class="suits" id="suit-top">&spades;</p>
//                     </div>
//                     <div class="numero" id="number">
//                         <p>${i}</p>
//                     </div>
//                     <div class="suit-base">
//                         <p class="suits" id="suit-base">&spades;</p>
//                     </div>
//             </div> `
//     }

// })

let suitsCard = ["♦", "♥", "♣", "♠"]
let numbersCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let cards = []

let btnDraw = document.getElementById("drawButton");
btnDraw.addEventListener("click", function () {
    
    let numbersCards = document.getElementById("Imput").value

    cards = generateCards(numbersCards);

    let container_card = document.getElementById("container_card");
    container_card.innerHTML = "";
    let card_container_sort = document.getElementById("card_container_sort");
    card_container_sort.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {

        if (cards[i].suit == "♣" || cards[i].suit == "♠"){

        container_card.innerHTML += `<div class="cardStyle">
                   <div class="suit-top">
                        <p class="suits" id="suit-top" style="color: black">${cards[i].suit}</p>
                    </div>
                    <div class="numero" id="number">
                        <p>${cards[i].number}</p>
                     </div>
                     <div class="suit-base">
                        <p class="suits" id="suit-base" style="color: black">${cards[i].suit}</p>
                    </div>
                      </div> `
        }else{   container_card.innerHTML += `<div class="cardStyle">
                   <div class="suit-top">
                        <p class="suits" id="suit-top" style="color: red">${cards[i].suit}</p>
                    </div>
                    <div class="numero" id="number">
                        <p>${cards[i].number}</p>
                     </div>
                     <div class="suit-base">
                        <p class="suits" id="suit-base" style="color: red">${cards[i].suit}</p>
                    </div>
                      </div> `

        }
    }
});

function generateCards(numbersCards) {
    let cards = [];
    for (let i = 0; i < numbersCards; i++) {
        let suit = suitsCard[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
        let number = numbersCard[Math.floor(Math.random() * ((numbersCard.length - 1) - 0))];

        let card = {

            suit: suit,
            number: number
        }
        cards.push(card);

    }
    return cards;
}
let btnSort = document.getElementById("sortButtom");
btnSort.addEventListener("click", function(){
 let cardsSort = bubbleSort(cards);
})

const bubbleSort = (cards) => {
    let wall = cards.length - 1;
    let iteration = 0;
    while (wall > 0){
        let index = 0;
        while (index < wall) {


        if (numbersCard.indexOf(cards[index].number) > numbersCard.indexOf(cards[index + 1].number)){
            let aux = cards[index];
            cards[index] = cards[index + 1];
            cards[index + 1] = aux;
            renderSortCards(cards, iteration);
            iteration++;
        }
        index++;
    }
    wall--;
}
return cards;
};

function renderSortCards(cards, iteration) {
let card_container_sort = document.getElementById("card_container_sort");
let cardsInHTML = "";
for (let i = 0; i < cards.length; i++) {

        if (cards[i].suit == "♣" || cards[i].suit == "♠"){

        cardsInHTML += `<div class="cardStyle">
                   <div class="suit-top">
                        <p class="suits" id="suit-top" style="color: black">${cards[i].suit}</p>
                    </div>
                    <div class="numero" id="number">
                        <p>${cards[i].number}</p>
                     </div>
                     <div class="suit-base">
                        <p class="suits" id="suit-base" style="color: black">${cards[i].suit}</p>
                    </div>
                      </div> `
        }else{   cardsInHTML += `<div class="cardStyle">
                   <div class="suit-top">
                        <p class="suits" id="suit-top" style="color: red">${cards[i].suit}</p>
                    </div>
                    <div class="numero" id="number">
                        <p>${cards[i].number}</p>
                     </div>
                     <div class="suit-base">
                        <p class="suits" id="suit-base" style="color: red">${cards[i].suit}</p>
                    </div>
                      </div> `

        }
    }
card_container_sort.innerHTML += `<div class="card_container-sort-row">
                <div class="iteration_num_container">
                    <p>${iteration}</p>
                </div>
                ${cardsInHTML}                
                </div>`

}
