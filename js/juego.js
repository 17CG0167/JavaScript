// Asegura que la pantalla se haya cargado
$(document).ready(function(){

    $("#login").animate({
        'top':"10%"
    }, 500);
    $("#txtNombre").on('keyup', function(){
         $("#txtNombre").css('border','1px solid white');
         $(".alerta").fadeOut(400);
    })
   

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