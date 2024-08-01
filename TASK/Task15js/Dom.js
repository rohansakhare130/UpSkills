function myFunction1() {
    const box1 = document.getElementById('red-1');
    box1.style.backgroundColor = "red";
}

function myFunction2() {
    const box2 = document.getElementById('Blue-1');
    box2.style.backgroundColor = "blue";
}

function myFunction3() {
    const box3 = document.getElementById('Green-1');
    box3.style.backgroundColor = "green"
}
function myFunction4() {
    const box4 = document.getElementById('Yellow-1');
    box4.style.backgroundColor = "yellow"
}


document.getElementById('butnFunction').addEventListener('click', function() {
    // Get the name from the input field
    var name = document.getElementById('nameInput').value;
    
    // Change the greeting message
    document.getElementById('heder-1').textContent = 'Hello, ' + name;
});