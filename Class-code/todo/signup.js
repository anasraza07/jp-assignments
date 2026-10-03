import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const auth = getAuth();
const database = getDatabase();


var fullName = document.querySelector("#full-name")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var signupBtn = document.querySelector("button")

signupBtn.addEventListener("click", function () {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("signup successful:", user)

            writeUserData(user.uid, fullName.value, email.value)

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage:", errorMessage)
            // ..
        });
})

function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
    });
}