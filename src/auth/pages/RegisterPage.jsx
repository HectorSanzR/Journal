import {Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { starCreatingUserWithEmailPassword } from '../../store/auth/thunks'


const formData ={
  email: '', //'hector@google.com',
  password: '', //'123456',
  displayName: ''//'Hector Sanchez'

}

const formValidations ={
  email: [(value)=>value.includes('@'),'El correo debe tener un @'],
  password: [(value)=>value.length >=6,'El password debe tener mas de 6 caracteres'],
  displayName: [(value)=>value.length >=1 ,'El nombre es obligatorios'],
}
export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false)
  const {status,errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking',[status])
  const 
  {displayName,email,password,onInputChange,formState,
    isFormValid,displayNameValid,emailValid,passwordValid
  }=useForm( formData,formValidations );
   

  const onSubmit = (event)=>{

    event.preventDefault()
    setFormSubmitted(true);
    dispatch(starCreatingUserWithEmailPassword(formState))

    if(!isFormValid) return

  }
  return (
    <AuthLayout title ="Login!!">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>

              <TextField 
              label="Name" 
              type="text" 
              placeholder='Name'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error= {!!displayNameValid && formSubmitted}
              helperText ={displayNameValid}
              />

            </Grid>
            <Grid item xs={12} sx={{mt:2}}>

              <TextField label="Email" 
              type="email" 
              placeholder='Email@email.com'
              name ='email'
              value={email}
              onChange={onInputChange}
              error= {!!emailValid && formSubmitted}
              helperText ={emailValid}
              fullWidth/>

              </Grid>

            <Grid item xs={12} sx={{mt:2}}>

              <TextField 
              label="Password" 
              type="password" 
              name ='password'
              value={password}
              onChange={onInputChange}
              error= {!!passwordValid && formSubmitted}
              helperText ={passwordValid}
              fullWidth/>

              </Grid>
              <Grid container spacing={2} sx={{mb:2, mt:1} }>
                
                <Grid item xs={12} display={!!errorMessage ? '':'none'}>
                  <Alert severity='error'>{errorMessage}</Alert>
                </Grid>
                <Grid item xs={12} >
                    <Button 
                    disabled = {isCheckingAuthentication}
                    variant='contained'
                    type="submit" 
                    fullWidth
                    >Crear Cuenta</Button>
                </Grid>
                

              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr:1}}>Ya tienes una cuenta?</Typography>
                <Link component={ RouterLink} color='inherit' to='/auth/login'>
                  Ingresar
                </Link>
              </Grid>
          </Grid>
        </form>

    </AuthLayout>
  )
}
