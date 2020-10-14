let para = document.getElementById("para");
// para.style.transition = "font-size 0.5s linear 1s";
let texts = ["hi", "i'm", "mubtasim shahriar", "a regular", "competitive programmer", "max rating expert!", "in codeforces!","4 star", "in codechef"];
let len = texts.length;
let idx = 0;

let interval = setInterval(textSetter,4000);


function textSetter() {
    // para.classList.remove("decFont");
    para.classList.add("incFont");
    para.innerText = texts[idx++%len];
    setTimeout(() => {
        para.classList.remove("incFont");
    }, 3000);
}
