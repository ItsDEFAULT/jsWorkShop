const body = document.body;
const h1 = document.createElement("h1");
h1.innerHTML = "0";
let value = 0;

const plus = document.createElement("button");
plus.innerHTML = "Increment";
const minus = document.createElement("button");
minus.innerHTML = "Decrement";

plus.addEventListener("click", () => {
	++value;
	h1.innerHTML = value;
});
minus.addEventListener("click", () => {
	--value;
	h1.innerHTML = value;
});

body.appendChild(h1);
body.appendChild(plus);
body.appendChild(minus);
