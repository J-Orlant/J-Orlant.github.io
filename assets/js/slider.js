counter = 1

let slide = document.getElementById("slide-content");

let first = document.getElementById("cc1");
let second = document.getElementById("cc2");
let third = document.getElementById("cc3");
let fourth = document.getElementById("cc4");
let five = document.getElementById("cc5");

timerSlide = function() {
    if(counter == 5) {
        counter = 1;
    }
    else {
        counter++;
    }
    
    let tem = counter - 1;
    
    if(tem == 0) {
        slide.style.left = "0";
    } else{
        slide.style.left = (tem * -1) + "00%";
    }
    

    let getSlider = document.getElementById('cc' + counter);
    getSlider.className += " active";

    let temp = counter;
    if(temp == 1) temp = 6; 
    let getprevSlider = document.getElementById('cc' + (temp-1));
    getprevSlider.classList.remove("active");
    
}

int = setInterval(timerSlide, 5000);

first.addEventListener("click", function(){
    // counter = 1;
    slide.style.left = "0";
})

second.addEventListener("click", function(){
    // counter = 2;
    slide.style.left = "-100%";
})

third.addEventListener("click", function(){
    // counter = 3;
    slide.style.left = "-200%";
})

fourth.addEventListener("click", function(){
    // counter = 4;
    slide.style.left = "-300%";
})

five.addEventListener("click", function(){
    // counter = 5;
    slide.style.left = "-400%";
})