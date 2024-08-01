let score = 0;
var scoreCounter = document.getElementById('counter'),
buttons = document.querySelectorAll('.main button'),
container = document.querySelector('.main')

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        button.style.visibility = 'hidden';
        score++;
         scoreCounter.textContent = score;
         if(score > 4){
            container.innerHTML = ` <p class= "game"> Game Over </p>`
         }
    })
})

setTimeout(()=>{
    container.innerHTML = ` <p class= "game"> Game Over </p>`
},10000)