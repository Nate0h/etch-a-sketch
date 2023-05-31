/*const butt = document.createElement("button");
butt.textContent = "Click Me";
document.body.appendChild(butt);

butt.addEventListener('click', gridSize);*/

const butt = document.querySelector("button");
butt.addEventListener("click", gridSize);

const container = document.querySelector("#container");
function createGrid(x = 16){
    for(let i = 0; i < x; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    //creates 16 flex rows 
    for(let i = 0; i < x; i++){
    //creates 16 squares and appends them all to the above row
    let square = document.createElement("square");
    square.classList.add("square");
    row.appendChild(square);
    }
    //attaches the row to the container 
    container.appendChild(row);
    }
    }

    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
createGrid();
function hoverEffect(e){
    this.style.backgroundColor = getRandomColor();
    }
   
    
function gridSize(){
    container.innerHTML = '';
    let num = prompt("What square dimension do you want to grid to be?");
     num = parseInt(num);
    while(num > 100 ){
    num = prompt("What square dimension do you want to grid to be?");
    num = parseInt(num);
    }
    createGrid(num);
    const keys = document.querySelectorAll('.square');
    keys.forEach(key => key.addEventListener('mouseover', hoverEffect));
    }


    const keys = document.querySelectorAll('.square');
    keys.forEach(key => key.addEventListener('mouseover', hoverEffect));


