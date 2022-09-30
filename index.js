function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
var x = document.getElementById("demo");

var variable1 = document.getElementById("demo1");
function getlocation() {
  navigator.geolocation.getCurrentPosition(showLoc);
}
function showLoc(pos) {
    document.getElementById('loc').innerHTML= "Latitude: " +
    pos.coords.latitude +
    "<br>Longitude: " +
    pos.coords.longitude;
 
}