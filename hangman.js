const woerter = ["Apfel", "Baum", "Computer", "Dach", "Elefant", "Fahrrad", "Gitarre", "Haus", "Insel", "Jacke",
    "Kaffee", "Lampe", "Maus", "Nase", "Ozean", "Papier", "Qualle", "Radio", "Sonne", "Tisch",
    "Uhr", "Vogel", "Wald", "Xylophon", "Yacht", "Zebra", "Ameise", "Besen", "Clown", "Drache",
    "Eis", "Frosch", "Garten", "Honig", "Igel", "Junge", "Keks", "Loewe", "Mond", "Nacht",
    "Onkel", "Park", "Qualitaet", "Reis", "Schuh", "Tiger", "Uhu", "Vase", "Wolke", "Zug",
    "Anker", "Brot", "Couch", "Daumen", "Eimer", "Finger", "Gabel", "Hammer", "Idol", "Joghurt",
    "Krone", "Lippe", "Messer", "Nadel", "Oper", "Pinsel", "Quark", "Ritter", "Sessel", "Tasse",
    "Ufer", "Vulkan", "Wiese", "Zange", "Abend", "Blitz", "Chaos", "Delfin", "Erde", "Feuer",
    "Geist", "Himmel", "Imbiss", "Juwel", "Krieger", "Licht", "Motor", "Nuss", "Opa", "Pfeil",
    "Quelle", "Rauch", "Stern", "Traum", "Urlaub", "Ventil", "Wueste", "Zwerg", "Axt", "Boot"]; 

const random = Math.floor(Math.random() * woerter.length);
let versuche = 0;
let wort = woerter[random];
const maske = "_ ".repeat(wort.length);

console.log(maske);
console.log(wort);
console.log(random)