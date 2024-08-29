

function calculate(){

  var feets = parseFloat (document.getElementById("feets").value);
var inches = parseFloat (document.getElementById("inches").value);
var weight = parseFloat (document.getElementById("weight").value);




//validating inputs
if (isNaN(feets) || isNaN(inches) || isNaN(weight) || feets<0  || inches<0 || weight<0){
  document.getElementById("resultBMI").innerText = "Invalid Input!";
}


//validating ends here

  // converting height to meter
  var height = (feets*0.3048) + (inches*0.0254); 

  // calculating BMI
  var BMI = weight/(height*height);
  
  //displaying Result
 document.getElementById("resultBMI").innerText = BMI.toFixed(2); //Round to 2 Decimal Places
}


