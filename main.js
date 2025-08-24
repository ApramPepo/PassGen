const passwordBox = document.getElementById("pwfield");
const length1 = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|{}[]></-=";

const chars = upperCase + lowerCase + numbers + symbols;

function randomPass() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length1 > password.length) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    passwordBox.value = password;
}