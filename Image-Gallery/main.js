const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let img_paths = [];
for(let i = 0; i<5; i++)
    img_paths.push(`images/pic${i+1}.jpg`);

let alt_texts = [
    "Picture of a human eye",
    "Picture of Rock Formations",
    "Picture of a bunch of lavanders",
    "Egyptian Wall Art",
    "Picture of a butterfly on a leaf"
]

/* Looping through images */
for(let i = 0; i<5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', img_paths[i]);
    newImage.setAttribute('alt', alt_texts[i]);
    newImage.addEventListener('click', ()=>{
        displayedImage.setAttribute('src', img_paths[i]);
        displayedImage.setAttribute('alt', alt_texts[i]);
    });
    thumbBar.appendChild(newImage);
}
let darkened = false;
btn.onclick = () => {
    if(!darkened)
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    else
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    darkened = !darkened;
}
/* Wiring up the Darken/Lighten button */
