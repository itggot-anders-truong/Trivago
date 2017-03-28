var userinput = null
var passinput = null


function popup() {
	var darken = document.querySelector('.popupblack')
	var popup = document.querySelector('.popup')
	darken.classList.add('darken');
	popup.classList.remove('hide');
}

function cancel() {
	var darken = document.querySelector('.popupblack');
	var popup = document.querySelector('.popup');
	darken.classList.remove('darken');
	popup.classList.add('hide');
}

function register() {
	var darken = document.querySelector('.popupblack');
	var popup = document.querySelector('.popup');
    var name = document.querySelector('.username_register').value;
    var password = document.querySelector('.password_register').value;
	darken.classList.remove('darken');
	popup.classList.add('hide');
    userinput = name.toLowerCase();
    passinput = password.toLowerCase();
}



function login() {
    var name = document.querySelector('.username').value;
    var password = document.querySelector('.password').value;
    var wrong = document.querySelector('.wrong')
    if (name.toLowerCase() == userinput && password.toLowerCase() == passinput) {
        window.location.replace("./meetings.html")
    } else {
    wrong.classList.remove('hide')
    }
}

function forgot() {
    document.querySelector(".username").value = userinput;
    document.querySelector(".password").value = passinput;
    document.querySelector(".password").type = "text";
}

function hide(element) {
    element.type = "password";
}


