function clickFirst(){	
	currentImage = document.querySelector("#bigImage>img");
	var image = document.getElementById("i1");
	var sourceImg = image.src;
	currentImage.src = sourceImg;
	console.log(currentImage);
}
document.getElementById("i1").addEventListener("click", clickFirst);

function clickSecond(){
	currentImage = document.querySelector("#bigImage>img");
	var image = document.getElementById("i2");
	var sourceImg = image.src;
	currentImage.src = sourceImg;
}
document.getElementById("i2").addEventListener("click", clickSecond);

function clickThird(){
	currentImage = document.querySelector("#bigImage>img");
	var image = document.getElementById("i3");
	var sourceImg = image.src;
	currentImage.src = sourceImg;
}
document.getElementById("i3").addEventListener("click", clickThird);

function clickFourth(){
	currentImage = document.querySelector("#bigImage>img");
	var image = document.getElementById("i4");
	var sourceImg = image.src;
	currentImage.src = sourceImg;
}
document.getElementById("i4").addEventListener("click", clickFourth);

function clickFifth(){
	currentImage = document.querySelector("#bigImage>img");
	var image = document.getElementById("i5");
	var sourceImg = image.src;
	currentImage.src = sourceImg;
}
document.getElementById("i5").addEventListener("click", clickFifth);
