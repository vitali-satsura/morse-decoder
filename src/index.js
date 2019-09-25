const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let resStr = "";
    let morseArr = [];
    let k = 0;

    for (let i = 0; i < expr.length; i += 10) {
        let str = expr.slice(i, i + 10);
        morseArr[k] = "";

        if (str == "**********") {
            morseArr[k] = " ";
        }

        for (let j = 0; j < str.length; j += 2) {

            let substr = str.slice(j, j + 2)
            if (substr == "10") {
                morseArr[k] += ".";
            }
            if (substr == "11") {
                morseArr[k] += "-";
            }
        }
        k++;
    }

    morseArr.forEach(value => {
        if (value == " ") {
            resStr += value;
        } else {
            resStr += MORSE_TABLE[value];
        }

    });

    return resStr;
}

module.exports = {
    decode
}