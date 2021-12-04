const menuBtn = document.querySelector(".menu-btn");
const rqBtn = document.querySelector(".request-btn");
const navigation = document.querySelector(".navigation");
const closeWindow = document.querySelector(".close-window");
const formWindow = document.querySelector(".section-login");

menuBtn.onclick = () => {
  navigation.classList.toggle("navigation-active");
  navigation.style.display = "flex";
  menuBtn.classList.toggle("menu-btn-active");
  closeWindow.style.display = "block";
};

closeWindow.onclick = () => {
  navigation.classList.remove("navigation-active");
  menuBtn.classList.remove("menu-btn-active");
  formWindow.classList.remove("section-login-active");
  closeWindow.style.display = "none";
};

rqBtn.onclick = () => {
  formWindow.classList.toggle("section-login-active");
  closeWindow.style.display = "block";
};
