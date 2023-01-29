let slider = document.querySelector(".slider-wrap");
let index = 0;

setInterval(() => {
  index++;
  slider.style.right = `${index + "00%"}`;
  if (slider.style.right == "500%") {
    index = -1;
  }
}, 4000);
if (window.scrollY >= 50) {
  header.classList.add("active-header");
  nav.classList.add("new-nav");
  navIcon.classList.add("new-icon");
} else {
  header.classList.remove("active-header");
  nav.classList.remove("new-nav");
  navIcon.classList.remove("new-icon");
}
