class Minesweeper
{
	static get SIZE()  { return 15; }
	static get BOMB()  { return "B"; }
	static get EMPTY() { return "E"; }
	
	// PLACE YOUR PROPERTIES BELOW

	static bombs;
    static cells;
    static rows;
    static columns;
	static probability_chance;
	static selectedCell;
	
	
	// PLACE YOUR PROPERTIES ABOVE

    constructor(rows = Minesweeper.SIZE, columns = Minesweeper.SIZE, probability_chance = 0.1)
    {
        // PLACE YOUR PROPERTIES BELOW
		
		this.rows = rows;
		this.columns = columns;
		this.bombs = Math.floor(probability_chance * (rows * columns)); 
		// 2d array to hold the game board
		this.cells = new Array(rows).fill(null).map(() => new Array(columns).fill(null));

		// create all the buttons
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.columns; j++) {
				const button = create_button();
				button.id = `grid-button-row-${i}-column-${j}`;
			}
			create_line_break();
		}

		// set all indexes to empty
        for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.columns; j++) {
				this.cells[i][j] = Minesweeper.EMPTY;
			}
		}

		// 2d array to hold the value of the bombs placed in random coordinates
		let bombCoordinates = Array(this.bombs).fill(null).map(() => Array(2).fill(null)); 
		
		// place bombs at coordinates
		for(let i = 0; i < bombCoordinates.length; i++) {
			bombCoordinates[i][0] = Math.floor(Math.random() * this.rows);
			bombCoordinates[i][1] = Math.floor(Math.random() * this.columns);
			let x = bombCoordinates[i][0];
			let y = bombCoordinates[i][1];
			this.cells[x][y] = Minesweeper.BOMB;
		}

		this.init_board();
		// PLACE YOUR PROPERTIES ABOVE
    }
    
	// The method sets the attributes for each cell to default state (close and no flag)
    init_board()
    {
		// PLACE YOUR IMPLEMENTATION BELOW
		
		const startButton = document.getElementById("start");
		this.lock();
		startButton.onclick = () => this.unlock();

		
		// adds the open method to each button
		document.querySelectorAll(".grid-button").forEach(button => 
			button.addEventListener("click", () => {
				this.selectedCell = button;
				this._open();
			})
		);

		// add the flag method
		document.querySelectorAll(".grid-button").forEach(button => 
			button.addEventListener("oncontextmenu", () => {
				this.selectedCell = button;
				this._flag();
			})
		);
		
		
        
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method fills in the value for each cell by counting the bombs around
	flood_fill()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		

		
		
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method locks all cells (HTML components on the web page)
	lock()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		document.querySelectorAll(".grid-button").forEach(button => button.disabled = true);
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method unlocks all cells (HTML components on the web page)
	unlock()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		document.querySelectorAll(".grid-button").forEach(button => button.disabled = false);
		const startButton = document.getElementById("start");
		startButton.textContent = "Reset"
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The event listener method puts the flag on a cell 
	_flag()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		console.log(this.selectedCell) 
		const cell = this.selectedCell.id;
		const regex = /\d+/g; //matches numbers
		const matches = cell.match(regex);  // creates array from matches
		const x = matches[0];
		const y = matches[1];
		console.log('placed a flag!');
		console.log("x:", x);
		console.log("y:", y);
		

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The event listener method opens the cell 
	_open()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		console.log(this.selectedCell) 
		// each cell has an id with a row number and col number
		const cell = this.selectedCell.id;
		const regex = /\d+/g; //matches numbers
		const matches = cell.match(regex);  // creates array from matches
		const x = matches[0];
		const y = matches[1];
		console.log("x:", x);
		console.log("y:", y);
		if(this.cells[x][y] === "B") {
			console.log("You've hit a bomb!");
			this.selectedCell.style.background = "url('assets/bomb.png')";
			this.selectedCell.style.backgroundSize = '100%';
			this.lock();
			this.is_winning_choice();
		} else {
			let searchX = parseInt(x);
			let searchY = parseInt(y);
			this.explore(searchX, searchY);
			console.log("Empty cell");
		}
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method recursively explore the cell at the coordinates x and y 
	explore(x, y)
	{
		
		// PLACE YOUR IMPLEMENTATION BELOW
		let cell = document.getElementById(`grid-button-row-${x}-column-${y}`);
		
		if(x < 0 || x > this.rows - 1 || y < 0 || y > this.columns - 1) {
			return;
		} else if(this.cells[x][y] === "E") {
				cell.style.background = "url('assets/0.png')";
				cell.style.backgroundSize = "100%";
				this.explore(x - 1, y);
				this.explore(x , y + 1)
				this.explore(x - 1, y);
				this.explore(x, y - 1);
				this.explore(x+1, y+1);
				this.explore(x-1, y-1);
		} else {
			return;
		}
	
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method returns true if all non-bomb cells opened otherwise false
	is_winning_choice()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		

		let message = document.getElementById('game_over');

		message.textContent = "You Lost!!!";
		message.style.color = "red";
		message.style.display = "inline-block";
		const reset = document.getElementById('start');
		reset.onclick = () => {
			reset.textContent = "Start";
			message.style.display = "none";	
			document.querySelectorAll(".grid-button").forEach(button => {
				button.style.background = "url('assets/empty.png')";
				button.style.backgroundSize = '100%';
			});
			this.init_board();			
		}

	
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
}

