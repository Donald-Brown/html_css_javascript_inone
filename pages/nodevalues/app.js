function changeTitle(){
  if(!document.getElementById) return;

  let newTitle = document.changeform.newtitle.value;
  let heading = document.getElementById('heading1');
  heading.firstChild.nodeValue = newTitle;
}