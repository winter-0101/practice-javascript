function RPS(){
    const choices = ["gu","choki","pa","muteki"];
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
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.height = "200px";
    image.style.width = "200px";
    image.src = "data:image/jpeg;base64,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";.0

    gameContainer.appendChild(image);


    //forEach 配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})


}