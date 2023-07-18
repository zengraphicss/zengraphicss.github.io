// Add this JavaScript code to handle smooth scrolling when clicking on navigation links

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    const check = document.getElementById('check');
    const navigationLinks = document.querySelectorAll('.navigation a');
  
    // Close the navigation menu when a link is clicked
    navigationLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop;
  
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
  
        check.checked = false;
      });
    });
  });
  

// OUR WORK SECTION USAGE

function showLargeImage(image) {
  const enlargedImageOverlay = document.getElementById("enlarged-image-overlay");
  const enlargedImage = document.getElementById("enlarged-image");

  enlargedImage.src = image.src;
  enlargedImage.alt = image.alt;
  enlargedImageOverlay.style.display = "flex"; // Use "flex" instead of "block" for better centering

  // Add an event listener to the overlay to close it when clicked outside the image
  enlargedImageOverlay.addEventListener("click", function(event) {
    if (event.target === enlargedImageOverlay) {
      hideLargeImage();
    }
  });
}

function hideLargeImage() {
  const enlargedImageOverlay = document.getElementById("enlarged-image-overlay");
  enlargedImageOverlay.style.display = "none";
}
