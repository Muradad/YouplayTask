const userIcon = document.getElementById("user-icon");
const loginForm = document.getElementById("login-form");

userIcon.addEventListener("mouseenter", () => {
  loginForm.style.display = "block"; 
  loginForm.style.opacity = "1"; 
});

loginForm.addEventListener("mouseleave", () => {
  loginForm.style.opacity = ""; 
  setTimeout(() => {
    loginForm.style.display = "none"; 
  }, 1000); 
});

//carusel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


//countdown 
function updateCountdown() {
  const hedefdekiTarix = new Date("2024 2 00:00:00"); // Hedef tarix ve saat
  const date = new Date();
  const mesafe = hedefdekiTarix - date;

      const days = Math.floor(mesafe / (1000 * 60 * 60 * 24));
      const hours = Math.floor((mesafe % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((mesafe % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((mesafe % (1000 * 60)) / 1000);
      document.getElementById("time").innerText = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
}
updateCountdown();  
setInterval(updateCountdown, 1000);
//price
const priceRange = document.getElementById("priceRange");

const minPriceText = document.getElementById("minPrice");
const maxPriceText = document.getElementById("maxPrice");

priceRange.addEventListener("input", function () {
    const selectedPrice = parseInt(priceRange.value);

    minPriceText.textContent = selectedPrice;
    maxPriceText.textContent = selectedPrice + 100; 
    localStorage.setItem("selectedPrice", selectedPrice);
});

window.addEventListener("load", function () {
    const savedPrice = localStorage.getItem("selectedPrice");
    if (savedPrice !== null) {
        priceRange.value = savedPrice;
        minPriceText.textContent = savedPrice;
        maxPriceText.textContent = parseInt(savedPrice) + 100; 
    }
});
