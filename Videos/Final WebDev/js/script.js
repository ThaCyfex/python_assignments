document.addEventListener("DOMContentLoaded", function() {
  // I start by implementing the slider functionality for our Batman images

  // I gather all slider images
  const slides = document.querySelectorAll('.slider img');
  // I select the previous and next buttons by their IDs
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentSlide = 0;
  
  // This function shows the slide corresponding to the given index
  function showSlide(index) {
    slides.forEach((slide, i) => {
      // I toggle the 'active' class to control visibility
      slide.classList.toggle('active', i === index);
    });
  }
  
  // I display the initial Batman image
  showSlide(currentSlide);
  
  // I add an event listener to the Prev button to move backward in the slider
  prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
  });
  
  // I add an event listener to the Next button to move forward in the slider
  nextButton.addEventListener('click', function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
  });
  
  // I set up an automatic slide change every 5 seconds for continuous Batman action
  setInterval(function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
  }, 5000);
  
  // I now implement the contact form validation for our Batcave messaging system
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // I prevent the default form submission so I can validate the inputs
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      let valid = true;
      let errorMsg = "";
      
      // I validate the name input
      if (name === "") {
        valid = false;
        errorMsg += "Please enter your Bat-Name.\n";
      }
      // I validate the email field for presence and format
      if (email === "") {
        valid = false;
        errorMsg += "Please enter your email.\n";
      } else {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
        if (!email.match(emailPattern)) {
          valid = false;
          errorMsg += "Please enter a valid email address.\n";
        }
      }
      // I ensure the message field isn’t empty
      if (message === "") {
        valid = false;
        errorMsg += "Please enter your message.\n";
      }
      
      const formMessage = document.getElementById('formMessage');
      // I show error messages in red if validation fails
      if (!valid) {
        formMessage.textContent = errorMsg;
        formMessage.style.color = "red";
      } else {
        // If all inputs are valid, I show a success message in green
        formMessage.textContent = "Thank you for your message. The Batcave has received your words!";
        formMessage.style.color = "green";
        // I reset the form after submission
        contactForm.reset();
      }
    });
  }
});
