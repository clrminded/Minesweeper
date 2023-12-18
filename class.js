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
	

	// PLACE YOUR PROPERTIES ABOVE

    constructor(rows = Minesweeper.SIZE, columns = Minesweeper.SIZE, probability_chance = 0.1)
    {
        // PLACE YOUR PROPERTIES BELOW

		// constructor for new minesweeper
		this.bombs = 0;
		this.cells = [];
		this.rows = rows;
		this.columns = columns;

		// create minefield
		const minefield = [];
		for (let i = 0; i < rows; ++i) {
			const row_content = [];
			for (let j = 0; j < columns; ++j) {
				if (Math.random() < probability_chance) {
					row_content.push('Mine');
				} else {
					row_content.push('Empty');
				}
			}

			minefield.push(row_content);
		}

		// create buttons and place mines
		for (let i = 0; i < this.rows; ++i) {
			const row_content = [];
			for (let j = 0; j < this.columns; ++j) {
				const button = create_button();
				button.row = i;
				button.column = j;
				button.onclick = (event) => this._open(event);
				button.oncontextmenu = (event) => this._flag(event);
				row_content.push(button);
				if (minefield[i][j] == "Mine") {
					button.content = "bomb";
					++this.bombs;
				} else {
					button.content = "Empty";
				}
			}

			this.cells.push(row_content);
			create_line_break();
		}

		this.flood_fill();
		this.lock();

		// PLACE YOUR PROPERTIES ABOVE
    }
    
	// The method sets the attributes for each cell to default state (close and no flag)
    init_board()
    {
		// PLACE YOUR IMPLEMENTATION BELOW

		// sets the attributes for each cell to default state (close and no flag)
		this.unlock();

		const start_button = document.getElementById("start");
		start_button.innerText = "Reset";

		const message = document.getElementById("game_over");
		message.style.display = "none";

		for (let i = 0; i < this.rows; ++i) {
			for (let j =0; j < this.columns; ++j) {
				this.cells[i][j].style.background = `url('assets/empty.png')`;
				this.cells[i][j].style.backgroundSize = "100%";
				this.cells[i][j].style.width = "25";
				this.cells[i][j].style.height = "25";
			}
		}
        
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method fills in the value for each cell by counting the bombs around
	flood_fill()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		// fills in the value for each cell by counting the bombs around
		for (let i = 0; i < this.rows; ++i) {
			for (let j =0; j < this.columns; ++j) {
				let minecount = 0;
				if (this.cells[i][j].content == "bomb") {
					continue;
				}

				for (let k = i - 1; k <= i +1; ++k) {
					if (k < 0 || this.rows <= k) {
						continue;
					}
					
					for (let l = j - 1; l <= j + 1; ++l) {
						if (l < 0 || this.columns <= l || this.cells[k][l].content != "bomb") {
							continue;
						}

						++minecount;
					}
				}

				this.cells[i][j].content = minecount;
			}
		}

		
		
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method locks all cells (HTML components on the web page)
	lock()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
	
		// locks all cells (HTML components on the web page)
		for (let i = 0; i < this.rows; ++i) {
			for (let j =0; j < this.columns; ++j) {
				this.cells[i][j].disabled = true;
			}
		}
		

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method unlocks all cells (HTML components on the web page)
	unlock()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		// unlocks all cells (HTML components on the web page)
		for (let i = 0; i < this.rows; ++i) {
			for (let j =0; j < this.columns; ++j) {
				this.cells[i][j].disabled = false;
			}
		}
		
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The event listener method puts the flag on a cell 
	_flag()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// event listener method puts the flag on a cell
		event.preventDefault();
		const button = event.target;

		if(button.flagged) {
			button.flagged = false;
			button.style.background = `url('assets/empty.png')`;
			button.style.backgroundSize = "100%";
			button.style.width = "25";
			button.style.height = "25";
		} else if(!button.disabled) {
			button.style.background = `url('assets/flag.png')`;
			button.style.backgroundSize = "100%";
			button.style.width = "25";
			button.style.height = "25";
			button.flagged = true;
		}

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The event listener method opens the cell 
	_open()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// event listener method opens the cell
		const button = event.target;
		this.explore(button.row, button.column);

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method recursively explore the cell at the coordinates x and y 
	explore(row, column)
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		// recursively explore the cell at the coordinates x and y
		if (row < 0 || this.rows <= row || 
			column < 0 || this.columns <= column || 
			this.cells[row][column].disabled) {
			return;
		}

		this.cells[row][column].disabled = true;

		// recursing to find neigboring 0
		if (this.cells[row][column].content == '0') {
			// up
			this.explore(row - 1, column);
			// down
			this.explore(row + 1, column);
			// left
			this.explore(row, column - 1);
			// right
			this.explore(row, column + 1);
		} 

		// reveal content of button
		const button = this.cells[row][column];
		button.style.background = `url('assets/${button.content}.png')`;
		button.style.backgroundSize = "100%";
		button.style.width = "25";
		button.style.height = "25";

		// "You lost" message
		if (button.content == "bomb") {
			const you_lost = document.getElementById("game_over");
			you_lost.style.display = "inline";
			you_lost.style.color = "red";
			you_lost.innerText = "You lost";
			this.lock();
		}

		// "You won" message
		if (this.is_winning_choice()) {
			const you_lost = document.getElementById("game_over");
			you_lost.style.display = "inline";
			you_lost.style.color = "red";
			you_lost.innerText = "You won";
			this.lock();
		}

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method returns true if all non-bomb cells opened otherwise false
	is_winning_choice()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// returns true if all non-bomb cells opened otherwise false
		let open_cells = 0;
		for (let i = 0; i < this.rows; ++i) {
			for (let j = 0; j < this.columns; ++j) {
				if (this.cells[i][j].disabled) {
					++open_cells;
				}
			}
		}

		if ((this.rows * this.columns) - open_cells == this.bombs) {
			return true;
		} else {
			return false;
		}

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
}

