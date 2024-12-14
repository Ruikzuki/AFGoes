var input = document.getElementById("search");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    checkInput()
  }
});
document.querySelector(".search > input").addEventListener("click", function(e) { e.stopPropagation(); }); 
document.querySelector(".search").addEventListener("click", function() { 
  //do something 
  checkInput()
  });
function checkInput() {
  var val = document.getElementById("search").value;
var opts = document.getElementById('building-names').children;
var doesntExist = true;
for (var i = 0; i < opts.length; i++) {
  if (opts[i].value.toLowerCase() === val.toLowerCase()) {
    // An item was selected from the list!
    // yourCallbackHere()
    window.location.href = '/map.html?' + opts[i].value
    doesntExist = false
    break;
  }
  }
  if (doesntExist) {
  alert("Building Doesn't Exist")
  }
}