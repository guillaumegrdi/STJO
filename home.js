const li1 = document.getElementById("li-1");
const li2 = document.getElementById("li-2");
const li3 = document.getElementById("li-3");
const li4 = document.getElementById("li-4");
const li5 = document.getElementById("li-5");
const zoombtn1 = document.getElementById("zoom-btn1");
const imagetozoom1 = document.getElementById("imagetozoom1");
const zoombtn2 = document.getElementById("zoom-btn2");
const imagetozoom2 = document.getElementById("imagetozoom2");
const lecteur = document.querySelector(".lecteur");
const lecteurcontainer = document.querySelector(".lecteur-container");
const closebtn = document.getElementById("close-btn");
imagetozoom2.style.marginTop = "-50px";

li1.addEventListener("click", () => {
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY < 400) {
    li1.style.backgroundColor = "";
  }
  if (window.scrollY >= 400) {
    li1.style.backgroundColor = "rgb(43, 110, 49)";
  }
});

zoombtn1.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = ` <img src="Alpha_v1.1.1.webp" alt="" id="imagetozoom1" />`;
});
zoombtn2.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = ` <img src="nager.webp" alt="" id="imagetozoom2" />`;
  imagetozoom2.style.width = "1000px";
  imagetozoom2.style.marginTop = "50px";
});

closebtn.addEventListener("click", () => {
  lecteur.style.display = "none";
  imagetozoom2.style.width = "500px";
  imagetozoom2.style.marginTop = "-50px";
});
