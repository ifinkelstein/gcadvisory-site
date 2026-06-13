document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-links");
  var header = document.querySelector(".header");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.classList.remove("active");
      nav.classList.remove("open");
    });
  });

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
});
