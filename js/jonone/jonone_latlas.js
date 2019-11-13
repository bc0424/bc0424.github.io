function setup() {
  createCanvas(windowWidth, windowHeight);
	  }

function draw() {

  background(0,0, 200, 0.5);
  fill(255,255,255,0);
  noStroke();
  // ellipse(windowWidth/2, windowHeight/2, 50, 50);
  // mouseClick();


  // Filler rectangles to prep for button

  rect(windowWidth*0.05, windowHeight/1.15, 70,70);

  // rect(windowWidth/8, windowHeight/3, (windowWidth *0.11),(windowHeight*0.05));
  rect(windowWidth/6.75, windowHeight/2.85, (windowWidth *0.055),(windowWidth*0.055));
  rect(windowWidth/6.75, windowHeight/1.845, (windowWidth *0.055),(windowWidth*0.055));
  rect(windowWidth*0.775, windowHeight/2.85, (windowWidth *0.055),(windowWidth*0.055));
  rect(windowWidth*0.775, windowHeight/1.85, (windowWidth *0.055),(windowWidth*0.055));

}

function windowResized() {
// Function to make sure the canvas adjusts with the window
  resizeCanvas(windowWidth, windowHeight);

}

function mouseClicked(){
	// function for what happens when its pressed
	if ((mouseX > (windowWidth*0.05)) && (mouseX < ((windowWidth*0.05) +50)) && (mouseY > (windowHeight/1.15)) && (mouseY < (windowHeight/1.15 +50))){
			save('myArt.png');
	}
	// Clears out the canvas after each time its been drawn
	clear();

	// Variable relating to width
	
	let a = (windowWidth*0.335);
	let a2 = a + (windowWidth*0.06);
	let a3 = a + (windowWidth*0.13);
	// let a4 = a - (windowWidth*0.005);
	let b = (windowWidth * 0.6);
	let b2 = b - (windowWidth*0.07);
	let b3 = b - (windowWidth*0.015);
	let b4 = b + (windowWidth*0.052);
	// Variables relating to height
	let c = (windowHeight*0.25);
	let d = (windowHeight*0.26);
	let c2 = c + (windowHeight *0.5);
	let c3 = c + (windowHeight*0.5);
	let c4 = c + (windowHeight * 0.5);
	let d2 = d + (windowHeight*0.45);
	let d3 = d + (windowHeight*0.45);
	let d4 = d + (windowHeight*0.45);
	let x1= random(a, b);
	let y1 = random(c, d2);
	let x2 = random((a2), (b2));
	let y2 = random((c), (d2));
	let x3 = random((a3), (b3));
	let y3 = random((c),(d2));
	let x4 = random((a), (b));
	let y4 = random((c), (d2));
	let y5 = random((c), (d2));
	let thickness = 25;

	// Button White
	if ((mouseX > windowWidth/6.75) && (mouseX < (windowWidth/6.75 + windowWidth *0.055)) &&
		(mouseY > windowHeight/2.85) && (mouseY < (windowHeight/2.85 + windowWidth *0.055))){
		palette = (255,255,255);
	
	}

	// Button Black
	 if ((mouseX > windowWidth/6.75) && (mouseX < (windowWidth/6.75 + windowWidth *0.055)) &&
			 (mouseY > windowHeight/1.845) && (mouseY < (windowHeight/1.845 + windowWidth *0.055))){
	
	 	palette = (0,0,0);
	}

	// Button Thic
	if ((mouseX > windowWidth*0.775) && (mouseX < (windowWidth*0.775+ windowWidth *0.055)) &&
		(mouseY > windowHeight/2.85) && (mouseY < (windowHeight/2.85 + windowWidth *0.055))){
	 
		thickness = 30;
		}

	// Button Thin
	if( (mouseX > windowWidth*0.775) && (mouseX < (windowWidth*0.775 + windowWidth *0.055)) &&
		(mouseY > windowHeight/1.85) && (mouseY < (windowHeight/1.85 + windowWidth *0.055))){
	
		thickness = 15;
	}
	// bezier(x1 -i, y1, x2-i,y2,x3-i,y3,x4-i,y4 );
	stroke(palette);
	strokeWeight(thickness);
	strokeCap(SQUARE);
	// All Vertical Lines
	strokeWeight(stroke);
	line(a,c,a,d2);
	line(a2,c,a2,d2);
	line(a3,c,a3,d2);
	line(b2,c,b2,d2);
	line(b3,c,b3,d2);
	line(b4,c,b4,d2);
	// Randomized Horizontal Lines
	line(a,y1,a2,y1);
	line(a2, y2, a3,y2);
	line(a3,y3,b2,y3);
	line(b2, y4,b3,y4);
	line(b3,y5,b4,y5);

	// line(x1,y3,x2,y3);





}