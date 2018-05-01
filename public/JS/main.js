window.onload = function(){ 

alert('main1.js updated')


var pic01 = document.getElementById('pic01');
var pic02 = document.getElementById('pic02');
var pic03 = document.getElementById('pic03');
var mainBtn = document.getElementById('hero-button');
var modal = document.getElementById('myModal');

function mouseOver(){
	mainBtn.style.paddingLeft = '100px';
	mainBtn.style.paddingRight = '100px';
	mainBtn.style.paddingTop = '25px';
	mainBtn.style.paddingBottom = '25px';
	mainBtn.style.marginTop = '25px';
	mainBtn.style.backgroundColor ='#3dfafe';
};

function mouseLeave(){
	mainBtn.style.paddingLeft = '80px';
	mainBtn.style.paddingRight = '80px';
	mainBtn.style.paddingTop = '15px';
	mainBtn.style.paddingBottom = '15px';
	mainBtn.style.marginTop = '35px';
	mainBtn.style.backgroundColor ='#0AE7EC';
	mainBtn.innerHTML = "HIRE ME!";
}

function hireMe(){
	modal.style.display ='block';
};

var profPic = document.getElementById('profile-pic');
function lookRight(){
	profPic.src="https://i.imgur.com/iITIgcv.jpg";
}

function lookLeft(){
	profPic.src="https://i.imgur.com/pHmcXEg.jpg";
}

function tracker(e){
	var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    if (x<320){
    	lookLeft();
    }
    else {
    	lookRight();
    }
}


};