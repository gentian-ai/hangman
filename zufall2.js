import * as readline from 'node:readline/promises';
const random = Math.floor(Math.random() * 11);
const max = 3

// console.log(random)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function game() {
    console.log("Willkommen beim Zahlenraten. Du hast nur 3 Versuche und somit keine Chance!")
    for (let i = 1; i <= max; i++) {
        const answer = await rl.question("Rate eine Zahl von 1 bis 10: ")
        const number = Number(answer)

        if (isNaN(answer)) {
            console.log(`"${number}" ist doch keine Zahl... schätz weiter.`)
            continue;
        }

        if (number === random) {
            console.log(`Gewonnen! ${number} ist richtig. `) 
            break;

        }

        if (i < max) {
            if (number > random) {
                console.log(`${number} ist zu hoch. Rate niedriger!`)
            }
            else {
                console.log(`${number} ist zu tief. Rate höher!`)
            }
        }
        else {
            console.log(`Schade! Du hast zu viele Versuche gebraucht. Es war die ${random}.`)
        }

    }
    rl.close()
}

game()