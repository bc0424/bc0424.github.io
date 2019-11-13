function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(0,0, 200, 0.5);
  fill(255,255,255,0);
  noStroke();
  rect(windowWidth*0.05, windowHeight/1.15, 70,70);
  rect(windowWidth/8, windowHeight/3, (windowWidth *0.11),(windowHeight*0.05));
  rect(windowWidth/8, windowHeight/2.1, (windowWidth *0.11),(windowHeight*0.05));
  rect(windowWidth/8, windowHeight/1.62, (windowWidth *0.11),(windowHeight*0.05));
  rect(windowWidth*0.75, windowHeight/2.65, (windowWidth *0.11),(windowHeight*0.05));
  rect(windowWidth*0.75, windowHeight/1.92, (windowWidth *0.11),(windowHeight*0.05));
  
}

function windowResized() {
// Function to make sure the canvas adjusts with the window
  resizeCanvas(windowWidth, windowHeight);

}

function mouseClicked(){
	// function for what happens when its pressed

	// Function for screenshot
	if ((mouseX > (windowWidth*0.05)) && (mouseX < ((windowWidth*0.05) +50)) && (mouseY > (windowHeight/1.15)) && (mouseY < (windowHeight/1.15 +50))){
			save('myArt.png');
	}
	// Variable declaration for color and opacity
	let opacity =45;
	let colorpick = color(255,255,255,0);
	let colorpick1 = color(255,255,255,0);
	let colorpick2 = color(255, 255, 255,0);
	let colorpick3 = color(255,255,255,0);
	let colorpick4 = color(255,255,255,0);

	// For loop for creating the stroke
	for(let i =0;i< 350; i+=5){
		
		strokeWeight(8);
		
		// Variable relating to width
		let a = (windowWidth*0.335);
		let a2 = a - (windowWidth*0.05);
		let a3 = a + (windowWidth*0.05);
		// let a4 = a - (windowWidth*0.005);
		let b = (windowWidth * 0.385);
		let b2 = b - (windowWidth*0.022);
		let b3 = b + (windowWidth*0.052);
		let b4 = b + (windowWidth*0.052);
		// Variables relating to height
		let c = (windowHeight*0.28);
		let c2 = c + (windowHeight *0.2);
		let c3 = c + (windowHeight*0.35);
		let c4 = c + (windowHeight * 0.45);
		let d = (windowHeight*0.275);
		let d2 = d + (windowHeight*0.2);
		let d3 = d + (windowHeight*0.3);
		let d4 = d + (windowHeight*0.45);
		// Variables for creating the random range for x and y
		let x1= random(a, b);
		let y1 = random(c, d);
		let x2 = random((a2), (b2));
		let y2 = random((c2), (d2));
		let x3 = random((a3), (b3));
		let y3 = random((c3),(d3));
		let x4 = random((a), (b));
		let y4 = random((c4), (d4));

		// Actual colors and curves
		stroke(colorpick);
		bezier(x1 +(windowWidth*0.04) , y1, x2+(windowWidth*0.04),y2,x3+(windowWidth*0.04),y3,x4+(windowWidth*0.04),y4 );
		stroke(colorpick2);
		bezier(x1 +(windowWidth*0.065) , y1, x2+(windowWidth*0.065),y2,x3+(windowWidth*0.065),y3,x4+(windowWidth*0.065),y4 );
		stroke(colorpick3);
		bezier(x1 +(windowWidth*0.1) , y1, x2+(windowWidth*0.1),y2,x3+(windowWidth*0.1),y3,x4+(windowWidth*0.1),y4 );
		stroke(colorpick4);
		bezier(x1 +(windowWidth*0.14) , y1, x2+(windowWidth*0.14),y2,x3+(windowWidth*0.14),y3,x4+(windowWidth*0.14),y4 );
		stroke(colorpick1);
		bezier(x1 +(windowWidth*0.185) , y1, x2+(windowWidth*0.185),y2,x3+(windowWidth*0.185),y3,x4+(windowWidth*0.185),y4 );
		stroke(colorpick3);
		bezier(x1 +(windowWidth*0.225) , y1, x2+(windowWidth*0.225),y2,x3+(windowWidth*0.225),y3,x4+(windowWidth*0.225),y4 );
		// stroke(colorpick);
		// bezier(x1 +(windowWidth*0.265) , y1, x2+(windowWidth*0.265),y2,x3+(windowWidth*0.265),y3,x4+(windowWidth*0.265),y4 );
		
		// Button BlueFlower
		if ((mouseX > windowWidth/8) && (mouseX < (windowWidth/8 + windowWidth *0.11)) &&
			(mouseY > windowHeight/3) && (mouseY < (windowHeight/3 + windowHeight*0.05))){
		
		 colorpick  = color(0,143,183,opacity);
		 colorpick1 = color(1,202,244,opacity);
		 colorpick2 = color(0,66,202,opacity);
		 colorpick3 = color(255,233,62,opacity);
		 colorpick4 = color(19,100,91,opacity);
		
		}

		// Button Mountain
		if ((mouseX > windowWidth/8) && (mouseX < (windowWidth/8 + windowWidth *0.11)) &&
				 (mouseY > windowHeight/2.1) && (mouseY < (windowHeight/2.1 + windowHeight*0.05))){
		
		 colorpick  = color(53,117,145,opacity);
		 colorpick1 = color(162,175,191,opacity);
		 colorpick2 = color(70,52,76,opacity);
		 colorpick3 = color(215,8,78,opacity);
		 colorpick4 = color(146,115,121,opacity);
		
		}

		// Button Citrus
		if ((mouseX > windowWidth/8) && (mouseX < (windowWidth/8 + windowWidth *0.11)) &&
			(mouseY > windowHeight/1.62) && (mouseY < (windowHeight/1.62 + windowHeight*0.05))){
		 
		 colorpick  = color(133,7,81,opacity);
		 colorpick1 = color(213,7,11,opacity);
		 colorpick2 = color(126,140,3,opacity);
		 colorpick3 = color(255,148,0,opacity);
		 colorpick4 = color(255,216,0,opacity,opacity);
		 
		}


		//Button Strawberry 
		else if( (mouseX > windowWidth*0.75) && (mouseX < (windowWidth*0.75 + windowWidth *0.11)) &&
			(mouseY > windowHeight/2.65) && (mouseY < (windowHeight/2.65 + windowHeight*0.05))){
		
		 colorpick  = color(76,0,2,opacity);
		 colorpick1 = color(161,4,23,opacity);
		 colorpick2 = color(237,66,85 ,opacity);
		 colorpick3 = color(0,113,69,opacity);
		 colorpick4 = color(0,64,24,opacity);
		
		}

		// Button Lemon
		else if( (mouseX > windowWidth*0.75) && (mouseX < (windowWidth*0.75 + windowWidth *0.11)) &&
			(mouseY > windowHeight/1.92) && (mouseY < (windowHeight/1.92 + windowHeight*0.05))){
		
		 colorpick  = color(3,48,7,opacity);
		 colorpick1 = color(226,226,234,opacity);
		 colorpick2 = color(254,213,0 ,opacity);
		 colorpick3 = color(230,152,0,opacity);
		 colorpick4 = color(0,92,19,opacity);

		}

	}
}