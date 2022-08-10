var modal = document.getElementsById("modal");
var btn = document.getElementsById("btn");
var btnClose = document.getElementsByClassName("close")[0];
var button = document.getElementsByClassName("button")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

btnClose.onclick = function() {
  modal.style.display = "none";
}

button.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}