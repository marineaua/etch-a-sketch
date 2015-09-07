$(document).ready(function() {
	var content = "<table>";

	for (var i = 0; i < 16; i++) {
		content += "<tr>";
		for(var j = 0; j < 16; j++){
			content += "<td><div class=\"squares\"></div></td>";
		}
		content += "</tr>";
	}

	content += "</table>"

	$("#mainSquare").append(content);

	$(".squares").hover(function() {
		console.log("Im being hovered!");
		$(this).addClass('hoveredSquares');
	}, function() {	
		/* Stuff to do when the mouse leaves the element */	
		$(this).removeClass('hoveredSquares')
	});

});

$("#menu").click(function() {
	console.log("YAYA!");
});


		

