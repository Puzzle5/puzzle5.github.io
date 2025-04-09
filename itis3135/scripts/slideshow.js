let slideIndex = 0;
let timeoutId;
let isPlaying = false;

const slides = document.querySelectorAll(".mySlides");
const slideListItems = document.querySelectorAll(".slide-list li");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const forwardButton = document.getElementById("forward");
const backButton = document.getElementById("backwards");
const beginningButton = document.getElementById("beginning");
const endButton = document.getElementById("end");
const fullscreenButton = document.getElementById("fullscreen");
const slideshowContainer = document.querySelector(".slideshow-container");

function showSlides(n) {
	let i;
	if (n > slides.length - 1) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = slides.length - 1;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		slideListItems[i].classList.remove("active");
	}
	slides[slideIndex].style.display = "block";
	slideListItems[slideIndex].classList.add("active");
}

function plusSlides(n) {
	clearTimeout(timeoutId);
	showSlides((slideIndex += n));
	if (isPlaying) {
		autoPlay();
	}
}

function currentSlide(n) {
	clearTimeout(timeoutId);
	slideIndex = n;
	showSlides(slideIndex);
	if (isPlaying) {
		autoPlay();
	}
}

function autoPlay() {
	timeoutId = setTimeout(() => {
		plusSlides(1);
	}, 5000); // Changed from 3000 to 5000
}

function startSlideShow() {
	if (!isPlaying) {
		isPlaying = true;
		startButton.textContent = "Pause";
		autoPlay();
	} else {
		isPlaying = false;
		startButton.textContent = "Start";
		clearTimeout(timeoutId);
	}
}

function stopSlideShow() {
	isPlaying = false;
	startButton.textContent = "Start";
	clearTimeout(timeoutId);
	slideIndex = 0;
	showSlides(slideIndex);
}

function goToBeginning() {
	clearTimeout(timeoutId);
	slideIndex = 0;
	showSlides(slideIndex);
	if (isPlaying) {
		autoPlay();
	}
}

function goToEnd() {
	clearTimeout(timeoutId);
	slideIndex = slides.length - 1;
	showSlides(slideIndex);
	if (isPlaying) {
		autoPlay();
	}
}

function toggleFullScreen() {
	if (slideshowContainer.requestFullscreen) {
		slideshowContainer.requestFullscreen();
	} else if (slideshowContainer.mozRequestFullScreen) {
		slideshowContainer.mozRequestFullScreen();
	} else if (slideshowContainer.webkitRequestFullscreen) {
		slideshowContainer.webkitRequestFullscreen();
	} else if (slideshowContainer.msRequestFullscreen) {
		slideshowContainer.msRequestFullscreen();
	}
}

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft") {
		plusSlides(-1);
	} else if (event.key === "ArrowRight") {
		plusSlides(1);
	} else if (event.key === "Escape") {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
});

slides.forEach((slide, index) => {
	slide.addEventListener("click", () => {
		currentSlide(index);
	});
});

slideListItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		currentSlide(index);
	});
});

startButton.addEventListener("click", startSlideShow);
stopButton.addEventListener("click", stopSlideShow);
forwardButton.addEventListener("click", () => plusSlides(1));
backButton.addEventListener("click", () => plusSlides(-1));
beginningButton.addEventListener("click", goToBeginning);
endButton.addEventListener("click", goToEnd);
fullscreenButton.addEventListener("click", toggleFullScreen);

showSlides(slideIndex);
