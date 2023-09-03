const passwordbox = document.getElementById('password');
const copyButton = document.getElementById('copy-button');
const generateButton = document.getElementById('generate-button');

const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%¨&*<>()+_[]"={}';

const allCaracter = upperCase + lowerCase + number + symbol;

const getRandomCharacter = (characters) => {
    return characters[Math.floor(Math.random() * characters.length)];
};

generateButton.addEventListener('click', () => {
    let password = '';
    password += getRandomCharacter(upperCase);
    password += getRandomCharacter(lowerCase);
    password += getRandomCharacter(number);
    password += getRandomCharacter(symbol);

    for (let i = 0; i < length; i++) {
        password += getRandomCharacter(allCaracter);
    }
    passwordbox.value = password;
});

copyButton.addEventListener('click', () => {
    passwordbox.select();
    document.execCommand('copy');
    alert('Senha Copiada');
});
