var slidePositions = [1, 1, 1]; // Array to store the slide position for each carousel

function SlideShow(n, carouselIndex) {
  var i;
  var slides = document.getElementsByClassName("mySlides" + carouselIndex);
  var circles = document.getElementsByClassName("dot" + carouselIndex);

  if (n > slides.length) { slidePositions[carouselIndex - 1] = 1; }
  if (n < 1) { slidePositions[carouselIndex - 1] = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }

  console.log(circles)
  slides[slidePositions[carouselIndex - 1] - 1].style.display = "block";
  circles[slidePositions[carouselIndex - 1] - 1].className += " enable";
}

// Forward/Back controls for carousel 1
function plusSlides(n, carouselIndex) {
  SlideShow((slidePositions[carouselIndex - 1] += n), carouselIndex);
}

// Image controls for carousel 1
function currentSlide(n, carouselIndex) {
  SlideShow((slidePositions[carouselIndex - 1] = n), carouselIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  SlideShow(1, '1');
  SlideShow(1, '2');
  SlideShow(1, '3');
});