import { createInterface } from 'node:readline';
const random = Math.floor(Math.random() * 11);
let trys = 0;
const max = 3

// console.log(random)

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function spiel(text) {
    rl.question(text, (zahl) => {
        //rl.close();
        if (Number(zahl) === random) {
            console.log(`${zahl} ist richtig!`);
            rl.close();
        }
        else if (Number(zahl) > random && trys < max) {
            trys++;
            if (trys === 3) {
                console.log(`Du hast zu viele Versuche gebraucht. Es war ${random}. Verloren!!!`);
            }
            else {
                spiel(`${zahl} ist zu hoch. Du hast schon ${trys} von 3 Versuchen genutzt. Rate niedriger!`);
            }
        }
        else if (Number(zahl) < random && trys < max) {
            trys++;
            if (trys === 3) {
                console.log(`Du hast zu viele Versuche gebraucht. Es war ${random}. Verloren!!!`);
            }
            else {
                spiel(`${zahl} ist zu tief. Du hast schon ${trys} von 3 Versuchen genutzt. Rate höher!`);
            }
        }
        else if (isNaN(zahl)) {
            spiel(`${zahl} ist doch keine Zahl? Gib bitte eine gültige Zahl an!`);
        }
    });
}

spiel("Nenne mir eine Zahl zwischen 0 bis 10: ");