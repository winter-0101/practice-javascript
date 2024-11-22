function RPS(){
    const choices = ["gu","choki","pa"];
    let handimage =""
    
    //この書き方は、配列です。C言語参照
    
    // let option = document.createElement("option");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");

    // const gu ="gu"
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);
    // option2.value = choki;
    // option2.textContent = choki;
    // select.appendChild(option2);
    // option3.value = pa;
    // option3.textContent = pa;
    // select.appendChild(option3);
    // gameContainer.appendChild(select);
    let select = document.createElement("select");
    select.id ="choices"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choiceButton = document.createElement("button")
    choiceButton.textContent ="決定"

    gameContainer.appendChild(choiceButton);

    let image = document.createElement('img');
    image.alt ="choki"
    image.style.width ='300px';
    image.style.height ='200px';

    let enemyImage = document.createElement("img");
        enemyImage.alt ="choice";
        enemyImage.style.width ="300px";
        enemyImage.style.height ="200px";


    choiceButton.addEventListener("click",function(){
    switch(select.value){
        case "gu":
            image.src ="data:image/jpeg;base64,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";
            break;
        case "choki":
            image.src ="data:image/jpeg;base64,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";
            break;
        case "pa":
            image.src ="https://i2.wp.com/nekobu.net/wpcat/wp-content/uploads/2024/08/ote_neko_title.jpg?resize=696%2C392&ssl=1";
            break;
        default:
            break;
        }
        let enemyHand = choices[Math.floor(Math.random() * choices.length)];
        switch(enemyHand){
            case "gu":
                enemyImage.src ="data:image/jpeg;base64,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";
                break;
            case "choki":
                enemyImage.src ="data:image/jpeg;base64,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";
                break;
            case "pa":
                enemyImage.src ="https://i2.wp.com/nekobu.net/wpcat/wp-content/uploads/2024/08/ote_neko_title.jpg?resize=696%2C392&ssl=1";
                break;
            default:
                break;
            }
    })
    

    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyImage);


    
}