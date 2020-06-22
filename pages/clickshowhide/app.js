document.getElementById("eShow").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("eHide").style.display = "block";
  document.getElementById("elevation").style.display = "block";
});

document.getElementById("eHide").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("eShow").style.display = "block";
  document.getElementById("elevation").style.display = "none";
});

// show hide photo 1
document.getElementById("pShow").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("pHide").style.display = "block";
  document.getElementById("photos").style.display = "block";
});

document.getElementById("pHide").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("pShow").style.display = "block";
  document.getElementById("photos").style.display = "none";
});

// show hide photo 2
document.getElementById("pShow2").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("pHide2").style.display = "block";
  document.getElementById("photos2").style.display = "block";
});

document.getElementById("pHide2").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("pShow2").style.display = "block";
  document.getElementById("photos2").style.display = "none";
});

//show hide photo2
document.getElementById("pShow3").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("pHide3").style.display = "block";
  document.getElementById("photos3").style.display = "block";
});

document.getElementById("pHide3").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("pShow3").style.display = "block";
  document.getElementById("photos3").style.display = "none";
});
