let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

let chara = document.getElementById("chara-main");
let nameText = document.getElementById("name-text");
let desc = document.getElementById("desc");
let VA = document.getElementById("VA");

let level7 = document.getElementById("level7");

let content = document.getElementById("content")
// let content = document.body;
let text_bg = document.getElementById("text-bg");

let positionMap = 0;
let back = document.getElementById("back");
let go = document.getElementById("go");
let logoMap = document.getElementsByClassName("iconMap");
console.log(logoMap)

level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Anemo.png)");
VA.innerText = "VA: Saito Chiwa";
desc.innerHTML = "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. <br> She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always."


content.style.animation = "bg-mond 5s infinite";
text_bg.innerHTML = "<h4>CITY OF<br>FREEDOOM</h4>"

card1.innerHTML = "<h4>Jean</h4>";
card2.innerHTML = "<h4>Eula</h4>";
card3.innerHTML = "<h4>Mona</h4>";

back.addEventListener("click", function () {
    if(positionMap < 3) {
        positionMap++;
        console.log("back = " + positionMap)
        for (let i = 0; i < logoMap.length; i++) {
            const element = logoMap[i];
            element.style.transform = `translateY(${positionMap * -100}px)`
            
        }

    } 
    if(positionMap > 0) go.classList.add("active")
    if(positionMap == 0) go.classList.remove("active")

    if(positionMap < 3) back.classList.add("active");
    if(positionMap == 3) back.classList.remove("active");

    updateContent();
})

go.addEventListener("click", function () {
    if(positionMap > 0) {
        positionMap--;
        console.log("go = " + positionMap)
        for (let i = 0; i < logoMap.length; i++) {
            const element = logoMap[i];
            element.style.transform = `translateY(${positionMap * -100}px)`
        }
    } 
    if(positionMap < 3) back.classList.add("active");
    if(positionMap == 3) back.classList.remove("active");

    if(positionMap > 0) go.classList.add("active")
    if(positionMap == 0) go.classList.remove("active")

    updateContent();
})

function updateContent() {
    card1.classList.add("active");
    card2.classList.remove("active");
    card3.classList.remove("active");

    if(positionMap == 0) {
        content.style.animation = "bg-mond 5s infinite";
        text_bg.innerHTML = "<h4>CITY OF<br>FREEDOOM</h4>"

        card1.style.backgroundImage = "url(/assets/image/Characters/Mond/Card/jean-card.png)"
        card2.style.backgroundImage = "url(/assets/image/Characters/Mond/Card/eula-card.png)"
        card3.style.backgroundImage = "url(/assets/image/Characters/Mond/Card/mona-card.png)"

        card1.innerHTML = "<h4>Jean</h4>";
        card2.innerHTML = "<h4>Eula</h4>";
        card3.innerHTML = "<h4>Mona</h4>";

        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Anemo.png)");
        VA.innerText = "VA: Saito Chiwa";
        desc.innerHTML = "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. <br> She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always."
        

        chara.setAttribute("src", "/assets/image/Characters/Mond/Jean.png")
        nameText.setAttribute("src", "/assets/image/Characters/Mond/Name-Jean.png")
    }
    
    if(positionMap == 1) {
        content.style.animation = "bg-liyue 5s infinite";
        text_bg.innerHTML = "<h4>A BOUNTIFUL <br> HARBOR</h4>"


        card1.style.backgroundImage = "url(/assets/image/Characters/Liyue/card/zhongli-card.png)"
        card2.style.backgroundImage = "url(/assets/image/Characters/Liyue/card/shenhe-card.png)"
        card3.style.backgroundImage = "url(/assets/image/Characters/Liyue/card/beidou-card.png)"

        card1.innerHTML = "<h4>Zhongli</h4>";
        card2.innerHTML = "<h4>Shenhe</h4>";
        card3.innerHTML = "<h4>Beidou</h4>";

        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Geo.png)");
        VA.innerText = "VA: Maeno Tomoaki";
        desc.innerHTML = "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned. <br> Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals."
        
        chara.setAttribute("src", "/assets/image/Characters/Liyue/zhongli.png")
        nameText.setAttribute("src", "/assets/image/Characters/Liyue/zhongli-text.png")
        
        
    }

    // Inazuma
    if(positionMap == 2) {
        content.style.animation = "bg-inazuma 5s infinite";
        text_bg.innerHTML = "<h4>AN ISOLATED <br> ARCHIPELANGO</h4>"


        card1.style.backgroundImage = "url(/assets/image/Characters/inazuma/card/ayaka-card.png)"
        card2.style.backgroundImage = "url(/assets/image/Characters/inazuma/card/raiden-card.png)"
        card3.style.backgroundImage = "url(/assets/image/Characters/inazuma/card/yae-card.png)"

        card1.innerHTML = "<h4>Ayaka</h4>";
        card2.innerHTML = "<h4>Raiden<br>Shogun</h4>";
        card3.innerHTML = "<h4>Yae Miko</h4>";

        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Cryo.png)");
        VA.innerText = "VA: Hayami Saori";
        desc.innerHTML = "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned. <br> Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals."
        
        chara.setAttribute("src", "/assets/image/Characters/inazuma/Ayaka.png")
        nameText.setAttribute("src", "/assets/image/Characters/inazuma/ayaka-text.png")
        
        
    }

    // Sumeru
    if(positionMap == 3) {
        content.style.animation = "bg-sumeru 5s infinite";
        text_bg.innerHTML = "<h4>THE CITY <br> OF SCHOLARS</h4>"


        card1.style.backgroundImage = "url(/assets/image/Characters/sumeru/card/nahida-card.png)"
        card2.style.backgroundImage = "url(/assets/image/Characters/sumeru/card/wanderer-card.png)"
        card3.style.backgroundImage = "url(/assets/image/Characters/sumeru/card/faruzan-card.png)"

        card1.innerHTML = "<h4>Nahida</h4>";
        card2.innerHTML = "<h4>Wanderer</h4>";
        card3.innerHTML = "<h4>Faruzan</h4>";

        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Dendro.png)");
        VA.innerText = "VA: Tamura Yukari";
        desc.innerHTML = "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned. <br> Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals."
        
        chara.setAttribute("src", "/assets/image/Characters/sumeru/Nahida.png")
        nameText.setAttribute("src", "/assets/image/Characters/sumeru/nahida-text.png")
        
        
    }
    
}


card1.addEventListener("click", function () {
    // Mondstadt
    if(positionMap == 0) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/Mond/Jean.png")
        nameText.setAttribute("src", "/assets/image/Characters/Mond/Name-Jean.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Anemo.png)");
        VA.innerText = "VA: Saito Chiwa";
        desc.innerHTML = "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. <br> She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always."
        
        card1.classList.add("active");
        card2.classList.remove("active");
        card3.classList.remove("active");

        
    }

    // Liyue
    if(positionMap == 1) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/Liyue/zhongli.png")
        nameText.setAttribute("src", "/assets/image/Characters/Liyue/zhongli-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Geo.png)");
        VA.innerText = "VA: Maeno Tomoaki";
        desc.innerHTML = "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned. <br> Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals."
        
        card1.classList.add("active");
        card2.classList.remove("active");
        card3.classList.remove("active");

        
    }

    // Inazuma
    if(positionMap == 2) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/inazuma/Ayaka.png")
        nameText.setAttribute("src", "/assets/image/Characters/inazuma/ayaka-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Cryo.png)");
        VA.innerText = "VA: Hayami Saori";
        desc.innerHTML = "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined."
        
        card1.classList.add("active");
        card2.classList.remove("active");
        card3.classList.remove("active");

        
    }

    // sumeru
    if(positionMap == 3) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/sumeru/Nahida.png")
        nameText.setAttribute("src", "/assets/image/Characters/sumeru/nahida-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Dendro.png)");
        VA.innerText = "VA: Tamura Yukari";
        desc.innerHTML = "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. <br> She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always."
        
        card1.classList.add("active");
        card2.classList.remove("active");
        card3.classList.remove("active");

        
    }
})

card2.addEventListener("click", function () {
    if(positionMap == 0) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/Mond/Eula.png")
        nameText.setAttribute("src", "/assets/image/Characters/Mond/Name-eula.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Cryo.png)");
        VA.innerText = "VA: Sato Rina";
        desc.innerHTML = "A rebellious descendant of the old aristocracy who is always out on the battlefield. <br> As one born into the old aristocracy, carrying the bloodline of sinners, Eula has needed a unique approach to the world to navigate the towering walls of prejudice peacefully. Of course, this did not prevent her from severing ties with her clan. As the outstanding Spindrift Knight, she hunts down Mondstadt's enemies in the wild to exact her unique 'vengeance'";
        
        card1.classList.remove("active");
        card2.classList.add("active");
        card3.classList.remove("active");

        
    }

    // Liyue
    if(positionMap == 1) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/Liyue/Shenhe.png")
        nameText.setAttribute("src", "/assets/image/Characters/Liyue/shenhe-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Cryo.png)");
        VA.innerText = "VA: Kawasumi Ayako";
        desc.innerHTML = "Even though she was born in the human world, she ended up being an adepti disciple. She grew up in the mountains far away from Liyue Harbor, her soul bound with red ropes, training both her body and mind. <br> Despite having the elegant temperament of an adeptus, she seems to be shrouded in mystery.";
        
        card1.classList.remove("active");
        card2.classList.add("active");
        card3.classList.remove("active");

        
    }

    // Inazuma
    if(positionMap == 2) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/inazuma/Raiden.png")
        nameText.setAttribute("src", "/assets/image/Characters/inazuma/raiden-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Electro.png)");
        VA.innerText = "VA: Sawashiro Miyuki";
        desc.innerHTML = "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.";
        
        card1.classList.remove("active");
        card2.classList.add("active");
        card3.classList.remove("active");
    }

    // Sumeru
    if(positionMap == 3) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/sumeru/Wanderer.png")
        nameText.setAttribute("src", "/assets/image/Characters/sumeru/wanderer-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Anemo.png)");
        VA.innerText = "VA: Kakihara Tetsuya";
        desc.innerHTML = "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.";
        
        card1.classList.remove("active");
        card2.classList.add("active");
        card3.classList.remove("active");

        
    }
})

card3.addEventListener("click", function () {
    if(positionMap == 0) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/Mond/Mona.png")
        nameText.setAttribute("src", "/assets/image/Characters/Mond/mona-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Hydro.png)");
        VA.innerText = "VA: Koharo Konomi";
        desc.innerHTML = "A mysterious young astrologer who proclaims herself to be 'Astrologist Mona Megistus', and who possesses abilities to match the title. Erudite, but prideful. <br> Though she is often strapped for cash and lives a life of thrift, she is resolved to never use astrology for profit... It is this very resolution that has caused her to constantly fret about money.";
        
        card1.classList.remove("active");
        card2.classList.remove("active");
        card3.classList.add("active");

        
    }

    // Liyue 
    if(positionMap == 1) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/Liyue/Beidou.png")
        nameText.setAttribute("src", "/assets/image/Characters/Liyue/beidou-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Electro.png)");
        VA.innerText = "VA: Koshimizu Ami";
        desc.innerHTML = "Captain of the Crux, with quite the reputation in Liyue. <br> There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her. <br> For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say— <br> 'No matter what sea beasts there may be, Beidou will be sure to split them all in two.'";
        
        card1.classList.remove("active");
        card2.classList.remove("active");
        card3.classList.add("active");

        
    }

    // Inazuma 
    if(positionMap == 2) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/inazuma/Yae.png")
        nameText.setAttribute("src", "/assets/image/Characters/inazuma/yae-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Electro.png)");
        VA.innerText = "VA: Sakura Ayane";
        desc.innerHTML = "The head shrine maiden in charge of Grand Narukami Shrine and a descendant of Kitsune lineage, Eternity's servand and friend, and the intimidating editor-in-chief of Yae Publishing House, a publisher of light novels... <br> The enigmatic Guuji, with many indentities, may never be fully understood by mortals for what she truly is in her hearth of hearts";
        
        card1.classList.remove("active");
        card2.classList.remove("active");
        card3.classList.add("active");   
    }

    // Sumeru 
    if(positionMap == 3) {
        // chara.style.right = "-2vw"

        chara.setAttribute("src", "/assets/image/Characters/sumeru/Faruzan.png")
        nameText.setAttribute("src", "/assets/image/Characters/sumeru/faruzan-text.png")
        
        level7.style.setProperty("--selection-background", "url(/assets/image/Characters/Elements/Anemo.png)");
        VA.innerText = "VA: Horie Yui   ";
        desc.innerHTML = "The head shrine maiden in charge of Grand Narukami Shrine and a descendant of Kitsune lineage, Eternity's servand and friend, and the intimidating editor-in-chief of Yae Publishing House, a publisher of light novels... <br> The enigmatic Guuji, with many indentities, may never be fully understood by mortals for what she truly is in her hearth of hearts";
        
        card1.classList.remove("active");
        card2.classList.remove("active");
        card3.classList.add("active");   
    }
})
