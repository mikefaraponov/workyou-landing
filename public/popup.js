;(function ($) { "use strict";

	const login = $.querySelector('#login');
	const popup = $.querySelector('.b-popup');

	login.addEventListener('click', () => {
		popup.classList.toggle('b-popup--active');
	}, false);

	popup.addEventListener('click', ev => {

		if(ev.target == popup) {
			popup.classList.toggle('b-popup--active');
		}

	}, false)

})(document);

