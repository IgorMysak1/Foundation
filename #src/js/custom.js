//popup
let btnPop = document.querySelector('.pop');
let btnPopUp = document.querySelector('.popupBlock');
let arrowPopUp = document.querySelector('.pop img');
arrowPopUp.addEventListener('click', function () {
	if (document.querySelector('.popupBlock.active')) {
		btnPopUp.classList.remove('active');
		arrowPopUp.style.transform = "rotate(0deg)"
	} else {
		btnPopUp.classList.add('active');
		arrowPopUp.style.transform = "rotate(180deg)"
	}
});
//check email
let emailInput = document.querySelector('.enter__email');
let getStarted = document.querySelector('.content-email__btn');
let noticeMistake = document.querySelector('.notice__mistake');
let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

getStarted.addEventListener('click' ,checkEmail);

function checkEmail(){
	if(emailInput.value.match(regEmail)){
		if(document.querySelector('.enter__email.active')){
			emailInput.classList.remove('active');
		}
	}else{
		emailInput.classList.add('active');
	}
}
