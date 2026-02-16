import { createInterface } from 'node:readline';

const rl = createInterface({
    input: process.stdin,
    "output": process.stdout
});

rl.question('Wie heißt du? ', (name) => {
    console.log(`Hallo ${name}! Wie geht es dir.`);
    rl.close();
});