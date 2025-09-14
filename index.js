// Your code here
var questionsArr = [
    {
        question: "JavaScript is a compiled language?",
        answer: false
    },
    {
        question: "HTML stands for Hypertext Markup Language?",
        answer: true
    },
    {
        question: "CSS is used for adding functionality to web pages?",
        answer: false
    },
    {
        question: "HTML, CSS, and JavaScript work together to create web pages?",
        answer: true
    },
    {
        question: "JavaScript is the same as Java?",
        answer: false
    }
];


function runQuiz() {
    var correctAnswers = 0;
    
    for (var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question);
        if (userAnswer === questionsArr[i].answer) {
            correctAnswers++;
        }
    }
    
    var percentage = Math.round((correctAnswers / questionsArr.length) * 100);
    alert("You got " + percentage + "% correct!");
}
