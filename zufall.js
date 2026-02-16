const random = Math.floor(Math.random() * 11);
// console.log(random)
import { createInterface } from 'node:readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nenne mir eine Zahl zwischen 0 bis 10: ', (zahl) => {
    if (Number(zahl) === random) {
        console.log(`${zahl} ist richtig!`);
    }
    else {
        console.log(`${zahl} ist falsch. Es ist ${random}`);
    }
    rl.close();
});

if (true == true) {

}