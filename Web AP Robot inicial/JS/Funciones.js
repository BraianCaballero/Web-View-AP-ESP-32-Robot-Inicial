var directions = [];
var maxOrdenes = 10;
var cuadradoActual = 1;
Bool = document.getElementById("inicio");
document.getElementById("mensaje").innerHTML = "Para recibir órdenes primero debes presionar el boton de inicio";

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
        document.getElementById("mensaje").innerHTML = "Para recibir órdenes primero debes presionar el boton de inicio";
        return;
    }

    if (!"inicio") {
        document.getElementById("btnAvanzar").disabled = true;
        document.getElementById("btnIzquierda").disabled = true;
        document.getElementById("btnDerecha").disabled = true;
        document.getElementById("btnAtras").disabled = true;
    }
}