function changeColor(){
    document.getElementById("text").style.color = "red";
}

//document.getELementBYID("text").style.color = "red";
/*  これは、ドキュメントの中の「text」というIDを持っている
　　タグのスタイルを赤にしてください。　*/
let count = 0;
function increaseCount(){
    
    count++;
    document.getElementById("counter").innerText = count;
}

function herasuCount(){
    
    count--;
    document.getElementById("counter").innerText = count;
}