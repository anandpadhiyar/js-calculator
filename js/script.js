console.log('Welcome to calculator project of JS');

const buttons = document.getElementsByClassName('calc-btn');
const display = document.getElementById('display');
let displayValue = '';
display.value = displayValue;
let answer = 0;

for (button of buttons) {
    button.addEventListener('click', (e) => {

        let pressedButton = e.target.innerText;

        if (pressedButton == 'X') {
            pressedButton = '*';
            displayValue += pressedButton;
            // console.log(displayValue);
            display.value = displayValue;
        }
        else if (pressedButton == '=') {
            let deg = document.querySelector("input[type='radio']:checked").value;
            // console.log(deg);
            displayValue = displayValue.replace('e', Math.E);
            displayValue = displayValue.replace('π', Math.PI);
            // console.log(displayValue);
            if (displayValue.includes('Ans')) {
                displayValue = displayValue.replace('Ans', answer);
            }
            while (displayValue.includes('sin')) {
                // console.log('Entered in sin');
                let sinValue = displayValue.split('sin(')[1].split(')')[0];
                sinValue = eval(sinValue);
                // console.log(sinValue);
                const sinResult = deg == 'degree' ? Math.sin(sinValue * Math.PI / 180) : Math.sin(sinValue);
                const sinRegex = /(sin\()([0-9πe\/*+-\.]+)(\))/;
                displayValue = displayValue.replace(sinRegex, sinResult);
                // console.log(displayValue);
            }
            while (displayValue.includes('cos')) {
                let cosValue = displayValue.split('cos(')[1].split(')')[0];
                cosValue = eval(cosValue);
                // console.log(cosValue);
                const cosResult = deg == 'degree' ? Math.cos(cosValue * Math.PI / 180) : Math.cos(cosValue);
                const cosRegex = /(cos\()([0-9πe\/*+-\.]+)(\))/;
                displayValue = displayValue.replace(cosRegex, cosResult);
                // console.log(displayValue);
            }
            while (displayValue.includes('tan')) {
                let tanValue = displayValue.split('tan(')[1].split(')')[0];
                tanValue = eval(tanValue);
                // console.log(eval(tanValue));
                const tanResult = deg == 'degree' ? Math.tan(eval(tanValue) * Math.PI / 180) : Math.tan(eval(tanValue));
                const tanRegex = /(tan\()([0-9πe\/*+-\.]+)(\))/;
                displayValue = displayValue.replace(tanRegex, tanResult);
                // console.log(displayValue);
            }
            while (displayValue.includes('log')) {
                let logValue = displayValue.split('log(')[1].split(')')[0];
                logValue = eval(logValue);
                const logResult = Math.log10(logValue);
                const logRegex = /log\([0-9πe\/*+-\.]+\)/;
                displayValue = displayValue.replace(logRegex, logResult);
            }
            while (displayValue.includes('ln')) {
                let lnValue = displayValue.split('ln(')[1].split(')')[0];
                lnValue = eval(lnValue);
                const lnResult = Math.log(lnValue);
                const lnRegex = /ln\([0-9πe\/*+-\.]+\)/;
                displayValue = displayValue.replace(lnRegex, lnResult);
            }
            while (displayValue.includes('sqrt')) {
                let sqrtValue = displayValue.split('sqrt(')[1].split(')')[0];
                sqrtValue = eval(sqrtValue);
                const sqrtResult = Math.sqrt(sqrtValue);
                const sqrtRegex = /sqrt\([0-9πe\/*+-\.]+\)/;
                displayValue = displayValue.replace(sqrtRegex, sqrtResult);
            }
            while (displayValue.includes('fact')) {
                let factValue = displayValue.split('fact(')[1].split(')')[0];
                factValue = eval(factValue);
                // console.log(factValue);
                const factResult = factorial(factValue);
                const factRegex = /fact\([0-9\/*+-]+\)/;
                displayValue = displayValue.replace(factRegex, factResult);
            }
            while (displayValue.includes('inv(')) {
                let invValue = displayValue.split('inv(')[1].split(')')[0];
                invValue = eval(invValue);
                // console.log(invValue);
                const invResult = inverse(invValue);
                const invRegex = /inv\([0-9\/*+-]+\)/;
                displayValue = displayValue.replace(invRegex, invResult);
            }
            while (displayValue.includes('^')) {
                let power = displayValue.split('^(')[1].split(')')[0];
                let temp = displayValue.split('^(')[0];
                let base;
                let powerRegex;
                if (temp.includes('(')) {
                    let arr = temp.split('(');
                    base = arr[arr.length - 1].split(')')[0];
                    powerRegex = /(\([0-9πe\/*+-\.]+\))\^(\([0-9πe\/*+-\.]+\))/;
                }
                else if (temp.search(/[+\-*\/]/) != -1) {
                    base = temp.split(/[+\-*\/]/)[1];
                    powerRegex = /([0-9πe\.]+)\^(\([0-9πe\/*+-\.]+\))/;
                }
                else {
                    base = temp;
                    powerRegex = /([0-9πe\.]+)\^(\([0-9πe\/*+-\.]+\))/;
                }
                // console.log(base);
                let powerValue = Math.pow(eval(base), eval(power));
                // console.log(`power value is ${powerValue}`);
                displayValue = displayValue.replace(powerRegex, powerValue);
                // console.log(displayValue);
            }

            displayValue = eval(displayValue);
            display.value = displayValue;
            answer = displayValue;
        }
        else if (pressedButton == 'C') {
            displayValue = '';
            display.value = displayValue;
        }
        else if (pressedButton == 'CE') {
            displayValue = displayValue.slice(0, displayValue.length - 1);
            display.value = displayValue;
        }
        else if (pressedButton == 'sin') {
            displayValue += 'sin(';
            display.value = displayValue;
        }
        else if (pressedButton == 'cos') {
            displayValue += 'cos(';
            display.value = displayValue;
        }
        else if (pressedButton == 'tan') {
            displayValue += 'tan(';
            display.value = displayValue;
        }
        else if (pressedButton == 'x^y') {
            displayValue += '^(';
            display.value = displayValue;
        }
        else if (pressedButton == 'log') {
            displayValue += 'log(';
            display.value = displayValue;
        }
        else if (pressedButton == 'ln') {
            displayValue += 'ln(';
            display.value = displayValue;
        }
        else if (pressedButton == 'sqrt') {
            displayValue += 'sqrt(';
            display.value = displayValue;
        }
        else if (pressedButton == 'x!') {
            displayValue += 'fact(';
            display.value = displayValue;
        }
        else if (pressedButton == 'inv') {
            displayValue += 'inv(';
            display.value = displayValue;
        }
        else {
            displayValue = displayValue + pressedButton;
            // console.log(displayValue);
            display.value = displayValue;
        }
    });
}

function factorial(no) {
    let result = 1;
    for (let i = 1; i <= no; i++) {
        result = result * i;
    }
    return result;
}

function inverse(no) {
    return 1 / no;
}