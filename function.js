function create_line_break()
{
	// PLACE YOUR CODE IN HERE
	// append a line break (node) to the body of the document.
	const line_break = document.createElement('br');
	document.body.appendChild(line_break);
	return line_break;
}

function create_button()
{
	// PLACE YOUR CODE IN HERE
	// append a button (node) to the body of the document.
	const button = document.createElement('button');
    document.body.appendChild(button);

	button.style.background = "url('assets/empty.png')";
	button.style.backgroundSize = "100%";
	button.style.width = "25";
	button.style.height = "25";
    return button;
}

function avoid_image_loading_delay()
{
	// PLACE YOUR CODE IN HERE
	
	
}
