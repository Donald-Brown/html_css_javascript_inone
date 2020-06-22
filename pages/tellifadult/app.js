let answer = prompt('Please tell me your age');

function determineAdult(){
  let response = "";
  if(!answer || isNaN(answer)){
    response = "you didn't give me a number";
  }else if(answer <  18){
    response = `${answer} is not yet an adult`;
  }else if(answer > 110) {
    response = `No one can be ${answer} years old`;
  }else{
    response = `At ${answer} you are an adult`;
  }

  document.getElementById("response").innerHTML = response;
}

determineAdult();