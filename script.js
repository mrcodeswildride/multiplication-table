var rowsInput = document.getElementById("rows");
var columnsInput = document.getElementById("columns");
var firstRowInput = document.getElementById("firstRow");
var firstColumnInput = document.getElementById("firstColumn");
var generateButton = document.getElementById("generate");
var box = document.getElementById("box");

generateButton.addEventListener("click", generate);

function generate() {
    var rows = parseInt(rowsInput.value, 10);
    var columns = parseInt(columnsInput.value, 10);
    var firstRow = parseInt(firstRowInput.value, 10);
    var firstColumn = parseInt(firstColumnInput.value, 10);

    if (isNaN(firstRow)) {
        firstRow = 1;
    }

    if (isNaN(firstColumn)) {
        firstColumn = 1;
    }

    if (!isNaN(rows) && !isNaN(columns)) {
        box.innerHTML = "";

        for (var i = firstRow; i < firstRow + rows; i++) {
            for (var j = firstColumn; j < firstColumn + columns; j++) {
                var square = document.createElement("div");
                square.classList.add("square");
                square.style.left = (j - firstColumn + 1) * 40 + "px";
                square.style.top = (i - firstRow + 1) * 40 + "px";
                square.innerHTML = i * j;
                box.append(square);

                if (i == j) {
                    square.classList.add("perfectSquare");
                }
            }
        }

        for (var i = firstRow; i < firstRow + rows; i++) {
            let label = document.createElement("div");
            label.classList.add("label");
            label.style.left = "0px";
            label.style.top = (i - firstRow + 1) * 40 + "px";
            label.innerHTML = i;
            box.append(label);
        }

        for (var i = firstColumn; i < firstColumn + columns; i++) {
            let label = document.createElement("div");
            label.classList.add("label");
            label.style.left = (i - firstColumn + 1) * 40 + "px";
            label.style.top = "0px";
            label.innerHTML = i;
            box.append(label);
        }
    }
}
