// CH. 35-38
// // 1.
// function displayDateAndTime() {
//     const date = new Date();
//     document.write(date);
// }
// displayDateAndTime();

// // 2.
// function greet(firstName, lastName) {
//     const fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName);
// }
// greet("Anas", "Raza");

// // 3.
// const num1 = +prompt("Enter num one");
// const num2 = +prompt("Enter num two");
// function sum(num1, num2) {
//     const totalSum = num1 + num2;
//     return totalSum;
// }
// alert("Sum of two numbers: " + sum(num1, num2))

// // 4.
// function calculate(num1, num2, opr) {
//     if (opr == "+") {
//         return num1 + num2
//     } else if (opr == "-") {
//         return num1 - num2
//     } else if (opr == "*") {
//         return num1 * num2
//     } else if (opr == "/") {
//         return num1 / num2
//     } else {
//         return "Invalid operator"
//     }
// }
// document.write("Result: " + calculate(10, 5, "/"));

// // 5.
// function square(num) {
//     return num * num;
// }
// document.write(square(4));

// // 6.
// function factorial(num) {
//     if (num == 1 || num == 0) {
//         return 1;
//     }

//     let result = num * factorial(num - 1);
//     return result;
// }
// document.write(factorial(5))

// // 7.
// function displayCounting(start, end) {
//     // document.write()
//     for(var i = start; i <= end; i++){
//       document.write(i + "<br>")
//     }
// }
// displayCounting(10, 20)

// // 8.
// function calculateHypotenuse(base, perp) {
//   var hyp = calculateSquare(base) + calculateSquare(perp)

//   function calculateSquare(num) {
//     return num * num;
//   }

//   console.log(hyp)
// }
// calculateHypotenuse(2, 3)

// // 9.
// function calculateArea(width, height) {
//   var area = width * height
//   console.log(area)
// }
// // calculateArea(2, 3)
// var width = 3
// var height = 2
// calculateArea(width, height)

// // 10.
// function isPalindrome(str) {
//   var reversedStr = "";
//   for (let i = (str.length - 1); i >= 0; i--) {
//     reversedStr += str[i]
//   }
//   // console.log(reversedStr == str)
//   return reversedStr == str;
// }
// console.log(isPalindrome("madam"));

// 11.
// function capitalize(str) {
//   var strSplit = str.split(" ");
//   var result = [];
//   // console.log(strSplit)
//   for (var i = 0; i < strSplit.length; i++) {
//     var word = strSplit[i];
//     var capitalizeWord = word.slice(0, 1).toUpperCase() + word.slice(1);
//     // console.log(capitalizeWord)
//     result.push(capitalizeWord)
//   }
//   result = result.join(" ")
//   console.log(result)
// }
// capitalize("the quick brown fox");

// // 12.
// function findLongest(str) {
//   var wordsArr = str.split(" ")
//   // console.log(wordsArr)
//   var longest = wordsArr[0];
//   for (var i = 1; i < wordsArr.length; i++) {
//     if (wordsArr[i].length > longest.length) {
//       longest = wordsArr[i]
//     }
//   }
//   console.log(longest)
// }
// findLongest("Web Development Tutorial")

// // 13.
// function countOccurence(str, letter) {
//   var occurrence = 0;
//   for (var i = 0; i < str.length; i++) {
//     var word = str[i]
//     if (word == letter) {
//       occurrence++
//     }
//   }
//   console.log(occurrence);
// }
// countOccurence("JSResourceS.comoo", "o")

// // 14.
// function calcCircumference(radius) {
//   var pi = 3.14;
//   var circumference = 2 * pi * radius
//   document.write("The circumference is " + circumference + "<br>")
// }
// calcCircumference(12);

// function calcArea(radius) {
//   var pi = 3.14;
//   var area = pi * (radius ** 2)
//   document.write("The area is " + area)
// }
// calcArea(6);

// CH. 38-42
// // 1.
// function power(a, b) {
//   console.log(a ** b)
// }
// power(2, 3)

// // 2.
// function isLeapYear(year) {
//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     return "YES"
//   }
//   return "NO"
// }
// document.write(isLeapYear(2000))
// document.write("<br>")
// document.write(isLeapYear(1990))

// // 3.
// function calculateS(a, b, c) {
//   var s = (a + b + c) / 2;
//   return s;
// }
// function calculateArea(a, b, c) {
//   var s = calculateS(a, b, c)
//   var area = s * (s - a) * (s - b) * (s - c);
//   return area;
// }
// document.write(calculateArea(2, 2, 2));

// // 4.
// function progress(m1, m2, m3) {
//   var average = averageMarks(m1, m2, m3);
//   var percentage1 = percentage(m1, m2, m3);

//   return ("AVERAGE: " + average + "<br> PERCENTAGE: " + percentage1);
// }

// function averageMarks(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3
// }

// function percentage(m1, m2, m3) {
//   return (m1 + m2 + m3) / 300 * 100;
// }

// document.write(progress(95, 85, 75))

// // 5.
// function indexOf(str, searchValue) {
//   for (var i = 0; i < str.length; i++) {
//     if (searchValue == str[i]) {
//       return i;
//     }
//   }
//   return -1;
// }
// document.write(indexOf("one", "o"));

// 6.