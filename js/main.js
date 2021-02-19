//declares what date, and time the countdown is going to
var deadline = new Date("Feb 22, 2021 08:00:00").getTime(); 
//


var x = setInterval(function() { 
  
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); //Counts the days for us using Milliseconds. 1000 * 60 * 60 * 24 divded by T which is number and disregards the values after the decimal.
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); //Counts the hours for us. % returns the remainder of the division after the equation has been ran.
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); //Counts the minutes for us. % Same sas the hours equation
var seconds = Math.floor((t % (1000 * 60)) / 1000); //Counts the seconds
document.getElementById("day").innerHTML =days ; //Makes sure it calls the correct value in the index file where it calls "Day"
document.getElementById("hour").innerHTML =hours; //Makes sure it calls the correct value in the index file where it calls "Hour"
document.getElementById("minute").innerHTML = minutes;  //Makes sure it calls the correct value in the index file where it calls "Minutes"
document.getElementById("second").innerHTML =seconds;  //Makes sure it calls the correct value in the index file where it calls "Seconds"
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "The day is here!"; // Displays our message when the timer has met it's target date!
        document.getElementById("day").innerHTML ='0'; //Makes sure it wipes the countdown timer value out
        document.getElementById("hour").innerHTML ='0'; //Makes sure it wipes the countdown timer value out
        document.getElementById("minute").innerHTML ='0' ;  //Makes sure it wipes the countdown timer value out
        document.getElementById("second").innerHTML = '0'; } //Makes sure it wipes the countdown timer value out
}, 1000); 