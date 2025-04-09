// JavaScript for the Slideshow
let slideIndex = 0;
let slides = $(".mySlides");
let listItems = $(".slide-list li");
let intervalId; // To store the interval ID for auto-play

function showSlide(n) {
	slides.hide();
	listItems.removeClass("active");
	if (n < 0) {
		slideIndex = slides.length - 1;
	} else if (n >= slides.length) {
		slideIndex = 0;
	}
	slides.eq(slideIndex).show();
	listItems.eq(slideIndex).addClass("active");
}

function currentSlide(n) {
	showSlide(slideIndex = n);
}

// Initial display
showSlide(slideIndex);

// Event listener for the list items
listItems.on("click", function() {
	let slideNumber = $(this).data("slide");
	currentSlide(slideNumber);
	stopAutoPlay(); // Stop auto-play when user clicks a list item
});

// Function for automatic slideshow
function autoPlay() {
	intervalId = setInterval(() => {
		slideIndex++;
		showSlide(slideIndex);
	}, 5000);
}

// Function to stop automatic slideshow
function stopAutoPlay() {
	clearInterval(intervalId);
}

// Event listener for the start button
$("#start").on("click", function() {
	autoPlay(); // Start auto-play
});

// Event listener for the stop button
$("#stop").on("click", function() {
	stopAutoPlay(); // Stop auto-play
});

// Event listener for the forward button
$("#forward").on("click", function() {
	slideIndex++;
	showSlide(slideIndex);
	stopAutoPlay();
});

// Event listener for the back button
$("#backwards").on("click", function() {
	slideIndex--;
	showSlide(slideIndex);
	stopAutoPlay();
});

// Event listener for the beginning button
$("#beginning").on("click", function() {
	showSlide(slideIndex = 0);
	stopAutoPlay();
});

// Event listener for the end button
$("#end").on("click", function() {
	showSlide(slideIndex = slides.length - 1);
	stopAutoPlay();
});

// Event listener for fullscreen
$("#fullscreen").on("click", function() {
	let container = $(".slideshow-container")[0];
	if (container.requestFullscreen) {
		container.requestFullscreen();
	} else if (container.mozRequestFullScreen) { /* Firefox */
		container.mozRequestFullScreen();
	} else if (container.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		container.webkitRequestFullscreen();
	} else if (container.msRequestFullscreen) { /* IE/Edge */
		container.msRequestFullscreen();
	}
});

// Optional: Automatic slideshow (for demonstration purposes)
autoPlay(); // Start the slideshow automatically when the page loads
