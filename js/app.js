pbutton = document.getElementById("pbutton");
console.log(pbutton);

pbutton.addEventListener("click", Animation);
function Animation(e){

pbutton.classList.add('animate__animated', 'animate__bounceOutLeft');

    // console.log(e.target);
}