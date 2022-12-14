import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid} = result.user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError( error );


        return {
            ok: false,
            errorMessage
        }
    }

}


export const registerUserWithEmailPassword = async({email,password,displayName}) => {

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password, displayName)
        const {uid, photoURL } = resp.user;
        console.log(resp)

        //Actualizar displayName en firebase
        updateProfile( FirebaseAuth.currentUser, {displayName} );

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: error.message
        }
    }


}

export const loginWithEmailPassword = async ({email,password}) =>{
    try {

        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password)
        console.log(resp)
        const {uid,displayName} = resp.user;

        return {
            ok: true,
            uid,displayName, email
        }
        
    } catch (error) {

        return { ok: false, errormMessage: error.message}
        
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}