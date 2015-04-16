var compteur_fiole = 0;
var compteur_tube = 0;
var compteur_menu = 0;
var compteur_etape = 0;
var compteur_liquide = 0;
var compteur_becher = 0;
var compteur_remplissage = 0;
var compteur_fournee = 1;
var compteur_succes = 0;
var compteur_echec = 0;
var compteur_rythme = 0;
var compteur_victoire_spoon = 0;
var compteur_becher_liquide = 0;
var compteur_achat_chauffe = 0;
var compteur_achat_meth = 0;
var compteur_achat_dealer = 0;
var compteur_achat_stability = 0;
var compteur_achat_molecular = 0;
var compteur_argent_meth = 0;
var compteur_argent_dealer = 0;
var erreur = false;
var win = 0;
var pause = document.getElementById("cercle");
var cout_chauffe = document.getElementById("cout_chauffe");
var cout_meth = document.getElementById("cout_meth");
var cout_stability = document.getElementById("cout_stability");
var cout_dealer = document.getElementById("cout_dealer");
var cout_molecular = document.getElementById("cout_molecular");
var alerte = document.getElementById("alerte_texte");
var resultat = document.getElementById("popup_win_texte");
var valeur_argent = document.getElementById("argent_valeur");
var valeur_purete = document.getElementById("purete_valeur");
var valeur_stabilite = document.getElementById("stabilite_valeur");
var stabilite = document.getElementById("stabilite");
stabilite = 1;
stabilite = parseFloat(stabilite);
var purete = document.getElementById("purete");
purete = 0.5;
purete = parseFloat(purete);
Math.ceil(valeur_purete);
var argent = 50;
var argent_gagne = 1000;
argent = parseInt(argent);
var last = 0;
var diff = 0;
var nombreClick = 1;
var rythm = 0;
var rythmGoal = 5; //nombre de clicks en rythme pour gagner
valeur_argent.innerHTML = argent +'\$';
valeur_stabilite.innerHTML = Math.round((stabilite*100)*100)/100+'\%';
valeur_purete.innerHTML = Math.round((purete*100)*100)/100+'\%';



           
pause.style.webkitAnimationPlayState="paused";

$(document).ready(function() {
// AMELIORATIONS

// PREMIERE --> BECHER
$("#button_buy_liquide").on("click", function() {
	if (argent >= 500) {
		argent -=500;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		$("#becher_liquide").css("top", "0px")
	}

	else if (argent < 500) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(500-argent) +'\$';
	}
});

// DEUXIEME --> CHAUFFE
$("#button_buy_chauffe").on("click", function() {
	if (argent >= 1000 && compteur_achat_chauffe == 0) {
		argent -=1000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_chauffe.innerHTML = '2000'
  		$("#barre_cuisson_indside").css("transition", "9s")
  		setTimeout(function() {
  			compteur_achat_chauffe++;
  		}, 1000)
	}

	if (argent >= 2000 && compteur_achat_chauffe == 1) {
		argent -=2000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_chauffe.innerHTML = '5000'
  		$("#barre_cuisson_indside").css("transition", "7s")
  		setTimeout(function() {
  			compteur_achat_chauffe++;
  		}, 1000)
  		
	}
	else if (argent < 2000 && compteur_achat_chauffe == 1) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(2000-argent) +'\$';
	}

	if (argent >= 5000 && compteur_achat_chauffe == 2) {
		argent -=5000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_chauffe.innerHTML = '10000'
  		$("#barre_cuisson_indside").css("transition", "5s")
  		setTimeout(function() {
  			compteur_achat_chauffe++;
  		}, 1000)
	}
	else if (argent < 5000 && compteur_achat_chauffe == 2) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(5000-argent) +'\$';
	}

	if (argent >= 10000 && compteur_achat_chauffe == 3) {
		argent -=10000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		$("#barre_cuisson_indside").css("transition", "3s")
  		valeur_argent.innerHTML = argent +'\$';
  		setTimeout(function() {
  			compteur_achat_chauffe++;
  		}, 1000)
	}
	else if (argent < 5000 && compteur_achat_chauffe == 3) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(10000-argent) +'\$';
	}

	else if (argent < 1000 && compteur_achat_chauffe == 0) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(1000-argent) +'\$';
	}
});

// TROISEME --> METH
$("#button_buy_meth").on("click", function() {
	if (argent >= 3000 && compteur_achat_meth == 0) {
		argent -=3000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_meth.innerHTML = '7500'
  		compteur_argent_meth++;
  		setTimeout(function() {
  			compteur_achat_meth++;
  		}, 1000)
	}

	if (argent >= 7500 && compteur_achat_meth == 1) {
		argent -=7500;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_meth.innerHTML = '15000'
  		compteur_argent_meth++;
  		setTimeout(function() {
  			compteur_achat_meth++;
  		}, 1000)
  		
	}
	else if (argent < 7500 && compteur_achat_meth == 1) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(7500-argent) +'\$';
	}

	if (argent >= 15000 && compteur_achat_meth == 2) {
		argent -=15000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_meth.innerHTML = '30000'
  		compteur_argent_meth++;
  		setTimeout(function() {
  			compteur_achat_meth++;
  		}, 1000)
	}
	else if (argent < 15000 && compteur_achat_meth == 2) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(15000-argent) +'\$';
	}

	if (argent >= 30000 && compteur_achat_meth == 3) {
		argent -=30000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		compteur_argent_meth++;
  		setTimeout(function() {
  			compteur_achat_meth++;
  		}, 1000)
	}
	else if (argent < 30000 && compteur_achat_meth == 3) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(30000-argent) +'\$';
	}

	else if (argent < 3000 && compteur_achat_meth == 0) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(3000-argent) +'\$';
	}
});

// QUATRIEME --> DEALER
$("#button_buy_dealer").on("click", function() {
	if (argent >= 8000 && compteur_achat_dealer == 0) {
		argent -=8000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_dealer.innerHTML = '16000'
  		compteur_argent_dealer++;
  		setTimeout(function() {
  			compteur_achat_dealer++;
  		}, 1000)
	}

	if (argent >= 16000 && compteur_achat_dealer == 1) {
		argent -=16000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_dealer.innerHTML = '24000'
  		compteur_argent_dealer++;
  		setTimeout(function() {
  			compteur_achat_dealer++;
  		}, 1000)
  		
	}
	else if (argent < 16000 && compteur_achat_dealer == 1) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(16000-argent) +'\$';
	}

	if (argent >= 24000 && compteur_achat_dealer == 2) {
		argent -=24000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_dealer.innerHTML = '50000'
  		compteur_argent_dealer++;
  		setTimeout(function() {
  			compteur_achat_dealer++;
  		}, 1000)
	}
	else if (argent < 24000 && compteur_achat_dealer == 2) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(24000-argent) +'\$';
	}

	if (argent >= 50000 && compteur_achat_dealer == 3) {
		argent -=50000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		compteur_argent_dealer++;
  		setTimeout(function() {
  			compteur_achat_dealer++;
  		}, 1000)
	}
	else if (argent < 50000 && compteur_achat_dealer == 3) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(30000-argent) +'\$';
	}

	else if (argent < 8000 && compteur_achat_dealer == 0) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(8000-argent) +'\$';
	}
});

// CINQUIEME --> STABILITY
$("#button_buy_stability").on("click", function() {
	if (argent >= 500 && compteur_achat_stability == 0) {
		argent -=500;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		stabilite += 0.2;
  		valeur_argent.innerHTML = argent +'\$';
  		if (stabilite > 1) {
  			stabilite = 1
  		}
  		valeur_stabilite.innerHTML = Math.round((stabilite*100)*100)/100+'\%';


	}

	else if (argent < 500 && compteur_achat_stability == 0) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(500-argent) +'\$';
	}
});

/*
// LAST --> MOLECULAR
$("#button_buy_molecular").on("click", function() {
	if (argent >= 15000 && compteur_achat_molecular == 0) {
		argent -=15000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_molecular.innerHTML = '35000'
  		setTimeout(function() {
  			compteur_achat_molecular++;
  		}, 1000)
	}

	if (argent >= 35000 && compteur_achat_molecular == 1) {
		argent -=35000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_molecular.innerHTML = '60000'
  		setTimeout(function() {
  			compteur_achat_molecular++;
  		}, 1000)
  		
	}
	else if (argent < 35000 && compteur_achat_molecular == 1) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(35000-argent) +'\$';
	}

	if (argent >= 60000 && compteur_achat_molecular == 2) {
		argent -=60000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		cout_molecular.innerHTML = '100000'
  		setTimeout(function() {
  			compteur_achat_molecular++;
  		}, 1000)
	}
	else if (argent < 60000 && compteur_achat_molecular == 2) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(24000-argent) +'\$';
	}

	if (argent >= 100000 && compteur_achat_molecular == 3) {
		argent -=100000;
		compteur_becher_liquide = 0;
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Achat réussi';
  		valeur_argent.innerHTML = argent +'\$';
  		setTimeout(function() {
  			compteur_achat_molecular++;
  		}, 1000)
	}
	else if (argent < 100000 && compteur_achat_molecular == 3) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(100000-argent) +'\$';
	}

	else if (argent < 15000 && compteur_achat_molecular == 0) {
		$("#alerte").css("background-color", "#3498db");
  		$("#alerte").css("display", "block");
  		alerte.innerHTML = 'Il te manque de l\'argent : ' +(8000-argent) +'\$';
	}
});
*/

// INDICATION DEPART
	$("#alerte").css("background-color", "#3498db");
  	$("#alerte").css("display", "block");
  	alerte.innerHTML = 'Cliquer sur le ballon pour interagir';

// MENU TRANSITION + APPARITION
$('.navicon-container').on('click', function() {
	  $(this).children('.navicon').toggleClass('active');
	if (compteur_menu == 0) {
  		$('nav').css("display", "block");
 	 	compteur_menu++;
	}

	else if (compteur_menu == 1) {
		$('nav').css("display", "none");
		compteur_menu = 0;
	}

});	


//ALERTE

$('#alerte_cross').on("click", function() {
	$("#alerte").css("display", "none");
});


//OUVERTURE DE LA POP UP + JEU
$("#mousse, #mousse2, #mousse3, #mousse4").hide() // on cache la mousse
$( "#fiole" ).on( "click", function() { // fuction au clique sur la fiole
	if(compteur_etape == 0 || compteur_fiole == 0) {
	if (compteur_fournee == 2) {
		$('#cercle').css("-webkit-animation-duration", '2.8s');
	}
	else if (compteur_fournee == 3) {
		$('#cercle').css("-webkit-animation-duration", '2.6s');
	}
	else if (compteur_fournee == 4) {
		$('#cercle').css("-webkit-animation-duration", '2.4s');
	}
	else if (compteur_fournee == 5) {
		$('#cercle').css("-webkit-animation-duration", '2.2s');
	}
	else if (compteur_fournee == 6) {
		$('#cercle').css("-webkit-animation-duration", '2s');
	}
	else if (compteur_fournee == 7) {
		$('#cercle').css("-webkit-animation-duration", '1.8s');
	}
	else if (compteur_fournee == 8) {
		$('#cercle').css("-webkit-animation-duration", '1.6s');
	}
	else if (compteur_fournee == 9) {
		$('#cercle').css("-webkit-animation-duration", '1.4s');
	}
	else if (compteur_fournee == 10) {
		$('#cercle').css("-webkit-animation-duration", '1.2s');
	}

  		$("#popup_jauge").css("display","block"); // popup ouverture, opacité 0.5
  		$('#cercle').css("-webkit-animation-play-state", "running"); // animation play onclick
  		// on rajoute un au compteur pour que au clique suivant un nouvel élément ce déclenche
  		compteur_fiole++;
	}
});

//PREMIERE ETAPE --> FIOLE 
$('#popup_jauge').on("click", function(event) { // function au clique de la jauge
	$('#cercle').css("-webkit-animation-play-state", "paused");
	var offset = $('#cercle').offset();
  event.stopPropagation();
 
  //SUCCES
  if (offset.top > 405 && offset.top < 450) { 
  	$("#liquide").css( "top", "0" ); // premier liquide qui remplie le ballon
	$("#mousse, #mousse2, #mousse3, #mousse4").hide()
  	$("#alerte").css("display", "block");
  	$("#alerte").css("background-color", "#2ecc71");
  	$("#chauffe").css("display", "block");
  	alerte.innerHTML = 'Vous avez réussi, cliquer sur le chauffe ballon pour continuer';
  	compteur_etape++;
  	compteur_succes++;


  	setTimeout(function(){
  	$("#popup_jauge").css("display","none");
  	},1000);
  }

  //ECHEC
  else {
  	erreur = true;
  	$("#liquide").css( "top", "0" ); // premier liquide qui remplie le ballon 
  		$("#liquide_tube").css( "top", "0" ); // liquide qui remplie le tube du ballon
	  	$("#mousse, #mousse2, #mousse3, #mousse4").show(1300); // mousse qui apparait après 1s (le temps que le liquide apparaisse)
	 	$("#alerte").css("display", "block");
	 	$("#alerte").css("background-color", "#e74c3c");
	 	alerte.innerHTML = 'Vous avez échoué(e), recommencer en cliquant sur la fiole';
	 	compteur_echec++;
	setTimeout(function() {
  		$("#popup_jauge").css("display","none");
  	},1500);
	if (erreur == true) {
		compteur_fiole= 0;

	}
  }
});

//CHAUFFE BALLON 

$("#chauffe").on("click", function() {
	if (compteur_etape == 1) {
		$(".flamme_container").css("display", "block");
		$("#barre_cuisson").css("display", "block");
		setTimeout(function() {
			$("#barre_cuisson_indside").css( "left", "0");
		}, 200);
		setTimeout(function() {
			$("#alerte").css("display", "block");
			$(".flamme_container").css("display", "none");
	 		alerte.innerHTML = 'Bravo, un nouvel élément est apparue, clique dessus pour intéragirir';
	 		$('#tube_a_essaie').css("display", "block");
	 		$('#structure_tube').css("display", "block");
		}, 5000);
		setTimeout(function() {
			$("#barre_cuisson").css("display", "none");
			compteur_etape++;
		}, 11000);
		compteur_succes++;
	}
});

//TUBE A ESSAIE


	$("#tube_a_essaie").on("click", function() {
		if (compteur_tube == 0 || compteur_etape == 2) {
		$('#InnerB').css("display", "none");
		$("#alerte").css("background-color", "#3498db");
		$("#alerte").css("display", "block");
	 	alerte.innerHTML = 'Tu dois verser le produit du becher au tube à essaie';
	 	$("#becher").css("display", "block");
	 	setTimeout(function() {
	 		alerte.innerHTML = 'Pars du départ pour arriver a la fin sans sortir la souris du rectangle';
	 		if (compteur_becher_liquide == 0) {
	 			$("#Outer").css("display", "block");
	 		}

	 		else if (compteur_becher_liquide == 1) {
	 			$("#alerte").css("background-color", "#e74c3c");
	 			alerte.innerHTML = 'Tu n\'as plus de liquide il faut que tu en rachete';
	 		}
	 	}, 2500);
		compteur_tube++;

	}
});

	$("#start_button").on("click", function() {
		if (compteur_tube == 1) {
			$('#start_button').css("display", "none");
			
		}
	});


  //DEPART
  $( "div#InnerA" )
    .mouseenter(function() {
      $( this ).find( "#A" ).text( "Départ" );
    })

  //HOVER 
  $('#Outer').hover(function() {
    
    setTimeout(function() {
      $('#InnerB').css("display", "inline-block");
    },1000);
    
  });



  //GAGNE
  $( "div#InnerB")
    .mouseenter(function() {
      setTimeout(function() {
      $("#Outer").css("display", "none");
      $("#alerte").css("background-color", "#2ecc71");
	  $("#alerte").css("display", "block");
	  $("#becher_liquide").css("top", "+10px")
	  $("#tube_a_essaie_liquide").css("top", "0")
	  alerte.innerHTML = 'Bravo, maintenant secous la fiole a un rythme régulier avec "O"';
      win = 1;
      },200);
      compteur_succes++;
      compteur_etape = 4;
      compteur_victoire_spoon++;
 })

  
  //ECHEC
    $( "div#Outer" )
    .mouseleave(function() { 
      setTimeout(function() {
        if (win != 1) {
          $("#Outer").css("display", "none");
          $("#alerte").css("display", "block");
          $("#alerte").css("background-color", "#e74c3c");
	  	  alerte.innerHTML = 'Tu as échoué, cela te coute du produit, recommence';
	  	  compteur_tube = 0;
	  	  compteur_echec++;

        }
      },200);
      
      if (compteur_becher == 0) {
	  	  	$("#becher_liquide").css("top", "+10px")
	  	  	compteur_becher++;
	  	  }

	  else if (compteur_becher == 1) {
	  	  	$("#becher_liquide").css("top", "+25px")
	  	  	compteur_becher++;
	  	  }	  

	  else if (compteur_becher == 2) {
	  	  	$("#becher_liquide").css("top", "+40px")
	  	  	compteur_becher++;
	  	  }	  

	  else if (compteur_becher == 3) {
	  	  	$("#becher_liquide").css("top", "+70px")
	  	  	alerte.innerHTML = 'Tu n\'as plus de liquide il faut que tu en rachete'
	  	  	compteur_becher_liquide = 1;
	  	  	compteur_becher++;
	  	  }	 	  	 
    });  

//CLICK SPEED
	var last = 0;
    var diff = 0;
    var nombreClick = 1;
    var rythm = 0;
    var rythmGoal = 5; //nombre de clicks en rythme pour gagner
    

    	$(window).on("keypress", function (e) { //utilisation de la touche "o" pour activer la fonction stir
    	if ((compteur_etape == 4) && (compteur_victoire_spoon == 1)) {
        	if (e.keyCode == 111) { 
            stir(event);
        }
        }
    });
   
    

    function stir(event) {

        //animation spoon :
        if (nombreClick == 1) {
            $("#tube_a_essaie").animate({
                top: "212px"
            }, 400);
            nombreClick = 0;
        } else {
            $("#tube_a_essaie").animate({
                top: "223px"
            }, 400);
            nombreClick = 1;
        }



        //calcul décalage temps :

        diff = event.timeStamp - last; //décalage de temps entre deux pressions
        last = event.timeStamp;
        if (diff > 420 && diff < 600) { //réglage de la marge d'erreur
        	$("#alerte").css("background-color", "#2ecc71");
            $("#alerte_texte").text("Garder ce rythme");
        	$("#alerte_cross").css("display", "none");
        	$("#alerte").css("display", "block");
            rythm++;
        } else if (diff < 420) {
        	$("#alerte").css("background-color", "#e74c3c");
            $("#alerte_texte").text("Trop rapide");
            $("#alerte_cross").css("display", "none");
            $("#alerte").css("display", "block");
            compteur_rythme++;

            if (compteur_rythme > 5) {
            	compteur_echec++;
            	compteur_rythme = 0;
            }
        } else {
        	$("#alerte").css("background-color", "#e74c3c");
            $("#alerte_texte").text("Trop lent");
            $("#alerte_cross").css("display", "none");
            $("#alerte").css("display", "block");
            compteur_rythme++;

            if (compteur_rythme > 5) {
            	compteur_echec++;
            	compteur_rythme = 0;
            }


        }

        //victoire
        if (rythm > rythmGoal) {
        	alerte.innerHTML = 'Bravo, maintenant il est temps de tout relier';
        	$("#alerte_cross").css("display", "block");
        	setTimeout(function() {
          		$("#alerte").css("background-color", "#3498db");
            	alerte.innerHTML = 'Clique sur le ballon pour commencer le mélange';
            }, 2500);
            $("#flacon").css("display", "block");
            $("#structure_reliage_tube_1, #structure_reliage_tube_2, #structure_reliage_tube_3, #structure_reliage_ballon_1, #structure_reliage_ballon_2").css("display", "block");
            $("#structure_reliage_ballon_1_remplissage").css("transition", "3s 0s")
            $("#structure_reliage_ballon_2_remplissage").css("transition", "3s 2.8s linear")
            $("#structure_reliage_tube_1_remplissage").css("transition", "3s 0s")
            $("#structure_reliage_tube_2_remplissage").css("transition", "3s 3s")
            $(" #structure_reliage_tube_3_remplissage").css("transition", "3s 6s linear")
            rythm= 0;
            compteur_etape = 5;
            compteur_remplissage++;
            compteur_succes++;


           

            $('#tube_a_essaie').on("click", function() {
	            if (compteur_remplissage == 2 || compteur_etape == 6) {	
	            	$("#structure_reliage_tube_1_remplissage").css("top", "0")
	            	$("#structure_reliage_tube_2_remplissage").css("left", "0")
	            	$("#structure_reliage_tube_3_remplissage").css("top", "0")
	            	compteur_remplissage++;
	            	setTimeout(function() {
				$("#flacon_liquide").css("top", "70px");
				$("#tube_a_essaie_liquide").css("top", "16.4px");
				$("#liquide").css("top", "14.2px");
			}, 9000);
	            	setTimeout(function() {
				$("#flacon_liquide").css("top", "60px");
				$("#tube_a_essaie_liquide").css("top", "32.8px");
				$("#liquide").css("top", "28.4px");
			}, 9100);
	            	setTimeout(function() {
				$("#flacon_liquide").css("top", "50px");
				$("#tube_a_essaie_liquide").css("top", "49.2px");
				$("#liquide").css("top", "42.6px");
			},9200);
	            	setTimeout(function() {
				$("#flacon_liquide").css("top", "40px");
				$("#tube_a_essaie_liquide").css("top", "65.6px");
				$("#liquide").css("top", "56.0px");
			},9300);
	            	setTimeout(function() {
				$("#flacon_liquide").css("top", "30px");
				$("#tube_a_essaie_liquide").css("top", "82px");
				$("#liquide").css("top", "70.4px");
			},9400);
	            	setTimeout(function() {
				$("#flacon_liquide").css("top", "20px");
				$("#tube_a_essaie_liquide").css("top", "98.4px");
				$("#liquide").css("top", "84.8px");
			},9500);
	            	setTimeout(function() {
				$("#flacon_liquide").css("top", "10px");
				$("#tube_a_essaie_liquide").css("top", "116px");
				$("#liquide").css("top", "100px");
			},9600);
	            	setTimeout(function() {
				
				$("#methContainer").css("display", "block"); // AFFICHAGE DU CASSAGE DE METH
				$("#alerte").css("background-color", "#3498db");
            		alerte.innerHTML = 'Brise la methamphétamine pour faire des cristaux';
				
				
			do {
				if ((compteur_echec >= 1) && (compteur_echec < 2)) {
					stabilite -= 0.2313310841098401830918309138;
					purete -= 0.05313310841098401830918309138;
				}

				else if (compteur_echec >= 2 && compteur_echec < 3) {
					stabilite -= 0.4;
					purete -= 0.1;
				}

				else if (compteur_echec >= 3 && compteur_echec < 4) {
					stabilite -= 0.6;
					purete -= 0.15;
				}

				else if (compteur_echec >= 4 && compteur_echec < 5) {
					stabilite -= 0.8;
					purete -= 0.20;
				}

				else if (compteur_echec >= 5) {
					stabilite -= 1;
				}
			}

			while(isNaN==true || stabilite ==0)	{
				if (stabilite <= 0) {
					stabilite = 0;
					$("#alerte_perdu").css("display", "block");
				}
			}


				

				if (compteur_succes >= 1 && compteur_succes < 2)  {
					purete += 0.5313310841098401830918309138;
				}

				else if (compteur_succes >= 2 && compteur_succes < 3) {
					purete += 0.1;
				}

				else if (compteur_succes >= 3 && compteur_succes < 4) {
					purete += 0.15;
				}

				else if (compteur_succes >= 4 && compteur_succes < 5) {
					purete += 0.2;
				}

				else  {
					purete += 0.2;
				}
				
				if (purete > 1) {
					purete = 1;
				}


			},9700);
	            }
 				
				
            });
			$('#container_fiole').on("click", function() {
				if (compteur_remplissage == 1 ||  compteur_etape == 5) {
					$("#alerte").css("background-color", "#3498db");
            		alerte.innerHTML = 'Clique sur le tube pour continuer';
            		$("#structure_reliage_ballon_1_remplissage").css("top", "0")
            		$("#structure_reliage_ballon_2_remplissage").css("left", "0")
            		$("#liquide_tube").css('top', '50px')
            		compteur_remplissage++;
            		compteur_etape ++;
            		
            	}
            });

        }

    }  

 

	$("#popup_cross").on("click", function() {
		$("#alerte").css("display", "block");
		$("#alerte").css("background-color", "#3498db");
        alerte.innerHTML = 'La difficulté augmente de fournée en fournée';
        setTimeout(function() {
        	$("#alerte").css("display", "block");
        	$("#alerte").css("background-color", "#3498db");
        	alerte.innerHTML = 'Améliore ton équipement avec le menu';
        }, 2000)
		$("#popup_win").css("display", "none");
		compteur_remplissage= 0;
		$("#").css("display", "none");
		$("#structure_reliage_ballon_1_remplissage").css("top", "165px")
		$("#structure_reliage_ballon_2_remplissage").css("left", "597px")
		$("#structure_reliage_tube_1_remplissage").css("top", "185px")
	    $("#structure_reliage_tube_2_remplissage").css("left", "-165px")
	    $("#structure_reliage_tube_3_remplissage").css("top", "-100px")
	    $("#structure_reliage_ballon_1_remplissage, #structure_reliage_ballon_2_remplissage, #structure_reliage_tube_1_remplissage, #structure_reliage_tube_2_remplissage, #structure_reliage_tube_3_remplissage").css("transition", "0s")
	    $("#flacon_liquide").css("top", "80px");
		$("#tube_a_essaie_liquide").css("top", "130px");
		$("#liquide").css("top", "115px");
		$("#barre_cuisson_indside").css( "left", "-100px");
		rythm = 0;
		compteur_fournee++; 
		compteur_echec = 0;
		compteur_succes = 0;
		win = 0;
		imgCounter = 1;
		compteur_victoire_spoon = 0;
		compteur_remplissage = 0;

		setTimeout(function() {
			compteur_etape = 0;
		}, 1000)
 	});

    // CASSAGE DE METH 
        var imgCounter = 1


    $('#methContainer').click(function (e) {
        $("#methContainer").css("transform", "rotate(5deg)")
        setTimeout( function() {
            $("#methContainer").css("transform", "rotate(0deg)")
        }, 50);
        var posMC = $(this).offset();
        var mcLeft = (e.pageX - posMC.left);
        var mcTop = (e.pageY - posMC.top); //pour récupérer la position du clic
        imgCounter++; //incrémente à chaque clic
        console.log(imgCounter);
        $("#img" + imgCounter).css({ //le img counter selectionne dans l'ordre chaque image
            "display": "block",
            "top": mcTop - 100 + "px", //le -100 permet que l'image se place bien par rapport au curseur, - 100 car l'image fait 200 de l'argeur et de hauteur
            "left": mcLeft - 100 + "px"

        });
        if (imgCounter > 7) {
        	if (compteur_argent_meth == 0) {
        	argent_gagne = 1000;
        	}

        	else if (compteur_argent_meth == 1) {
        	argent_gagne = 2000;
        	}

        	else if (compteur_argent_meth == 2) {
        	argent_gagne = 3000;
        	}

        	else if (compteur_argent_meth == 3) {
        	argent_gagne = 4000;
        	}

        	else if (compteur_argent_meth == 4) {
        	argent_gagne = 5000;
        	}




        	if (compteur_argent_dealer == 1) {
        	argent_gagne += 750;
        	}

        	else if (compteur_argent_dealer == 2) {
        	argent_gagne += 1000;
        	
        	}

        	else if (compteur_argent_dealer == 3) {
        	argent_gagne += 1400;
        	
        	}

        	else if (compteur_argent_dealer == 4) {
        	argent_gagne += 2100;
      
        	}

        	else if (compteur_argent_dealer == 5) {
        	argent_gagne += 3000;
        	
        	}

        	argent += argent_gagne;

        	valeur_argent.innerHTML = argent +'\$';
            valeur_stabilite.innerHTML = Math.round((stabilite*100)*100)/100+'\%';
			valeur_purete.innerHTML = Math.round((purete*100)*100)/100+'\%';
        	resultat.innerHTML = 'résultat de la fournée :</br> </br></br> vous avez gagné : ' +argent_gagne+ '</br></br></br> vous avez une stabilité de : ' +stabilite+ ' </br></br></br> vous avez une pureté de : ' +purete+ '</br></br></br> total de l\'argent de : ' +argent ;
            $("#popup_win").css("display", "block"); // VICTOIRE
             $("#methContainer").css("display", "none");
              $(".eclat").css("display", "none");
        }

    });


	     
});








