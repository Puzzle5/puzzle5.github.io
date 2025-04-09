let slideIndex = 0;
let timeoutId;
let slideshowRunning = false;
let fullscreenMode = false;

const slides = document.getElementsByClassName("mySlides");
const slideListItems = document.querySelectorAll(".slide-list li");
const beginningButton = document.getElementById("beginning");
const backButton = document.getElementById("backwards");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
const forwardButton = document.getElementById("forward");
const endButton = document.getElementById("end");
const fullscreenButton = document.getElementById("fullscreen");
const slideshowContainer = document.querySelector(".slideshow-container");
const timerBar = document.querySelector(".timer-bar");
const body = document.querySelector("body");

function showSlides() {
	let i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}
	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}
	slides[slideIndex].style.display = "block";
	updateActiveListItem();
}

function updateActiveListItem() {
	slideListItems.forEach((item) => item.classList.remove("active"));
	slideListItems[slideIndex].classList.add("active");
}

function advanceSlide() {
	slideIndex++;
	showSlides();
	startTimer();
}

function previousSlide() {
	slideIndex--;
	showSlides();
	startTimer();
}

function goToSlide(n) {
	slideIndex = n;
	showSlides();
	startTimer();
}

function startTimer() {
	if (slideshowRunning) {
		clearTimeout(timeoutId);
		timerBar.classList.remove("animate");
		void timerBar.offsetWidth;
		timerBar.classList.add("animate");
		timeoutId = setTimeout(advanceSlide, 5000);
	}
}

function playSlideshow() {
	if (!slideshowRunning) {
		slideshowRunning = true;
		startTimer();
		startButton.querySelector("i").className = "fa fa-pause";
		stopButton.disabled = false;
	}
}

function stopSlideshow() {
	if (slideshowRunning) {
		slideshowRunning = false;
		clearTimeout(timeoutId);
		timerBar.classList.remove("animate");
		startButton.querySelector("i").className = "fa fa-play";
		stopButton.disabled = true;
	}
}

function toggleFullscreen() {
	if (!document.fullscreenElement) {
		if (slideshowContainer.requestFullscreen) {
			slideshowContainer.requestFullscreen().then(() => {
				fullscreenMode = true;
				fullscreenButton.querySelector("i").className = "fa fa-compress";
			}).catch(err => {
				console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
			});
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen().then(() => {
				fullscreenMode = false;
				fullscreenButton.querySelector("i").className = "fa fa-arrows-alt";
			});
		}
	}
}

beginningButton.addEventListener("click", () => {
	stopSlideshow();
	slideIndex = 0;
	showSlides();
});
backButton.addEventListener("click", () => {
	stopSlideshow();
	previousSlide();
});
stopButton.addEventListener("click", stopSlideshow);
startButton.addEventListener("click", () => {  // Corrected event listener
	if (slideshowRunning) {
		stopSlideshow();
	} else {
		playSlideshow();
	}
});
forwardButton.addEventListener("click", () => {
	stopSlideshow();
	advanceSlide();
});
endButton.addEventListener("click", () => {
	stopSlideshow();
	slideIndex = slides.length - 1;
	showSlides();
});
fullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener('fullscreenchange', () => {
	fullscreenMode = !!document.fullscreenElement;
	fullscreenButton.querySelector("i").className = fullscreenMode ? "fa fa-compress" : "fa fa-arrows-alt";
});

slideListItems.forEach((item, index) => {
	item.addEventListener("click", () => goToSlide(index));
});

showSlides();
playSlideshow();
stopSlideshow();
