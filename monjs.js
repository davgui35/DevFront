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
        // $( this ).remove();
        });
    });
    $("#show").click(function(){
        $("#effets div").show("slow");
        });

    $('#box1').click(function(){
        $(this).css('background-color','pink');
        //this c'est pour que cette box
        $(this).hide(4000);
    });

    $('#box2').click(function(){
        //En concaténant
        $(this).css('background-color','blue').fadeOut(2000);
    });
        
    $('#box3').click(function(){
        $(this).css('background-color','purple');
        $(this).slideUp(4000);
    });

    $('#animate div').click(function(){
        //1)Sans con concaténé, elle se déplace en horizontale et ensuite à la verticale
        // $(this).animate({
        //     "left":"300px"
        // }, 3000);
        // $(this).animate({
        //     "top":"-300px"
        // }, 4000).css('background-color','yellow');
        //2)Si on concaténe les deux déplacements on aura une diagonale
        $(this).animate({
            "left":"300px",
            "top":"-300px"
        }, 2000).css('background-color','yellow');

    });

    $('li').addClass('alerte');
    $('#no-alerte').click(function(){
        $('li').removeClass();
    });
    //Quand on clique sur les liens
    $('li a').click(function(){
        $(this).parent('li').removeClass();
    });
    // //Quand on cible que le premier lien
    // $('li:first').click(function(){
    //     $(this).parent('li').removeClass();
    // });
    // //Quand on cible que le premier lien
    // $('li:nth-child(4)').click(function(){
    //     $(this).parent('li').removeClass();
    // });

    //Reprise du nombre de li plus 1
    var i = $('li').length + 1;
    //alert(i);afficher une boite de dialogue
    $('#plus').click(function(){
        $('<li>ligne' + i + '</li>').appendTo('ul');
        i++;//Ajoute la liste en plus
    });

    //Retirer le dernier li rajouté
    $("#moins").click(function(){
        $('li:last').remove();
        i--;
    });

});


