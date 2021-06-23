// console.log("Hello World!");
// console.dir("Hello World!");

// let a = "Shreehari";
// console.log(typeof a);

// ("string");
// ("string");
// let name = "Shree";
// console.log(`Hello ${name}`);

// let a = 10;
// a = "10";

// let res = "ba" + Number.parseInt("s") + "a";
// console.log(res.toUpperCase());

// this is a comment

/* 
this is a multi line comment
*/

// let a = 10,
// 	b = 20;
// // a = a + b;
// a += b;
// console.log(a);

// if (0) {
// 	console.log("True");
// } else {
// 	console.log("False");
// }

// switch (10) {
// 	case 10:
// 		console.log("10");
// 	case 11:
// 		console.log("11");
// 	default:
// 		console.log("no matches");
// }

// for (let i = 0; i < 10; ++i) console.log("Hello World!");

// let a = 0;
// let b = 5;
// while (a != b) {
// 	console.log("Hello World!");
// 	a++;
// }

// let a = [1, 2, 3, 45, 4, 6, 7];

// for (let item of a) console.log(item);
// console.log(a);

// let a = 10;
// let b = "10";

// if (a === b) {
// 	console.log("a and b are equal");
// } else {
// 	console.log("a and b are not equal");
// }

// const a = [6, 5, 4, 3, 2, 1];
// Object.freeze(a);
// a[0] = 10;
// console.log(a);

// const obj = {
// 	name: "Shreehari",
// };
// Object.seal(obj);
// obj.name = "Kulkarni";
// console.log(obj);

// let a = [1, 2, 3, 4, 5];
// // let b = [6, 7, 8, 9];
// let b = [...a];
// b[0] = 10;
// console.log(a);
// console.log(b);

// const a = {
// 	fName: "Shree",
// 	lName: "Kulkarni",
// };

// let b = { ...a };
// console.log(a);
// console.log(b);

// function greet(name) {
// 	return `Hello ${name}!`;
// }

// let greet = function (name) {
// 	return `Hello ${name}!`;
// };

// let greet = (name) => `Hello ${name}!`;
// let add = (...a) => {
// 	let res = 0;
// 	a.map((i) => (res += i));
// 	return res;
// };

// console.log(add(10, 20, 30, 40, 50, 60));

// setTimeout(() => {
// 	console.log("a");
// }, 0);

// console.log("b");
// console.log("c");

// function a(b) {
// 	console.log("Downloading..");
// 	b();
// }

// a(() => console.log("Installing"));

function a() {
	let status = false;
	return new Promise((res, rej) => {
		if (status) res("Success");
		else rej("Failed");
	});
}

// a()
// 	.then((obj) => console.log(obj))
// 	.catch((obj) => console.log(obj));

async function b() {
	try {
		const res = await a();
		console.log(res);
	} catch (e) {
		console.log(e);
	}
}

b();
