/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});
let firstName = prompt("Vorname?: ");
let age = parseInt(prompt ("Alter?: "));
console.log("hier is, " + firstName); 
console.log(firstName +" is " + (age) + "years old. ");

// let firstName = "sara"
// let age =20

const cond = true;

switch (cond) {
    case (0<= age && age <= 5):
        console.log(firstName+ " " +"can drink milk. ");
        break;
    case (6<= age && age <=12):
        console.log(firstName + " " +"can drink juice. ");
        break;
    case(13<= age && age <=17):
        console.log(firstName + " " +"can drink cola. ")
        break;
    default:
        console.log(firstName + " " + "can drink wein! ");
        break;
}
