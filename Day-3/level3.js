/*
Create a human readable time format using the Date time object.
The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ).
i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = ((today.getMonth() + 1));
let currentDate = today.getDate();
let currentHour = today.getHours();
let currentMinutes = today.getMinutes();

let twoDigitDate = (currentDate < 10) ? "0" + currentDate : currentDate;
let twoDigitMonth = (currentMonth < 10) ? "0" + currentMonth : currentMonth;
let twoDigitHour = (currentHour < 10) ? "0" + currentHour : currentHour;
let twoDigitMinute = (currentMinutes < 10) ? "0" + currentMinutes : currentMinutes;

console.log(`YYYY-MM-DD HH:mm = ${currentYear}-${twoDigitMonth}-${twoDigitDate} ${twoDigitHour}:${twoDigitMinute}`);