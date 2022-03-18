const container = document.querySelector(".container");
const screen = document.querySelector(".screen");
const img = document.querySelectorAll(".img");

container.addEventListener("click", function (e) {
  if (e.target.className === "img") {
    screen.src = e.target.src;
    screen.classList.add("fade");

    setTimeout(function () {
      screen.classList.remove("fade");
    }, 500);
    imgs.forEach(function (img) {
      img.className = "img";
    });
    e.target.classList.add("active");
  }
});
