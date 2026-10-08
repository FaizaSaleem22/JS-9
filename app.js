// q1
var today = new Date();
document.write(today, "<br>");

// q2
// var today = new Date();
// var monthNames = ["january","february","march","april","may","june","july","august","september","october","november","december"];
// var month = today.getMonth();
// var getMonth = monthNames[month];
// alert("Current month: " + getMonth);

// q3
// var today = new Date();
// var daysNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// var day = today.getDay();
// var getDay = daysNames[day];
// var daySlice = getDay.slice(0,3);
// alert("Today is " + daySlice);

// q4
// var today = new Date();
// var daysNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// var day = today.getDay();
// var getDay = daysNames[day];
// if(getDay === "saturday" || getDay === "sunday"){
//     alert("It is fun day!")
// }

// q5
// var today = new Date();
// var date = today.getDate();
// if(date <=15 ){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// q6
var today = new Date();
document.write("Current date: ", today, "<br>");
var millisecond1970 = today.getTime();
document.write("Elapsed milliseconds since January 1, 1970: ", millisecond1970 , "<br>");
var minutes1970 = Math.floor(millisecond1970/1000) /60
document.write("Elapsed minutes since January 1, 1970: ", Math.floor(minutes1970) , "<br>");

// q7
// var today = new Date();
// var time = today.getHours();
// if(time >=0 && time <=12){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// q8
var laterDate = new Date(2021, 0, 0);
console.log(laterDate);

// q9
var today = new Date(); 
var ramadan = new Date("6-18-2015");
console.log(ramadan);
var todayMili = today.getTime();
var ramadanMili = ramadan.getTime();
var diff = todayMili - ramadanMili;
var sec = diff/1000;
var min = sec/60;
var hour = min/60;
var day = hour/24;
console.log(Math.floor(day), " days have passed since 1st Ramadan, 2015");

// q10
var referenceDate = new Date(2015, 11, 5, 22,50,16);
console.log(referenceDate)
var beginingDate = new Date(2015, 0, 1);
console.log(beginingDate);
var referenceMili = referenceDate.getTime();
var beginingMili = beginingDate.getTime();
var diff = referenceMili - beginingMili;
var sec = diff/1000;
console.log("On reference date ", referenceDate, sec, " seconds had passed since begining of 2015");

// q11
var currentDate = new Date();
document.write("Current date: ", currentDate, "<br>");
var hour = new Date(currentDate)
hour.setHours(hour.getHours()-1);
document.write("1 hour ago, it was: ", hour,  "<br>")

// q12
var today = new Date();
document.write("Current date: ", today, "<br>");
var year = new Date(today);
year.setFullYear(year.getFullYear()-100);
document.write("100 years back it was: ", year, "<br>");

// q13
// var today = new Date();
// var todayYear = Number (today.getFullYear())
// var userAge = prompt("Enter your age")
// var userDOB = todayYear - userAge
// document.write("Your age is: ", userAge, "<br>", "Your birth year is: ", userDOB, "<br>")

// q14
var customerName = "ABC Customer";
var today = new Date();
var months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
var currentMonth = today.getMonth();
var monthName = months[currentMonth];
var units = 410;
var perUnitCharge = 16;
var netAmount = units * perUnitCharge
var lateCharge = 350;
var lateAmount = netAmount + lateCharge;
document.write(`<h1>K-Electric Bill</h1> <br>
    Customer Name: <b>${customerName}</b> <br>
    Month: <b>${monthName}</b> <br>
    Number of units: <b>${units}</b> <br>
    Charge per unit: <b>${perUnitCharge}</b> <br>
    Net amount payable(within due date): <b>${netAmount}</b> <br>
    Late payment surchage: <b>${lateCharge}</b> <br>
    Gross amount payable (after due date): <b>${lateAmount}</b>
    `)
