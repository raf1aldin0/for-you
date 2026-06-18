/* ==========================
   TYPEWRITER EFFECT
========================== */

const typewriter = document.getElementById("typewriter");

const text =
`Ada beberapa hal
yang tidak pernah berhasil
aku ucapkan dengan baik.

Jadi aku menuliskannya di sini.`;

let i = 0;

function typing() {

    if (i < text.length) {

        typewriter.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 55);
    }

}

typing();

/* ==========================
   MUSIC
========================== */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        bgMusic.play();

        musicBtn.innerHTML = "♫ Playing...";

        musicPlaying = true;

    } else {

        bgMusic.pause();

        musicBtn.innerHTML = "♫ Our Song";

        musicPlaying = false;

    }

});

/* ==========================
   ROSE PETALS
========================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    const petals = ["🌹","🥀","🌺"];

    petal.innerHTML =
        petals[Math.floor(Math.random() * petals.length)];

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 700);

/* ==========================
   SECRET LOVE APPEAR
========================== */

const secretLove =
document.getElementById("secretLove");

setTimeout(() => {

    secretLove.style.opacity = "1";

}, 5000);

/* ==========================
   POPUP
========================== */

const popup =
document.getElementById("popup");

const popupTitle =
document.getElementById("popupTitle");

const popupText =
document.getElementById("popupText");

const popupClose =
document.getElementById("popupClose");

function showPopup(title,text){

    popup.style.display="flex";

    popupTitle.innerHTML=title;

    popupText.innerHTML=text;

}

popupClose.addEventListener("click",()=>{

    popup.style.display="none";

});

/* ==========================
   WRONG LOVE HUNT
========================== */

const wrongItems =
document.querySelectorAll(".wrong");

const wrongMessages = [

{
title:"🥺 Yahh Salah...",
text:"Aku tahu kamu penasaran. Tapi bukan yang ini ❤️"
},

{
title:"🌹 Mawar Cantik",
text:"Mawar ini cantik, tapi bukan rahasia yang aku sembunyikan."
},

{
title:"🖤 Masih Belum",
text:"Rahasianya masih bersembunyi. Cari lagi yaa Nona Sayang."
},

{
title:"✨ Hampir...",
text:"Sayangnya belum tepat. Coba lihat lebih teliti lagi."
},

{
title:"🌙 Bukan Bulan Ini",
text:"Meskipun indah, bukan ini yang sedang kamu cari."
}

];

wrongItems.forEach(item=>{

item.addEventListener("click",()=>{

const randomMessage =
wrongMessages[
Math.floor(
Math.random()*wrongMessages.length
)
];

showPopup(
randomMessage.title,
randomMessage.text
);

});

});

/* ==========================
   SECRET LOVE
========================== */

secretLove.addEventListener("click",()=>{

showPopup(

"🎉 Selamat Nona Sayang",

`
Kamu berhasil menemukan
sesuatu yang sengaja aku sembunyikan.

Karena tidak semua hal
mudah untuk diucapkan.

Dan mungkin...
ini salah satunya ❤️
`

);

popupClose.onclick = () => {

window.location.href =
"secret.html";

};

});

/* ==========================
   BEGIN JOURNEY
========================== */

const startBtn =
document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href =
"story.html";

},1000);

});

/* ==========================
   SECRET HINT AFTER RETURN
========================== */

const secretHint =
document.getElementById("secretHint");

if(
sessionStorage.getItem(
"showSecretHint"
) === "true"
){

setTimeout(()=>{

secretHint.innerHTML = `
🌹

Kadang,
halaman terakhir bukanlah akhir dari cerita.

Mungkin masih ada satu kenangan
yang belum terbuka.
`;

secretHint.classList.add("show");

},3000);

/* Hapus setelah ditampilkan */

sessionStorage.removeItem(
"showSecretHint"
);

}

/* ==========================
   CURSOR SPARKLE
========================== */

document.addEventListener(
"mousemove",
(e)=>{

const sparkle =
document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=
e.clientX+"px";

sparkle.style.top=
e.clientY+"px";

sparkle.style.pointerEvents="none";

sparkle.style.fontSize="12px";

sparkle.style.opacity=".7";

sparkle.style.zIndex="999";

document.body.appendChild(
sparkle
);

setTimeout(()=>{

sparkle.remove();

},600);

});