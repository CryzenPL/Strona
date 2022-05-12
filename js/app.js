var startPoint = "x";
table.addEventListener("click",clickField);
function  clickField(e){
    if (e.target.innerHTML == ""){
    e.target.innerHTML = startPoint;
    if (startPoint == "x"){
        startPoint = "o";
    } else{
        startPoint = "x"
    }
    }
    p1 = document.getElementById("p1").innerHTML;
    p2 = document.getElementById("p2").innerHTML;
    p3 = document.getElementById("p3").innerHTML;
    p4 = document.getElementById("p4").innerHTML;
    p5 = document.getElementById("p5").innerHTML;
    p6 = document.getElementById("p6").innerHTML;
    p7 = document.getElementById("p7").innerHTML;
    p8 = document.getElementById("p8").innerHTML;
    p9 = document.getElementById("p9").innerHTML;
    wygrana1 = p1+p2+p3;
    wygrana2 = p4+p5+p6;
    wygrana3 = p7+p8+p9;
    wygrana4 = p1+p4+p7;
    wygrana5 = p2+p5+p8;
    wygrana6 = p3+p6+p9;
    wygrana7 = p1+p5+p9;
    wygrana8 = p3+p5+p7;
    console.log(wygrana1);

    if(wygrana1 == "xxx"){
        document.getElementById("p1").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p2").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p3").innerHTML = '<div class="winColor">x</div>';
    }
    if(wygrana2 == "xxx"){
        document.getElementById("p4").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p5").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p6").innerHTML = '<div class="winColor">x</div>';
    }
    if(wygrana3 == "xxx"){
        document.getElementById("p7").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p8").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p9").innerHTML = '<div class="winColor">x</div>';
    }
    if(wygrana4 == "xxx"){
        document.getElementById("p1").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p4").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p7").innerHTML = '<div class="winColor">x</div>';
    }
    if(wygrana5 == "xxx"){
        document.getElementById("p2").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p5").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p8").innerHTML = '<div class="winColor">x</div>';
    }
    if(wygrana6 == "xxx"){
        document.getElementById("p3").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p6").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p9").innerHTML = '<div class="winColor">x</div>';
    }
    if(wygrana7 == "xxx"){
        document.getElementById("p1").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p5").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p9").innerHTML = '<div class="winColor">x</div>';
    }
    if(wygrana8 == "xxx"){
        document.getElementById("p3").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p5").innerHTML = '<div class="winColor">x</div>';
        document.getElementById("p7").innerHTML = '<div class="winColor">x</div>';
    }
    // -----
    if(wygrana1 == "ooo"){
        document.getElementById("p1").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p2").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p3").innerHTML = '<div class="winColor">o</div>';
    }
    if(wygrana2 == "ooo"){
        document.getElementById("p4").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p5").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p6").innerHTML = '<div class="winColor">o</div>';
    }
    if(wygrana3 == "ooo"){
        document.getElementById("p7").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p8").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p9").innerHTML = '<div class="winColor">o</div>';
    }
    if(wygrana4 == "ooo"){
        document.getElementById("p1").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p4").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p7").innerHTML = '<div class="winColor">o</div>';
    }
    if(wygrana5 == "ooo"){
        document.getElementById("p2").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p5").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p8").innerHTML = '<div class="winColor">o</div>';
    }
    if(wygrana6 == "ooo"){
        document.getElementById("p3").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p6").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p9").innerHTML = '<div class="winColor">o</div>';
    }
    if(wygrana7 == "ooo"){
        document.getElementById("p1").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p5").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p9").innerHTML = '<div class="winColor">o</div>';
    }
    if(wygrana8 == "ooo"){
        document.getElementById("p3").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p5").innerHTML = '<div class="winColor">o</div>';
        document.getElementById("p7").innerHTML = '<div class="winColor">o</div>';
    }
}