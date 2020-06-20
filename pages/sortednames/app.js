let nameIndex = 0;
let names = [];

function sortedNames(){
  // get names from text area
  newName = document.theform.newname.value;
  // add name to the array
  names[nameIndex] = newName;
  // increment index
  nameIndex ++;
  // sort the array
  names.sort();
  // join and display
  numberNames = names.map((value, index) => {
    return `${index + 1}: ${value.toUpperCase()}`;
  })
  document.theform.sorted.value = numberNames.join("\n");
  document.theform.newname.value = '';

}