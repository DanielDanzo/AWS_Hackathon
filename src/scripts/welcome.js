import { signInUser } from "../modules/login.js";

var email = document.getElementById("email-input");
const pTag = document.getElementById('Invalid-Password');
const submit_btn = document.getElementById("submit-btn");



submit_btn.addEventListener("click",async ()=>{
    await signInUser(email.value, pTag);
});

