function rndInt() {
    let rndInt = Math.floor(Math.random() * 2);
    console.log(rndInt)

let x = rndInt;
console.log(x)

const unicorn = document.createElement("img");
unicorn.setAttribute("src", "unicorn.jpg");

const art = document.createElement("img");
art.setAttribute("src", "artist.gif");    

var msgEl = document.getElementById("displayMsg");
msgEl.innerHTML = "";

var artEl = document.getElementById("displayArt")
artEl.innerHTML = "";

if (x === 0) {
    msgEl.innerHTML = "the most beautiful unicorn in the world!";
    msgEl.appendChild(unicorn);
    } else if (x === 1) {
        msgEl.innerHTML = "an awesome artist";
        msgEl.appendChild(art);
    }
};