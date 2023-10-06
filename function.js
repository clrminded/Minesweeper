function create_line_break()
{
	// PLACE YOUR CODE IN HERE
	// assign variable named container as a selector to the HTML element with the id equal to "container".
    let container = document.getElementById("container");
    // assign variable named lineBreak to create an HTML element equal to <br>.
    let lineBreak = document.createElement('br');
    // add the lineBreak element to the container selector.
  	container.appendChild(lineBreak);
    
}

function create_button()
{
	// PLACE YOUR CODE IN HERE
	let container = document.getElementById("container");
	
    // assign variable named input as to create an HTML input element.
    let button = document.createElement('button');
	button.setAttribute('className', 'button');

    // style the button
    button.style.background="url('assets/0.png')";
    button.style.height="24";
    button.style.width="24";
	button.style.backgroundSize = '100%';
    
	container.appendChild(button);
}

function avoid_image_loading_delay()
{
	// PLACE YOUR CODE IN HERE
	
	
}
