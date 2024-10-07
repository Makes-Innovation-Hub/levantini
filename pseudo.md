State:
CurrentIndex = 0
Answers = [null,null,null,null]
currentQuestion = questions[currentIndex]
Questions = [{},{},{},{}]
Notfication = null

function onClickAnswer(index) => {
const isCorrect = index === currentAnswer.correctAnswer
answers[index] = correct,incorrect
setNotfication() -> green if correct, red if not correct and message
}

<Question currentQuestion>
currentQuestion to display the question
<QuestionOptions currentQuestion answers onClickAnswer> -> as children of question
* currentQuestion to iterate over question.answers
* answers to see if it is the right or wrong answer and change color
* if answered wrong then highlight also the correct answer
* onClickAnswer to invoke on the button
<Question/>
<Timer>
<DotsContainer>
questions.map -> <dot answer={answers[index]}/>
</DotsContainer>
<Notification/>
