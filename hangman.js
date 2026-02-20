import { createInterface } from 'node:readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const words = ["apfel", "baum", "computer", "dach", "elefant", "fahrrad", "gitarre", "haus", "insel", "jacke",
    "kaffee", "lampe", "maus", "nase", "ozean", "papier", "qualle", "radio", "sonne", "tisch",
    "uhr", "vogel", "wald", "xylophon", "yacht", "zebra", "ameise", "besen", "clown", "drache",
    "eis", "frosch", "garten", "honig", "igel", "junge", "keks", "loewe", "mond", "nacht",
    "onkel", "park", "qualitaet", "reis", "schuh", "tiger", "uhu", "vase", "wolke", "zug",
    "anker", "brot", "couch", "daumen", "eimer", "finger", "gabel", "hammer", "idol", "joghurt",
    "krone", "lippe", "messer", "nadel", "oper", "pinsel", "quark", "ritter", "sessel", "tasse",
    "ufer", "vulkan", "wiese", "zange", "abend", "blitz", "chaos", "delfin", "erde", "feuer",
    "geist", "himmel", "imbiss", "juwel", "krieger", "licht", "motor", "nuss", "opa", "pfeil",
    "quelle", "rauch", "stern", "traum", "urlaub", "ventil", "wueste", "zwerg", "axt", "boot"];

const random = Math.floor(Math.random() * words.length);
let mistakes = 0;
let word = words[random];
let guess = [];
const mask = "_ ".repeat(word.length);



function showWord() {
    let show = "";
    for (let buchstabe of word) {
        if (guess.includes(buchstabe)) {
            show += buchstabe + " ";
        } else {
            show += "_ ";
        }
    }
    return show;
}


function spiel (text) {
    rl.question(text, (buchstabe) => {
        guess.push(buchstabe);
        const aktuelleAnzeige = showWord();
        console.log(aktuelleAnzeige);

        if (!showWord().includes("_")) {
            console.log("GLÜCKWUNSCH! Du hast das Wort erraten!");
            rl.close();
            return;
        }
        if (word.includes(buchstabe)) {
            spiel("Richtig! Der Buchstabe ist dabei! Weiter geht es!");
        }
        else {
            mistakes++;
        }
        if (mistakes === 10) {
            console.log(`Du hast leider keine Versuche mehr. Es war ${word}. Viel Erfolg beim nächsten mal!`)
            rl.close()
        }
        else {
            spiel(`Falsch. Der Buchstabe ist nicht dabei. Du kannst nur noch ${10 - mistakes} Fehler machen.`)
        }
    })
}

    //console.log(word)

console.log(mask)
spiel("Welchen Buchstaben rätst du?")