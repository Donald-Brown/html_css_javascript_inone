document.getElementById('openNew').addEventListener('click', function(){
  newWin = window.open("", "newWin", "toolbar=no, status=no, width=200, height=100");
});

document.getElementById("closeNew").addEventListener("click", function(){
  newWin.close();
});

document.getElementById("closeMain").addEventListener("click", function(){
  window.self.close();
});