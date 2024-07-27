import { signInWithPopup , GoogleAuthProvider, signOut} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"
import { db, auth, provider } from './init.js';


//FUNCTION: Registers user using their google email
async function signInUser(pTag){
    //sign-in using small window prompt
    signInWithPopup(auth, provider)
    .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        //console.log(credential);
        // The signed-in user info.
        //return result.user;
        const user = result.user;
        const email = user.email;

        window.location.href ='https://ambitious-glacier-0cd46151e.5.azurestaticapps.net/AdminUpdate.html';
 
        }).catch((error) => {
            // Handle Errors here.
            signOutUser();
            console.log(error);
            console.log('Error code: ', error.code);
        });
    
}