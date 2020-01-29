$(document).ready(function(){
    // $('h1').hide(5000);
   //Pour faire disparaitre le h1
//5000 temps en secondes
    for(var i = 0; i < 5; i++) {
        $('<div class="col-1 boite">').appendTo('#effets');
    }
 
//ajoute 5 fois la boite rouge
$("#effets div").click(function() {
 $( this ).hide( 2000, function() {
    $( this ).remove();
    });
});

});
