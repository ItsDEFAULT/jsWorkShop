let seconds = 0;
let mins = 0;
let hrs = 0;
let interval = null;
let status = false;

function stopWatch() {
	++seconds;
	if (seconds === 60) {
		seconds = 0;
		++mins;
		if (mins === 60) {
			mins = 0;
			++hrs;
		}
	}
	document.getElementById("display").innerHTML = `${hrs}:${mins}:${seconds}`;
}

function startStop() {
	if (!status) {
		interval = setInterval(stopWatch, 1);
		document.getElementById("startStop").innerHTML = "Stop";
		status = "started";
	} else {
		clearInterval(interval);
		document.getElementById("startStop").innerHTML = "Start";
		status = "stopped";
	}
}

function reset() {
	if (status) clearInterval(interval);
	seconds = 0;
	mins = 0;
	hrs = 0;
	document.getElementById("display").innerHTML = `${hrs}:${mins}:${seconds}`;
	document.getElementById("startStop").innerHTML = "Start";
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
