let slideIndex = 0;
let slideshowInterval;
let isPaused = false;
let isFullscreen = false;

$(document).ready(function () {
	showSlides(slideIndex);
	startSlideshow();

	$("#start").click(function () {
		startSlideshow();
	});

	$("#stop").click(function () {
		stopSlideshow();
	});

	$("#backwards").click(function () {
		stopSlideshow();
		slideIndex -= 1;
		showSlides(slideIndex);
	});

	$("#forward").click(function () {
		stopSlideshow();
		slideIndex += 1;
		showSlides(slideIndex);
	});

	$("#beginning").click(function () {
		stopSlideshow();
		slideIndex = 0;
		showSlides(slideIndex);
	});

	$("#end").click(function () {
		stopSlideshow();
		slideIndex = $(".mySlides").length - 1;
		showSlides(slideIndex);
	});

	$(".slide-list li").click(function () {
		stopSlideshow();
		const slideNumber = $(this).data("slide");
		slideIndex = slideNumber;
		showSlides(slideIndex);
	});

	$("#fullscreen").click(function () {
		toggleFullscreen();
	});

	$(".thumbs-like").click(function () {
		alert("Thanks for the like!");
	});


	$(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", function () {
		isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
		if (isFullscreen) {
			$(".slideshow-container").addClass("fullscreen");
		} else {
			$(".slideshow-container").removeClass("fullscreen");
		}
	});
});

function showSlides(n) {
	let i;
	const slides = $(".mySlides");
	const dots = $(".slide-list li");
	if (n > slides.length - 1) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = slides.length - 1;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
	startTimerBar();
}

function startSlideshow() {
	if (isPaused) return;
	slideshowInterval = setInterval(() => {
		slideIndex++;
		showSlides(slideIndex);
	}, 5000);
	$(".timer-bar").addClass("animate");
}

function stopSlideshow() {
	clearInterval(slideshowInterval);
	$(".timer-bar").removeClass("animate");
	isPaused = true;
}


function startTimerBar() {
	$(".timer-bar").removeClass("animate").css("width", "100%");
	setTimeout(() => {
		$(".timer-bar").addClass("animate");
	}, 0);
}

function toggleFullscreen() {
	const container = $(".slideshow-container")[0];
	if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
		if (container.requestFullscreen) {
			container.requestFullscreen();
		} else if (container.webkitRequestFullscreen) {
			container.webkitRequestFullscreen();
		} else if (container.mozRequestFullScreen) {
			container.mozRequestFullScreen();
		} else if (container.msRequestFullscreen) {
			container.msRequestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
}
