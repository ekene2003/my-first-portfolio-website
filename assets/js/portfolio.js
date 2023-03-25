const singleElem = (element) => document.querySelector(element);
const multiElem = (elements) => document.querySelectorAll(elements);
let mainBody = singleElem(".main-body");
let allNavLinks = multiElem(".nav-links");
let allProjectBtns = multiElem(".project-btn");
let allProjectCards = multiElem(".project-cards");
let navLogo = singleElem(".nav-logo");
let themeBtn = singleElem(".theme");
let themes = singleElem(".theme-list");
let lightBtn = singleElem(".light-mode");
let DarkBtn = singleElem(".dark-mode");
let nav = singleElem(".the-nav");
let header = singleElem(".my-header");
let list = singleElem(".nav-list");
let skillSection = singleElem(".skill-section");
let projectSection = singleElem(".project-section");
let bioSection = singleElem(".section1");
let greeting = singleElem(".my-name");
let greetingTwo = singleElem(".hello-part");
let skillHead = singleElem(".skill-tittle");
let projectHead = singleElem(".project-tittle");
let skillBox = multiElem(".skill-box");
let visitBtn = multiElem(".visit-btn");
let skillBoxtittles = multiElem(".skill-box-tittle");
let projectcardtittles = multiElem(".project-card-tittle");
let getInTouch = singleElem(".get-in-touch");
let footerTittles = multiElem(".footer-end");
let footerLink = multiElem(".footer-links");
const navBar = singleElem(".the-nav");
const navIcon = singleElem(".nav-icon");
const closebar = singleElem(".nav-icon2");
let readBtn = multiElem(".read-more");
let projectParagraph = multiElem(".project-p");
readBtn.forEach((btn) => {
  btn.onclick = () => {
    btn.style.opacity = "0";
    let currentPara = btn.closest(".project-cards").querySelector(".project-p");
    currentPara.style.overflow = "visible";
    currentPara.style.display = "block";
  };
});
DarkBtn.onclick = () => {
  lightBtn.className = "light-mode";
  DarkBtn.classList.add("current");
  themes.style.background = "grey ";
  mainBody.style.background = "#202020";
  header.style.background = "#202020";
  allNavLinks.forEach((link) => {
    link.style.color = "white";
  });
  bioSection.style.background = "#202020";
  skillSection.style.background = "grey";
  greeting.style.color = "white";
  greetingTwo.style.color = "white";
  navLogo.style.color = "white";
  skillBox.forEach((box) => {
    // box.style.background = "#202023";
    box.classList.add("dark-skill-box");
  });
  skillBoxtittles.forEach((tittle) => {
    tittle.style.color = "white";
  });
  skillHead.style.color = "white";
  projectHead.style.color = "white";
  allProjectBtns.forEach((btn) => {
    btn.classList.add("dark-project-btn");
  });
  projectcardtittles.forEach((protitle) => {
    protitle.style.color = "white";
  });
  visitBtn.forEach((visit) => {
    visit.style.color = "white";
  });
  getInTouch.style.color = "white";
  footerTittles.forEach((footer) => {
    footer.style.color = "white";
  });
  footerLink.forEach((link) => {
    link.style.color = "grey";
  });
  navBar.style.background = "#202020";
  navIcon.style.background = "#202020";
  closebar.style.background = "#202020";
  navIcon.style.color = "white";
  closebar.style.color = "white";
  navIcon.style.border = "2px solid white";
  closebar.style.border = "2px solid white";
};
lightBtn.onclick = () => {
  DarkBtn.className = "dark-mode";
  lightBtn.classList.add("current");
  navBar.style.background = "white";
  navIcon.style.background = "white";
  closebar.style.background = "white";
  navIcon.style.color = "black";
  closebar.style.color = "black";
  navIcon.style.border = "2px solid black";
  closebar.style.border = "2px solid black";
  themes.style.background = "lightgrey";
  mainBody.style.background = "white";
  header.style.background = "white";
  allNavLinks.forEach((link) => {
    link.style.color = "black";
  });
  bioSection.style.background = "white";
  skillSection.style.background = "lightgray";
  greeting.style.color = "black";
  greetingTwo.style.color = "black";
  navLogo.style.color = "black";
  skillBox.forEach((box) => {
    box.className = "skill-box";
  });
  skillBoxtittles.forEach((tittle) => {
    tittle.style.color = "black";
  });
  skillHead.style.color = "black";
  projectHead.style.color = "black";
  allProjectBtns.forEach((btn) => {
    btn.className = "project-btn";
  });
  projectcardtittles.forEach((protitle) => {
    protitle.style.color = "black";
  });
  visitBtn.forEach((visit) => {
    visit.style.color = "grey";
  });
  getInTouch.style.color = "black";
  footerTittles.forEach((footer) => {
    footer.style.color = "grey";
  });
  footerLink.forEach((link) => {
    link.style.color = "black";
  });
};
i = 0;
themeBtn.onclick = () => {
  i++;
  if (i % 2 == 0) {
    themes.style.display = "none";
  } else {
    themes.style.display = "block";
  }
};
allNavLinks.forEach((link) => {
  link.onclick = function () {
    allNavLinks.forEach((link) => {
      link.classList.remove("active-link");
      this.classList.add("active-link");
    });
  };
});
allProjectBtns.forEach((projectBtn) => {
  projectBtn.onclick = function (e) {
    allProjectBtns.forEach((btn) => {
      btn.classList.remove("active");
      this.classList.add("active");
    });
    // e.preventDefault();
    let category = projectBtn.dataset.category;
    for (let i of allProjectCards) {
      if (category == "All") {
        i.style.display = "block";
      } else {
        if (i.dataset.type !== category) {
          i.style.display = "none";
        } else {
          i.style.display = "block";
        }
      }
    }
  };
});
navIcon.addEventListener("click", function (e) {
  // navIcon.classList.toggle("when-click");
  closebar.style.display = "block";
  navIcon.style.display = "none";
  navBar.classList.toggle("show-nav");
});
closebar.addEventListener("click", function (e) {
  navIcon.style.display = "block";
  closebar.style.display = "none";
  navBar.classList.toggle("show-nav");
});
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 50) {
    header.classList.add("active-header");
    nav.classList.add("new-nav");
    navIcon.classList.add("new-icon");
  } else {
    header.classList.remove("active-header");
    nav.classList.remove("new-nav");
    navIcon.classList.remove("new-icon");
  }

});
