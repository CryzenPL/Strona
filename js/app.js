var startPoint = "x";
var p = [1,2,3,4,5];
console.log(p[2]);
remis = 0;
table.addEventListener("click",clickField);
function  clickField(e){
    if (e.target.innerHTML == ""){
    remis++;
    e.target.innerHTML = startPoint;
    if (startPoint == "x"){
        startPoint = "o";
    } else{
        startPoint = "x"
    }
    }

    for(x=1 ; x<10 ; x++){
        p[x] =  document.getElementById("p"+x).innerHTML;
    }

    // p1 = document.getElementById("p1").innerHTML;
    // p2 = document.getElementById("p2").innerHTML;
    // p3 = document.getElementById("p3").innerHTML;
    // p4 = document.getElementById("p4").innerHTML;
    // p5 = document.getElementById("p5").innerHTML;
    // p6 = document.getElementById("p6").innerHTML;
    // p7 = document.getElementById("p7").innerHTML;
    // p8 = document.getElementById("p8").innerHTML;
    // p9 = document.getElementById("p9").innerHTML;
    wygrana1 = p[1]+p[2]+p[3];
    wygrana2 = p[4]+p[5]+p[6];
    wygrana3 = p[7]+p[8]+p[9];
    wygrana4 = p[1]+p[4]+p[7];
    wygrana5 = p[2]+p[5]+p[8];
    wygrana6 = p[3]+p[6]+p[9];
    wygrana7 = p[1]+p[5]+p[9];
    wygrana8 = p[3]+p[5]+p[7];
    console.log(wygrana1);


    if(wygrana1 == "xxx"){
        for(x=1 ; x<4 ; x++){
           document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Krzyżyków";
    }
    if(wygrana2 == "xxx"){
        for(x=4 ; x<7 ; x++){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Krzyżyków";
    }
    if(wygrana3 == "xxx"){
        for(x=7 ; x<10 ; x++){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Krzyżyków";
    }
    if(wygrana4 == "xxx"){
        for(x=1 ; x<8 ; x+=3){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Krzyżyków";
    }
    if(wygrana5 == "xxx"){
        for(x=2 ; x<9 ; x+=3){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Krzyżyków";
    }
    if(wygrana6 == "xxx"){
        for(x=3 ; x<10 ; x+=3){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Krzyżyków";
    }
    if(wygrana7 == "xxx"){
        for(x=1 ; x<10 ; x+=4){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Krzyżyków";
    }
    if(wygrana8 == "xxx"){
        for(x=3 ; x<8 ; x+=2){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Krzyżyków";
    }
    // -----
    if(wygrana1 == "ooo"){
        for(x=1 ; x<4 ; x++){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">o</div>'
         }
         table.removeEventListener("click",clickField);
         document.getElementById("resetButton").className = "visibleButton";
         document.getElementById("info").innerHTML = "Wygrana Kółeczków";
    }
    if(wygrana2 == "ooo"){
        for(x=4 ; x<7 ; x++){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">o</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Kółeczków";
    }
    if(wygrana3 == "ooo"){
        for(x=7 ; x<10 ; x++){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">o</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Kółeczków";
    }
    if(wygrana4 == "ooo"){
        for(x=1 ; x<8 ; x+=3){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">o</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Kółeczków";
    }
    if(wygrana5 == "ooo"){
        for(x=2 ; x<9 ; x+=3){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">o</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Kółeczków";
    }
    if(wygrana6 == "ooo"){
        for(x=3 ; x<10 ; x+=3){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">o</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Kółeczków";
    }
    if(wygrana7 == "ooo"){
        for(x=1 ; x<10 ; x+=4){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">o</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Kółeczków";
    }
    if(wygrana8 == "ooo"){
        for(x=3 ; x<8 ; x+=2){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">o</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
        document.getElementById("info").innerHTML = "Wygrana Kółeczków";
    }
    if(remis == 9){
        document.getElementById("resetButton").className = "visibleButton";
    }
    resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click",resetButtonF)
    function resetButtonF(e) {
        table.addEventListener("click",clickField);
        document.getElementById("p1").innerHTML = "";
        document.getElementById("p2").innerHTML = "";
        document.getElementById("p3").innerHTML = "";
        document.getElementById("p4").innerHTML = "";
        document.getElementById("p5").innerHTML = "";
        document.getElementById("p6").innerHTML = "";
        document.getElementById("p7").innerHTML = "";
        document.getElementById("p8").innerHTML = "";
        document.getElementById("p9").innerHTML = "";
        document.getElementById("resetButton").className = "invisibleButton";
        document.getElementById("info").innerHTML = "";
        startPoint = "x";
        remis = 0;
    }
}