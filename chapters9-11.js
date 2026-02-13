//////////USER INPUT & CONDITIONAL STATEMENT//////////

// QUESTION 1 //
// var userCity = prompt("Enter your city!");
// var city = "Karachi".toLowerCase();
// if(userCity === city){
// alert("Welcome to city of lights!");
// }else{
//     alert("Welcome");
// };

// QUESTION 2 //
// var userGender = prompt("Enter your gender");
// var gender = "Male".toLowerCase();
// if(userGender === gender){
// alert("Good Morning Sir");
// }else{
//     alert("Good morning Ma'am");
// };

// QUESTION 3 //
// var color = prompt("Enter traffic signal color (Red, Yellow, Green):");
// color = color.toLowerCase();
// if (color === "red") {
//     alert("MUST STOP!");
// }else if (color === "yellow") {
//     alert("Ready To Move");
// }else if (color === "green") {
//     alert("Move Now");
// };

// QUESTION 4 //
// let remainingFuel = +prompt("How much fuel is left in the car?(in litres)");
// remainingFuel = remainingFuel.toLowerCase();
// if(remainingFuel < 0.25){
//     (alert("Please refill the fuel in your car"));
// };

// QUESTION 5 //
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// };
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// };
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// QUESTION 6 //
// var marks1 = 55;
// var marks2 = 73;
// var marks3 = 62;
// var marksObtained = marks1 + marks2 + marks3;
// var totalMarks = 300;
// var percentage = (marksObtained/totalMarks)*100;
// var grade;
// var remarks;
// if(percentage >=80){
//     grade = "A-one";
//     remarks = "Excellent";
// }else if(percentage >=70){
// grade = "A";
// remarks = "Good";
// }else if(percentage >=60){
// grade = "B";
// remarks = "You need to improve";
// }else if(percentage <60){
// grade = "Fail";
// remarks = "Sorry";
// }
// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln("Total Marks: " + totalMarks +"<br>"+ "Marks obtained: " +(marks1+marks2+marks3) +"<br>"+"Percentage: "+percentage+"%"  +"<br>"+"Grade: "+grade+"<br>"+"Remarks: "+remarks);

// QUESTION 7 //
// let secretNum = 6;
// let input = +prompt("Guess the secret number!");
// if(secretNum === input){
// alert("Bingo!Correct answer.");
// }else if(input === secretNum+1){
// alert("Close enough to the correct answer.");
// };

// QUESTION 8 //
// var num = +prompt("Give a number");
// if(num%3===0){
// alert("This number is divisible by 3");
// }else{
//     alert("This number is NOT divisible by 3");
// };

// QUESTION 9 //
// var num = +prompt("Give a number");
// if(num %2 === 0){
// alert("This is an EVEN number.");
// }else{
// alert("This is an ODD number");
// };

// QUESTION 10 //
// var temp = +prompt("What is the temperature?");
// if(temp > 40){
// alert("It is too hot outside.");
// }else if(temp > 30){
// alert("The weather today is normal.");
// }else if(temp > 20){
// alert("Today's weather is cool.");
// }else if(temp > 10){
// alert("OMG!Today's weather is so cool.");
// };

// QUESTION 11 //
// let num1 = +prompt("Give first number");
// let num2 = +prompt("Give second number");
// let operation = prompt("Choose an operation(+,-,*,/,%)");
// let result;
// if(operation === "+"){
// result = num1 + num2;
// }else if (operation === "-") {
//     result = num1 - num2;
// } 
// else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Error! Division by zero is not allowed.";
//     }
// } 
// else if (operation === "%") {
//     result = num1 % num2;
// } 
// else {
//     result = "Invalid Operation!";
// }
// alert("Result: " + result);