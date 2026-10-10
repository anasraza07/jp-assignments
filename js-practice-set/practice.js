// Anas Raza // 10 oct 26

// // Block A
// // A1:
// alert("Welcome to Javascript");

// // A2:
// var sname = "Ali"
// var course = "Web dev"
// var city = "karachi"
// var birthYear = 2005
// alert(sname + " studies " + course + " in " + city + " and was born in " + birthYear)

// // A7:
// var sname = prompt("Enter your name")
// var age = prompt("Enter your age")
// var course = prompt("Enter your course")
// alert("My name is " + sname + ", I am " + age + " years old and I study " + course + ".")

// // A8:
// var num1 = parseInt(prompt("Enter num one"))
// var num2 = parseInt(prompt("Enter num two"))
// alert(num1 + num2)

// // Block B
// // B1:
// var amount = +prompt("Enter your amount")
// if(amount >= 5000){
//     alert("You are eligible for a discount")
// }

// // B3:
// var num1 = +prompt("Enter num one")
// var num2 = +prompt("Enter num two")
// if(num1 > num2){
//     alert(num1 + " is greater")
// }else if(num2 > num1){
//     alert(num2 + " is greater")
// }else if(num1 == num2){
//     alert("Both numbers are equal")
// }

// // B5:
// var amount = +prompt("Enter order amount")
// if (amount >= 5000) {
//     alert("Free delivery")
// }else if(amount >= 3000 && amount <= 4999){
//     alert("Delivery fee: Rs. 100")
// }else if(amount < 3000){
//     alert("Delivery fee: Rs. 200")
// }

// // B7:
// var marks = +prompt("Enter marks")
// var attendance = +prompt("Enter attendance in %age")
// if(marks >= 80 && attendance >= 75){
//     alert("approved")
// }else{
//     alert("not eligible")
// }

// // B8:
// var username = "anas@raza"
// var password = "123456"
// var usernamePrompt = prompt("Enter username")
// var passwordPrompt = prompt("Enter password")
// if(usernamePrompt == username && passwordPrompt == password){
//     var isActive = true;
//     if(isActive){
//         alert("Login successful")
//     }else{
//         alert("Account is inactive")
//     }
// }else{
//     alert("Invalid credentials")
// }

// Block C
// // C1:
// var prices = [12, 14, 18, 1]
// var total = 0;
// for (var i = 0; i < prices.length; i++) {
//     total = total + prices[i]
// }
// alert("Total: " + total)

// // C3:
// var waitingList = []
// waitingList.unshift("Junaid")
// alert(waitingList)
// waitingList.push("Bilal")
// alert(waitingList)
// waitingList.pop()
// alert(waitingList)

// // C4:
// var cart = ["Laptop", "Mouse", "Keyboard", "Headphones"]
// cart.splice(1, 1, "Monitor")
// alert(cart)

// // C6:
// var num = +prompt("Enter number")
// for (var i = 1; i <= 10; i++) {
//     alert(num + " x " + i + " = " + num * i)
// }

// // C7:
// var stdName = prompt("Enter name")
// var flag = false;
// var students = ["anas", "junaid", "bilal", "ahsan"]
// for (var i = 0; i < students.length; i++) {
//     if (stdName == students[i]) {
//         flag = true
//     }
// }
// if (flag) {
//     alert("Student found")
// } else {
//     alert("Student not found")
// }

// // C9:
// var numbers = [12, 45, 103, 78, 210, 55]
// for (var i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 100){
//         alert("Found: " + numbers[i])
//         break;
//     }
// }

// C11:
// var i = 1;
// while (i <= 20) {
//     alert(i)
//     i++;
// }

do {
    var num = +prompt("Enter positive number")
} while (num > 0);