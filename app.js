document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#carouselExample");
  const items = carousel.querySelectorAll(".carousel-item");
  const nextButton = carousel.querySelector(".carousel-control-next");
  const prevButton = carousel.querySelector(".carousel-control-prev");

  let currentIndex = 0;

  const updateCarousel = () => {
    items.forEach((item, index) => {
      item.classList.remove("active");

      if (index === currentIndex) {
        item.classList.add("active");
      }
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  };

  nextButton.addEventListener("click", nextSlide);

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  setInterval(nextSlide, 6 * 1000); // Auto-slide every 3 seconds

  updateCarousel();
});
//hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links-ham");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

//emailJS
emailjs.init("XDCXVtY69gfO-NRRe");
// service_1vfakrb
// private key : yc4fU3pfhqg_tE51tuJXs
// public key : XDCXVtY69gfO-NRRe
emailjs.send("service_1vfakrb", "template_92htiej");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect form data
  const formData = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
  };

  // Send email using EmailJS
  emailjs
    .send("service_1vfakrb", "template_92htiej", formData)
    .then(function (response) {
      alert("Message sent successfully!");
      console.log("SUCCESS!", response);
    })
    .catch(function (error) {
      alert("Failed to send message.");
      console.error("FAILED...", error);
    });
});
