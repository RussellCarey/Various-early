//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of the FAMILY scripts.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var familyImage = document.getElementById("familyImage");
var heading = document.getElementById("family-gathering");
var text = document.getElementById("family-text");

var socialGatheringBTN = document.getElementById("socialG");
var socialEventsBTN = document.getElementById("socialE");
var familyGatherBTN = document.getElementById("familyG");

var bg = document.getElementById("booknow");
var buttons = document.getElementsByClassName("btn");

//Adding all book now buttons to open the menu
for(var i = 0; i < buttons.length; i++){

  buttons[i].addEventListener('click', function(){
    bg.style.visibility = "visible"; 
    $(bg).fadeTo(500, 1)
    
});
}

//Adding the fadeout to the booking popup
var back = document.getElementById("back").addEventListener('click', function(){

  $(bg).fadeTo(300, 0, function(){
    bg.style.visibility = "hidden"; 
  })
})

// Fading an image in and out whilst changing it
function Fading(newimage){

  $(familyImage).fadeTo(200, 0, function(){
    
    setTimeout(function(){
      familyImage.src=newimage; 
      $(familyImage).fadeTo(300, 1);
    }, 200)
  
  });
  
}

// On click of the buttons change the text
var familyGatherBTN = document.getElementById("familyG").addEventListener('click', function(){

  heading.textContent = "Family Gathering";
  text.textContent = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.";
  
  Fading("images/homepage/family-gathering-desktop.jpg");
});

var socialGatheringBTN = document.getElementById("socialG").addEventListener('click', function(){


  heading.textContent = "Special Events";
  text.textContent = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.";
  
  Fading("images/homepage/special-events-desktop.jpg");
});


var socialEventsBTN = document.getElementById("socialE").addEventListener('click', function(){

  heading.textContent = "Social Events";
  text.textContent = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";

  Fading("images/homepage/social-events-desktop.jpg");
});






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of the DROPDOWN scripts.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Takes the main area(button), the actual list and its items and adds a listener to open the menu and give clickable items.
function Listing(button, dropdownList, dropdownItems)
{
  var values = document.getElementsByClassName(dropdownItems);

  document.getElementById(button).addEventListener('click', function() {document.getElementById(dropdownList).classList.toggle("show")});

  for(var i = 0; i < values.length; i++)
  {
    values[i].addEventListener('click', function(){
    document.getElementById(button).textContent = this.textContent.toString()});
  }
}

Listing("dayButton", "dayDropdownList", "dayValue");
Listing("monthButton", "monthDropdownList", "monthValue");
Listing("yearButton", "yearDropdownList", "yearValue");

Listing("hourButton", "hourDropdownList", "hourValue");
Listing("secondButton", "secondDropdownList", "secondvalue");
Listing("amButton", "amDropdownList", "amValue");




// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) 
{
  if (!event.target.matches('.dropdownBtn')) {
    var dropdowns = document.getElementsByClassName("dropdownItems");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PEOPLE NUMBER CHANGE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var minusButton =document.getElementById("minus").addEventListener('click', function(){
  people --;
  peopleNumber.textContent = people + " people";

  if(people < 0)
  {
    people = 1;
    peopleNumber.textContent = people + " people";
  }
})

var people = 1;
var peopleNumber = document.getElementById("peoplenumber");

var plus = document.getElementById("plus").addEventListener('click', function(){
  people ++;
  peopleNumber.textContent = people + " people";

  if(people > 10)
  {
    people = 10;
    peopleNumber.textContent = people + " people";
  }
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHANGING IMAGES ON SMALLER SCREEN
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var enjoyImage = document.getElementById("enjoy-img");
var localImage = document.getElementById("local-img");
var familyImage = document.getElementById("familyImage");

function myFunction(x) {
    if (x.matches) { // If media query matches
        enjoyImage.src = ("images/homepage/enjoyable-place-tablet.jpg")
        localImage.src = ("images/homepage/locally-sourced-tablet.jpg")
        familyImage.src = ("images/homepage/family-gathering-tablet.jpg")
    } 
    else{
        enjoyImage.src = ("images/homepage/enjoyable-place-desktop.jpg")
        localImage.src = ("images/homepage/locally-sourced-desktop.jpg")
        familyImage.src = ("images/homepage/family-gathering-desktop.jpg")
        
    }
  }
  
  var x = window.matchMedia("(max-width: 850px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes 