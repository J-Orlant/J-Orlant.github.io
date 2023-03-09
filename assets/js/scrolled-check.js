let content = document.getElementById("content");

window.onscroll = function(ev) {
    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
        if(content.style.top == "0") {
            console.log("Masok")
            content.style.overflowY = "scroll";
        }
    }
};