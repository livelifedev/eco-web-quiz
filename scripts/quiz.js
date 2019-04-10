function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrect = function(userChoice) {
    return (userChoice === this.answer); //returns true or false
};


function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
    this.userChoice;
    this.correct = [];
    this.incorrect = [];
}