const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
let showing = false;

burger.addEventListener("click", () => {
  console.log("clicked");
  sidebar.style = "transform: translateX(0)";
  setTimeout(() => {
    showing = true;
  }, 200);
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".sidebar") && showing == true) {
    sidebar.style = "transform: translateX(-300px)";
    showing = false;
  }
};
