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
