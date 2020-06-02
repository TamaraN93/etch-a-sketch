//SELECTORS
const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const square = document.getElementsByClassName("square");
const generate = document.querySelector(".generate");

//CUSTOM GRID

//CREATE GRID
function grid (size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style = "background-color: white; border: 1px solid black";
            container.appendChild(square);
        }
    }
    
}

size = prompt("How many squares wide do you want your grid to be?");
grid(size);



        

//HOVER EFFECT
function hover() {
    container.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor =  "lightcoral";
    })
}
hover();

//CLEAR GRID COLOR
function clearGrid() {
    clear.addEventListener("click", (e) => {
        for (let i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = "white";
        }
    })
}
clearGrid();













