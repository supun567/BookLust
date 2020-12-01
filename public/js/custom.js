// Script to validate the user

function loginUser() {
  var uname = this.document.getElementById("username").value.trim();
  var pword = this.document.getElementById("password").value.trim();
  var msg = document.getElementById("errormsg");
  var status = this.document.getElementById("login").value;

  if (status == "Log Out") {
    //Log Out Procedure
    this.document.getElementById("login").value = "Log In";
    document.getElementById("errormsg").innerHTML =
      "You are not logged in currently. log in to continue!!!";
    document.getElementById("errormsg").style.color = "#fff";
    document.getElementById("username").disabled = false;
    document.getElementById("password").disabled = false;

    // Disabling Form
    document.getElementById("dataForm").disabled = true;
  } else if (status == "Log In") {
    //Check for null values
    if (uname == "" && pword == "") {
      document.getElementById("username").style.border = "1px solid red";
      document.getElementById("password").style.border = "1px solid red";
      document.getElementById("errormsg").innerHTML =
        "Enter Username and Password to proceed";
      return false;
    } else if (pword == "") {
      document.getElementById("password").style.border = "1px solid red";
      document.getElementById("username").style.border = "none";
      document.getElementById("errormsg").innerHTML = "Password cant be blank";
      return false;
    } else if (uname == "") {
      document.getElementById("username").style.border = "1px solid red";
      document.getElementById("password").style.border = "none";
      document.getElementById("errormsg").innerHTML = "Username cant be blank";
      return false;
    } else if (uname == "bookadmin" && pword == "pwdadmin") {
      document.getElementById("login").value = "Log Out"; // Successfully Logged in
      document.getElementById("username").style.border = "none";
      document.getElementById("password").style.border = "none";
      document.getElementById("errormsg").style.color = "#ffc107";
      document.getElementById("errormsg").innerHTML =
        "Logged in, Log out when you are done";
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;

      // Clear username and password fields
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";

      // Enaabling Form
      document.getElementById("dataForm").disabled = false;

      return true;
    } else {
      document.getElementById("errormsg").innerHTML =
        "Invalid Username/Password";
      document.getElementById("username").style.border = "1px solid red";
      document.getElementById("password").style.border = "1px solid red";
    }
  }
}

// Display Modal
