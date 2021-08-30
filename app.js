var birthDate = document.querySelector("#dob");
var luckyNum = document.querySelector("#lucky");
var checkBtn = document.querySelector("#btn");
var message = document.querySelector(".output_fields");

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function clickHandler() {
  // dob is a string
  var dob = birthDate.value;
  var lucky = luckyNum.value;
  if (dob.length > 0 && lucky > 0) {
    var sum = 0;
    for (let i = 0; i < dob.length; i++) {
      const num = parseInt(dob.charAt(i));
      if (!isNaN(num)) {
        sum += num;
      }
    }
    if (sum % lucky === 0) {
      showMessage(`${lucky} is a lucky number 🎊🥳`);
    } else {
      showMessage(`${lucky} is not a lucky number 🤨`);
    }
  } else {
    showMessage("Please Enter valid input");
  }
}

checkBtn.addEventListener("click", clickHandler);
