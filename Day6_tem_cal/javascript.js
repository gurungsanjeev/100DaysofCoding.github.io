var celsiusval = document.getElementById("celsius-range").value;
var celsiusnumVal = document.getElementById("celsius-value").value;
var fahrenheitVal = document.getElementById("fahrenheit-range").value;
var fahrenheitnumVal = document.getElementById("fahrenheit-value").value;



function celsiusInput(){
  
  //to make change in celsius input (performing in range)
       var celsiusval = document.getElementById("celsius-range").value;
        document.getElementById("celsius-value").value = celsiusval;


        let  fahrenheit = (celsiusval * 9/5) + 32;
        document.getElementById("fahrenheit-range").value = fahrenheit;
        document.getElementById("fahrenheit-value").value = fahrenheit.toFixed(2);

}

function updateCelsiusRange(){
   //to make change in celsius range
  var celsiusnumVal = document.getElementById("celsius-value").value;
  document.getElementById("celsius-range").value = celsiusnumVal;

  let  fahrenheit = (celsiusnumVal * 9/5) + 32;
  document.getElementById("fahrenheit-range").value = fahrenheit;
  document.getElementById("fahrenheit-value").value = fahrenheit.toFixed(2);



  
}


function fahrenheitInput(){
  // to make change in fahrenheit input
      var fahrenheitVal = document.getElementById("fahrenheit-range").value;
      document.getElementById("fahrenheit-value").value = fahrenheitVal;

      let celsius = (fahrenheitVal-32) * 5/9;
      document.getElementById("celsius-range").value = celsius;
      document.getElementById("celsius-value").value = celsius.toFixed(2);
}
// to make change in fahrenheit range
function updateFahrenheitRange(){
  var fahrenheitnumVal = document.getElementById("fahrenheit-value").value;
  document.getElementById("fahrenheit-range").value = fahrenheitnumVal;

  let celsius = (fahrenheitnumVal-32) * 5/9;
  document.getElementById("celsius-range").value = celsius;
  document.getElementById("celsius-value").value = celsius.toFixed(2);
}






