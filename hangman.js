import { createInterface } from 'node:readline';

const words = ["Apfel", "Baum", "Computer", "Dach", "Elefant", "Fahrrad", "Gitarre", "Haus", "Insel", "Jacke",
    "Kaffee", "Lampe", "Maus", "Nase", "Ozean", "Papier", "Qualle", "Radio", "Sonne", "Tisch",
    "Uhr", "Vogel", "Wald", "Xylophon", "Yacht", "Zebra", "Ameise", "Besen", "Clown", "Drache",
    "Eis", "Frosch", "Garten", "Honig", "Igel", "Junge", "Keks", "Loewe", "Mond", "Nacht",
    "Onkel", "Park", "Qualitaet", "Reis", "Schuh", "Tiger", "Uhu", "Vase", "Wolke", "Zug",
    "Anker", "Brot", "Couch", "Daumen", "Eimer", "Finger", "Gabel", "Hammer", "Idol", "Joghurt",
    "Krone", "Lippe", "Messer", "Nadel", "Oper", "Pinsel", "Quark", "Ritter", "Sessel", "Tasse",
    "Ufer", "Vulkan", "Wiese", "Zange", "Abend", "Blitz", "Chaos", "Delfin", "Erde", "Feuer",
    "Geist", "Himmel", "Imbiss", "Juwel", "Krieger", "Licht", "Motor", "Nuss", "Opa", "Pfeil",
    "Quelle", "Rauch", "Stern", "Traum", "Urlaub", "Ventil", "Wueste", "Zwerg", "Axt", "Boot"];

const random = Math.floor(Math.random() * words.length);
let mistakes = 0;
const word = words[random];
let guess = [];
const mask = "_ ".repeat(word.length);



export function showWord() {
    let show = "";
    for (let letter of word) {
        if (guess.includes(letter.toLowerCase())) {
            show += letter + " ";
        } else {
            show += "_ ";
        }
    }
    return show;
}

export function checkWin(){
let check = ""; 
for (let l of word) {
    if (guess.includes(l.toLowerCase())) {
        check += l; 
    }   
}
return check === word;
}


export function game(text) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Wir nennen die Antwort vom User hier "input"
    rl.question(text, (input) => {
        rl.close();
        const letter = input.toLowerCase();

        if (letter.length !== 1 || letter < 'a' || letter > 'z') {
            console.log("Ungültig! Bitte nur einen Buchstaben (A-Z) eingeben.");
            game("Versuch es nochmal: ");
            return;
        }
        guess.push(letter);
        const aktuelleAnzeige = showWord();
        console.log(aktuelleAnzeige);

        let check = ""; 
        for (let l of word) {
            if (guess.includes(l.toLowerCase())) {
                check += l; // Buchstabe wurde gefunden
            }   
        }

    
        if (check === word) {
            console.log("GLÜCKWUNSCH! Du hast das Wort erraten!");
            return; // Spiel hier beenden
        }

        if (word.toLowerCase().includes(letter)) {
            game("Richtig! Weiter gehts: ");
        } else {
            mistakes++;
            if (mistakes === 10) {
                console.log(`Verloren! Es war: ${word}`);
            } else {
                game(`Falsch! Noch ${10 - mistakes} Versuche: `);
            }
        }
    });
}
    //console.log(word)

//console.log(mask)
//game("Welchen Buchstaben rätst du?")