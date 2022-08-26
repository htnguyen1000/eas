// create 16x16 grid of square divs

// set important constants and variables

const container = document.getElementById("container");

function makeRows(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    console.log(container);
    console.log(rows)
    console.log(columns)
    for (i = 0; i < (rows*columns); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i+1);
        container.appendChild(cell).className = "grid-item"
    }
}

makeRows(16,16)

