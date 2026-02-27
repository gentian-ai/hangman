import {checkWin} from './hangman.js';

let word = "";
let guess = [];

word = "Baum";
guess = ["b", "j", "a", "u", "m"]; 
let testTrue = checkWin();
console.log("Test bestanden:", testTrue === true);

word = "Baum"
guess = ["b", "a"]
let testFalse = checkWin()
console.log ("Test bestanden:", testFalse === false)