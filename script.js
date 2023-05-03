const container = document.querySelector("#container");
for(let i = 0; i < 16; i++){
//creates 16 flex rows called div
let div = document.createElement("div");
for(let i = 0; i < 16; i++){
//creates 16 squares and appends them all to the above row
let square = document.createElement("div");
square.classList.add("square");
div.appendChild(square);
}
//attaches the row to the container 
container.appendChild(div);
}