function submitQuiz() //Pentru Quiz
{
  var correctAnswers = 
  {
    "q1": "a",
    "q2": "c",
    "q3": "a",
    "q4": "b",
    "q5": "a",
  };

  var numCorrect = 0;
  var numQuestions = 0;

  for (var question in correctAnswers) 
 {
    numQuestions++;
    var selectedAnswer = document.querySelector('input[name="' + question + '"]:checked');
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswers[question]) {
        numCorrect++;
      }
    }
  }

  var resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = 'Răspunsuri corecte: ' + numCorrect + ' / ' + numQuestions;
}
