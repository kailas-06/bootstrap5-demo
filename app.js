// Add active class to the current button (highlight it)
var navbtn = document.getElementById("navbarSupportedContent");
var navlink = navbtn.getElementsByClassName("nav-item");
for (var i = 0; i < navlink.length; i++) {
    navlink[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += "active";
  });
}
