// const startGameModal = function () {
// 	const modal = document.querySelector(".modalStartGame");
// 	const overlay = document.querySelector(".overlay");
// 	const openModalButton = document.querySelector(".btn-open");
// 	const closeModalButton = document.querySelector(".btn-close");

// 	const openModal = function () {
// 		modal.classList.remove("hidden");
// 		overlay.classList.remove("hidden");
// 	};

// 	const closeModal = function () {
// 		modal.classList.add("hidden");
// 		overlay.classList.add("hidden");
// 	};

// 	closeModalButton.addEventListener("click", closeModal);
// 	overlay.addEventListener("click", closeModal);
// 	openModalButton.addEventListener("click", openModal);
// 	document.addEventListener("keydown", function (e) {
// 		if (e.key === "Escape" && !modalStartGame.classList.contains("hidden")) {
// 			closeModal();
// 		}
// 	});
// };

function guessGame() {
	/* TODO: REDESIGN PROMPT */
	// startGameModal();
	let maximum = parseInt(prompt("Enter a maximum number!"));

	while (!maximum) {
		maximum = parseInt(prompt("Enter a valid number"));
	}

	const randomNumber = Math.floor(Math.random() * maximum) + 1;
	console.log(randomNumber);

	let guessNumber = parseInt(prompt("try and guess"));

	let i = 0;

	while (guessNumber !== randomNumber) {
		if (guessNumber < randomNumber) {
			guessNumber = parseInt(prompt("To low, enter a new number"));
			i++;
		} else {
			guessNumber = parseInt(prompt("To high, enter a new number"));
			i++;
		}
	}
	alert(`You got it right, you tried ${i} times!`);
}
