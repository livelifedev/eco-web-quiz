var QuizUI = {
    displayNext: function() {
        if (quiz.questionIndex >= quiz.questions.length) {
            this.gameOver();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    
    displayQuestion: function() {
        var q = this.getQuestion().text;
        this.printHTML("question", q);
    },
    
    displayChoices: function() {
        var choices = this.getQuestion().choices;
        for (var i = 0; i < choices.length; i++) {
            this.printHTML("choice" + i, choices[i]);
            this.choiceButton(i);
        }    
    },
    
    displayProgress: function() {
        var html = "Question " + (quiz.questionIndex + 1) + " of " + quiz.questions.length;
        this.printHTML("progress", html);
    },
    
    printHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    
    getQuestion: function() {
        return quiz.questions[quiz.questionIndex];
    },
    
    choiceButton: function(id) {
        var button = document.getElementById("guess" + id);
        var currentQuestion = QuizUI.getQuestion();
        button.onclick = function() {
            quiz.userChoice = currentQuestion.choices[id];
            if(currentQuestion.isCorrect(quiz.userChoice)) {
                quiz.score++;
                quiz.correct.push(currentQuestion.text);
            } else {
                quiz.incorrect.push(currentQuestion.text);
            }
            quiz.questionIndex++;
            QuizUI.displayNext();
        }
    },
    
    gameOver: function() {
        var message = "<h1>Congratulations!</h1><h2>You have finished the quiz.</h2>";
        var correct = this.listBuilder(quiz.correct);
        var incorrect = this.listBuilder(quiz.incorrect);
        message += "<h2>You got " + quiz.score + " question(s) correct.</h2>";
        message += "<h3>These question(s) were answered correctly: </h3>" + correct;
        message += "<h3>These question(s) were answered incorrectly: </h3>" + incorrect;
        this.printHTML("quiz", message);
    },
    
    listBuilder: function(questionList) {
        var list = "<ol>";
        for (var x = 0; x < questionList.length; x++) {
            list += "<li>" + questionList[x] + "</li>";
        }
        list += "</ol>";
        return list;
    }
    
};