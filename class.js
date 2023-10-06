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
	

	// PLACE YOUR PROPERTIES ABOVE

    constructor(rows = Minesweeper.SIZE, columns = Minesweeper.SIZE, probability_chance = 0.1)
    {
        // PLACE YOUR PROPERTIES BELOW

		this.rows = rows;
		this.columns = columns; 
		this.probability_chance = probability_chance;
		this.cells = new Array(rows).fill(null).map(() => new Array(columns).fill(null));
		this.bombs = new Array(probability_chance).fill(null).map(() => new Array(2).fill(null)); // creates 15 bombs
		
		// PLACE YOUR PROPERTIES ABOVE
    }
    
	// The method sets the attributes for each cell to default state (close and no flag)
    init_board()
    {
		// PLACE YOUR IMPLEMENTATION BELOW

		// set all indexes to empty
        for(let i = 0; i < Minesweeper.SIZE; i++) {
			for(let j = 0; j < Minesweeper.SIZE; j++) {
				this.cells[i][j] = Minesweeper.EMPTY;
			}
		}

		// generate random indexes to place bombs
		for(let i = 0; i < this.probability_chance; i++) {
			for(let j = 0; j < this.bombs[i].length; j++) {
				let generateNum = Math.floor(Math.random() * this.rows);
				this.bombs[i][j] = generateNum;
			}
		}

		// place bombs at coordinates
		for(let i = 0; i < this.bombs.length; i++) {
			let x = this.bombs[i][0];
			let y = this.bombs[i][1];
			this.cells[x][y] = Minesweeper.BOMB;
		}
        
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
	
		

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method unlocks all cells (HTML components on the web page)
	unlock()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The event listener method puts the flag on a cell 
	_flag()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The event listener method opens the cell 
	_open()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method recursively explore the cell at the coordinates x and y 
	explore(x, y)
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	// The method returns true if all non-bomb cells opened otherwise false
	is_winning_choice()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
}

