// // CH 26-30
// // 1.
// var number = prompt("Enter positive decimal number");
// document.write(number);
// document.write("<br>" + Math.round(number));
// document.write("<br>" + Math.floor(number));
// document.write("<br>" + Math.ceil(number));

// // 2.
// var number = prompt("Enter negative decimal number");
// document.write(number);
// document.write("<br>" + Math.round(number));
// document.write("<br>" + Math.floor(number));
// document.write("<br>" + Math.ceil(number));

// // 3.
// var number = -4;
// document.write("The absolute value of " + number + " is " + Math.abs(number));

// // 4.
// var diceValue = Math.floor(Math.random() * 6 + 1)
// document.write("Random dice value: " + diceValue)

// // 5.
// var randomIndex = Math.floor(Math.random() * 2 + 1);
// var option = "Heads";
// if (randomIndex == 2) {
//     option = "Tails"
// }
// document.write(randomIndex);
// document.write("<br> random coin value: " + option);

// // 6.
// var randomNumber = Math.floor(Math.random() * 100 + 1);
// document.write("random number between 1 and 100: " + randomNumber)

// // 7.
// var weight = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + parseFloat(weight) + " kilograms")

// // 8.
// var secret = Math.floor(Math.random() * 10 + 1);
// var userNum = prompt("Enter number between 1 and 10");

// while (secret != userNum) {
//     alert("Try again");
//     userNum = prompt("Enter number between 1 and 10");
// }
// alert("Congratulations! You guessed correct number.");



// // CH 31-34
// // 1.
// document.write(new Date());

// // 2.
// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var currMonth = months[date.getMonth()]
// document.write("Current month: " + currMonth);

// // 3.
// var date = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // console.log(date);
// var today = days[date.getDay()]
// document.write("Today is " + today.slice(0, 3))

// // 4.
// var date = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = days[date.getDay()];
// if (today == "Sunday" || today == "Saturday") {
//     document.write("Its fun day")
// } else {
//     document.write("Its not a fun day")
// }

// // 5.
// var date = new Date();
// var today = date.getDate();
// // console.log(today);
// if (today < 16) {
//   document.write("First fifteen days of the month")
// } else {
//   document.write("Last days of the month");
// }

// // 6.
// var date = new Date();
// var milliseconds = date.getTime();
// var seconds = milliseconds / 100
// var minutes = seconds / 60
// // console.log(milliseconds, seconds, minutes)
// document.write("Current Date: " + date);
// document.write("<br> Elapsed milliseconds since January 1, 1970: " + milliseconds);
// document.write("<br> Elapsed minutes since January 1, 1970: " + minutes);

// 7.
var hour = new Date().getHours();
// if(hour >)