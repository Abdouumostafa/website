// Fixed Navbar
const aboutUsSection = document.querySelector(".aboutUs");
const navbar = document.querySelector(".navbar");
const navbarUl = document.querySelectorAll(".navbar ul li a");

window.onscroll = () => {
  // Skills offset top
  let skillsOffsetTop = aboutUsSection.offsetTop;

  // Outer height
  let skillsOuterHeight = aboutUsSection.offsetHeight;

  // Window height
  let windowHeight = this.innerHeight;

  // Window scroll top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    navbar.style.position = "fixed";
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";
    navbar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    navbarUl.forEach((li) => (li.style.color = "black"));
  } else {
    navbar.style.position = "relative";
    navbar.style.backgroundColor = "transparent";
    navbar.style.color = "white";
    navbar.style.boxShadow = "none";
    navbarUl.forEach((li) => (li.style.color = "white"));
  }
};

// Small function for home button
const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Local Storage For Colors
const colors = document.querySelectorAll(".colorsList li");
if (localStorage.getItem("colorOption") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("colorOption")
  );

  // to save active class for the color Lesson 10
  colors.forEach((otherColors) => {
    otherColors.classList.remove("active");
    if (otherColors.dataset.color === localStorage.getItem("colorOption")) {
      otherColors.classList.add("active");
    }
  });
}
// Local Storage For Colors

// Start Landing Page
const navLi = document.querySelectorAll(".navLi");
const landingPage = document.querySelector(".landingPage");

navLi.forEach((nav) => {
  nav.addEventListener("click", () => {
    navLi.forEach((otherNav) => otherNav.classList.remove("activeList"));

    nav.classList.add("activeList");
  });
});

// Start Settings

// General Settings Structure
const settingsList = document.querySelector(".settings");
const settingsIcon = document.querySelector(".icon");
const settingsIconAnimation = document.querySelector(".fa-gear");

settingsIcon.addEventListener("click", () => {
  settingsList.classList.toggle("open");
  settingsIconAnimation.classList.toggle("fa-spin");
});

// Background Option
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

let randomBackgroundInt;
let currentImg = 1;

const randomBackFunc = () => {
  randomBackgroundInt = setInterval(() => {
    currentImg++;
    landingPage.style.backgroundImage = `url(images/img${currentImg}.jpg)`;
    if (currentImg === 5) {
      currentImg = 0;
    }
  }, 5000);
};
randomBackFunc();

yesBtn.addEventListener("click", () => {
  yesBtn.classList.add("activeBtn");
  noBtn.classList.remove("activeBtn");
  randomBackFunc();
});

noBtn.addEventListener("click", () => {
  noBtn.classList.add("activeBtn");
  yesBtn.classList.remove("activeBtn");
  clearInterval(randomBackgroundInt);
});

//Colors Option

colors.forEach((color) => {
  color.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--main-color",
      color.dataset.color
    );
    colors.forEach((otherColors) => otherColors.classList.remove("active"));
    color.classList.add("active");
    localStorage.setItem("colorOption", color.dataset.color);
  });
});
// End Settings

// End Landing Page

// Start Our Skills
const mySkills = document.querySelectorAll(".myRate");

const observer = new IntersectionObserver(
  (enteies) => {
    enteies.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.rate;
      }
    });
  },
  {
    rootMargin: "-10px",
  }
);

mySkills.forEach((skillLine) => observer.observe(skillLine));
// End Our Skills
// Start Our Gallery
const myImg = document.querySelectorAll(".ourGallery .img img");
const overlayPopup = document.querySelector(".overlayPopup");

myImg.forEach((img) => {
  img.addEventListener("click", () => {
    // Create The Popup Box
    const popUpBox = document.createElement("div");
    popUpBox.classList = "popUpBox";

    // Create The Image
    const popUpImg = document.createElement("img");
    popUpImg.src = img.src;

    // Set the image inside popup box
    popUpBox.appendChild(popUpImg);

    // Set the popup box inside the body
    document.body.appendChild(popUpBox);

    // Create close btn
    const popupCloseBtn = document.createElement("span");
    const popupCloseBtnText = document.createTextNode("X");
    popupCloseBtn.appendChild(popupCloseBtnText);
    popupCloseBtn.className = "popupCloseBtn";

    //Set the close btn inside the box
    popUpBox.appendChild(popupCloseBtn);

    overlayPopup.classList.remove("close");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.className === "popupCloseBtn") {
    e.target.parentNode.remove();
    overlayPopup.classList.add("close");
  }
});
// End Our Gallery

// openToggle
// Toggle Menu Function
const toggleMenu = document.querySelector(".toggleMenu");
const ShowingUl = document.querySelector(".navbar ul");

toggleMenu.addEventListener("click", () => {
  ShowingUl.classList.toggle("openToggle");
});
