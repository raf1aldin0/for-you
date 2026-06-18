/* ==========================
   MUSIC BUTTON
========================== */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if(!musicPlaying){

        bgMusic.play();

        musicBtn.innerHTML = "♫ Playing";

        musicPlaying = true;

    }else{

        bgMusic.pause();

        musicBtn.innerHTML = "♫ Music";

        musicPlaying = false;
    }

});

/* ==========================
   TIMELINE REVEAL
========================== */

const timelineItems =
document.querySelectorAll(".timeline-item");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

timelineItems.forEach(item=>{

observer.observe(item);

});

/* ==========================
   HERO PARALLAX
========================== */

window.addEventListener("scroll",()=>{

const hero =
document.querySelector(".hero-story");

const scrollY =
window.pageYOffset;

hero.style.backgroundPositionY =
scrollY * 0.4 + "px";

});

/* ==========================
   GOLD CURSOR SPARKLE
========================== */

document.addEventListener(
"mousemove",
(e)=>{

const sparkle =
document.createElement("div");

sparkle.innerHTML = "✨";

sparkle.style.position = "fixed";

sparkle.style.left =
e.clientX + "px";

sparkle.style.top =
e.clientY + "px";

sparkle.style.pointerEvents =
"none";

sparkle.style.fontSize = "12px";

sparkle.style.opacity = ".8";

sparkle.style.zIndex = "999";

document.body.appendChild(
sparkle
);

setTimeout(()=>{

sparkle.remove();

},500);

});

/* ==========================
   FLOATING ROSES
========================== */

function createRose(){

const rose =
document.createElement("div");

rose.innerHTML = "🌹";

rose.style.position = "fixed";

rose.style.left =
Math.random()*100+"vw";

rose.style.top = "-50px";

rose.style.fontSize =
Math.random()*20+20+"px";

rose.style.opacity = ".2";

rose.style.pointerEvents =
"none";

rose.style.zIndex = "1";

rose.style.transition =
"12s linear";

document.body.appendChild(rose);

setTimeout(()=>{

rose.style.transform =
`translateY(120vh) rotate(360deg)`;

},100);

setTimeout(()=>{

rose.remove();

},12000);

}

setInterval(createRose,3500);

/* ==========================
   HERO TEXT FADE
========================== */

const heroContent =
document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

let value =
window.scrollY;

heroContent.style.opacity =
1 - value / 500;

});

/* ==========================
   SCROLL TOP BUTTON
========================== */

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#d4af37";
topBtn.style.color="#000";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

window.addEventListener("scroll",()=>{

if(window.scrollY > 600){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/* ==========================
   JOURNEY MAP
========================== */

const map = L.map('journeyMap',{

scrollWheelZoom:true

}).setView([-7.2,108.8],7);

L.tileLayer(

'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

{
attribution:'© OpenStreetMap'
}

).addTo(map);

/* ==========================
   LOCATIONS
========================== */

const places = [

{
name:"Gunung Gede",
lat:-6.770,
lng:106.980,
image:"assets/images/gede1.jpeg",
desc:"Start Perjalanan",
maps:"https://maps.google.com/?q=Gunung+Gede"
},

{
name:"IKEA Alam Sutera",
lat:-6.241,
lng:106.657,
image:"assets/images/ik1.jpeg",
desc:"Date pertama yang sederhana namun berkesan.",
maps:"https://maps.google.com/?q=IKEA+Alam+Sutera"
},

{
name:"Blok M",
lat:-6.244,
lng:106.799,
image:"assets/images/bm.jpeg",
desc:"Explore & Menikmati bersama",
maps:"https://maps.google.com/?q=Blok+M"
},

{
name:"Yogjakarta",
lat:-7.792,
lng:110.365,
image:"assets/images/mcoklat.jpeg",
desc:"Liburan jauh pertama yang tak terlupakan.",
maps:"https://maps.google.com/?q=Malioboro"
},

{
name:"Pantai Goa Cemara",
lat:-7.995,
lng:110.243,
image:"assets/images/jjj.jpeg",
desc:"Menerbangkan harapan dan keinginan",
maps:"https://maps.google.com/?q=Pantai+Goa+Cemara"
},

{
name:"Gunung Prau",
lat:-7.185,
lng:109.925,
image:"assets/images/pr1.jpeg",
desc:"Pendakian penuh cerita",
maps:"https://maps.google.com/?q=Gunung+Prau"
},

{
name:"Tree Top Bogor",
lat:-6.654,
lng:106.903,
image:"assets/images/zz1.jpeg",
desc:"Melepas penat bersama",
maps:"https://maps.google.com/?q=TreeTop+Adventure+Park+Bogor"
},

{
name:"Enchanting Valley",
lat:-6.638,
lng:106.935,
image:"assets/images/couple-bg.JPG",
desc:"Tempat yang seru bersama kamu",
maps:"https://maps.google.com/?q=Enchanting+Valley+Bogor"
}

];

/* ==========================
   MARKERS
========================== */

places.forEach(place=>{

L.marker([

place.lat,
place.lng

])

.addTo(map)

.bindPopup(`

<div class="map-popup">

<img src="${place.image}">

<h3>${place.name}</h3>

<p>${place.desc}</p>

<a
href="${place.maps}"
target="_blank"
class="map-btn">

📍 Open Maps

</a>

</div>

`);

});

/* ==========================
   JOURNEY LINE
========================== */

const route = [

[-6.770,106.980], // Gede

[-6.241,106.657], // IKEA

[-6.244,106.799], // Blok M

[-7.792,110.365], // Malioboro

[-7.995,110.243], // Goa Cemara

[-7.185,109.925], // Prau

[-6.654,106.903], // Tree Top

[-6.638,106.935] // Enchanting

];

L.polyline(route,{

color:"#d4af37",

weight:5,

opacity:.85,

smoothFactor:1

})

.addTo(map);

/* ==========================
   CHAT REVEAL
========================== */

const reveals =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.2
}

);

reveals.forEach(item=>{

revealObserver.observe(item);

});

/* ==========================
   LOVE CARDS
========================== */

const cardContents = {

1:{
title:"Senyummu",
text:"Ada hari-hari yang terasa lebih ringan hanya karena melihatmu tersenyum."
},

2:{
title:"Caramu Menyapa",
text:"Hal sederhana yang entah bagaimana selalu terasa akrab dan menenangkan."
},

3:{
title:"Cerita-Ceritamu",
text:"Bukan karena ceritanya selalu luar biasa, tetapi karena aku suka mendengar versimu tentang dunia."
},

4:{
title:"Tawamu",
text:"Salah satu suara yang selalu berhasil membuat suasana terasa lebih hangat."
},

5:{
title:"Perhatian Kecilmu",
text:"Hal-hal yang mungkin kamu anggap biasa, sering kali justru paling berkesan."
},

6:{
title:"Semangatmu",
text:"Cara kamu terus melangkah membuat banyak hal terlihat mungkin untuk dijalani."
},

7:{
title:"Sisi Manjamu",
text:"Mengingatkanku bahwa setiap orang berhak memiliki tempat untuk merasa nyaman."
},

8:{
title:"Kesabaranmu",
text:"Karena tidak semua orang mampu tetap baik di tengah hari-hari yang melelahkan."
},

9:{
title:"Matamu",
text:"Selalu terlihat seperti menyimpan lebih banyak cerita daripada yang diucapkan."
},

10:{
title:"Caramu Menjalani Hidup",
text:"Tenang, tulus, dan tetap menjadi dirimu sendiri di tengah banyak hal yang berubah."
},

11:{
title:"Mimpi-Mimpimu",
text:"Aku senang melihat bagaimana kamu memperjuangkan hal-hal yang benar-benar berarti bagimu."
},

12:{
title:"Dirimu",
text:"Dan setelah semua alasan yang bisa disebutkan, tetap ada satu yang paling sederhana: kamu."
}

};

const cards =
document.querySelectorAll(".love-card");

const openedContainer =
document.getElementById("openedContainer");

const finalCard =
document.getElementById("finalCard");

const openedCount =
document.getElementById("openedCount");

let count = 0;

cards.forEach(card=>{

card.addEventListener("click",()=>{

if(card.classList.contains("done"))
return;

card.classList.add("done");
card.classList.add("flip");

roseBurst();

setTimeout(()=>{

const id =
card.dataset.id;

const data =
cardContents[id];

const item =
document.createElement("div");

item.classList.add("opened-item");

item.innerHTML = `
<h4>${data.title}</h4>
<p>${data.text}</p>
`;

openedContainer.prepend(item);

card.style.opacity="0";

setTimeout(()=>{

card.remove();

},500);

count++;

openedCount.innerHTML =
count;

document.getElementById(
"progressFill"
).style.width =
(count/12*100)+"%";

if(count===12){

finalCard.style.display=
"block";

finalCard.scrollIntoView({
behavior:"smooth"
});

}

},1000);

});

});

/* Rose Burst */

function roseBurst(){

for(let i=0;i<10;i++){

const rose =
document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";

rose.style.left=
(window.innerWidth/2)+"px";

rose.style.top=
(window.innerHeight/2)+"px";

rose.style.fontSize="24px";

rose.style.pointerEvents="none";

rose.style.zIndex="9999";

document.body.appendChild(rose);

const x =
(Math.random()*400)-200;

const y =
(Math.random()*400)-200;

rose.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:
`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:1500

});

setTimeout(()=>{

rose.remove();

},1500);

}

}

/* ==========================
   ADD FUTURE DREAM
========================== */

const addBtn =
document.getElementById("addDreamBtn");

const dreamInput =
document.getElementById("dreamInput");

const futureContainer =
document.querySelector(".future-container");

addBtn.addEventListener("click",()=>{

if(dreamInput.value.trim()==="") return;

const item =
document.createElement("div");

item.classList.add("future-item");

item.innerHTML = `
<input type="checkbox">
<span>${dreamInput.value}</span>
`;

futureContainer.appendChild(item);

dreamInput.value = "";

});

/* ==========================
   RETURN TO BEGINNING
========================== */
const returnBtn =
document.getElementById("returnBtn");

if(returnBtn){

returnBtn.addEventListener("click",()=>{

sessionStorage.setItem(
"showSecretHint",
"true"
);

window.location.href =
"index.html";

});

}