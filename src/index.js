module.exports = function toReadable(number) {
    let sign = "";
    if (number == 0)
        return "zero";
    if (number < 0) {
        sign = "minus ";
        number = -number;
    }
    return sign + readAsHuman(toArray(number));
}

function toArray(number) {
    let res = [];
    while (number > 0) {
        let hundreds = number % 1000;

        let array = hundredsToArray(hundreds);
        res.push(array)

        number = Math.floor(number / 1000)
    }
    return res;
}

function hundredsToArray(number) {
    let res = [];
    while (number > 0) {
        res.push(number % 10);
        number = Math.floor(number / 10);
    }
    return res;
}

function readAsHuman(ar) {
    let res = "";
    for (let i = 0; i < ar.length; i++) {
        let grp = "";
        if (ar[i].length != 0) {
            for (let j = 0; j < ar[i].length; j++) {
                if (j == 0 && ar[i][1] == 1) {
                    grp = gteens[ar[i][j]] + grp;
                    j++;
                } else {
                    if (j == 0) {
                        grp = g1[ar[i][j]] + grp;
                    }
                    if (j == 1) {
                        grp = g10[ar[i][j]] + grp;
                    }
                    if (j == 2) {
                        grp = g100[ar[i][j]] + grp;
                    }
                }
            }
            res = grp + g1000[i] + res;
        }
    }
    return res.trim();
}

let g1 = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine "];
let g10 = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
let gteens = ["ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];
let g100 = ["", "one hundred ", "two hundred ", "three hundred ", "four hundred ", "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "];
let g1000 = ["", "thousand ", "million ", "billion ", "trillion ", "quadrillion "];
