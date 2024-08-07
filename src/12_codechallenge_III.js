

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));


function getSentence(arr, op) {
    let sentence = arr.join(" ");
    if (op === "S") {
        return sentence + ".";
    } else if (op === "Q") {
        return sentence + "?";
    } else if (op === "E") {
        return sentence + "!";
    } else {
        return sentence;
    }
}


// Modul: Ausgabe in Konsole : Test
function output(outputData) {
    console.log(outputData);
}