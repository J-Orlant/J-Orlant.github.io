let counter = 1;

let slide = document.getElementById("slide-group");

let first = document.getElementById("indi1");
let second = document.getElementById("indi2");
let third = document.getElementById("indi3");
let fourth = document.getElementById("indi4");
let five = document.getElementById("indi5");

first.addEventListener("click", function(){
    let prev = document.getElementById("indi" + counter);
    prev.classList.remove("active");
    first.className += " active";
    slide.style.transform = "translateX(-11.5%)";
    // slide.style.transform = `translateX(-${counter}0%)`;
    counter = 1;
})

second.addEventListener("click", function(){
    let prev = document.getElementById("indi" + counter);
    prev.classList.remove("active");
    second.className += " active";
    slide.style.transform = "translateX(-26%)";
    counter = 2;
})

third.addEventListener("click", function(){
    let prev = document.getElementById("indi" + counter);
    prev.classList.remove("active");
    third.className += " active";
    slide.style.transform = "translateX(-40%)";
    counter = 3;
})

fourth.addEventListener("click", function(){
    let prev = document.getElementById("indi" + counter);
    prev.classList.remove("active");
    fourth.className += " active";
    slide.style.transform = "translateX(-54.5%)";
    counter = 4;
})

five.addEventListener("click", function(){
    let prev = document.getElementById("indi" + counter);
    prev.classList.remove("active");
    five.className += " active";
    slide.style.transform = "translateX(-69%)";
    counter = 5;
})