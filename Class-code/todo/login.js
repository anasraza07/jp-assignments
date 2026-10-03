import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const auth = getAuth();

var email = document.querySelector("#email")
var password = document.querySelector("#password")
var loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", function () {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("login successful", user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("errorMessage:", errorMessage)
        });
})