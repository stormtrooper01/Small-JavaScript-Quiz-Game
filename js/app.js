function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("s" + i);
            element.innerHTML = choices[i];
            guess("b" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Question("Which city is the capital of Canada?", ["Toronto", "Montreal", "Ottawa", "Vancouver"], "Ottawa")
    , new Question("What colour was Qui-Gon Jinn’s lightsaber?", ["Red", "Green", "Blue", "Violet"], "Green")
    , new Question("What is the name of Thor’s hammer?", ["Vanir", "Norn", "Aesir", "Mjolnir"], "Mjolnir")
    , new Question("What is the name of Flash?", ["Ben Allen", "Barry Allen", "Harry Allen", "Henry Alien"], "Barry Allen")
    , new Question("What is Harry Potter's middle name?", ["James", "John", "Mark", "Jack"], "James")
];
// create quiz
var quiz = new Quiz(questions);
// display quiz
populate();
