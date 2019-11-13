function setup() {
  createCanvas(windowWidth, windowHeight);
	  }

function draw() {

  background(0,0, 200, 0.5);
  fill(255,255,255,0);
  // ellipse(windowWidth/2, windowHeight/2, 50, 50);
  // mouseClick();


  // Filler rectangles to prep for button
  noStroke();
  rect(windowWidth*0.05, windowHeight/1.15, 50,50);
  rect(windowWidth/8, windowHeight/2.8, (windowWidth *0.11),(windowHeight*0.05));
  rect(windowWidth/8, windowHeight/1.825, (windowWidth *0.11),(windowHeight*0.05));
  rect(windowWidth*0.75, windowHeight/2.8, (windowWidth *0.11),(windowHeight*0.05));
  rect(windowWidth*0.75, windowHeight/1.825, (windowWidth *0.11),(windowHeight*0.05));

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

	for(let i =0; i< 1000; i+=10 ){
		// Set variables in order to create ranges for amount of randomness
		noStroke();
		var opacity = 150;
		let width = random(windowWidth * 0.001, windowWidth *0.02);
		let xspot= random((windowWidth*0.39),(windowWidth*0.61));
		let yspot = random(windowHeight *(0.27), (windowHeight * (0.7)));
		var sunflower = [color(28,52,17,opacity), color(72,111,101,opacity), color(241,201,1,opacity), color(205,148,1,opacity), color(63,37,1,opacity)];
		var lavender = [color(204,171,214, opacity), color(118,75,146,opacity), color(96,137,183,opacity), color(0,140,153,opacity), color(0,78,78,opacity)];
		var tulip = [color(191,0,43,opacity), color(227,64,81,opacity), color(248, 157, 128,opacity), color(221,231,241,opacity), color(255,158,81,opacity)];
		var peony = [color(184,220,213,opacity), color(246,170,49,opacity), color(250, 206, 206,opacity), color(228,107,147,opacity), color(107,132,81,opacity)];
		let colorpick = (255,255,255,0);

		ellipse(xspot, yspot, width, width);

			// Button Lavender
			if ((mouseX > windowWidth/8) && (mouseX < (windowWidth/8 + windowWidth *0.11)) &&
			 (mouseY > windowHeight/2.8) && (mouseY < (windowHeight/2.8 + windowHeight*0.05))){
				let colorpick = lavender[Math.floor(Math.random()* lavender.length)];
				fill(colorpick);

			}

			// Button Sunflower
			else if ((mouseX > windowWidth/8) && (mouseX < (windowWidth/8 + windowWidth *0.11)) &&
				(mouseY > windowHeight/1.825) && (mouseY < (windowHeight/1.825 + windowHeight*0.05))){
				let colorpick = sunflower[Math.floor(Math.random()* sunflower.length)];
				fill(colorpick);

			}

			else if( (mouseX > windowWidth*0.75) && (mouseX < (windowWidth*0.75 + windowWidth *0.11)) &&
				(mouseY > windowHeight/2.8) && (mouseY < (windowHeight/2.8 + windowHeight*0.05))){
				let colorpick = tulip[Math.floor(Math.random()* tulip.length)];
				fill(colorpick);

			}

			else if( (mouseX > windowWidth*0.75) && (mouseX < (windowWidth*0.75 + windowWidth *0.11)) &&
				(mouseY > windowHeight/1.825) && (mouseY < (windowHeight/1.825 + windowHeight*0.05))){
				let colorpick = peony[Math.floor(Math.random()* peony.length)];
				fill(colorpick);

			}
		}
}