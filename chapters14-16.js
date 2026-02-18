//////////ARRAYS //////////

// QUESTION 1 //
// var studentNames = [];

// QUESTION 2 //
// var studentNames = new Array();

// QUESTION 3 //
// var strings = ["A" , "B" , "C" , "D"];

// QUESTION 4 //
// var numbers = [1 , 2 , 3 , 4 , 5];

// QUESTION 5 //
// var boolean = [true , false , true , false];

// QUESTION 6 //
// var mixedArr = ["A" , 1 , true];

// QUESTION 7 //
// var qualifications = ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];
// document.writeln("<h1>Qualifications</h1>");
// for(var i = 0; i < qualifications.length; i++){
//     document.writeln((i + 1) + ") " + qualifications[i] + "<br>");
// };

// QUESTION 8 //
// var names = ["Michael" , "John" , "Tony"];
// var scores = [320 , 230 , 480];
// var totalMarks = 500;
// for(let i = 0; i < 3; i++){
//     let percentage = (scores[i] / totalMarks)* 100;
//     document.writeln("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + percentage + "%" + "<br>");
// }

// QUESTION 9 //
// let colors = ["red" , "blue" , "green"];
// document.writeln(colors + "<br><br>");

/////part A/////
// var addBeginning = prompt("What color do you want to add in the beginning?");
// colors.unshift(addBeginning);
// document.writeln(colors + "<br><br>");

/////part B/////
// var addEnd = prompt("What colors do you want to add in the end?");
// colors.push(addEnd);
// document.writeln(colors + "<br><br>");

/////part C/////
// colors.unshift("purple" , "orange");
// document.writeln(colors +"<br><br>");

/////part D/////
// colors .shift();
// document.writeln(colors +"<br><br>");

/////part E/////
// colors.pop();
// document.writeln(colors +"<br><br>");

/////part F/////
// var indexAdd = parseInt(prompt("At which index do you want to add a color(s)?"));
// var newColor = prompt("Which color do you want to add?");
// colors.splice(indexAdd , 0 , newColor);
// document.writeln(colors +"<br><br>");

/////part G/////
// var indexRemove = parseInt(prompt("At which index do you want to remove a color?"));
// var quantity = parseInt(prompt("How many colors do you want to delete?"));
// colors.splice(indexRemove , quantity);


// QUESTION 10 //
// var scores = [20 , 53 , 22 , 15 , 34];
// document.writeln("<h2>Scores of students: </h2>" + scores);
// scores.sort((a, b) => a - b);
// document.writeln("<h2>Ordered scores of students: </h2>" + scores);

// QUESTION 11 //
// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.writeln("<h1>Cities List: </h1>" + cities);
// var selectedCities = cities.slice(1,3);
// document.writeln("<h1>Selected Cities: </h1>" + selectedCities);

// QUESTION 12 //
// var arr = ["This", " is", " my", " cat"];
// var result = arr.join("");
// document.write("<h1>Array:</h1> " + arr + "<br><br>");
// document.write("<h1>String:</h1> " + result);

// QUESTION 13 //
var arr = [];
arr.push("Apple");
document.writeln(arr + "<br>");
arr.push("Banana");
document.writeln(arr  + "<br>");
arr.push("Mango");
document.writeln(arr  + "<br>");

// QUESTION 14 //
// QUESTION 15 //
