const text = document.querySelector("#statusText")
const input = document.querySelector("#user-input")
const reflection = document.querySelector("#response")
const mistakesMade = document.querySelector("#mistakes-count")
const actionBtn = document.querySelector("#action-btn")
const lettersUsed = document.querySelector("#letters-used")
const wordBox = document.querySelector("#word-box");


const words = [
    "Abend", "Abenteuer", "Ameise", "Ananas", "Anker", "Apfel", "April", "Auge", "Auto", "Axt",
    "Bach", "Baden", "Ball", "Ballon", "Banane", "Bart", "Baum", "Bein", "Besen", "Bett",
    "Biene", "Bild", "Birne", "Blatt", "Blitz", "Blume", "Bogen", "Boot", "Brot", "Bruder",
    "Buch", "Burg", "Bus", "Butter", "Chaos", "Clown", "Computer", "Couch", "Dach", "Dame",
    "Dampf", "Dank", "Daumen", "Delfin", "Denken", "Distel", "Dorf", "Drache", "Durst", "Ebbe",
    "Ecke", "Edel", "Efeu", "Ei", "Eiche", "Eimer", "Eis", "Eisen", "Elefant", "Ente",
    "Erde", "Esel", "Eule", "Faden", "Fahrer", "Fahrrad", "Falke", "Farbe", "Fass", "Feder",
    "Feier", "Feld", "Fels", "Fenster", "Ferien", "Fest", "Feuer", "Finger", "Fisch", "Flamme",
    "Flasche", "Fliege", "Fluss", "Form", "Foto", "Frage", "Frosch", "Fuchs", "Gabel", "Gang",
    "Garten", "Gast", "Gebiss", "Gefahr", "Geist", "Geld", "Geschenk", "Glas", "Glocke", "Glück",
    "Gold", "Gurt", "Haar", "Hafen", "Hahn", "Hals", "Hammer", "Hand", "Handy", "Hase",
    "Haus", "Hebel", "Heft", "Heimat", "Held", "Helm", "Herz", "Hexe", "Hilfe", "Himmel",
    "Hitze", "Hobel", "Honig", "Hose", "Hund", "Hut", "Igel", "Insel", "Jacke", "Jagd",
    "Jahr", "Joghurt", "Junge", "Juwel", "Kaffee", "Kahn", "Kalt", "Kamel", "Kamm", "Karte",
    "Kasten", "Katze", "Keks", "Keller", "Kerze", "Kette", "Kind", "Kirche", "Kirsche", "Kissen",
    "Klavier", "Kleid", "Klee", "Knoten", "Koch", "Koffer", "König", "Kopf", "Korb", "Kran",
    "Kraut", "Kreide", "Kreis", "Krone", "Küche", "Kugel", "Kuh", "Kuss", "Lachen", "Laden",
    "Lager", "Lampe", "Land", "Lauf", "Leben", "Leiter", "Licht", "Lied", "Limonade", "Linie",
    "Lippe", "Löffel", "Löwe", "Luft", "Lust", "Maler", "Mantel", "Markt", "Maus", "Meer",
    "Mehl", "Messer", "Metall", "Milch", "Mond", "Moos", "Motor", "Mund", "Museum", "Musik",
    "Mutter", "Mütze", "Nadel", "Nagel", "Nase", "Natur", "Nebel", "Nest", "Netz", "Nuss",
    "Öl", "Ofen", "Onkel", "Oper", "Opa", "Ozean", "Park", "Papagei", "Pfeil", "Pinsel",
    "Plakat", "Qualle", "Quark", "Quelle", "Radio", "Rauch", "Regen", "Ritter", "Rose", "Rücken",
    "Saft", "Säge", "Salz", "Schaf", "Schiff", "Schloss", "Schuh", "Sonne", "Straße", "Süßigkeit",
    "Tafel", "Tante", "Tasse", "Teich", "Tiger", "Tisch", "Traum", "Turm", "Ufer", "Uhr",
    "Uhu", "Unglück", "Urlaub", "Vase", "Vogel", "Vulkan", "Wald", "Wasser", "Würfel", "Wüste",
    "Xylophon", "Yacht", "Zange", "Zebra", "Zelt", "Zitrone", "Zoo", "Zug", "Zwerg", "Zwinger",
    "Fußball", "Gruß", "Gießen", "Beißen", "Groß", "Floß", "Strauß", "Spiegelei", "Küche", "Löffel", "Genti"
];

const random = Math.floor(Math.random() * words.length);
let word = words[random];
let guess = []
const maxMistakes = 8
let mistakes = 0;
const allowedLetters = "abcdefghijklmnopqrstuvwxyzäöüß"


function resetGame() {
    mistakes = 0
    guess = []
    const random = Math.floor(Math.random() * words.length);
    word = words[random];

    updateUsedLetters()
    renderWord()
    mistakesMade.textContent = maxMistakes
    reflection.textContent = ""

    input.disabled = false
    input.value = ""
    input.focus()
    
    actionBtn.textContent = "Aufgeben"
}

function updateUsedLetters() {
    const wrong = guess.filter(l => !word.toLowerCase().includes(l))
    lettersUsed.textContent = wrong.join(", ").toUpperCase();
}

/*function showWord() {
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
    */

function renderWord() {
    wordBox.replaceChildren()

    for (let letter of word) {
        const element = document.createElement("span");
        element.classList.add("letter-slot");

        if (guess.includes(letter.toLowerCase())){
            element.textContent = letter.toUpperCase();
        }
        else {
            element.textContent = "_";
        }
        wordBox.appendChild(element)
    }
}

function checkWin(){
    for (let l of word) {
        if (!guess.includes(l.toLowerCase())) {
            return false
        }   
    }
    return true
}



renderWord()
mistakesMade.textContent = maxMistakes


actionBtn.addEventListener("click", () => {
    if (actionBtn.textContent === "Aufgeben"){
        reflection.textContent = "Aufgegeben! Das Wort war: " + word
        input.disabled = true
        actionBtn.textContent = "Nochmal spielen"
    }
    else {
        resetGame()
    }
})


input.addEventListener("input", () => {
    const letter = input.value.toLowerCase()

    input.value = ""

    if (letter.length !== 1 || !allowedLetters.includes(letter)) {
            reflection.textContent = "Ungültig! Bitte nur einen Buchstaben (A-Z, Ä, Ö, Ü, ß) eingeben.";
            return;
    }

    if (guess.includes(letter)) {
        reflection.textContent = "Den Buchstaben hattest du schon!"
        return;
    }

    reflection.textContent = ""
    guess.push(letter)
        
    if (!word.toLowerCase().includes(letter)){
        mistakes++
        mistakesMade.textContent = maxMistakes - mistakes
    }   

    renderWord()
    // text.childNodes.
    updateUsedLetters()

    if (mistakes === maxMistakes){
        reflection.textContent = "Verloren! Das Wort war: " + word
        input.disabled = true
        actionBtn.textContent = "Nochmal spielen"
    }

    else if (checkWin()){
        reflection.textContent = "Gewonnen!!!"
        input.disabled = true
        actionBtn.textContent = "Nochmal spielen"
    }

})

