var squareSize = 10;

$(document).ready(function() {
	
	setup();
	hoverSetup();
});

function setup()
{
	var s; 
	var check = true;
	var mainSize = parseInt($('#mainSquare').css('height'));

	while(check)
	{
		s = mainSize/squareSize;

		if(s % 1 == 0)
		{
			check = false;
		}
		else
		{
			mainSize -= 1;
		}
		console.log(mainSize);
		console.log("" + s + " & " + s + "");
	}

	$("#mainSquare").css({
		'height': mainSize + 'px',
		'width': mainSize + 'px'
	});

	//console.log("" + s + " & " + s + "");

	var content = "<table>";

	for (var i = 0; i < squareSize; i++) {
		content += "<tr>";
		for(var j = 0; j < squareSize; j++){
			content += "<td><div class=\"squares\"></div></td>";
		}
		content += "</tr>";
	}

	content += "</table>"

	
	$("#mainSquare").append(content);

	$(".squares").css({
		"height": s + "px",
		"width": s + "px"
	});
	$(".hoveredSquares").css({
		"height": s + "px",
		"width": s + "px"
	});
}

function hoverSetup()
{
	$(".squares").hover(function() {
		$(this).addClass('hoveredSquares');
	}, function() {	
		/* Stuff to do when the mouse leaves the element */	
		//$(this).removeClass('hoveredSquares')
	});
}



		

