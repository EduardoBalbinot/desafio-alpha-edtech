function openCloseMenu() {
  const menu = document.querySelector(".profile-info-mobile");
  if (menu.classList.contains("opened")) menu.classList.remove("opened");
  else menu.classList.add("opened");
}

let lastScrollValue = 0;

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const imageContainer = document.querySelector(".profile-image-wrapper");
  const image = imageContainer.querySelector(".profile-avatar");

  let interval;

  window.addEventListener("scroll", () => {

    if (window.scrollY > 0) {
      imageContainer.classList.add("scrolling");

    } else {
      imageContainer.classList.remove("scrolling");
    }

    const limitVH = window.innerHeight * 0.25;

    cards.forEach((card, index) => {
      const distanceFromTop = card.getBoundingClientRect().top;

      if (distanceFromTop <= limitVH) {

        const limitPassed = limitVH - distanceFromTop;
        if (index % 2 == 0) {
          card.style.transform = `translate(${-limitPassed * 1.5}px, ${limitPassed}px) rotate(-${limitPassed * 0.1}deg)`;
        } else {
          card.style.transform = `translate(${limitPassed * 1.5}px, ${limitPassed}px) rotate(${limitPassed * 0.1}deg)`;
        }
      } else {
        card.style.transform = "translate(0)";
      }
    });

    imageContainer.style.transform = "scale(1.2)";
    image.style.boxShadow = '0 0 3vw 0px var(--secondary-blue)';

    clearInterval(interval);
    interval = setInterval(() => {
      if (lastScrollValue == window.scrollY) {
        imageContainer.querySelector(".profile-avatar").style.boxShadow = '0 0 0px 0px var(--secondary-blue)';
        imageContainer.style.transform = "scale(1)";
      }
    }, 500);
    lastScrollValue = scrollY;
  });

});