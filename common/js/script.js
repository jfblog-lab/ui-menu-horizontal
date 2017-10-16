// initialise le menu
$("#menu").menu( { position: { using: positionnerSousMenu } });
	 
function positionnerSousMenu(position, elements) {
	var options = {
		of: elements.target.element
	};

	if (elements.element.element.parent().parent().attr("id") === "menu") {
		// le menu à positionner est de niveau 2 :
		// on va superposer le point central du haut du menu sur le point central bas du menu parent
		options.my = "center top";
		options.at = "center bottom";
	} else {
		// le menu à positionner est de niveau > 2
		// le positionnement reste celui par défaut : on va superposer le coin haut gauche du menu sur le coin haut droit du menu parent
		options.my = "left top";
		options.at = "right top";
	}

	elements.element.element.position(options);
};

// remplace la flèche droite par la flèche bas pour les menus de premier niveau
$("ul#menu>li>span.ui-icon-carat-1-e").removeClass("ui-icon-carat-1-e").addClass("ui-icon-carat-1-s");

