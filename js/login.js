
     https://firebase.google.com/docs/web/setup#available-libraries -->

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAlbVSU_pTs6DVQI-QMnQO_aFUqPvgo4lY",
    authDomain: "web-app-3eb5e.firebaseapp.com",
    databaseURL: "https://web-app-3eb5e.firebaseio.com",
    projectId: "web-app-3eb5e",
    storageBucket: "web-app-3eb5e.appspot.com",
    messagingSenderId: "643203578636",
    appId: "1:643203578636:web:c0025425207221f554e729",
    measurementId: "G-8JLGQB4GBY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  /*--Sign-up function--*/
  function signUp() {
    var email = document.getElementById("myEmail");
    var password = document.getElementById("myPassword");
    // Set alert to notify users when they sign up or need to sign up
    if(email.value && password.value) {
      alert("Congrats, you've signed up! " + email.value);
    } else {
      alert("You need to sign up first!");
    }
    /*--Create promise to authenticate user sign up info--*/
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    /*--Catch any errors with sign up email or password--*/
    promise.catch(e => alert(e.message));
  }

  /*--Sign-in function--*/
  function signIn() {
    var email = document.getElementById("myEmail");
    var password = document.getElementById("myPassword");
    //sends users to their user index page
    if(email.value && password.value) {
      location.replace("index.html");
      /*--Set alert to notify users when they sign in or need to sign in--*/
      alert("You're signed in! " + email.value);
    } else {
      location.replace("login.html");
      alert("You need to sign in first!")
    }
    /*--Create promise to authenticate user sign in info--*/
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    /*--Catch any errors with sign in email or password--*/
    promise.catch(e => alert(e.message));
  }

  /*--Sign-Out Function--*/
  function signOut() {
    auth.signOut();
    alert("You've signed out!");
    //return users to login page
    location.replace("login.html");
  }
  /*--Test code to determine whether user is active or not
  auth.onAuthStateChanged(function(user) {
    //User is signed in
    if(user) {
      var email = user.email;
      alert("Active User " + email);
    } else {
      alert("No Active User");
    }
  }); --*/

/*--Code Editor Function used to link HTML and CSS ids to variables by accessing DOM
Set iframe id contentWindow to a variable code--*/
function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var code = document.getElementById("code").contentWindow.document;

  /*--Function that opens the textarea's contentWindow, so users can code in the
  editor and then closes the textarea's contentWindow when finished coding--*/
  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>"
    );
    code.close();
  };
}

compile();
