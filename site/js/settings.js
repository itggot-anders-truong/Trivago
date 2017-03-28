function sidenav() {
	var icon1 = document.querySelector('.nav1');
	var icon2 = document.querySelector('.nav2');
	var content = document.querySelector('#content');
	if (content.classList.contains('sidenav_sit1')) {
		content.classList.remove('sidenav_sit1');
		content.classList.add('sidenav_sit2');
		icon1.classList.toggle('hide');
		icon2.classList.toggle('hide');
	} else {
	content.classList.toggle('sidenav_sit2');
	content.classList.toggle('sidenav_sit3');
	icon1.classList.toggle('hide');
	icon2.classList.toggle('hide');
	}
	var darken = document.querySelector('#dimblack');
	darken.classList.toggle('darken');
}

function close_sidenav() {
	var icon1 = document.querySelector('.nav1');
	var icon2 = document.querySelector('.nav2');
	var content = document.querySelector('#content');
	var darken = document.querySelector('#dimblack');
	if (darken.classList.contains('darken')) {
		content.classList.toggle('sidenav_sit2');
		content.classList.toggle('sidenav_sit3');
		darken.classList.toggle('darken');
		icon1.classList.toggle('hide');
		icon2.classList.toggle('hide');
	}
}
