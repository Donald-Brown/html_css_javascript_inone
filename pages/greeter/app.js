let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

document.write(`<h2>${hours}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}</h2>`);

// document.write('<p>');
// if(hours < 10 ){
//   document.write("Good Morning!");
// }else if(hours >= 14 && hours <= 17){
//   document.write('Good Afternoon');
// }else if(hours > 17){
//   document.write('Good evening!');
// }else{
//   document.write('Good Day');
// }
// document.write('</p>');

document.write('<p>');
switch(true) {
  case (hours < 10):
    document.write("Good Morning!");
    break;
  case (hours >= 14 && hours <= 17):
    document.write('Good Afternoon');
    break;
  case (hours > 17):
    document.write('Good evening!');
    break;
  default:
    document.write('Good Day');
    break;
}
document.write('</p>');

function myFunc(){
  let i=10;
  do{
    console.log(i);
    i++;
  }
  while(i<10);
}

myFunc();