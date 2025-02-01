let darkmode = localStorage.getItem("dark-mode");
const modeTogglerBtns = document.querySelectorAll(".mode-toggler-btn");
const svgs = document.querySelectorAll("svg");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
  svgs.forEach((svg) => svg.setAttribute("fill", "#ffffff")); // Change SVG color to white
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
  svgs.forEach((svg) => svg.setAttribute("fill", "#223344")); // Change SVG color to original
};

if (darkmode === "enabled") enableDarkMode();

modeTogglerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark-mode");
    darkmode !== "enabled" ? enableDarkMode() : disableDarkMode();
  });
});
