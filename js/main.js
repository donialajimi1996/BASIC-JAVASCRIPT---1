
function italic() {
  var element = document.getElementById("P");
  element.classList.toggle("italic");
}

function underline() {
  var element = document.getElementById("P");
  element.classList.toggle("underline");
}
function bold() {
  var element = document.getElementById("P");
  element.classList.toggle("bold");
}

function color() {
  var element = document.getElementById("P");
  element.classList.toggle("color");
}
function align_left() {
  var element = document.getElementById("P");
  element.classList.toggle("align-left");
}
function align_center() {
  var element = document.getElementById("P");
  element.classList.toggle("align-center");
}
function align_right() {
  var element = document.getElementById("P");
  element.classList.toggle("align-right");
}
function justify() {
  var element = document.getElementById("P");
  element.classList.toggle("justify");
}
function font_family(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("P").style.fontFamily = listValue;
}

function changeSize(n) {
  var s = document.getElementById("P");
  s.style.fontSize = n.value + "px";
}
