var directions = [];
var maxOrdenes = 10;
var cuadradoActual = 1;
var start = new Boolean (false);
start = document.getElementById("inicio");
const toggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const label = document.querySelector('label');
const header = document.querySelector('header');
document.getElementById("mensaje").innerHTML = "Presionar el boton de inicio";

//se comienza a ejecutar esta función a partir de presionar el boton de inicio
function inicio() {
    start = true;
    clearSquares();
    directions = [];
    cuadradoActual = 1;
    document.getElementById("mensaje").innerHTML = "";
    habilitarBotonera(start);
}

/*esta función es la encargada de leer las direcciones escritas en el html y sumarlas 
hasta llegar a su máximo o su ejecución, lo que ocurra primero*/
function addDirection(direction) {
    if (directions.length < maxOrdenes) {
        directions.push(direction);
        showDirection(direction);
        document.getElementById("mensaje").innerHTML = direction;
    }
    else {
        document.getElementById("mensaje").innerHTML = "Llegué a mi máximo de 10 órdenes acumuladas";
    }
}

/*esta función lo que hace es agregar las flechas direccionales en los cuadrados de la cola de órdenes, 
leyendo la dirección asignada*/
function showDirection(direction) {
    var squares = document.getElementsByClassName("square");
    var index = directions.length -1;

    if (index < maxOrdenes) {
        var arrow = document.createElement("span");
        arrow.className = "arrow" + direction;
        squares[index].innerHTML ='<span class="arrow ' + direction + '"></span>';
    }
}

//esta función limpia los cuadrados de la cola de órdenes
function clearSquares() {
    var squares = document.getElementsByClassName("square");

    for (var i=0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }
}

function standBy() {
    if (!inicio()) {
        habilitarBotonera(false);
    }
}

/*esta función se ejecuta a partir de presionar el boton ¡Vamos!*/
function go() {
    if (start == false  || directions.length == 0) {
        document.getElementById("mensaje").innerHTML = "Presionar el boton de inicio";
        return;
    }
    start = false;
    document.getElementById("mensaje").innerHTML = "¡Allá voy!";
    habilitarBotonera(start);
}

//esta función habilita o deshabilita la botonera dependiendo de su condición actual
function habilitarBotonera(condicion) {
    if (start == condicion) {
        document.getElementById("btnAvanzar").disabled = !condicion;
        document.getElementById("btnIzquierda").disabled = !condicion;
        document.getElementById("btnDerecha").disabled = !condicion;
        document.getElementById("btnAtras").disabled = !condicion;
    }
}

//esta función maneja el tema de visualización que se seleccione
toggleBtn.addEventListener('change', function() {
    //Tema oscuro
    if (this.checked) {
        body.style.backgroundColor = '#252850';
        body.style.color = 'white';
        label.style.backgroundColor = '#60e005';
        header.style.backgroundColor = '#11388e';
    } else {
    //Tema claro
        body.style.backgroundColor = '#29bfc7';
        body.style.color = 'black';
        label.style.backgroundColor = '#76766d';
        header.style.backgroundColor = '#00ffa5';
    }
});