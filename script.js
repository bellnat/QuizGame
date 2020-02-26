let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 3;

let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");

let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice){

    questionText = document.getElementById("question");
    questionText.innerText = ("What color is the sky?");

    choice1 = btn1;
    choice2 = btn2;
    choice3 = btn3;
    choice4 = btn4;

    choice1.innerText = "Blue";
    choice2.innerText = "Red";
    choice3.innerText = "Green";
    choice4.innerText = "Grey";

    if(count += 0){
        btn1 = correctChoice;
        cho
    }
};

let DoTheStuff = function(){

    if (count === 0){
        createQuestion("What color is the sky?");
    }else if (count === 1) {
        createQuestion("What color are Hippos?");
    }else if (count === 2){
        createQuestion("What color is the ocean?");
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";
    }
    document.getElementById("progress").innerText = "Question " + (count) + " of " + numQuestions;

    createQuestion();
};

let checkCorrect = function (button){

    if(button === correctOne){
        numRight++;
    }
    count++;
    DoTheStuff();
};
