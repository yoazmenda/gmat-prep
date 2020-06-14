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
            return { "question": "No Category", "answer": ""};
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
        let b = getRandomInt(2, 20);
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

class Power {

    generate() {
        let power = getRandomInt(2, 11);
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
        return { "question": a + " ^ " + power, "answer": Math.pow(a, power) };
    }

}

class Factorial {

    

    generate() {
        let factorial = function(n){
            if (n == 1){
                return 1;
            } else {
                return n*factorial(n-1);
            }
        }
        let a = getRandomInt(1, 7+1);
        return { "question": a + "!" , "answer": factorial(a)};
    }

}