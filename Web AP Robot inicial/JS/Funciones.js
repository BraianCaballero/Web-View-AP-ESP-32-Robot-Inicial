var directions = [];
var maxOrdenes = 10;
var cuadradoActual = 1;
let start = new Boolean;
start = document.querySelector("inicio");
const toggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const label = document.querySelector('label');
const header = document.querySelector('header');
var boton = document.querySelector('button').value;

start = false;
document.getElementById("mensaje").innerHTML = "Para comenzar hay que presionar el boton de inicio";
habilitarBotonera(false);

//se comienza a ejecutar esta función a partir de presionar el boton de inicio
function inicio() {
    start = true;
    clearSquares();
    directions = [];
    cuadradoActual = 1;
    document.getElementById("mensaje").innerHTML = "Preparado para recibir órdenes";
    habilitarBotonera(true);
    consultaGET("inicio"); //este evento lo que hace es consultar a url x un evento
}

/*esta función es la encargada de leer las direcciones escritas en el html y sumarlas 
hasta llegar a su máximo o su ejecución, lo que ocurra primero*/
function addDirection(direction) {
    boton = direction;
    if (directions.length < maxOrdenes) {
        directions.push(direction);
        showDirection(direction);
        document.getElementById("mensaje").innerHTML = direction;
        consultaGET(direction);
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

/*esta función se ejecuta a partir de presionar el boton ¡Vamos!*/
function go() {  
    consultaGET("ejecutar"); 
    if (directions.length === 0 || start === false) {
        start = false;
        document.getElementById("mensaje").innerHTML = "Presionar el botón de inicio";
        habilitarBotonera(false);
    }
    else if (start === true && (directions.length >=1 && directions.length <= 10)) { 
        start = false;
        document.getElementById("mensaje").innerHTML = "¡Allá voy!";
        habilitarBotonera(false);
    }  
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

function consultaGET(consulta) {
    const Http = new XMLHttpRequest();
    console.log(`consulta ${consulta}`);
    Http.open("GET", consulta);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.status);
        console.log(Http.response);
    }
}