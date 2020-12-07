document.getElementById("paulaBtn").addEventListener("click", displayMsg);

const unicorn = document.createElement("img");
unicorn.setAttribute("src", "unicorn.jpg");

function displayMsg() {
    document.getElementById("displayMsg").innerHTML = "the most beautiful unicorn in the world!",
    document.getElementById("displayMsg").appendChild(unicorn);
}
    
