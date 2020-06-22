function doIt(){
  if(document.changeform.w.value &&
      document.changeform.h.value){
        newWin.resizeTo(document.changeform.w.value, document.changeform.h.value);
      }
  
  if(document.changeform.x.value && 
    document.changeform.y.value){
      newWin.moveTo(document.changeform.x.value,
        document.changeform.y.value);
    }
};

window.addEventListener("load", () => newWin = window.open("", "newWin", "width=200, height=100"));

document.getElementById("doIt").addEventListener("click", doIt);

document.getElementById("closeBtn").addEventListener('click', () => newWin.close());