// // CHAPTER 17-20
// // 1:
// var emptyMultiArr = [[], []];

// // 2:
// var anotherArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

// // 3:
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

// // 4:
// var table = +prompt("Enter number to show multiplication table");
// var length = +prompt("Enter length of multiplication table");
// for (var i = 1; i <= length; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>");
// }

// // 5:
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>")
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// // 6:
// document.write("<strong>Counting:</strong> <br><br>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ")
// }

// document.write("<br><br>");
// document.write("<strong>Reverse Counting:</strong> <br><br>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ")
// }

// document.write("<br><br>");
// document.write("<strong>Even:</strong> <br><br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + ", ")
//     }
// }

// document.write("<br><br>");
// document.write("<strong>Odd:</strong> <br><br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         document.write(i + ", ")
//     }
// }

// document.write("<br><br>");
// document.write("<strong>Series:</strong> <br><br>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ")
// }

// // 7:
// var a = ["cake", "apple pie", "cookies", "chips", "patties"];
// var input = prompt("What do you want to order?")
// var isFound = false;
// for (var i = 0; i < a.length; i++) {
//     if (input === a[i]) {
//         isFound = true;
//         break;
//     }
// }
// if (isFound) {
//     document.write(input + " is <b>available</b> at index " + i + " in our bakery");
// } else {
//     document.write("we are sorry, " + input + " is not <b>available</b> in our bakery")
// }

// // 8:
// var a = [24, 53, 78, 91, 12];
// document.write("Array items: ")
// var largestNum = a[0];
// for (var i = 0; i < a.length; i++) {
//     document.write(a[i]);
//     if (i != (a.length - 1)) {
//         document.write(", ") // to not to give comma at the end
//     }

//     if (largestNum < a[i]) {
//         largestNum = a[i];
//     }
// }
// document.write("<br> The largest number is " + largestNum)


// // 9:
// var a = [24, 53, 78, 91, 12];
// document.write("Array items: ")
// var largestNum = a[0];
// for (var i = 0; i < a.length; i++) {
//     document.write(a[i]);
//     if (i != (a.length - 1)) {
//         document.write(", ") // to not to give comma at the end
//     }

//     if (largestNum > a[i]) {
//         largestNum = a[i];
//     }
// }
// document.write("<br> The smallest number is " + largestNum)

// // 10:
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ")
//     }
// }

// // STRING METHODS
// // 1.
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Hi, " + fullName);

// // 2.
// var mobile = prompt("Enter your fav mobile phone");
// document.write("My fav phone is: " + mobile);
// document.write("<br> Length of string is: " + mobile.length);

// // 3.
// var word = "Pakistani";
// document.write("String: " + word);
// document.write("<br> Index of 'n': " + word.indexOf("n"));

// // 4.
// var word = "Hello World";
// document.write("String: " + word);
// document.write("<br> Last index of 'l': " + word.lastIndexOf("l"));

// // 5.
// var word = "Pakistani";
// document.write("String: " + word);
// document.write("<br> Character at index 3: " + word.charAt(3));

// // 6.
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// alert("Hi, " + fullName);

// // 7.
// var city = "Hyderabad";
// document.write("City: " + city);
// document.write("<br> After replacement: " + city.replace("Hyder", "Islam"))

// // 8.
// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.write(message.replaceAll("and", "&"))

// // 9.
// var str = "472";
// var toNum = Number(str);
// document.write("Value: " + str);
// document.write("<br> Type: " + typeof str);
// document.write("<br> Value: " + toNum);
// document.write("<br> Type: " + typeof toNum);

// // 10.
// var input = prompt("Enter your input");
// document.write("User input: " + input);
// document.write("<br> Uppercase: " + input.toUpperCase());

// // 11.
// var input = prompt("Enter your input");
// var titleCase = input[0].toUpperCase() + input.slice(1)
// document.write("User input: " + input);
// document.write("<br> Title case: " + titleCase);

// // 12.
// var num = 35.36;
// document.write("Number: " + num)
// document.write("<br> Result: " + num.toString().replace(".", ""))

// // 13.
// var username = prompt("Enter username please");
// var codeArr = [33, 44, 46, 64];
// for (var i = 0; i < username.length; i++) {
//     if (codeArr.includes(username.charCodeAt(i))) {
//         alert("Please enter a valid username");
//         break;
//     }
// }

// // 14.
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("What do you want to order?")
// var isFound = false;
// for (var i = 0; i < a.length; i++) {
//     if (input.toLowerCase() === a[i]) {
//         isFound = true;
//         break;
//     }
// }
// if (isFound) {
//     document.write(input + " is <b>available</b> at index " + i + " in our bakery");
// } else {
//     document.write("we are sorry, " + input + " is not <b>available</b> in our bakery")
// }

// // 15.
// var password = prompt("Enter your password...\na. It should contain alphabets and numbers\nb. It should not start with a number\nc. It must at least 6 characters long");
// console.log(password);
// var errors = "";
// // 48-57
// // 65-90
// // 97-122
// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);
//     if (!(code >= 48 && code <= 57) && !(code >= 65 && code <= 90)
//         && !(code >= 97 && code <= 122)) {
//         errors += "<br> It should contains alphabets and numbers only."
//         break;
//     }
// }
// if (!isNaN(Number(password[0]))) {
//     errors += "<br> It should not start with a number."
// }
// if (password.length < 6) {
//     errors += "<br> It must at least 6 characters long."
// }

// document.write("Entered password: " + password + errors);
// if (errors) { document.write("<br> Please enter a valid password") }

// // 16.
// var university = "University of Karachi";
// var strToArr = university.split("");
// for (var i = 0; i < strToArr.length; i++){
//     document.write(strToArr[i]);
//     document.write("<br>");
// }

// // 17.
// var input = "Pakistan";
// var lastChar = input[input.length - 1]
// document.write("User input: " + input)
// document.write("<br> Last character: " + lastChar)

// // 18.
// var str = "The quick brown fox jumps over the lazy dog."
// var occurrences = 0;
// var wordsArr = str.split(" ");
// for (var i = 0; i < wordsArr.length; i++) {
//     // console.log(wordsArr[i])
//     if (wordsArr[i].toLowerCase() == "the") {
//         occurrences++;
//     }
// }
// document.write("Text: " + str)
// document.write("<br> There are " + occurrences + " occurrences of word 'the'.")