State:
CurrentIndex = 0
Answers = [null,null,null,null]
currentQuestion = questions[currentIndex]
Questions = [{},{},{},{}]
Notfication = null

function onClickAnswer(index) => {
//might split them into 4 different functions or add comments

    // determins if the question is correct

const isCorrect = index === currentAnswer.correctAnswer

// changes answers
answers[index] = correct,incorrect

//invokes notification
setNotfication() -> green if correct, red if not correct and message

//changes to next question
setCurrentIndex(currentIndex + 1)
}

<Question currentQuestion>
currentQuestion to display the question
<QuestionOptions currentQuestion answers onClickAnswer> -> as children of question or maybe inside depends on how complicated it will get
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
