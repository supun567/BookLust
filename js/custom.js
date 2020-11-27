const frm = document.getElementById("loginForm");
// var username = document.forms["loginForm"]["username"];
// var password = document.forms["loginForm"]["password"];

// const username = document.getElementById("username");
// const password = document.getElementById("password");

// Get Error div
// const unameError = document.getElementById("username-error");
// var pwError = document.getElementById("password-error");

function validateUser(frm) {
  var uname = frm.username.value;
  const pword = frm.password.value;

  const unameError = frm.getElementById("username-error");

  document.write(uname.value);

  if (uname.length == 0) {
    unameError.style.border = "1px solid red";
    unameError.style.display = "block";
    username.focus();
    event.preventDefault();
  }
}

// function validateUser(frm) {
//   const uname = frm.username.value.trim();
//   const pword = frm.password.value.trim();

//   /* Check if text lenths are zero or not*/
//   if (uname.length == 0 || pword.length == 0) {
//     return false;
//   }
//   /* */

//   /* */

//   if (uname == "user" || pword == "pass") {
//     window.location.replace("./index.html");
//     document.write("Authenticated");
//     return true;
//   } else {
//     document.write("Authentication Failed");
//     return false;
//   }
// }
