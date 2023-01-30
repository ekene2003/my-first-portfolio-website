const singleElem = (element) => document.querySelector(element);
const multiElem = (elements) => document.querySelectorAll(elements);
let slider = document.querySelector(".slider-wrap");
let index = 0;

setInterval(() => {
  index++;
  slider.style.right = `${index + "00%"}`;
  if (slider.style.right == "500%") {
    index = -1;
  }
}, 4000);
window.addEventListener("scroll", function () {
  let nav = singleElem(".the-nav");
  let header = singleElem(".my-header");
  // let list = singleElem(".nav-list");

  if (window.scrollY >= 50) {
    header.classList.add("active-header");
  } else {
    header.classList.remove("active-header");
  }
});
