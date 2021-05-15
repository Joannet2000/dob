var userM = document.getElementById("user-month");
var userD = document.getElementById("user-day");
var userY = document.getElementById("user-year");
var submitButton = document.getElementById("submit-date");

submitButton.addEventListener("click", function(evt)
{
    var message = document.getElementById('message');
    var parsedM = (parseInt(userM.value)-1);
    var parsedD = (parseInt(userD.value));
    var parsedY = (parseInt(userY.value));
    var months = ["January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December "];
    var weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dateIs = new Date(parsedY,parsedM,parsedD);
var weekdayIs = weekdays[dateIs.getDay()];
var monthIs = months[parsedM];

if(weekdayIs === undefined || monthIs === undefined){
    message.innerText="";
    setTimeout(function()
    {
        message.innerText = "Please enter a valid date";},500)
    }
    else{
        message.innerText = weekdayIs + " , " + monthIs + parsedD + " , " + parsedY;
    }



})
