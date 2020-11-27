const frm = document.getElementById("addbooks");

function validateUser(frm) {
  var uname = frm.username.value;
  var pword = frm.password.value;

  var msg = document.getElementById("errormsg");

  if (uname.length == 0) {
    username.focus();
    event.preventDefault();
    return false;
  } else if (pword.length == 0) {
    pname.focus();
    event.preventDefault();
    return false;
  } else if (uname == "user" || pword == "pass") {
    document.write("Authenticated");
    return true;
  } else {
    document.write("Authentication Failed");
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
