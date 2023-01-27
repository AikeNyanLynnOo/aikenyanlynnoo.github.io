document.querySelector("#menu-bar").addEventListener("click", () => {
  var style = document.getElementById("side-bar").style;
  if (style.animationName === "slide-in") {
    document.getElementById("side-bar").style.animationName = "slide-out";
  } else {
    document.getElementById("side-bar").style.animationName = "slide-in";
  }
  document.getElementById("side-bar").style.animationDuration = 0.3 + "s";
  document.getElementById("side-bar").style.animationFillMode = "forwards";
});

document.querySelector(".content").onclick = () => {
  var style = document.getElementById("side-bar").style;
  if (style.animationName === "slide-in") {
    document.getElementById("side-bar").style.animationName = "slide-out";
  }
  document.getElementById("side-bar").style.animationDuration = 0.3 + "s";
  document.getElementById("side-bar").style.animationFillMode = "forwards";
};

const year = document.getElementById("footer-year");
const date = new Date();
year.textContent = date.getFullYear();

var typed5 = new TypeIt("#header-sub", {
  strings: ["Frontend Developer", "FullStack Web Developer"],
  typeSpeed: 0,
  backSpeed: 0,
  cursorChar: "&nbsp;|",
  shuffle: true,
  smartBackspace: false,
  loop: true,
}).go();
