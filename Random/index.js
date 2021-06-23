const body = document.body;

const h1 = document.createElement("h1");
h1.innerHTML = "Color Code: #FFFFFF";

const btn = document.createElement("button");
btn.innerHTML = "Change Color";

const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomColor() {
	let hex = "#";
	for (let i = 0; i < 6; ++i)
		hex += letters[Math.floor(Math.random() * letters.length)];
	return hex;
}

btn.addEventListener("click", () => {
	const hex = getRandomColor();
	body.style.backgroundColor = hex;
	h1.innerHTML = `Color Code: ${hex}`;
});

body.appendChild(h1);
body.appendChild(btn);
