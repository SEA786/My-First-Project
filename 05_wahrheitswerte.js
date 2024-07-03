
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
let year = 2024;
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

//Declaration
let isJohnOlder; //  Is John Older? --> y/n --> true / false
isJohnOlder = (ageJohn > ageMark); // Test auf Ungleichheit
let isJohnEqual = (ageJohn == ageMark); // Test auf Gleichheit


console.log("isJohnOlder:" + isJohnOlder);
console.log("isJohnEqual:" + isJohnEqual);
