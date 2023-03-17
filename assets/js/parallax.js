let bg = document.getElementById("bg-main");

function getCurrentURL () {
    return window.location.pathname
}
  
const url = getCurrentURL()

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    
    
    console.log(url)
    if(url == "/about.html") {
        this.document.body.style.backgroundPositionY = (value * 0.5 * -1) + "px";
    } else {
        if(!window.matchMedia("(max-width: 850px)").matches) {
            bg.style.top = value * 0.5 + "px";
        } else {
            bg.style.top = "150vh"
        }
    }
    
});