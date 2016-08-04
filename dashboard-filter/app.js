// Welcome to Framer

// This is just demo code. Feel free to delete it all.

document.body.style.cursor = "auto"
Framer.Defaults.Animation = {
	time: .3
};

rectangle = new Layer({
	x:0,
	y:0,
	width:128,
	height:37,
	borderRadius: 0,
	backgroundColor: "#ffffff",
	borderWidth: 1,
	borderRadius: 1,
	borderColor: "#D9D9D9"
})
rectangle.center()

rectangle.states.add({
	rounded: {
		borderRadius: 100,
		borderColor: "#509EE3"
	}
});

// Set the default animation options
rectangle.states.animationOptions = {
	time: .3
}

rectangle.on(Events.MouseOver, function(){
	document.body.style.cursor = "pointer"
});

text = new Layer({
	html: "Category",
	color: "#D9D9D9",
	backgroundColor: "none",
	style: {
		"font-size": "16px",
		"font-family": "Lato"
	},
	x: rectangle.x + 15,
	y: rectangle.y + 5,
	opacity: 1
});

text.states.add({
	fadeOut: {
		html: "<span style='font-size: 11px; text-align: center; letter-spacing: 1px'>&nbsp;CATEGORY</span>",
		width:75,
		height: 20,
		y: rectangle.y - 17,
		backgroundColor: "white",
	}
});
/****** FADE OUT VERSION ******
text.states.add({
	fadeOut: {
		opacity: 0,
		y: rectangle.y + 10
	}
});
*******************************/

text.states.animationOptions = {
	time: .1
};

blueText = new Layer({
	html: "Widget",
	color: "#509EE3",
	backgroundColor: "none",
	style: {
		"font-size": "16px",
		"font-family": "Lato"
	},
	x: rectangle.x + 15,
	y: rectangle.y + 10,
	opacity: 0
});

blueText.states.add({
	fadeIn: {
		opacity: 1,
		y: rectangle.y + 5
	}
});

blueText.states.animationOptions = {
	time: .1
};

xIcon = new Layer({
	width: 13,
	height: 11,
	opacity: 0,
	scale: .4,
	y: rectangle.y + 13,
	x: rectangle.x + 100,
	image: "./images/x.png"
});

xIcon.states.add({
	scaleUp: {
		opacity: 1,
		scale: 1
	}
});

xIcon.states.animationOptions = {
	time: .2
};

leftBar = new Layer({
	width: 3,
	height: 11,
	backgroundColor: "#959595",
	x: rectangle.x + 100.5,
	y: rectangle.y + 13,
	rotation: -45
});
leftBar.states.add({
	blueCross: {
		rotation: 45,
		backgroundColor: "#509EE3",
		height: 15,
		x: rectangle.x + 106.5,
		y: rectangle.y + 12
	}
});

rightBar = new Layer({
	width: 3,
	height: 11,
	backgroundColor: "#959595",
	x: rectangle.x + 107,
	y: rectangle.y + 13,
	rotation: 45
});
rightBar.states.add({
	blueCross: {
		rotation: -45,
		backgroundColor: "#509EE3",
		height: 15,
		y: rectangle.y + 12
	}
});

// On a click, go to the next state
rectangle.on(Events.Click, function() {
	rectangle.states.next();
	text.states.next();
	blueText.states.next();
	//xIcon.states.next();
	rightBar.states.next();
	leftBar.states.next();
});
