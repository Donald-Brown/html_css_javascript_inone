//initialize names array
let names = [];

//initialize do while
let i = 0;
do {
  newName = prompt("Please enter the next name");
  if(newName > " "){
    names[i] = newName;
  }
  i++
} while(i < 10);

names.sort();
document.write(`<h2>${names.length} names entered</h2>`);
document.write("<ol>");
for(let name of names){
  document.write(`<li>${name}</li>`)
}
document.write("</ol>");