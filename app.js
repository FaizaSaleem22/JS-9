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