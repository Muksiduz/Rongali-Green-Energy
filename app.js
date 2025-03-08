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

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Collect form data
  const formData = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
  };
  if (formData.name === "" || formData.number === "" || formData.email === "") {
    return;
  }
  if (formData.number < 10) return;

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      name: formData.name,
      number: formData.number,
      email: formData.email,
    })
    .then(
      function (response) {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message.");
      }
    );
});
