class Question {
    static generate() {
        let questionProviders = [];
        var settings = optionsArray.map((elem) => { return { "option": elem.name, "checked": elem.checked } })
        settings = settings.filter((elem) => elem.checked)

        //populate possible questions providers
        settings.forEach(element => {
            switch (element.option) {
                case "Multiplication":
                    questionProviders.push(new Multiplication())
                    break;
                case "Addition":
                    questionProviders.push(new Addition())
                    break;
                case "Subtraction":
                    questionProviders.push(new Subtraction())
                    break;
                case "Division":
                    questionProviders.push(new Division())
                    break;
                case "Fractions":
                    questionProviders.push(new Fractions())
                    break;
                case "Power":
                    questionProviders.push(new Power())
                    break;
                case "Factorial":
                    questionProviders.push(new Factorial())
                    break;
                case "Pythagoras":
                    questionProviders.push(new Pythagoras())
                    break;

                default:
                    break;
            }
        });
        if (questionProviders.length == 0) {
            alert("Please check some categories ");
            return { "question": "No Category", "answer": "" };
        }
        //select random question provider
        let questionProvider = questionProviders[Math.floor(Math.random() * questionProviders.length)];
        return questionProvider.generate();
    }
}

//min inclusive, max non inclusiv
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Multiplication {

    generate() {
        let a = getRandomInt(2, 20);
        let b = getRandomInt(2, 12);
        return { "question": a + " X " + b, "answer": a * b };
    }

}


class Addition {

    generate() {
        let a = getRandomInt(2, 20);
        let b = getRandomInt(2, 20);
        return { "question": a + " + " + b, "answer": a + b };
    }

}

class Subtraction {

    generate() {
        let a = getRandomInt(2, 80);
        let b = getRandomInt(2, 80);
        let larger = Math.max(a, b);
        let smaller = Math.min(a, b);
        return { "question": larger + " - " + smaller, "answer": larger - smaller };
    }

}


class Division {

    generate() {
        let a = getRandomInt(2, 13);
        let b = getRandomInt(2, 13);
        let larger = Math.max(a, b);
        let smaller = Math.min(a, b);
        return { "question": larger * smaller + " / " + smaller, "answer": larger };
    }

}
class Fractions {

    generate() {
        let fractions = [
            { "fraction": "½", "question": "?.?", "answer": "0.5" },
            { "fraction": "⅓", "question": "?.???", "answer": "0.333" },
            { "fraction": "¼", "question": "?.??", "answer": "0.25" },
            { "fraction": "⅕", "question": "?.?", "answer": "0.2" },
            { "fraction": "⅙", "question": "?.???", "answer": "0.166" },
            { "fraction": "⅐", "question": "?.???", "answer": "0.143" },
            { "fraction": "⅛", "question": "?.???", "answer": "0.125" },
            { "fraction": "⅑", "question": "?.???", "answer": "0.111" },
        ]
        let fraction = fractions[Math.floor(Math.random() * fractions.length)];
        return { "question": fraction.fraction + " = " + fraction.question, "answer": fraction.answer };
    }
}

class Power {

    generate() {
        let powerSymbols = ["²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
        let randomPowerStr = powerSymbols[Math.floor(Math.random() * powerSymbols.length)];
        let power = parseInt((randomPowerStr.codePointAt(0).toString(16))[((randomPowerStr.codePointAt(0).toString(16)).length) - 1]);
        let a = 0;
        switch (power) {
            case 2:
                a = getRandomInt(2, 20 + 1);
                break;
            case 3:
                a = getRandomInt(2, 9 + 1);
                break;
            case 4:
                a = getRandomInt(2, 5 + 1);
                break;
            case 5:
                a = getRandomInt(2, 4 + 1);
                break;
            case 6:
                a = getRandomInt(2, 3 + 1);
                break;
            default:
                a = 2;
                break;
        }
        return { "question": a + randomPowerStr, "answer": Math.pow(a, power) };
    }

}

class Factorial {



    generate() {
        let factorial = function (n) {
            if (n == 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }
        let a = getRandomInt(2, 7 + 1);
        return { "question": a + "!", "answer": factorial(a) };
    }

}


class Pythagoras {

    generate() {
        let tripplets = [
            // 1:1:√2
            { "tripple": ["1", "1", "√?"], "answer": "2" },
            { "tripple": ["?", "1", "√2"], "answer": "1" },
            //3:4:5
            { "tripple": ["3", "4", "?"], "answer": "5" },
            { "tripple": ["3", "?", "5"], "answer": "4" },
            { "tripple": ["?", "4", "5"], "answer": "3" },
            // 1:√3:2
            { "tripple": ["1", "√3", "?"], "answer": "2" },
            { "tripple": ["1", "√?", "2"], "answer": "3" },
            { "tripple": ["?", "√3", "2"], "answer": "1" },
            //3:4:5
            { "tripple": ["5", "12", "?"], "answer": "13" },
            { "tripple": ["5", "?", "13"], "answer": "12" },
            { "tripple": ["?", "12", "13"], "answer": "5" },
            //5:12:13
            { "tripple": ["5", "12", "?"], "answer": "13" },
            { "tripple": ["5", "?", "13"], "answer": "12" },
            { "tripple": ["?", "12", "13"], "answer": "5" },

        ];
        let tripple = tripplets[Math.floor(Math.random() * tripplets.length)];

        let a = tripple.tripple[0];
        let b = tripple.tripple[1];
        let c = tripple.tripple[2];
        let missingVariable = tripple.answer;

        return { "question": a + "²" + " + " + b + "²" + " = " + c + "²", "answer": missingVariable };
    }

}