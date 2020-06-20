// let total = 0;

for(let i=0; i<3; i++){
  let total = 0;
  for (let i = 0; i < 5000; i++) {
    let num = Math.random();
    total += num;
    if (i % 1000 === 0) {
      document.write(`Generated ${i} numbers...<br/>`);
    }
  }
  let average = total / 5000;
  // to get three decimal places
  average = Math.round(average * 1000) / 1000;
  document.write(`<h2>Average of 5000 random numbers is: ${average}</h2>`);
}
// for (let i = 0; i < 5000; i++) {
//   let num = Math.random();
//   total += num;
//   if (i % 1000 === 0) {
//     document.write(`Generated ${i} numbers...<br/>`);
//   }
// }
// let average = total / 5000;
// // to get three decimal places
// average = Math.round(average * 1000) / 1000;
// document.write(`<h2>Average of 5000 random numbers is: ${average}</h2>`);
