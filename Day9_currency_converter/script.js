


// Function to convert USD to Nepali Rupees
function convertNpl() {
  var usinput = document.getElementById("usCurrency").value;
  var nplvalue = usinput * 133.33; // Conversion rate for USD to NPR
  document.getElementById("nplCurrency").value = nplvalue.toFixed(2);
}

// Function to convert USD to Japanese Yen
function convertJPN() {
  var usinput = document.getElementById("usCurrency").value;
  var jp = usinput * 145.20; // Conversion rate for USD to JPY
  document.getElementById("jpnCurrency").value = jp.toFixed(2);
}

// Function to convert USD to Chinese Yuan
function convertChina() {
  var usinput = document.getElementById("usCurrency").value;
  var cn = usinput * 7.28; // Conversion rate for USD to CNY
  document.getElementById("chinaCurrency").value = cn.toFixed(2);
}

// Function to convert USD to South Korean Won
function convertKorea() {
  var usinput = document.getElementById("usCurrency").value;
  var kr = usinput * 1330.50; // Conversion rate for USD to KRW
  document.getElementById("skCurrency").value = kr.toFixed(2);
}

// Function to convert USD to British Pound Sterling
function convertUK() {
  var usinput = document.getElementById("usCurrency").value;
  var uk = usinput * 0.78; // Conversion rate for USD to GBP
  document.getElementById("ukCurrency").value = uk.toFixed(2);
}

// Function to convert USD to Indian Rupees
function convertIndia() {
  var usinput = document.getElementById("usCurrency").value;
  var inr = usinput * 82.25; // Conversion rate for USD to INR
  document.getElementById("indiaCurrency").value = inr.toFixed(2);
}

// Add an event listener to the USD input to trigger all conversions
document.getElementById("usCurrency").addEventListener("input", function() {
  convertNpl();
  convertJPN();
  convertChina();
  convertKorea();
  convertUK();
  convertIndia();
});
