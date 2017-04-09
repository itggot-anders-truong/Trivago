function sidenav() {
	var icon1 = document.querySelector('.nav1');
	var icon2 = document.querySelector('.nav2');
	var content = document.querySelector('#content');
	var add = document.querySelector('.add');
	if (content.classList.contains('sidenav_sit1')) {
		content.classList.remove('sidenav_sit1');
		content.classList.add('sidenav_sit2');
		icon1.classList.toggle('hide');
		icon2.classList.toggle('hide');
		add.classList.add('slideright');
		add.classList.remove('slideleft');
	} else {
	content.classList.toggle('sidenav_sit2');
	content.classList.toggle('sidenav_sit3');
	icon1.classList.toggle('hide');
	icon2.classList.toggle('hide');
	add.classList.add('slideright');
	add.classList.remove('slideleft');
	}
	var darken = document.querySelector('#dimblack');
	darken.classList.toggle('darken');
}

function close_sidenav() {
	var icon1 = document.querySelector('.nav1');
	var icon2 = document.querySelector('.nav2');
	var content = document.querySelector('#content');
	var darken = document.querySelector('#dimblack');
	var add = document.querySelector('.add');
	if (darken.classList.contains('darken')) {
		content.classList.toggle('sidenav_sit2');
		content.classList.toggle('sidenav_sit3');
		darken.classList.toggle('darken');
		icon1.classList.toggle('hide');
		icon2.classList.toggle('hide');
		add.classList.remove('slideright');
		add.classList.add('slideleft')
	}
}

function weekday(element) {
	var weekdayscheduleList = document.querySelectorAll('.weekdayschedule');
    var pList = document.querySelectorAll('p');
	var monday = document.querySelector('.monday');
	var tuesday = document.querySelector('.tuesday');
	var wednesday = document.querySelector('.wednesday');
	var thursday = document.querySelector('.thursday');
	var friday = document.querySelector('.friday');
	var saturday = document.querySelector('.saturday');
	var sunday = document.querySelector('.sunday');
    pList.forEach(function(element) {
    element.classList.remove('blue')
    });
	weekdayscheduleList.forEach(function(element) {
    element.classList.add('hide')
    });
	element.classList.add('blue')
	if (element.classList.contains('mon')) {
		monday.classList.remove('hide');
	} else if (element.classList.contains('tue')) {
		tuesday.classList.remove('hide');
	} else if (element.classList.contains('wed')) {
		wednesday.classList.remove('hide');
	}
	else if (element.classList.contains('thur')) {
		thursday.classList.remove('hide');
	}
	else if (element.classList.contains('fri')) {
		friday.classList.remove('hide');
	}
	else if (element.classList.contains('sat')) {
		saturday.classList.remove('hide');
	}
	else if (element.classList.contains('sun')) {
		sunday.classList.remove('hide');
	}
}

function popup() {
	document.querySelector('.popupblack').classList.add('darken');
	document.querySelector('.popup').classList.remove('hide');
	document.querySelector('.popup').classList.add('visible');

}

function cancel() {
	document.querySelector('.popupblack').classList.remove('darken');
	document.querySelector('.popup').classList.add('hide');
	document.querySelector('.addpopup').classList.add('hide');
	document.querySelector('.popup').classList.remove('visible');
	document.querySelector('.addpopup').classList.remove('visible');
}

function no() {
	var darken = document.querySelector('.popupblack');
	var popup = document.querySelector('.popup');
	var block = document.querySelector(".lana")
	darken.classList.remove('darken');
	popup.classList.add('hide');
	block.classList.remove('attending');
	block.classList.remove('not_attended');
	block.classList.add('not_attended')
	popup.classList.remove('visible');
	document.querySelector('.addpopup').classList.remove('visible');
}

function yes() {
	var darken = document.querySelector('.popupblack');
	var popup = document.querySelector('.popup');
	var block = document.querySelector(".lana")
	darken.classList.remove('darken');
	popup.classList.add('hide');
	block.classList.remove('attending');
	block.classList.remove('not_attended');
	block.classList.add('attended');
	popup.classList.remove('visible');
	document.querySelector('.addpopup').classList.remove('visible');
}

function add() {
	document.querySelector('.popupblack').classList.add('darken');
	document.querySelector('.addpopup').classList.remove('hide');
	document.querySelector('.addpopup').classList.add('visible');
}

function errorUnavailable() {
	alert("This meeting is not available yet, wait for the master to start the meeting!");
}

function errorAvailable() {
	alert("This meeting has already been ended!");
}

