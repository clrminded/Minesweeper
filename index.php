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
				$columns = 15;
				$probability_chance = 0.1;

				if (isset($_GET["rows"])) {
    				$rows = $_GET["rows"];
					
				} 
				if (isset($_GET["columns"])) {
					$columns = $_GET["columns"];
				}
				if (isset($_GET["probability_chance"])) {
					$probability_chance = $_GET["probability_chance"];
				}
			?>

			console.log('rows', <?php echo $rows ?>)
			console.log('columns', <?php echo $columns ?>)
			console.log('probablity_chance', <?php echo $probability_chance ?>)

			let game = new Minesweeper(<?php echo $rows; ?>, <?php echo $columns; ?>, <?php echo $probability_chance ?> );
			
		
		<!-- PLACE YOUR IMPLEMENTATION ABOVE -->
		</script>
	</body>
</html>
