let lastScrollTop = 0;
let nav = document.getElementById("nav");
let side = document.getElementById("sidebar");
let btn_side = document.getElementById("btn-side");
let btn_side_close = document.getElementById("btn-close-side");


window.addEventListener("scroll", function(e) {
    st = window.scrollY;

    if (st > lastScrollTop) {
        nav.style.opacity = 0;
    } else if (st < lastScrollTop) {
        nav.style.opacity = 1;
    }

    lastScrollTop = st <= 0 ? 0 : st;   
})

btn_side.addEventListener("click", function() {
    side.style.transform = "translateX(0)";
});

btn_side_close.addEventListener("click", function() {
    side.style.transform = "translateX(100%)";
});