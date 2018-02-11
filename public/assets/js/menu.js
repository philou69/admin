/* 
 * Fichier JS gerant l'affichage du menu gauche sur la page
 */
$(document).ready(function(){
    // Recuperation des éléments menu et content
        var $menu = $('#menu');
        var $content = $('#content');
        
        /* Event sur le bouton dropdown-menu*/
        $('#dropdown-menu').on('click', function(event){
            
            // On verifie le status de menu  et on modifie le css de menu et content en fonction 
            if($menu.data('display') == 'on') {
                $menu.hide();
                $content.css('margin-left', "0px");
                $menu.data('display', 'off');
            } else{
                $menu.show();
                $content.css('margin-left', "20vw");
                $menu.data('display', 'on');
            }
            event.preventDefault();
        })
    })

