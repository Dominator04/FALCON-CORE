// ================================
// PURPLE MEMORY v2
// Part 1
// ================================

const loadingScreen = document.getElementById("loadingScreen");
const passwordScreen = document.getElementById("passwordScreen");
const mainMenu = document.getElementById("mainMenu");

const progressBar = document.querySelector(".progress-bar");
const percent = document.querySelector(".percent");
const status = document.querySelector(".status");

const messages = [
    "Initializing System...",
    "Loading Neural Engine...",
    "Decrypting Memories...",
    "Searching Database...",
    "TARGET FOUND"
];

let progress = 0;

function startLoading(){

    const loading = setInterval(() => {

        progress++;

        progressBar.style.width = progress + "%";

        percent.textContent = progress + "%";

        if(progress===20){

            status.textContent=messages[1];

        }

        if(progress===45){

            status.textContent=messages[2];

        }

        if(progress===70){

            status.textContent=messages[3];

        }

        if(progress>=100){

            clearInterval(loading);

            status.textContent=messages[4];

            setTimeout(()=>{

                loadingScreen.classList.remove("active");

                passwordScreen.classList.add("active");

            },1000);

        }

    },60);

}

startLoading();
// ================================
// PURPLE MEMORY v2
// Part 2
// ================================

function checkPassword(){

    const password =
    document.getElementById("password").value.trim();

    if(password === "I Love U More Than Anything"){

        passwordScreen.classList.remove("active");

        mainMenu.classList.add("active");

        typeWriter(

            document.getElementById("welcomeTitle"),

            "WELCOME PRIOTY 💜",

            80

        );

    }

    else{

        document.getElementById("error").textContent =
        "❌ Wrong Password";

    }

}

function typeWriter(element, text, speed = 80){

    element.textContent = "";

    let i = 0;

    const typing = setInterval(() => {

        element.textContent += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typing);

        }

    }, speed);

}

const unlockBtn =
document.getElementById("unlockBtn");

unlockBtn.addEventListener(

    "click",

    checkPassword

);

const passwordInput =
document.getElementById("password");

passwordInput.addEventListener(

    "keydown",

    function(event){

        if(event.key === "Enter"){

            checkPassword();

        }

    }

);
// ================================
// PURPLE MEMORY v2
// Part 3
// ================================

const letterBtn =
document.getElementById("letterBtn");

const playlistBtn =
document.getElementById("playlistBtn");

if(letterBtn){

    letterBtn.addEventListener(

        "click",

        function(){

            alert("💌 Letter Page Coming Soon...");

        }

    );

}

if (playlistBtn) {

    playlistBtn.addEventListener("click", function () {

        window.open(
            "https://youtube.com/playlist?list=PLaGF0oJ1k-1U&si=atSqqRvHfEI2M56R",
            "_blank"
        );

    });

}

console.log("================================");

console.log(" PURPLE MEMORY SYSTEM ONLINE ");

console.log("================================");

console.log("Loading Complete");

console.log("Password System Ready");

console.log("Main Menu Ready");

console.log("TypeWriter Ready");

console.log("Mission Status : SUCCESS");

console.log("================================");
// ==========================
// LETTER PAGE
// ==========================

const letterPage = document.getElementById("letterPage");

const backFromLetter = document.getElementById("backFromLetter");

letterBtn.addEventListener("click", function(){

    mainMenu.classList.remove("active");

    letterPage.classList.add("active");

    document.getElementById("giftBox").style.display="none";

    typeLetter();
    const heartInterval = setInterval(createHeart,300);

setTimeout(()=>{

    clearInterval(heartInterval);

},6000);

});

backFromLetter.addEventListener("click", function(){

    letterPage.classList.remove("active");

    mainMenu.classList.add("active");

});
const letter = `🎂 HAPPY BIRTHDAY MY LOVE 💜

Dear Prioty,

Today is not just your birthday...

Today is the day the most beautiful person in my life came into this world.

Maybe I cannot always express everything perfectly,
but every little memory with you has become a precious part of my life.

Thank you for staying beside me.
Thank you for making my ordinary days feel special.

Thank you for being the most amazing person I have ever known.
The moment i saw u i became yours forever , and i am so mad for u 
that i can not imagine even a second of my life without you.
Plz be mine forever , I promise to make you the happiest person
 in this world and I will never let you down.
And i will always be there for you in every situation of your life.
And i will love u forever with everything I have and everything I am.

I hope this birthday brings you endless happiness,
countless smiles,
and every dream you wish for.

No matter where life takes us,
I want you to remember one thing...

You will always be someone incredibly special to me. ❤️

Happy Birthday once again, My Love.

Forever Yours,

— Sadman 🦅💜`;

function typeLetter(){

    const element =
    document.getElementById("letterText");

    element.innerHTML = "";

    let i = 0;

    const typing = setInterval(()=>{

        if(letter.charAt(i) === "\n"){

    element.innerHTML += "<br>";

}

else{

    element.innerHTML += letter.charAt(i);

}
        i++;

       if(i>=letter.length){

    clearInterval(typing);

    document.getElementById("giftBox").style.display="block";

}

    },35);

}
// ==========================
// Floating Hearts
// ==========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💜";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

}
// ==========================
// Surprise Button
// ==========================

const surpriseBtn =
document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", function(){

    alert("🎂 Final Birthday Surprise Coming Soon... ❤️");

});
// ==========================
// FINAL PAGE
// ==========================

const finalPage =
document.getElementById("finalPage");

const backFromFinal =
document.getElementById("backFromFinal");

if(surpriseBtn){

    surpriseBtn.addEventListener("click", function(){

        letterPage.classList.remove("active");

        finalPage.classList.add("active");

    });

}

if(backFromFinal){

    backFromFinal.addEventListener("click", function(){

        finalPage.classList.remove("active");

        letterPage.classList.add("active");

    });

}
// ==========================
// GALLERY PAGE
// ==========================

const galleryBtn = document.getElementById("galleryBtn");
const galleryPage = document.getElementById("galleryPage");
const backFromGallery = document.getElementById("backFromGallery");

if(galleryBtn){

    galleryBtn.addEventListener("click", function(){

        mainMenu.classList.remove("active");
        galleryPage.classList.add("active");

    });

}

if(backFromGallery){

    backFromGallery.addEventListener("click", function(){

        galleryPage.classList.remove("active");
        mainMenu.classList.add("active");

    });

}

/* ===========================
   AUTO GALLERY
=========================== */

const gallery = document.getElementById("gallery");

for(let i=1;i<=33;i++){

    const img=document.createElement("img");

    let number=i.toString().padStart(2,"0");

    img.src=`images/photo${number}.jpg`;

    img.alt=`Memory ${number}`;

    gallery.appendChild(img);

}

/* ===========================
   LIGHTBOX ENGINE
=========================== */

const galleryImages = document.querySelectorAll("#gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const photoCounter = document.getElementById("photoCounter");

const closeLightbox = document.getElementById("closeLightbox");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImage = 0;

function showImage(index){

    lightboxImg.src = galleryImages[index].src;

    photoCounter.textContent =
    `❤️ ${index + 1} / ${galleryImages.length}`;

}

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentImage=index;

        lightbox.classList.add("active");

        showImage(currentImage);

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

nextBtn.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    showImage(currentImage);

});

prevBtn.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    showImage(currentImage);

});
/* ===========================
   TAP OUTSIDE TO CLOSE
=========================== */

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});
/* ===========================
   MOBILE SWIPE
=========================== */

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].screenX;

    if(touchEndX < touchStartX - 50){

        nextBtn.click();

    }

    if(touchEndX > touchStartX + 50){

        prevBtn.click();

    }

});


/* ===========================
   BACKGROUND MUSIC
=========================== */

const bgMusic = document.getElementById("bgMusic");

document.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.volume = 0;
        bgMusic.play();

        // Fade In
        let fadeIn = setInterval(() => {

            if (bgMusic.volume < 0.98) {

                bgMusic.volume += 0.02;

            } else {

                bgMusic.volume = 1;
                clearInterval(fadeIn);

            }

        }, 120);

        // Fade Out after 90 seconds
        setTimeout(() => {

            let fadeOut = setInterval(() => {

                if (bgMusic.volume > 0.02) {

                    bgMusic.volume -= 0.02;

                } else {

                    bgMusic.volume = 0;
                    bgMusic.pause();
                    bgMusic.currentTime = 0;
                    clearInterval(fadeOut);

                }

            }, 120);

        }, 84000);

    }

}, { once: true });