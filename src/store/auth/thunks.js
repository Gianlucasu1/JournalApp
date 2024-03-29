import { checkingCredentials, logout, login, logoutInvalidPassword } from "."
import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => dispatch(checkingCredentials());
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        console.log({ result });

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName })

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));


    }

}


export const startLoginWithEmailPassword = ({ email, password }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if (!result.ok) return dispatch(logoutInvalidPassword());

        dispatch(login(result));
    }
}


export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();
        dispatch(logout({ errorMessage: 'Logged Out' }));




    }
}