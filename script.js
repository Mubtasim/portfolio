let para = document.getElementById("para");
// para.style.transition = "font-size 0.5s linear 1s";
let texts = ["hi", "I'm", "Mubtasim<br>Shahriar", "A Regular", "Competitive<br>Programmer", "Max Rating<br>Expert!", "In Codeforces!","4 Star", "In Codechef"];
let len = texts.length;
let idx = 0;

let interval = setInterval(textSetter,4000);


function textSetter() {
    // para.classList.remove("decFont");
    para.classList.add("incFont");
    para.innerHTML = texts[idx++%len];
    setTimeout(() => {
        para.classList.remove("incFont");
    }, 3000);
}
