var x = 1;
var h = "Hola";

document.getElementById("btnCalcular").addEventListener('click', function(){
    var input = document.getElementById("txtNombre");
    if(input.value == ""){
        input.style.backgroundColor = "red";
    }else{
        input.style.backgroundColor = "green";
        document.getElementById("miTexto").innerHTML = "Bienvenido " + input.value;
    }
    
    console.log(input);
}); 

document.getElementById("txtNombre").addEventListener('keyup', function(){
    var input = document.getElementById("txtNombre");
    document.getElementById("miTexto").innerHTML = "Bienvenido " + input.value;
});

//console.log(h);
//alert(h + " Mundo");

function miFuncion(){
    var todo = "";
    for(var y = 0; y<x; y++){
        todo = todo + "<button> Hola soy el boton #"+ x + "<button>";
    }
    document.getElementById("miTexto").innerHTML = todo;
    x++;
}