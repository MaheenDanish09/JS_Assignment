//////////IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS //////////

// QUESTION 1 //
// let input = "A";
// if(input.length === 1){
// let ascii = input.charCodeAt(0);
// if(ascii >= 48 && ascii <=57){
//     document.writeln("The input is a number.")
// }else if(ascii >= 65 && ascii <= 90){
//     document.writeln("The input is an uppercase letter.")
// }else if(ascii >= 97 && ascii <= 122){
//     document.writeln("The input is a lowercase letter.")
// }else{
//     alert("Please enter a number or a letter.")
// }
// }else{
//     alert("Please enter a single character only.")
// }

// QUESTION 2 //
// let num1 = +prompt("Give number 1:");
// let num2 = +prompt("Give number 2:");
// if(num1 > num2){
//     document.writeln("The larger number is: " + num1);
// }else if(num1 < num2){
//     document.writeln("The larger number is: " + num2);
// }else{
//     document.writeln("Both numbers are equal.");
// };

// QUESTION 3 //
// let num = +prompt("Enter a number");
// if(num > 0){
//     document.writeln("This is a positive number.");
// }else if(num < 0){
//     document.writeln("This is a negative number.");
// }else{
//     alert("Please enter a valid number.");
// };

// QUESTION 4 //
// let input = prompt("Enter a single character");
// if(input && input.length === 1){
//     input = input.toLowerCase()
//     if(input === "a" || input === "e" || input === "o" || input === "i" || input === "u"){
//         alert(true);
//     }else{
//         alert(false);
//     }
// }else{
//     alert("Please enter only one character!");
// };

// QUESTION 5 //
// var pswd = 123456;
// var userPswd = +prompt("Enter your password");
// if(userPswd === null){
//     alert("Please enter your password:");
// }else if(userPswd === pswd){
//     alert("Correct!");
// }else{
//     alert("Incorrect password");
// };


// QUESTION 6 //
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }

// QUESTION 7 //
// var time = +prompt("Enter time based on 24 hour format(e.g. 1900)");
// if(time >= 0 && time < 1200){
// alert("Good Morning!");
// }else if(time >= 1200 && time < 1700){
// alert("Good afternoon!");
// }else if(time >= 1700 && time < 2100){
//     alert("Good evening!");
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night!");
// }else{
//     alert("Please enter time");
// };