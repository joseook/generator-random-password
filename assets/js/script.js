const passwordbox = document.getElementById('password');
const copyButton = document.getElementById('copy-button');
const generateButton = document.getElementById('generate-button');
const downloadButton = document.getElementById('download-button');

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
    const password = passwordbox.value;
    const textArea = document.createElement('textarea');
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Password Copied');
});

downloadButton.addEventListener('click', () => {
    const password = passwordbox.value;

    if (password) {
        const blob = new Blob([password], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'senha.txt';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    } else {
        alert('A senha não pode estar vazia. Gere uma senha primeiro.');
    }
});
