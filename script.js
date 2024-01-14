const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownCaret = document.querySelector(".arrow");
const dropdownContent = document.querySelector(".dropdown-content");

// add click event to dropdown button
dropdownBtn.addEventListener("click", () => {
  // add rotate to caret element
  dropdownCaret.classList.toggle("arrow-rotate");
  // add open styles to menu element
  dropdownContent.classList.toggle("menu-open");
  dropdownBtn.setAttribute(
    "aria-expanded",
    dropdownBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});
var password = document.getElementById("fakePassword");
var toggler = document.getElementById("toggler");
showHidePassword = () => {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    toggler.classList.add("fa-eye-slash");
  } else {
    toggler.classList.remove("fa-eye-slash");
    password.setAttribute("type", "password");
  }
};
toggler.addEventListener("click", showHidePassword);

let mail = document.getElementById("mail");
let errorMsg = document.getElementById("error-msg");
//let icon = document.getElementById("icon");

let mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function mailchecker() {
  //icon.style.display = "inline-block";

  // If your input email ID matches mailRegex then the codes below will be valid.
  // This means that an icon will be found here whose color will be green.
  //The error message cannot be viewed.
  //The border of the input space will be green.
  if (mail.value.match(mailRegex)) {
    //icon.innerHTML = '<i class="fas fa-check-circle"></i>';
    //icon.style.color = "#2ecc71";
    errorMsg.style.display = "none";
    mail.style.border = "2px solid #2ecc71";
  }
  // Now I bet what kind of change can happen if you don't input anything instead of input.
  // The icon will not be visible if you do not input anything.
  //Error message cannot be seen.
  //The border of the input will remain normal.
  else if (mail.value == "") {
    //icon.style.display = "none";
    errorMsg.style.display = "none";
    mail.style.border = "2px solid #d1d3d4";
  }
  //Now I have said what will change if the above two conditions do not work.
  //This means that if you input something and input it incorrectly, the following codes will work.
  //Here I have added the 'exclamation' icon and set the color of the icon to red.
  //The error message can be seen.
  //I have also instructed that the color of the border of the input should be red.
  else {
    //icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    //icon.style.color = "#ff2851";
    errorMsg.style.display = "block";
    mail.style.border = "2px solid #ff2851";
  }
}

/* password checker */
let passwordview = document.getElementById("fakePassword");
let passworderrorMsg = document.getElementById("passworderror-msg");
//let passwordicon = document.getElementById("passwordcheck-icon");

let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function passwordchecker() {
  //icon.style.display = "inline-block";
  // If your input password matches passwordRegex then the codes below will be valid.
  // This means that an icon will be found here whose color will be green.
  //The error message cannot be viewed.
  //The border of the input space will be green.
  if (passwordview.value.match(passwordRegex)) {
    //passwordicon.innerHTML = '<i class="fas fa-check-circle"></i>';
    //passwordicon.style.color = "#2ecc71";
    passworderrorMsg.style.display = "none";
    passwordview.style.border = "2px solid #2ecc71";
  }
  // Now I bet what kind of change can happen if you don't input anything instead of input.
  // The icon will not be visible if you do not input anything.
  //Error message cannot be seen.
  //The border of the input will remain normal.
  else if (passwordview.value == "") {
    //passwordicon.style.display = "none";
    passworderrorMsg.style.display = "none";
    passwordview.style.border = "2px solid #d1d3d4";
  }
  //Now I have said what will change if the above two conditions do not work.
  //This means that if you input something and input it incorrectly, the following codes will work.
  //Here I have added the 'exclamation' icon and set the color of the icon to red.
  //The error message can be seen.
  //I have also instructed that the color of the border of the input should be red.
  else {
    //passwordicon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    //passwordicon.style.color = "#ff2851";
    passworderrorMsg.style.display = "block";
    passwordview.style.border = "2px solid #ff2851";
  }
}