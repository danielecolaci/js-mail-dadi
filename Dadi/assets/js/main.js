let numberHuman = Math.floor(Math.random() * 6) + 1;
let numberComputer = Math.floor(Math.random() * 6) + 1;

console.log('Il tuo punteggio è ' + numberHuman)
console.log('Il punteggio del Computer è ' + numberComputer)

if (numberHuman > numberComputer) {
    console.log('Hai vinto!');
}
else if (numberHuman == numberComputer) {
    console.log('Pareggio!');
}
else {
    console.log('Hai perso!');
}