let drawButton = document.getElementById("drawButton") 
drawButton.addEventListener("click", function(){
    
    let Imput = document.getElementById("Imput")
    let numberCard = Imput.value
    let container = document.getElementById("container")
    container.innerHTML = " ";
    for( let i = 0; i < numberCard; i++){
        
        container.innerHTML += `<div class="cardStyle">
                    <div class="suit-top">
                        <p class="suits" id="suit-top">&spades;</p>
                    </div>
                    <div class="numero" id="number">
                        <p>${i}</p>
                    </div>
                    <div class="suit-base">
                        <p class="suits" id="suit-base">&spades;</p>
                    </div>
            </div> `
    }

})
