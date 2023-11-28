let challengeCarouselWidth = 400;
let numCarousels = 7;

let cardNums = new Array(numCarousels); for (let i=0; i<numCarousels; ++i) cardNums[i] = 0;
let totalCards = [11, 7, 7, 12, 6, 6, 25];

document.getElementById("challenge-button-next-1").onclick = showNextCard1;
document.getElementById("challenge-button-previous-1").onclick = showPrevCard1;
document.getElementById("challenge-button-next-2").onclick = showNextCard2;
document.getElementById("challenge-button-previous-2").onclick = showPrevCard2;
document.getElementById("challenge-button-next-3").onclick = showNextCard3;
document.getElementById("challenge-button-previous-3").onclick = showPrevCard3;
document.getElementById("challenge-button-next-4").onclick = showNextCard4;
document.getElementById("challenge-button-previous-4").onclick = showPrevCard4;
document.getElementById("challenge-button-next-5").onclick = showNextCard5;
document.getElementById("challenge-button-previous-5").onclick = showPrevCard5;
document.getElementById("challenge-button-next-6").onclick = showNextCard6;
document.getElementById("challenge-button-previous-6").onclick = showPrevCard6;
document.getElementById("challenge-button-next-7").onclick = showNextCard7;
document.getElementById("challenge-button-previous-7").onclick = showPrevCard7;


function showNextCard1() {
    showNextCard(1);
}

function showPrevCard1() {
    showPrevCard(1);
}

function showNextCard2() {
    showNextCard(2);
}

function showPrevCard2() {
    showPrevCard(2);
}

function showNextCard3() {
    showNextCard(3);
}

function showPrevCard3() {
    showPrevCard(3);
}

function showNextCard4() {
    showNextCard(4);
}

function showPrevCard4() {
    showPrevCard(4);
}

function showNextCard5() {
    showNextCard(5);
}

function showPrevCard5() {
    showPrevCard(5);
}

function showNextCard6() {
    showNextCard(6);
}

function showPrevCard6() {
    showPrevCard(6);
}

function showNextCard7() {
    showNextCard(7);
}

function showPrevCard7() {
    showPrevCard(7);
}


function showNextCard(carouselNum) {
    let i = carouselNum - 1;
    let carouselName = "challenge-carousel-row-" + carouselNum;
    let imageRow = document.getElementById(carouselName)
    cardNums[i] = cardNums[i] + 1;
	carouselShift = challengeCarouselWidth * cardNums[i] * -1;
	imageRow.style.left = carouselShift + "px";
    checkControls(carouselNum, cardNums[i], totalCards[i]);
}

function showPrevCard(carouselNum) {
    let i = carouselNum - 1;
    let carouselName = "challenge-carousel-row-" + carouselNum;
    let imageRow = document.getElementById(carouselName)
	cardNums[i] = cardNums[i] - 1;
	carouselShift = challengeCarouselWidth * cardNums[i] * -1;
	imageRow.style.left = carouselShift + "px";
    checkControls(carouselNum, cardNums[i], totalCards[i]);
}

function checkControls(carouselNum, cardNum, totalCards) {
    let nextButton = document.getElementById("challenge-button-next-" + carouselNum);
    let prevButton = document.getElementById("challenge-button-previous-" + carouselNum);
	if (cardNum === 0) {
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
	}
	if (cardNum === totalCards - 1) {
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");
	}
} 