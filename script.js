const container = document.querySelector("#container");
for(let i = 0; i < 16; i++){
let row = document.createElement("div");
row.classList.add("row");
//creates 16 flex rows 
for(let i = 0; i < 16; i++){
//creates 16 squares and appends them all to the above row
let square = document.createElement("square");
square.classList.add("square");
row.appendChild(square);
}
//attaches the row to the container 
container.appendChild(row);
}

//function to change color of square
function hoverEffect(e){
this.style.backgroundColor = 'yellow';
}
const keys = document.querySelectorAll('.square');
keys.forEach(key => key.addEventListener('mouseover', hoverEffect));
window.addEventListener('keydown', playSound);

