
function getCurrentURL () {
    return window.location.pathname
}
  
const url = getCurrentURL()

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    
    
    if(url == "/about.html") {
        this.document.body.style.backgroundPositionY = (value * 0.5 * -1) + "px";
        this.document.getElementById("welcome").style.top = (value * 0.5) + "px";
    } else {
        let bg = document.getElementById("bg-main");

        if(!window.matchMedia("(max-width: 700px)").matches) {
            bg.style.top = value * 0.5 + "px";
        } else {
            bg.style.top = "150vh"
        }
    }
    
});