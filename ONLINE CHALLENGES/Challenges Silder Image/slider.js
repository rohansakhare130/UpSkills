let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider-container')
let sliderList = slider.querySelector('.slider-container .list-main')
let thumbnail = document.querySelector('.slider-container .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}

setInterval(   nextBtn.onclick = function() {
    moveSlider('next')
},7000 )

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}

console.log(sliderList);
function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    console.log(sliderItems);
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    console.log(thumbnailItems);
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        console.log( sliderList.appendChild(sliderItems[0]))
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
        
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}