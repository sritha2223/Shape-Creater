var numberInShape = 1;
var oldvalue = 0;

let button = document.getElementById("button");

button.onclick =() => {
    let n = document.getElementById("number").ariaValueMax;
    let circle = document.getElementById("circle");
    let square = document.getElementById("square");
    let rectangle = document.getElementById("rectangle");

    let box = document.getElementById("box");

    let j;
    n = Number(oldvalue) + Number(n);
    //circle // 3
    for(j= numberInShape; j<=n; j++){
        var shape = document.createElement("div");
        shape.innerHTML += numberInShape;
        if(square.checked)
            shape.classList.add("square");
        else if(circle.checked)
            shape.classList.add("circle");
        else if(rectangle.checked)
            shape.classList.add("rectangle");
        else
           document.write("Invalid Input");
        box.appendChild(shape);
        numberInShape++;
        oldvalue = document.getElementById("box").lastElementChild.innerHTML;

    }
    }
