const gameSelector = document.getElementById("game-selector");
const gameContainer = document.getElementById("game-container");

gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch(gameSelector.value){
        case "none":ainer.tex
            gameConttContent="ゲームを選ぶとここに表示されます"
            break;
        case "click-counter":
            ClickCounterGame();
            break;
        case "number-guess":
            NumberGuessGame();
            break;
        case "RPS": 
            RPS();  
            break;
    }
})




