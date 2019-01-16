const davidMainPage = document.getElementById('profile-pic');
const hireME = document.getElementById('hero-button');
const modal = document.getElementById('myModal');
const menu = document.getElementById('list');

window.onscroll = function () {
	if (this.pageYOffset >= 180) {
        menu.classList.remove('navbar__list');
        menu.classList.add('navbar__list--onScroll');
    } else {
        menu.classList.add('navbar__list');
        menu.classList.remove('navbar__list--onScroll');
	}
};

function hireMe(){
	modal.style.display ='block';
};

function lookRight(){
	davidMainPage.src="https://i.imgur.com/iITIgcv.jpg";
}
function lookLeft(){
	davidMainPage.src="https://i.imgur.com/pHmcXEg.jpg";
}
function tracker(e){
		let x = e.clientX;
		let y = e.clientY;
		let coor = "Coordinates: (" + x + "," + y + ")";
		if (x<320){
			lookLeft();
		}	else {
			lookRight();
		}
}

function toggleHome(){

	let bar01 = document.getElementById('bar01');
	let bar02 = document.getElementById('bar02');
	let bar03 = document.getElementById('bar03');
	let hero = document.getElementById("hero");

	if (menu.className == "navbar__list--hide navbar__list") {
		menu.classList = "navbar__list";
		bar02.className = "navbar__icon--bar navbar__icon--bar__middleBar";
		bar01.className = "navbar__icon--bar navbar__icon--bar__topBar";
		bar03.className = "navbar__icon--bar navbar__icon--bar__bottomBar"
	} else {
		menu.className = "navbar__list--hide navbar__list";
		bar02.className = "navbar__icon--bar navbar__icon--bar__middleBar--transform";
		bar01.className = "navbar__icon--bar navbar__icon--bar__topBar--transform";
		bar03.className = "navbar__icon--bar navbar__icon--bar__bottomBar--transform"
	}
}



		// let span = document.getElementById('modalX');
		// 	span.onclick = ()=> {
		// 	modal.style.display = 'none'
		// 	}

/*     NOT NEED IN THIS VERSION. required in V2.0.0
//Portfolio Page animation.
		let lotto = document.getElementById('lotto');
		let lottoOv = document.getElementById('portLotto');
		let random = document.getElementById('random');
		let randomOv = document.getElementById('portRandom');
		let ET = document.getElementById('ET');
		let ETOv = document.getElementById('portET');


				function detailsOn(x){
					if(x == lotto){
						lottoOv.style.display= 'table';
						}	else if(x == random){
						randomOv.style.display= 'table';
						}	else if(x == ET){
						ETOv.style.display= 'table';
						}
				}
				function detailsOff(x){
					if(x == lotto){
						lottoOv.style.display= 'none';
						}	else if(x == random){
						randomOv.style.display= 'none';
						}	else if(x == ET){
						ETOv.style.display= 'none';
						}
				}
*/
