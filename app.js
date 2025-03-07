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

// for the email send to the owner

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const number = document.getElementById("number").value;
const button = document.getElementById("button");

// Create mailto link
const mailtoLink = `mailto:muksiduz@gmail.com?subject=New%20Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;

button.addEventListener("click", () => {
  // Open default email client
  window.location.href = mailtoLink;
});
