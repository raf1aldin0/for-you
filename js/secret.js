/* MUSIC */

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click",()=>{

if(!playing){

bgMusic.play();

musicBtn.innerHTML =
"♫ Playing";

playing=true;

}else{

bgMusic.pause();

musicBtn.innerHTML =
"♫ Music";

playing=false;

}

});

/* OPEN SECRET */

const openBtn =
document.getElementById("openSecret");

const videoSection =
document.getElementById("videoSection");

openBtn.addEventListener("click",()=>{

document.body.classList.add("cinematic");

setTimeout(()=>{

videoSection.style.display="block";

videoSection.scrollIntoView({
behavior:"smooth"
});

},2000);

});

/* COUNTER */

const counter =
document.getElementById("counter");

/*
GANTI TANGGAL INI
*/

const startDate =
new Date("2025-09-21");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days =
Math.floor(diff/(1000*60*60*24));

const hours =
Math.floor(diff/(1000*60*60)) % 24;

const minutes =
Math.floor(diff/(1000*60)) % 60;

const seconds =
Math.floor(diff/1000) % 60;

counter.innerHTML = `
${days} Days<br>
${hours} Hours<br>
${minutes} Minutes<br>
${seconds} Seconds
`;

}

updateCounter();

setInterval(updateCounter,1000);

/* BACK HOME */

document
.getElementById("backHome")
.addEventListener("click",()=>{

window.location.href =
"index.html";

});

/* ROSE PETALS */

function createRose(){

const rose =
document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";

rose.style.left=
Math.random()*100+"vw";

rose.style.top="-50px";

rose.style.opacity=".25";

rose.style.fontSize=
Math.random()*20+20+"px";

rose.style.pointerEvents=
"none";

document.body.appendChild(
rose
);

setTimeout(()=>{

rose.style.transition=
"12s linear";

rose.style.transform=
"translateY(120vh) rotate(360deg)";

},100);

setTimeout(()=>{

rose.remove();

},12000);

}

setInterval(
createRose,
3000
);

const video =
document.getElementById("secretVideo");

video.addEventListener(
"ended",
()=>{

document
.querySelector(".final-letter")
.scrollIntoView({

behavior:"smooth"

});

});