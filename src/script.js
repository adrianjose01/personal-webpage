const elements = document.querySelectorAll(".element");
const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".list");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
    rootMargin: "100px",
  }
);

elements.forEach((el) => {
  observer.observe(el);
});

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const addHiddenClass = function () {
  menuList.classList.add("hidden");
};
