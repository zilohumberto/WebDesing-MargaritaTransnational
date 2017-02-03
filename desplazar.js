$(document).ready(main);
 
var contador = 1;
var controlador = 1;
var out = 1;
function main(){
    $('.menu_bar').click(function(){
   // $('#superior').toggle(); 
        if(contador == 1){
            $('#superior').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('#superior').animate({
                left: '-100%'
            });
        }

    });
    
 


$(function(){
     $('a[href*=#]').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({scrollTop: targetOffset}, 1000);
             return false;
            }
       }
   });

});    
 
};

        function cambiarfoto(foto){
            $('.fan_page').attr('src','css/'+foto+'.png'); 
        };    



$(document).ready(function(){
   
    
    
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).resize(function(){ location.reload(); });
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
    
    $('.icono').click(function() {
            $('.activo').removeClass('activo');   
            $(this).addClass('activo');
    });
    
    
    $('.buscador').click(function(){
        if(controlador == 1){
            $('#buscador').slideDown(300);
            controlador = 0;
        }else{
            $('#buscador').slideUp(300);
            controlador = 1;
        }
    });
    
    
});




