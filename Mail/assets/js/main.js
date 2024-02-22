/* const mailInserita = document.getElementById('mail').value;
console.log(mailInserita); */

let mailAutorizzate = ['daniele@gmail.com', 'daniele@live.com', 'daniele@outlook.com', 'daniele@hotmail.com', 'daniele@libero.com']
let mailInsert = prompt('Inserisci la tua mail')
let mail = false


for (let index = 0; index < mailAutorizzate.length; index++) {
    const list = mailAutorizzate[index];
    if (list == mailInsert) {
        mail = true;
    }
}

if (mail == true) {
    alert('Mail Autorizzata. Welcome!')
}
else {
    alert('Mail non Autorizzata. Riprova')
}