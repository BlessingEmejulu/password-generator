const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let Password1 = document.getElementById("password1-el");
let Password2 = document.getElementById("password2-el");
let passwordLength = 12;

generateBtn.addEventListener("click", function () {
    Password1.textContent = '';
    Password2.textContent = '';
    for (let i = 0; i < passwordLength; i++) {
        let randompassword1 = Math.floor(Math.random() * characters.length)
        let randompassword2 = Math.floor(Math.random() * characters.length)
        Password1.textContent += characters[randompassword1];
        Password2.textContent += characters[randompassword2];
    }
})