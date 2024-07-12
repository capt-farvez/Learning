/*
function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }
*/

function myFunction(p1, p2) {
    return p1 * p2;
}
console.log(myFunction(2,3));


function carFunction() {
    let carName = "Volvo";
    // code here CAN use carName
    console.log(carName);
  }
carFunction();
  // console.log(carname) code here can NOT use carName