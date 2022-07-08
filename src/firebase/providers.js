import { signInWithEmailAndPassword,createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() =>{

    try {
        //aqui hacemos la peticion a google para que nos valide el el usuario junto con el proovedor de google y lo guarde en una const
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
            //para obtener las credenciales de googleToken
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const {displayName,email,photoURL,uid} = result.user;

        return {
            ok: true,
            //user info
            displayName,email,photoURL,uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok : false,
            errorMessage,errorCode
            

        }
    }

}


export const  registerUserWithEmailPassword = async({email,password,displayName}) =>{
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const{uid,photoURL} = resp.user
        
        //TODO: actualizar el usauario por firebase

        await updateProfile(FirebaseAuth.currentUser,{displayName})


        return {
            ok:true,
            uid,photoURL,email,displayName
        }
        
    } catch (error) {

        return {ok:false, errorMessage:error.message}
        
    }
}

export const loginWithEmailPassword = async({email,password}) =>{

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password)
        const {uid,photoURL,displayName} = resp.user
        return {
            ok:true,
            uid,photoURL,displayName

        }
        
    } catch (error) {
        
        return {ok:false, errorMessage:error.message}
        
    }

}

export const logoutFirebase = async()=>{
    return await FirebaseAuth.signOut();
}