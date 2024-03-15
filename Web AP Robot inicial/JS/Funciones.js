var directions = [];
var maxOrdenes = 10;
var cuadradoActual = 1;
var start = new Boolean;
start = document.getElementById("inicio");
const toggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const header = document.header;
document.getElementById("mensaje").innerHTML = "Presionar el boton de inicio";

function inicio() {
    clearSquares();
    directions = [];
    cuadradoActual = 1;
    document.getElementById("mensaje").innerHTML = "";
}

function addDirection(direction) {
    if (directions.length < maxOrdenes) {
        directions.push(direction);
        showDirection(direction);
    }
    else {
        document.getElementById("mensaje").innerHTML = "Llegué a mi máximo de 10 órdenes acumuladas";
    }
}

function showDirection(direction) {
    var squares = document.getElementsByClassName("square");
    var index = directions.length -1;

    if (index < maxOrdenes) {
        var arrow = document.createElement("span");
        arrow.className = "arrow" + direction;
        //squares[index].appendChild(arrow);
        squares[index].innerHTML = '<span class="arrow ' + direction + '"></span>';
    }
}

function clearSquares() {
    var squares = document.getElementsByClassName("square");

    for (var i=0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }
}

function go() {
    document.getElementById("mensaje").innerHTML = "¡Allá voy!";
    if (directions.length === 0) {
        document.getElementById("mensaje").innerHTML = "Presionar el boton de inicio";
        return;
    }

    /*do {
        document.getElementById("btnAvanzar").disabled = true;
        document.getElementById("btnIzquierda").disabled = true;
        document.getElementById("btnDerecha").disabled = true;
        document.getElementById("btnAtras").disabled = true;
    } while (!start);
    if (!"inicio") {
        document.getElementById("btnAvanzar").disabled = true;
        document.getElementById("btnIzquierda").disabled = true;
        document.getElementById("btnDerecha").disabled = true;
        document.getElementById("btnAtras").disabled = true;
    }*/
}

toggleBtn.addEventListener('change', function() {
    if (this.checked) {
        body.style.backgroundColor = '#0953a1';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = '#29bfc7';
        body.style.color = 'black';
    }
});