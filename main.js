// Nav Animation
let toggle = document.querySelector(".header .toggle");
let toggleSpans = document.querySelectorAll(".header .toggle span");
let nav = document.querySelector(".header ul");
let navLis = document.querySelectorAll(".header ul li");

window.addEventListener("click", function (ele) {
  if (toggle.contains(ele.target)) {
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
      toggle.style.background = "#fff";
      toggleSpans.forEach(function (span) {
        span.style.background = "#222";
      });
    } else {
      nav.classList.add("show");
      toggle.style.background = "#14b5b7";
      toggleSpans.forEach(function (span) {
        span.style.background = "#eee";
      });
    }
  } else {
    nav.classList.remove("show");
    toggle.style.background = "#fff";
    toggleSpans.forEach(function (span) {
      span.style.background = "#222";
    });
  }
});

// Up Button
let upBtn = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY > 500) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
};

upBtn.onclick = function() {
  window.scrollTo({top: 0, behavior: "smooth"})
}

