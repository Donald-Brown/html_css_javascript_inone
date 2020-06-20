function showHide(){
  if(!document.getElementById) return;
  if (!document.getElementById) return;
  let heading1 = document.getElementById("heading1");
  let heading2 = document.getElementById("heading2");
  let showheading1 = document.checkboxform.checkbox1.checked;
  let showheading2 = document.checkboxform.checkbox2.checked;
  let paragraph = document.getElementById("paragraph");
  let showparagraph = document.checkboxform.checkbox3.checked;
  heading1.style.visibility=(showheading1) ? "visible": "hidden";
  heading2.style.visibility=(showheading2) ? "visible": "hidden";
  paragraph.style.visibility = (showparagraph) ? "visible" : "hidden";
}