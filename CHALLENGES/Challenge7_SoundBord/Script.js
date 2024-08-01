const Audio = document.querySelector('audio');
 

const playAudio = (src) => {
    Audio.src=src;
    Audio.play();
}


document.addEventListener('keydown',(event) =>{
    let key =  event.key.toLowerCase();

    if(key=='a' || key=='A'){
        playAudio('./assets/key01.mp3');

    }
    else if(key=='b'  || key=='B'){
        playAudio('./assets/key02.mp3');
    }
    else if(key=='c'  || key=='C'){
        playAudio('./assets/key03.mp3');
    }
    else if(key=='d'  || key=='D'){
        playAudio('./assets/key04.mp3');
    }
    else if(key=='e'  || key=='E'){
        playAudio('./assets/key05.mp3');
    }
    else if(key=='f'  || key=='F'){
        playAudio('./assets/key06.mp3');
    }
    else if(key=='g'  || key=='G'){
        playAudio('./assets/key07.mp3');
    }
    else if(key=='h'  || key=='H'){
        playAudio('./assets/key08.mp3');
    }
    else if(key=='i'  || key=='I'){
        playAudio('./assets/key09.mp3');
    }
    else if(key=='j'  || key=='J'){
        playAudio('./assets/key10.mp3');
    }
    else if(key=='k'  || key=='K'){
        playAudio('./assets/key11.mp3');
    }
    else if(key=='l'  || key=='L'){
        playAudio('./assets/key12.mp3');
    }

});