let x = 100, y=150;
let obj = document.getElementById('square');
 
function pos(dx,dy){
  //if statement is to check if getElementById is supported
  if(!obj) return;
  x += 30*dx;
  y += 30*dy;
  obj.style.top = y + 'px';
  obj.style.left = x + 'px';
}

function hideSquare(){
  //if statement is to check if getElementById is supported
  if(!obj) return;
  obj.style.display = 'none';
}

function showSquare(){
  //if statement is to check if getElementById is supported
  if(!obj) return;
  obj.style.display = 'block';
}
