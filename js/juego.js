// Asegura que la pantalla se haya cargado
var indiceRandom = 0;
var op = [];
$(document).ready(function(){

  /*  $("#login").animate({
        'top':"10%"
    }, 500);
    $("#txtNombre").on('keyup', function(){
         $("#txtNombre").css('border','1px solid white');
         $(".alerta").fadeOut(400);
    })*/
   
    $.getJSON('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json', 
    function(data){
       // console.log(data.elements[0].name);
       var cuantos = data.elements.length;
       var indiceRandom = Math.floor(Math.random() * cuantos);
       $("#Elemento").find('h2').text(data.elements[indiceRandom].name);
       for(var i=0; i<3; i++){
           var n = Math.floor(Math.random() * cuantos)
           op.push(n);
           $("#Opciones").find('ul').append('<li><h2>' + data.elements[n].symbol + '</h2></li>');
       }
       op.push(indiceRandom);
    });

    $("#btnIniciar").click(function(){
        if($("#txtNombre").val() == ""){
            $("#txtNombre").css('border','1px solid red');
            $(".alerta").fadeIn(400);
        }else{
              $("#login").animate({
            'left':"-550px"
        }, 200,function(){
           $("#login").fadeOut(1000);
        });
        }
      
       
    });
});