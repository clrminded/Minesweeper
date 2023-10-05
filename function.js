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
	// assign variable named container as a selector to the HTML element with the id equal to "container".
    let container = document.getElementById("container");

    // assign variable named input as to create an HTML input element.
    let button = document.createElement('button');
    // set the input type attribute with a value of button.
	  button.setAttribute('id', 'button');

    // style the button
    button.style.background="url('assets/0.png')";
    button.style.height="30";
    button.style.width="30";
    
    // add the input element to the container selector.
  	container.appendChild(button);
    
}

function avoid_image_loading_delay()
{
	// PLACE YOUR CODE IN HERE
  
    
	
}
