let para = document.getElementById("para");
let texts = ["hi", "i'm", "mubtasim<br>shahriar", "a regular", "competitive<br>programmer", "max rating<br>expert!", "in codeforces!","4 star", "in codechef"];
let len = texts.length;
let idx = 0;

let interval = setInterval(textSetter,4000);


function textSetter() {
    para.classList.add("incFont");
    para.innerHTML = texts[idx++%len];
    setTimeout(() => {
        para.classList.remove("incFont");
    }, 3000);
}
