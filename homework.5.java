//task5.1

const btn = document.getElementById("hider");
const text = document.getElementById("text");

btn.onclick = function () {
    if(text.style.display !== "none") {
        text.style.display = "none";
        }else {text.style.display = "block";
        }
};

//task.5.2

text.insertAdjacentHTML("afterend", "<div id = 'card'><h2>Tornike</h2><a href='#'>Go to Profile</a></div>" );

//task.5.3

const newElement = document.querySelector("#card");
newElement.style.backgroundColor = "red";