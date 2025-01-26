(function () {
	'use strict';

	//Не нужно переписывать весь этот код, не делайте так!
	//for Lampa.
	//window.lampa_settings.torrents_use = true;
	//window.lampa_settings.demo = false;
	//window.lampa_settings.read_only = false;


	const canvas = document.createElement('canvas');
    	canvas.width = 200;
    	canvas.height = 200;
    	document.body.appendChild(canvas);
    
    	const ctx = canvas.getContext('2d');
    	ctx.fillStyle = 'blue';
    	ctx.fillRect(0, 0, 200, 200);

})();
