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

// const prompt = require('prompt-sync')({sigint: true});

// let name, alter ;

// name  = prompt("Geben Sie Ihren Namen ein!!: ");
// alter = parseFloat(prompt("Geben Sie Ihren Alter ein!!! "));

// while (alter<0) {
//     alter = parseFloat(prompt("Geben Sie Ihren Alter ein: "));
// }
// console.log("Datentyp: " + typeof name);
// console.log("Datentyp: " + typeof alter);
// console.log(name + " ist " + alter+ " jahre Alt:");
// if(alter>=0 && alter<=5)
//     {
//     console.log(name + " " + "trinkt Milch!!");
//     }
// else if (alter>=6 && alter<=12){
//         console.log(Name +" " + "trinkt Saft!! ");
//     }
// else if( alter>=13 && alter<=17)
//     {
//         console.log(name + " "+ "trinkt Cola!! ");
//     }
// else{
//     console.log(name + " " + "trinkt wein" );
// }

//  ++++++++    Switch case ++++++


// switch (true) {
//     case (alter>=0 && alter<=5):
//         console.log(name + " " + " kann trinkt Milch");
//         break;
//     case (alter>= 6 && alter<= 12):
//         console.log(name + " " + " kann trinkt Saft");
//         break;
//     case (alter>=13 && alter<=17):
//         console.log(name + " " + "kann trinkt Cola");
//         break;
    
//     default:
//         console.log(name+ " " + " kann trinkt Wein:");
        
//         break;
// }
         
const prompt = require('prompt-sync')({sigint: true});
let firstName = prompt("Vorname?: ");
let age = parseInt(prompt ("Alter?: "));
console.log("hier is, " + firstName); 
console.log(firstName +" ist " + (age) + " jahre alt. ");

// let firstName = "Eltaf"
// let age =30 

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