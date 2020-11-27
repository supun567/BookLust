const frm = document.getElementById("addbooks");
let unamedefault = "user";
let pworddefault = "pass";

function validateUser() {
  var uname = document.getElementById("username").value;
  var pword = document.getElementById("password").value;

  var msg = document.getElementById("errormsg");

  if (uname.length == 0) {
    username.focus();
    document.getElementById("username").style.border = "3px solid red";
    return false;
  } else if (pword.length == 0) {
    pname.focus();
    document.getElementById("password").style.border = "3px solid red";
    return false;
  } else if (uname == "user" || pword == "pass") {
    document.getElementById("login").value = "Log Out";
    document.getElementById("errormsg").style.color = "green";
    document.getElementById("errormsg").innerHTML =
      "Logged in, Log out when you are done";
    return true;
    event.preventDefault();
  } else {
    return false;
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
