function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 310);
    let width = Math.random() * 5;
    let hight = Math.random() * 50;
    let speed = Math.random() * 0.5;

    e.classList.add('drop');
    cloud.appendChild(e);
    e.style.left = left + 'px';
    e.style.width = 0.5+width + 'px';
    e.style.hight = 0.5+hight + 'px';
    e.style.animationDuration = 1+speed+'s';

    setTimeout(function(){
        cloud.removeChild(e);
    }, 2000)
}

setInterval(function(){
    rain()
},22);