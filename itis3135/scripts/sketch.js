function setup() {
	// Create a canvas that's 400 pixels wide and 400 pixels high
	let canvas = createCanvas(400, 400);
	canvas.parent('p5-container'); // Make sure the canvas is inside the div
	background(220); // Set the background color to light gray
}

function draw() {
	// If the mouse is pressed
	if (mouseIsPressed) {
		// Set the fill color to black
		fill(0);
		// Draw an ellipse at the mouse's position
		// The ellipse will be 20 pixels wide and 20 pixels high
		ellipse(mouseX, mouseY, 20, 20);
	}
}
