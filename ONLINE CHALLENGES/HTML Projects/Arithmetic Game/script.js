document.addEventListener("DOMContentLoaded", function() {
    const problemElement = document.getElementById('problem');
    const answerElement = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const timerElement = document.getElementById('time');
    const submitButton = document.getElementById('submit');
    const startButton = document.getElementById('start');
    const scoreElement = document.getElementById('score');
  
    let timer;
    let timeLeft = 20;
    let score = 0;
    let gameRunning = false;
  
    function startGame() {
      gameRunning = true;
      startButton.disabled = true;
      answerElement.disabled = false;
      submitButton.disabled = false;
      generateProblem();
      startTimer();
    }
  
    function startTimer() {
      timer = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft + ' seconds';
  
        if (timeLeft === 0) {
          clearInterval(timer);
          endGame();
        }
      }, 1000);
    }
  
    function generateProblem() {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const operator=['+','-','*','/'][Math.floor(Math.random()*4)];
      const problemElement=document.getElementById('problem');
      problemElement.textContent = num1 + ' ' + operator + ' ' + num2;
           
    }
  
    function checkAnswer() {
      const userAnswer = parseInt(answerElement.value);
      const [num1, num2] = problemElement.textContent.split(' + ').map(Number);
      const correctAnswer = num1 + num2;
  
      if (userAnswer === correctAnswer) {
        score++;
        resultElement.textContent = 'Correct!';
      } else {
        resultElement.textContent = 'Wrong!';
      }
  
      scoreElement.textContent = `Score: ${score}`;
      answerElement.value = '';
      generateProblem();
    }
  
    function endGame() {
      gameRunning = false;
      answerElement.disabled = true;
      submitButton.disabled = true;
      resultElement.textContent = `Game Over! Your final score is ${score}.`;
      alert(`Game Over! Your final score is ${score}.`);
      startButton.disabled = false;
      timeLeft = 20;
      timerElement.textContent = timeLeft + ' seconds';
      score = 0;
      scoreElement.textContent = `Score: ${score}`;
    }
  
    submitButton.addEventListener('click', function() {
      if (gameRunning) {
        checkAnswer();
      }
    });
  
    startButton.addEventListener('click', function() {
      startGame();
    });
  });
  