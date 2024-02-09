function imageClicked() {
  console.log('Image was clicked!');
  // Add your custom logic here
  this.src = "./src/assets/photos/caixa_anorina.jpg"
}

const arrayOfImages = document.getElementsByClassName('clickableImage');

for (const image of arrayOfImages) {
  image.addEventListener('click', imageClicked);
}


//Slider
document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  // Show initial slide
  slides[currentSlide].classList.add("active");

  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach(function(slide) {
      slide.classList.remove("active");
    });
    // Show the slide at the given index
    slides[index].classList.add("active");
  }

  // Event listener for previous button
  document.querySelector(".prev").addEventListener("click", function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Event listener for next button
  document.querySelector(".next").addEventListener("click", function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

