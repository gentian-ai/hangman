for (let i = 2; i < process.argv.length; i++) {
    let name = process.argv[i];
    console.log(`Hallo ${name}! (Position in der Liste: ${i})`);
}

// for (let e of process.argv) {
//     console.log(`Hallo ${e}!`);
// }