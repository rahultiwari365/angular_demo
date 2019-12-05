var score;
var num1;
var num2;
var result;
var jsonData;
var res1, res2;

function onSubmit() {
    num1 = parseInt(document.getElementById("number1").value);
    num2 = parseInt(document.getElementById("number2").value);
    result = parseInt(document.getElementById("answer").value);
    console.log("button clicked");
    if (EZ.mode === 'design') {
        jsonData = {
            question: {
                num1: num1,
                num2: num2
            },
            expected: {
                result: result
            }
        }

    }
    console.log(res1);

    if (EZ.mode === 'test') {
        jsonData = {
            question: {
                num1: num1,
                num2: num2
            },
            answer: {
                result: result
            }
        }
        res2 = jsonData.answer.result;


        if (res1 === res2) {
            score = 100;

        }
        else {
            score = 0;
        }

    }



}

function getState() {


    return (JSON.stringify(jsonData));

}

function getScore() {

    return score;

}
function setState(state) {

    state = JSON.parse(state);
    console.log(state);

    if (EZ.mode === 'test') {

        document.getElementById('number1').value = state.question.num1;
        document.getElementById('number2').value = state.question.num2;
        res1 = state.expected.result;

    }

}





