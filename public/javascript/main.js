
//List of letiables
			const davidMainPage = document.getElementById('profile-pic');
			const hireME = document.getElementById('hero-button');
			const modal = document.getElementById('myModal');

//Hire Button hover and click styles
			function mouseOver(){
				hireME.style.paddingLeft = '100px';
				hireME.style.paddingRight = '100px';
				hireME.style.paddingTop = '25px';
				hireME.style.paddingBottom = '25px';
				hireME.style.marginTop = '25px';
				hireME.style.backgroundColor ='#3dfafe';
			};
			function mouseLeave(){
				hireME.style.paddingLeft = '80px';
				hireME.style.paddingRight = '80px';
				hireME.style.paddingTop = '15px';
				hireME.style.paddingBottom = '15px';
				hireME.style.marginTop = '35px';
				hireME.style.backgroundColor ='#0AE7EC';
				hireME.innerHTML = "HIRE ME!";
			}
			function hireMe(){
				modal.style.display ='block';
			};

//Main Page David Picture - Switch from Left to Right
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

//Toggle the 3 bar (Mobile device) menu
			function toggle(){
					toggleHome();
				}
					function toggleHome(){
						let menu = document.getElementById('list');
						let bar01 = document.getElementById('bar01');
						let bar02 = document.getElementById('bar02');
						let bar03 = document.getElementById('bar03');
						let hero = document.getElementById("hero");
						if (menu.className == "navMenu__list--hide navMenu__list") {
									menu.className = "navMenu__list";
									bar02.className = "navMenu__middleBar--tranform  navMenu__icon--bar";
									bar01.className = "navMenu__topBar--tranform  navMenu__icon--bar";
									bar03.className = "navMenu__bottomBar--tranform  navMenu__icon--bar"
									hero.style.top = "-190px";
									hero2.style.marginTop = "-91.5vh";
								} else {
					        menu.className = "navMenu__list--hide navMenu__list";
									bar02.className = "navMenu__middleBar--origin navMenu__icon--bar";
									bar01.className = "navMenu__topBar--origin  navMenu__icon--bar";
									bar03.className = "navMenu__bottomBar--origin navMenu__icon--bar"
									hero.style.top = "0";
									hero2.style.marginTop = "-65vh";
					    	}
							}
				function toggleContacts(){
					let menu = document.getElementById('list');
					let hero1 = document.getElementById("hero-contact");
					if (menu.className == "navMenu__list--hide navMenu__list"){
								hero1.style.top = "-190px";
						} else{
								hero1.style.top = "0";
						}
					}
						
//Modal 'X' Button or Close button.
		let span = document.getElementById('modalX');
			span.onclick = ()=> {
			modal.style.display = 'none'
			}

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
