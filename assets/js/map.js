let bg = document.getElementById("handle");

let lastScrollTop = 0;
let ctr = 0;

let st;

// window.onscroll = function (e) {
//     setTimeout(function() {
//         console.log(ctr)

//         if(ctr == 0) {
//             document.body.style.height = "200vh";
//             bg.style.transform = "translateY(0)"; 
//         } else {
//             document.body.style.height = 5 + ctr + "00vh";
//             bg.style.transform = "translateY(-" + ctr + "00%)"; 
//         }
    
//         // st = window.pageYOffset || document.documentElement.scrollTop;
//         st = window.scrollY;
            
//         // if(ctr == 6) window.scrollTo(0,0);
    
//         if (st > lastScrollTop) {
//             if(ctr != 5) ctr++;
//         } else if (st < lastScrollTop) {
//             if(ctr > 0) ctr--;
//         }
    
//         lastScrollTop = st <= 0 ? 0 : st; 
//     }, 1500)
// }