
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


ausgabeNamen2("Eltaf"); // Argument --> Daten für Parameter
ausgabeNamen2("Hubert");
ausgabeNamen2("SABA");

function ausgabeNamen2(FirstName) //parameter
{
    console.log("Hallo, " + FirstName + "!");
}

