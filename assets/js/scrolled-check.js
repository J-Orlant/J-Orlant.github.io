document.addEventListener('DOMContentLoaded', function(e) {
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;

        let modifier = 200; 
        if(currentScroll + modifier > documentHeight) {
            document.getElementById("content").style.overflowY = "scroll";    
            console.log('You are at the bottom!')
        }
    })
})

document.addEventListener('DOMContentLoaded', function(e) {
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.getElementById("content").scrollHeight;
        let currentScroll = document.getElementById("content").scrollY + document.getElementById("content").innerHeight;

        let modifier = 200; 
        if(currentScroll + modifier < documentHeight) {
            document.getElementById("content").style.overflowY = "hidden";    
            console.log('You are at the top!')
        }
    })
})

