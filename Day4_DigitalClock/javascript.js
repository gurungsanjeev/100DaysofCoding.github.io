function clock(){
  var monthNames=["January","Feburary","March","April","May","June","July",
    "August","September","October","November","December"];
  var dayNames =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var today = new Date();

  document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + ", " + today.getDate() + " "
   + monthNames[today.getMonth()] + ", " + today.getFullYear());



   var h = today.getHours();   // calling the current hour using .getHours();
   var m = today.getMinutes();  // calling the current minutes using .getMinutes();
   var s = today.getSeconds();   // calling the current seconds using .gerSeconds();
   var p = "AM";  // initailizing the time as AM

// code to make the time in 12hrs
   if(h == 0){
    h = 12;
   }
   if(h>12){
    h = h - 12;
    p = "PM";
   }
   document.getElementById("pe").innerHTML= p;  // calling the value of p in pe // this will make changed in AM and PM
// code ends  here

// adding 0 if the time is less than 2 digit
   var day = h<=11 ? "AM" : "PM";
   h = h<10? '0' +h: h;
   m = m<10? '0' +m: m;
   s = s<10? '0' +s: s;

   document.getElementById('hours').innerHTML = h;  // calling it into innerHTML
   document.getElementById('minutes').innerHTML = m; // calling it into innerHTML
   document.getElementById('seconds').innerHTML = s; // calling it into innerHTML

} var clock = setInterval(clock,600)