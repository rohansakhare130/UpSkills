function total() {
  var sub1 = parseInt(document.getElementById("eng").value) || 0;
  var sub2 = parseInt(document.getElementById("mat").value) || 0;
  var sub3 = parseInt(document.getElementById("phy").value) || 0;
  var sub4 = parseInt(document.getElementById("com").value) || 0;
  var sub5 = parseInt(document.getElementById("sci").value) || 0;

  if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
    alert("Please Enter Score in range of 100");
  } else {
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById("total").innerHTML = `HTML Score: ${sub1}<br>
            CSS Score: ${sub2}<br>
            JavaScript Score: ${sub3}<br>
            React Js Score: ${sub4}<br>
            Node Js Score: ${sub5}<br><br>
            Total Score: ${total}`;
  }
}

function average() {
    var sub1 = parseInt(document.getElementById("eng").value) || 0;
    var sub2 = parseInt(document.getElementById("mat").value) || 0;
    var sub3 = parseInt(document.getElementById("phy").value) || 0;
    var sub4 = parseInt(document.getElementById("com").value) || 0;
    var sub5 = parseInt(document.getElementById("sci").value) || 0;

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Please Enter Score in range of 100");
    } else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var ave = total / 5;
        document.getElementById("average").innerHTML = `Your average Score are: ${ave}`;
    }
}

function grade() {
  var sub1 = parseInt(document.getElementById("eng").value) || 0;
  var sub2 = parseInt(document.getElementById("mat").value) || 0;
  var sub3 = parseInt(document.getElementById("phy").value) || 0;
  var sub4 = parseInt(document.getElementById("com").value) || 0;
  var sub5 = parseInt(document.getElementById("sci").value) || 0;

  if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
      alert("Please Enter Mark in range of 100");
  } else {
      if (sub1 < 35 || sub2 < 35 || sub3 < 35 || sub4 < 35 || sub5 < 35) {
          document.getElementById('grade').innerHTML = ' failed Test';
      } else {
          var total = sub1 + sub2 + sub3 + sub4 + sub5;
          var ave = total / 5;

          if (ave >= 90 && ave <= 100) {
              document.getElementById('grade').innerHTML = 'Your grade is O+';
          } else if (ave >= 80 && ave < 90) {
              document.getElementById('grade').innerHTML = 'Your grade is O';
          } else if (ave >= 70 && ave < 80) {
              document.getElementById('grade').innerHTML = 'Your grade is A+';
          } else if (ave >= 60 && ave < 70) {
              document.getElementById('grade').innerHTML = 'Your grade is A';
          } else if (ave >= 50 && ave < 60) {
              document.getElementById('grade').innerHTML = 'Your grade is B+';
          } else if (ave >= 40 && ave < 50) {
              document.getElementById('grade').innerHTML = 'Your grade is B';
          } else if (ave >= 35 && ave < 40) {
              document.getElementById('grade').innerHTML = 'Your grade is C';
          } else {
              document.getElementById('grade').innerHTML = 'Your grade is failed';
          }
      }
  }
}