var s=document.getElementById("sand");
var b=document.getElementById("beach");
var f=document.getElementById("forest");
var c=document.getElementById("city");
var m=document.getElementById("mainimg");
var x=0;
var y=0;
var z=0;
var w=0;
var done=0;

function changeSand() {
	s.classList.add ("gray");
	b.classList.add ("gray");
	f.classList.add ("gray");
	c.classList.add ("gray");
	s.src= "images/sandunes2.png"
	b.src = "images/jumpingsandunes.png";
	f.src = "images/dunebuggy.png";
	c.src = "images/horses.png";
	m.src = "images/oregonsand.png";
	document.getElementById("sandbutton").classList.add("pressed");
	x=2;
	s.classList.add("backgroundsand");
	console.log(x);
	CheckIfDone()
}

function changeForest() {
	s.classList.add ("gray");
	b.classList.add ("gray");
	f.classList.add ("gray");
	c.classList.add ("gray");
	s.src= "images/waterfall.png"
	b.src = "images/oregonlake.png";
	f.src = "images/bigforest.png";
	c.src = "images/foreststreet.png";
	m.src = "images/oregonforest.png";
	document.getElementById("forestbutton").classList.add("pressed");
	y=2;
	console.log(y);
	CheckIfDone()
}

function changeBeach() {
	s.classList.add ("gray");
	b.classList.add ("gray");
	f.classList.add ("gray");
	c.classList.add ("gray");
	s.src= "images/lighthouse.jpg"
	b.src = "images/oregonbeachjump.png";
	f.src = "images/beach.png";
	c.src = "images/beachtrees.png";
	m.src = "images/oregonbeach.png";
	document.getElementById("beachbutton").classList.add("pressed");
	z=2;
	console.log(z);
	CheckIfDone();
}

function changeCity() {
	s.classList.add ("gray");
	b.classList.add ("gray");
	f.classList.add ("gray");
	c.classList.add ("gray");
	s.src= "images/portland2.jpg"
	b.src = "images/salem.jfif";
	f.src = "images/street.jpg";
	c.src = "images/portland.jpg";
	m.src = "images/oregoncity.png";
	document.getElementById("citybutton").classList.add("pressed");
	w=2;
	console.log(w);
	CheckIfDone();
}

function addColorS() {
	s.classList.remove("gray");
} 

function addColorB() {
	b.classList.remove("gray");
} 

function addColorF() {
	f.classList.remove("gray");
} 

function addColorC() {
	c.classList.remove("gray");
} 

function CheckIfDone () {
	if (x>1 && y>1 && z>1 && w>1) {
	m.src = "images/oregonall2.png";
	m.classList.add("oregonone");
	done=2;
}
	console.log("hello");
}

function CheckIfDone2 () {
	if (done>1) {
	window.open("newpage.html");
}
	console.log("hi!!!")
}





