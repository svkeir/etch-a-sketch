const container = document.getElementById("container");
let numRows = 16;
const divs = (numRows * numRows);
const button = document.getElementById("divNumBtn")
const btn = document.getElementById('clearCanvas');
const root = document.documentElement;
let grid = document.querySelectorAll('.gridItem');


for (let i=0; i < divs; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridItem');
    container.appendChild(newDiv); 
}

function colorSketch(){
    let grid = document.querySelectorAll('.gridItem');
    grid.forEach((gridCell)=> {
        gridCell.addEventListener("mouseenter", ()=> {

            gridCell.classList.add("color");
        });
    });
}


 
btn.addEventListener("click", function() {
    let grid = document.querySelectorAll('.gridItem');
    grid.forEach((gridCell)=> {
        gridCell.classList.remove("color");
       
     });

    
});


button.addEventListener("click", function() {


   let input = prompt("Choose a number between 16 and 100:");

        if (input !== null) { 
            let number = parseFloat(input);

            if (isNaN(number)) {
                alert("Invalid input. Please enter a valid number.");
               
            } else if (input > 100) {
                alert("Invalid input. Please enter a valid number.");
                
            } else {

                const gridToClear = document.querySelectorAll('.gridItem');
                gridToClear.forEach(gridItem => {
                    gridItem.remove();
                })
                
                let numRows = input;
                
               
                root.style.setProperty('--gridDivs', input);

                let divs = (input ** 2);

                console.log(input);
                console.log(numRows);
                console.log(numRows * numRows);
                console.log(divs);

                for (let i=0; i < divs; i++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('gridItem');
                container.appendChild(newDiv); 
                }
                
                colorSketch();
            }
        } else {
            alert("Cancelled.");
        }     
   });

   colorSketch();











