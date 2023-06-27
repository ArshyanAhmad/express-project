const resultInputEl = document.getElementById('resultInput')
const passLength = document.getElementById('passLength')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const symbolEl = document.getElementById('symbol')
const generateBtnEl = document.querySelector('.btn')
const copyBtnEl = document.getElementById('copy')

const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const symbolLetter = `!@#$%^&*()_-+=`

let upperPassword = '';
let lowerPassword = '';
let symbolPassword = '';
let allPassword = '';
let upperAndLower = '';
let upperAndSymbol = '';
let lowerAndSymbol = '';

copyBtnEl.addEventListener('click', copyText)

function copyText() {
    resultInputEl.select();
    resultInputEl.setSelectionRange(0, resultInputEl.value.length);

    document.execCommand("copy");
    alert("Copied to clipboard: " + input.value);
}

passLength.addEventListener('input', () => {
    let length = passLength.value

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * lowercaseLetter.length);
        lowerPassword += lowercaseLetter.charAt(randomIndex);
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * uppercaseLetter.length);
        upperPassword += uppercaseLetter.charAt(randomIndex);
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * symbolLetter.length);
        symbolPassword += symbolLetter.charAt(randomIndex);
    }

    let mixPass = upperPassword + lowerPassword + symbolPassword;
    let mixPass2 = upperPassword + lowerPassword
    let mixPass3 = upperPassword + symbolPassword
    let mixPass4 = lowerPassword + symbolPassword

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * mixPass.length);
        allPassword += mixPass.charAt(randomIndex);
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * mixPass2.length);
        upperAndLower += mixPass2.charAt(randomIndex);
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * mixPass3.length);
        upperAndSymbol += mixPass3.charAt(randomIndex);
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * mixPass4.length);
        lowerAndSymbol += mixPass4.charAt(randomIndex);
    }

})

generateBtnEl.addEventListener('click', () => {

    if (uppercaseEl.checked) {
        resultInputEl.value = upperPassword
    }

    if (lowercaseEl.checked) {
        resultInputEl.value = lowerPassword
    }

    if (symbolEl.checked) {
        resultInputEl.value = symbolPassword
    }

    if (uppercaseEl.checked && lowercaseEl.checked && symbolEl.checked) {
        resultInputEl.value = allPassword
    }

    if (uppercaseEl.checked && lowercaseEl.checked) {
        resultInputEl.value = upperAndLower
    }

    if (uppercaseEl.checked && symbolEl.checked) {
        resultInputEl.value = upperAndSymbol
    }

    if (lowercaseEl.checked && symbolEl.checked) {
        resultInputEl.value = lowerAndSymbol
    }

})
