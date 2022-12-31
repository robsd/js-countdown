target = '01/01/2100'; // Countdown To (DD/MM/YYYY)

days = document.getElementById('days');
hours = document.getElementById('hours');
minutes = document.getElementById('minutes');
seconds = document.getElementById('seconds');

setInterval(function() {
	now = new Date().getTime();
	targetSplit = target.split('/');
	targetParsed = new Date(targetSplit[2], targetSplit[1] - 1, targetSplit[0]);
	difference = targetParsed - now;
	if (difference > 0) {
		days.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
		hours.innerHTML = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes.innerHTML = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		seconds.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
	}
}, 1000);