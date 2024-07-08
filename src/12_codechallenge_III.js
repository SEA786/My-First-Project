

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


function getSentence(arr, op) {
    // Verbinde die Elemente des Arrays zu einem Satz mit Leerzeichen dazwischen
    let sentence = arr.join(" ");
    
    // Füge das entsprechende Satzzeichen basierend auf dem Operator hinzu
    if (op === "S") {
        return sentence + ".";
    } else if (op === "Q") {
        return sentence + "?";
    } else if (op === "E") {
        return sentence + "!";
    } else {
        // Für den Fall eines ungültigen Operators
        return sentence;
    }
}

// Tests
console.log(getSentence(["Ich", "bin", "Max"], "S")); // Ich bin Max.
console.log(getSentence(["Bist", "du", "Max"], "Q")); // Bist du Max?
console.log(getSentence(["Ich", "bin"], "E")); // Ich bin!
console.log(getSentence(["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"], "Q")); // Ich hätt gern die Platt von dene zwei diwodaso Spass mache, habbe Sie die?


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}