let darkmode = localStorage.getItem("dark-mode");
const modeTogglerBtns = document.querySelectorAll(".mode-toggler-btn");
const svgRects = document.querySelectorAll("svg rect");
const moonSvg = document.querySelectorAll(".moon-svg path");
const sunSvg = document.querySelectorAll(".sun-svg circle, .sun-svg path");
const sidebarCloseRects = document.querySelectorAll(".close-btn svg rect");
const menuBtnRects = document.querySelectorAll(".menu-btn svg rect");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
  svgRects.forEach((rect) => {
    rect.setAttribute("fill", "#f2f9fe");
  });
  moonSvg.forEach((path) => {
    path.setAttribute("fill", "#223344"); // Change moon color to dark blue
  });
  sunSvg.forEach((element) => {
    element.setAttribute("fill", "#f2f9fe"); // Change sun color to white
    element.setAttribute("stroke", "#f2f9fe"); // Change sun stroke color to white
  });
  sidebarCloseRects.forEach((rect) => {
    rect.setAttribute("fill", "#f2f9fe"); // Change close button color to white
  });
  menuBtnRects.forEach((rect) => {
    rect.setAttribute("fill", "#f2f9fe"); // Change menu button color to white
  });
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
  svgRects.forEach((rect) => {
    rect.setAttribute("fill", "#223344");
  });
  moonSvg.forEach((path) => {
    path.setAttribute("fill", "#F2F9FE"); // Change moon color to white
  });
  sunSvg.forEach((element) => {
    element.setAttribute("fill", "#223344"); // Change sun color to dark blue
    element.setAttribute("stroke", "#223344"); // Change sun stroke color to dark blue
  });
  sidebarCloseRects.forEach((rect) => {
    rect.setAttribute("fill", "#223344"); // Change close button color to dark blue
  });
  menuBtnRects.forEach((rect) => {
    rect.setAttribute("fill", "#223344"); // Change menu button color to dark blue
  });
};

if (darkmode === "enabled") enableDarkMode();

modeTogglerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark-mode");
    darkmode !== "enabled" ? enableDarkMode() : disableDarkMode();
  });
});
