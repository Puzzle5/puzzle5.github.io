// JavaScript for the Slideshow
let slideIndex = 0;
let slides = $(".mySlides");
let listItems = $(".slide-list li");

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
});

// Optional: Automatic slideshow (for demonstration purposes)
setInterval(() => {
	slideIndex++;
	showSlide(slideIndex);
}, 5000);
