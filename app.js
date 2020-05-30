const container = document.querySelector(".container");
const rows = document.getElementsByClassName("row");
const cells = document.getElementsByClassName("cell");
const clear = document.querySelector(".clear");
const squares = document.querySelectorAll(".square");

//CREATE GRID

function grid(num) {
        container.getElementsByClassName.gridTemplateColumns = "repeat(16,1ft)";
        for (let i = 1; i < num+1; i++) {
            for (let j = 1; j < num+1; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.style = "border: 1px solid black";
                container.appendChild(square);
            }
        }
    }

grid(16);

//HOVER EFFECT

function hover() {
    container.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#ffa305";
    })
}

hover();









