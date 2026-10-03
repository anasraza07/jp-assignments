import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const auth = getAuth();

var email = document.querySelector("#email")
var password = document.querySelector("#password")
var signupBtn = document.querySelector("button")

signupBtn.addEventListener("click", function () {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage:", errorMessage)
            // ..
        });
})