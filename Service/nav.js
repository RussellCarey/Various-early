const burgerIcon = document.getElementById("navbarburger");
const menubg = document.querySelector(".navbarbg");
const menubgcross = document.querySelector(".navbarbg__cross");

burgerIcon.addEventListener("click", () => {
  menubg.classList.add("navbarshow");
});

menubgcross.addEventListener("click", () => {
  menubg.classList.remove("navbarshow");
});

///////////////////////////////////////////////////////////////////////////////
// Show and hide the side menu
const burger2 = document.getElementById("burger2");
const sideMenu = document.getElementById("side-menu");
let isShowing = false;

burger2.addEventListener("click", () => {
  sideMenu.classList.add("side-menu-show");
  setTimeout(() => {
    isShowing = true;
  }, 200);
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".side-menu") && isShowing == true) {
    sideMenu.classList.remove("side-menu-show");
    isShowing = false;
  }
};
////////////////////////////////////////////////////////////////////////////////

/*function showMenu(burger, menubg, cross) {
  burgerIcon.addEventListener("click", () => {
    menubg.classList.add("navbarshow");
  });

  cross.addEventListener("click", () => {
    menubg.classList.remove("navbarshow");
  });
}*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function showDropdown(dropdownEl) {
  dropdownEl.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};*/
