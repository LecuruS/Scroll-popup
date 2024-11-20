const improvise = document.getElementById("imgImprovise");
const popup = document.getElementById("popup");
const close = document.getElementById("closeBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    improvise.style.transform = "translateX(0px)";
    improvise.style.opacity = 1;
    console.log("coucou");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1100) {
    popup.style.transform = "translateX(0)";
    popup.style.opacity = 1;
  }
});

close.addEventListener("click", () => {
  popup.remove();
});
