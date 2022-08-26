const container = document.getElementById("container");


function makeGrid(rows, cols) {

  while (document.querySelector("button") !== null) {
    document.querySelector("button").remove();
  }

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.width = "960px";
  container.style.overflow = "hidden";
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.style.minHeight = "0";
    cell.style.minWidth = "0";
    cell.style.overflow = "hidden";
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = random_bg_color();
    })
  }
  createGrid();
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return color = "rgb(" + x + "," + y + "," + z +")";
}

function createGrid(){
// cannot be larger than 100 squares
  const buttonDiv = document.querySelector("#buttonDiv")
  const resetButton = document.createElement("button")
  resetButton.textContent = "Reset Grid";
  resetButton.style.display = 'block';
  resetButton.style.margin = '0 auto'
  buttonDiv.appendChild(resetButton)

  // add event listener
  resetButton.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(e => e.remove());
    let gridSize = prompt("Enter the Amount of Squares (maximum 100): ")
    if (gridSize > 100) {
      alert("Error! maximum reached!");
      return;
    }
    rows = gridSize;
    cols = gridSize;
    makeGrid(rows,cols)
    })  
}

// function eraserButton(){
//   const eraserDiv = document.querySelector("#eraserDiv")
//   const eraserButton = documnet.createElement("button")
//   eraserButton.textContent = "Eraser"
//   eraserButton.style.margin = "20px"
//   eraserDiv.appendChild(eraser)

//   eraserButton.addEventListener("click, () =>" {
//     document.que
//   })
// }


makeGrid(16,16)

