<html>
	<head>
		<title>Minesweeper</title>
		<script type="text/javascript" src="function.js"></script>
		<script type="text/javascript" src="class.js"></script>
	</head>
	
	<body onload="avoid_image_loading_delay()">
		<button id="start">Start</button>&nbsp;&nbsp;&nbsp;&nbsp;
		<span id="game_over" style="display: none">Game Over</span>
		<br/><br/>
		<script>
		//<!-- PLACE YOUR IMPLEMENTATION BELOW -->
			
			// create a div with id=container, then add styling and add it to the body.
			let container = document.createElement("div");
			container.setAttribute("id", "container");
			document.body.appendChild(container);
				
			
			// assign variable names game to Minesweeper object and add it to body
			// Look in class.js to see the implementation of Minesweeper()
			let game = new Minesweeper();

			const start_button = document.getElementById("start");
			start_button.onclick = (event) => game.init_board(event);
			
		//<!-- PLACE YOUR IMPLEMENTATION ABOVE -->
		</script>
	</body>
</html>
