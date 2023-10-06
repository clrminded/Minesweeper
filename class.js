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
	static cellX;
	static cellY;
	

	// PLACE YOUR PROPERTIES ABOVE

    constructor(rows = Minesweeper.SIZE, columns = Minesweeper.SIZE, probability_chance = 0.1)
    {
        // PLACE YOUR PROPERTIES BELOW

		this.cells = new Array(rows).fill(null).map(() => new Array(columns).fill(null));
		this.bombs = new Array(rows).fill(null).map(() => new Array(2).fill(null));
		this.rows = rows;
		this.columns = columns; 
		this.cellX = 0;
		this.cellY = 0;
		
		// PLACE YOUR PROPERTIES ABOVE
    }
    
    init_board()
    {
		// PLACE YOUR IMPLEMENTATION BELOW

		// After looking at this I think it would be best to create a 2D array
        // with the values of these buttons, because we will be able to call on a 
        // specific index to the value, this implementation just creates the buttons
        // in an iterative way, but there would be no way for use to hold the value...
        // in other words change this to a 2D array...
		
        for(let i = 0; i < Minesweeper.SIZE; i++) {
			for(let j = 0; j < Minesweeper.SIZE; j++) {
				this.cells[i][j] = Minesweeper.EMPTY;
			}
		}
        
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	flood_fill()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	lock()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
	
		

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	unlock()
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	_flag()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	_open()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	explore(x, y)
	{
		// PLACE YOUR IMPLEMENTATION BELOW
		
		// PLACE YOUR IMPLEMENTATION ABOVE
	}
	
	is_winning_choice()
	{
		// PLACE YOUR IMPLEMENTATION BELOW

		// PLACE YOUR IMPLEMENTATION ABOVE
	}
}

