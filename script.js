document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header.transparent");
  function onScroll(){
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  function onScroll(){
    header.classList.toggle("scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
});

