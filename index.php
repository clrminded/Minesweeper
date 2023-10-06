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
		<!-- PLACE YOUR IMPLEMENTATION BELOW -->
			
			// create a div with id=container, then add styling and add it to the body.
			let container = document.createElement("div");
			container.setAttribute("id", "container");
			document.body.appendChild(container);
				
				
			// assign variable names game to Minesweeper object and add it to body
			// Look in class.js to see the implementation of Minesweeper()
			<?php
				$rows = 15;
				$cols = 15;
				$randNum = rand(0,15);

				if (isset($_GET["rows"])) {
    				$rows = $_GET["rows"];
				} 
				if (isset($_GET["columns"])) {
					$cols = $_GET["columns"];
				}
				if (isset($_GET["probability_chance"])) {
					$randNum = $_GET["probability_chance"];
				}
			?>

			let game = new Minesweeper(<?php echo $rows; ?>, <?php echo $cols; ?>, <?php echo $randNum ?> );
			game.init_board();
			
			for(let i = 0; i < game.rows; i++) {
				for(let j = 0; j < game.columns; j++) {
					create_button();
				}
				create_line_break();
			}
		
		<!-- PLACE YOUR IMPLEMENTATION ABOVE -->
		</script>
	</body>
</html>
