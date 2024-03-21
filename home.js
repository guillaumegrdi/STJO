const li1 = document.getElementById("li-1");
const li2 = document.getElementById("li-2");
const li3 = document.getElementById("li-3");
const li4 = document.getElementById("li-4");
const li5 = document.getElementById("li-5");

li1.addEventListener("click", () => {
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
});
