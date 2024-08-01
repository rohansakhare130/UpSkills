const filterStudents = () => {
 
     // Get the value entered in the search box and convert to uppercase for case-insensitive search
     let filter = document.getElementById('searchBox').value.toUpperCase();

    // Change the greeting message
    document.getElementById('search').textContent = 'Search Results for ' + filter + '...';
    // Get all elements with class 'information'
    let students = document.getElementsByClassName('information');

    for (let student of students) {
        // Get the student name element (span inside p)
        let nameElement = student.querySelector('span');

        // Get the text content of the student name element
        let textValue = nameElement.textContent || nameElement.innerText;

        // Check if the search filter matches the student name
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            // If match found, display the student information block
            student.style.display = "";
        } else {
            // If no match found, hide the student information block
            student.style.display = "none";
        }
    }
   
}
// Add event listener to the search button
// Add event listener to the search button
document.getElementById('butnFunction').addEventListener('click', filterStudents);

// Add event listener to the search input field
document.getElementById('searchBox').addEventListener('input', filterStudents);

// document.getElementById('butnFunction').addEventListener('click', function() {
//     // Get the name from the input field
//     var name = document.getElementById('searchBox').value;
    
//     // Change the greeting message
//     document.getElementById('search').textContent = 'Search Results for ' + name +'...';
// });