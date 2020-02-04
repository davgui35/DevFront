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
        // $( this ).remove();//Pour supprimer
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
        //Masquez les éléments correspondants en les fondant en transparence.
    });
        
    $('#box3').click(function(){
        $(this).css('background-color','purple');
        $(this).slideUp(4000);
        // Masquez les éléments correspondants avec un mouvement coulissant.
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
    console.log(i);
    //alert(i);afficher une boite de dialogue
    $('#plus').click(function(){
        $('<li>ligne' + i + '</li>').appendTo('ul');
        i++;//Ajoute une liste en plus
        if(i > 1){
            $('#moins').show();//Affiche le button si supérieur à 1
        }
        console.log(i);
    });

    //Retirer le dernier li rajouté
    $("#moins").click(function(){
        if(i > 1){
            $('li:last').remove();//supprime le dernier li
            i--;
        }else if(i == 1){
            $(this).hide();//Cache le bouton
        }
        console.log(i);
    });

    //TOGGLE EFFECTS
    $('#theToggle').click(function(){
        $('#maBoite').toggle(2000);//faire disparaitre la boite
        $('#maBoite').toggleClass('bordure');//faire apparaitre la boite
    });

    // //Affichage class highlight tous les paragraphes
    // $('p').click(function(){
    //     $('p').toggleClass('highlight');
    // });

    //Pour un paragraphe un par un
    $('#toggle p').click(function(){
        $(this).toggleClass('highlight');
    });

    //Pour un paragraphe un par un
    $('#toggle p').hover(function(){
        $('#maBoite').toggleClass('vert');
    });

    //Agrandir ou diminuer la taille de la police
    $('button.taille').click(function(){
        var os = $('#toggle p').css('font-size');
        //recupere la valeur par defaut 16px attacher
        var number = parseFloat(os); //avec number on recuperer que les chiffres = 16
        var uom = os.slice(-2);
        //On recupere les deux derniers caracteres( = px)
        if(this.id=='pluspetit'){
            number /= 1.4;
        }else{
            number *= 1.4;
        }
        console.log(number);
        $('#toggle p').css('font-size', number + uom);
    });
    //Photos
    $('#photos nav li').click(function(){
        var numeroLigne = $(this).index();
        //Affiche les index des images
        console.log(numeroLigne);
        $('#photos div img').hide(2000);//cacher les images par le clic
        $('#photos div img').eq(numeroLigne).show(2000);
        //les montrer avec le clic
    });

});
//https://github.com/erwantanguy/B1MDSDevFront

//images https://picsum.photos/640/360
//vignette https://picsum.photos/150/150