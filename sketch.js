sketchpad = document.getElementById("sketchpad");

function createCells(numOfColumns = 15) {
    if (typeof +numOfColumns !== "number" || numOfColumns%1!=0 || numOfColumns < 1) {
        console.log(typeof (+numOfColumns));
        alert("Please enter a whole number");
        clearCells();
        return;
    }

    let sketchpadSize = 600;//This is just for ease of use
    sketchpad.style.width = "600px"
    sketchpad.style.height = "600px"
    for (let i = 0; i < numOfColumns**2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("pixel");
        cell.style.width = sketchpadSize/numOfColumns + "px";
        cell.style.height = sketchpadSize/numOfColumns + "px";
        cell.style.margin = 0;
        cell.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = "black";
        });
        sketchpad.appendChild(cell);
    }    
    let pixels = document.querySelectorAll(".pixel");
    sketchpad.style.gridTemplateColumns = generateNumOfColumns(pixels, sketchpadSize);
}

createCells();
function clearCells() {
    sketchpad.innerHTML = "";
    createCells(prompt("How many cells per side would you like?"));
}

sketchpad.style.display = "grid";

function generateNumOfColumns(pixels, sketchpadSize, numOfColumns = pixels.length**0.5) {
    let finalColumns = "";
    for (i = 0; i < numOfColumns; i++) {
        finalColumns+=`${sketchpadSize/numOfColumns}px `;
    }
    finalColumns = finalColumns.trim();
    return finalColumns;
}
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => clearCells());

