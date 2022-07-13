import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNoteLogout } from "../journal/journalSlices";
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = (email,password)=>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());
    }

}


export const startGoogleSingIn = () => {
  return async (dispatch )=>{

  dispatch(checkingCredentials());

    const result = await singInWithGoogle();
      if (!result.ok) return dispatch(logout(result.errorMessage))
      
      dispatch(login(result))

  }
};

export const starCreatingUserWithEmailPassword = ({email,password,displayName})=>{
  return async (dispatch)=>{

    dispatch(checkingCredentials())

    const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email,password,displayName})
    
    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({uid,displayName,email,photoURL}))


  }
}

export const starLoginWithEmailPassword = ({email,password})=>{
  return async(dispatch)=>{

    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({email,password})

    if (!result.ok) return dispatch(logout(result))
    dispatch(login(result));

  }

}

export const startLogout = ()=>{
  return async(dispatch) =>{

    await logoutFirebase();

    dispatch(clearNoteLogout());
    dispatch(logout());

  }
}

