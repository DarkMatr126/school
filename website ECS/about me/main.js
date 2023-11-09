var loaded = false;
window.addEventListener('load', () => {
	offsets();

	addAnimScroll('popup',`0% {top:5in;} 100% {top:0in;}`,1000);

	setTimeout(() => {
		loaded = true;
	},100)
});


window.addEventListener('resize', () => {
	offsets();
	
	anims.forEach((e,i,o) => {
		o[i].bounds = e.element.getBoundingClientRect();
	})
});
function offsets() {
	var clientY = document.documentElement.clientHeight;
	var back1Y = document.querySelector('#back1').getBoundingClientRect().bottom;
	var smaller = [back1Y,clientY].sort((a,b) => {return a-b})[0];
	document.querySelector(':root').style.setProperty('--back1Offset',`${smaller}px`);
}