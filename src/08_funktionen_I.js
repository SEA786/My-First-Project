
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// funktionsaufruf | Call 
// test();
// function test ()
// {
//     console.log("Halllo, Eltaf!")
// }

// // funktionsaufruf | Call 
// // funktiondeklaration | Callee
// function test ()
// {
// console.log("Halllo, Eltaf!");
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen();
// funktion
// function ausgabeNamen()
// {
   
//    let FirstName = " Eltaf ";

//     console.log("Hallo, " + FirstName + "!");
// }   
/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN


// ausgabeNamen2("Eltaf"); // Argument --> Daten für Parameter
// ausgabeNamen2("Hubert");
// ausgabeNamen2("SABA");

function ausgabeNamen2(FirstName) //parameter
{
    console.log("Hallo, " + FirstName + "!");
}
/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente 

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParams(prompt("Vorname?: "),prompt("Name?: "));

// ausgabeNamenParams("Shams", "Eltaf");

function ausgabeNamenParams( FirstName, familyNam) {
    console.log("Hallo, " + FirstName + " " + familyNam + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP( FirstName, familyNam) {
    
    // 1. Funktionalität: string composing
     const GAP = " ";
    let outputStr = "Hallo, " + FirstName + GAP + familyNam + "!"

    // 2. Funktionalität string output
    
    console.log (outputStr);
}
    
/***** Funktionen 03b *****/

 // 1. Funktionalität: string composing
output(getString("Shams","Eltaf"));
 function getString(FirstName, familyNam) {
    const GAP = " ";
    let outputStr = "Hallo, " + FirstName + GAP + familyNam + "!";
    return outputStr; // return schickt die Daten an den call...
    console.log("hi"); // nach RETURN wird die Fkt. abgebrochen
 }

// 2. Funktionalität: string output
function output(outputData) {
    console.log(outputData);
}

