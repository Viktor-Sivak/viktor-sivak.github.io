const bullet1 = document.getElementById ("map-point-1");
const bullet2 = document.getElementById ("map-point-2");
const bullet3 = document.getElementById ("map-point-3");
const bullet4 = document.getElementById ("map-point-4");
const bullet5 = document.getElementById ("map-point-5");
const bullet6 = document.getElementById ("map-point-6");
const bullet7 = document.getElementById ("map-point-7");
const bullet8 = document.getElementById ("map-point-8");
const mapHeading = document.querySelector (".right-map-text-wrapper");
const firstMapScreen = document.getElementById ("map-text-1");
const secondMapScreen = document.getElementById ("map-text-2");
const thirdMapScreen = document.getElementById ("map-text-3");
const fourthMapScreen = document.getElementById ("map-text-4");
const fifthMapScreen = document.getElementById ("map-text-5");
const sixthMapScreen = document.getElementById ("map-text-6");
const seventhMapScreen = document.getElementById ("map-text-7");
const eighthMapScreen = document.getElementById ("map-text-8");

bullet1.onmouseover = function (){
		firstMapScreen.style.display = "block";
		mapHeading.style.display = "none"
}

bullet1.onmouseout = function (){
		firstMapScreen.style.display = "none";
		mapHeading.style.display = "block"
}

bullet2.onmouseover = function (){
		secondMapScreen.style.display = "block";
		mapHeading.style.display = "none"
}

bullet2.onmouseout = function (){
		secondMapScreen.style.display = "none";
		mapHeading.style.display = "block"
}

bullet3.onmouseover = function (){
		thirdMapScreen.style.display = "block";
		mapHeading.style.display = "none"
}

bullet3.onmouseout = function (){
		thirdMapScreen.style.display = "none";
		mapHeading.style.display = "block"
}

bullet4.onmouseover = function (){
		fourthMapScreen.style.display = "block";
		mapHeading.style.display = "none"
}

bullet4.onmouseout = function (){
		fourthMapScreen.style.display = "none";
		mapHeading.style.display = "block"
}

bullet5.onmouseover = function (){
		fifthMapScreen.style.display = "block";
		mapHeading.style.display = "none"
}

bullet5.onmouseout = function (){
		fifthMapScreen.style.display = "none";
		mapHeading.style.display = "block"
}

bullet6.onmouseover = function (){
		sixthMapScreen.style.display = "block";
		mapHeading.style.display = "none"
}

bullet6.onmouseout = function (){
		sixthMapScreen.style.display = "none";
		mapHeading.style.display = "block";
}

bullet7.onmouseover = function (){
		seventhMapScreen.style.display = "block";
		mapHeading.style.display = "none"
}

bullet7.onmouseout = function (){
		seventhMapScreen.style.display = "none";
		mapHeading.style.display = "block"
}

bullet8.onmouseover = function (){
		eighthMapScreen.style.display = "block";
		mapHeading.style.display = "none"
}

bullet8.onmouseout = function (){
		eighthMapScreen.style.display = "none"; 
		mapHeading.style.display = "block"
}


const story1 = document.getElementById ("story-text-1");
const story2 = document.getElementById ("story-text-2");
const story3 = document.getElementById ("story-text-3");
const story4 = document.getElementById ("story-text-4");
const story5 = document.getElementById ("story-text-5");
const story6 = document.getElementById ("story-text-6");
const story7 = document.getElementById ("story-text-7");
const story8 = document.getElementById ("story-text-8");
const story9 = document.getElementById ("story-text-9");

const buttonStory1 = document.getElementById ("story-button-1");
const buttonStory2 = document.getElementById ("story-button-2");
const buttonStory3 = document.getElementById ("story-button-3");
const buttonStory4 = document.getElementById ("story-button-4");
const buttonStory5 = document.getElementById ("story-button-5");
const buttonStory6 = document.getElementById ("story-button-6");
const buttonStory7 = document.getElementById ("story-button-7");
const buttonStory8 = document.getElementById ("story-button-8");
const buttonStory9 = document.getElementById ("story-button-9");

story1.style.display = "block";
story2.style.display = "none";
story3.style.display = "none";
story4.style.display = "none";
story5.style.display = "none";
story6.style.display = "none";
story7.style.display = "none";
story8.style.display = "none";
story9.style.display = "none";


buttonStory1.addEventListener("click", function (){
	story1.style.display = "none";
	story2.style.display = "block";
})

buttonStory2.addEventListener("click", function (){
	story2.style.display = "none";
	story3.style.display = "block";
})

buttonStory3.addEventListener("click", function (){
	story3.style.display = "none";
	story4.style.display = "block";
})

buttonStory4.addEventListener("click", function (){
	story4.style.display = "none";
	story5.style.display = "block";
})

buttonStory5.addEventListener("click", function (){
	story5.style.display = "none";
	story6.style.display = "block";
})

buttonStory6.addEventListener("click", function (){
	story6.style.display = "none";
	story7.style.display = "block";
})

buttonStory7.addEventListener("click", function (){
	story7.style.display = "none";
	story8.style.display = "block";
})

buttonStory8.addEventListener("click", function (){
	story8.style.display = "none";
	story9.style.display = "block";
})

buttonStory9.addEventListener("click", function (){
	story9.style.display = "none";
	story1.style.display = "block";
})