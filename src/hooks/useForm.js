import { useEffect, useMemo, useState } from 'react';


export const useForm = ( initialForm = {} , formValidations ={}) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [fomrValidator, setFomrValidator] = useState({});
      
    useEffect(() => {
            createValidators()
        }, [formState])

    const isFormValid = useMemo(()=>{

        for (const formValue of Object.keys(fomrValidator)) {
            if (fomrValidator[formValue]!=null) return false;
        }
        return true;
    }, [fomrValidator])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
        ...formState,
            [ name ]: value
        });
    }
        
    const onResetForm = () => {
        setFormState( initialForm );
    }
    const createValidators = ()=>{

        const formCheckValues = {}

        for (const formField of Object.keys(formValidations)){
            
            const [fn,errorMessage ] = formValidations[formField];

            formCheckValues[`${formField}Valid`] = fn(formState[formField]) ? null:errorMessage;

             setFomrValidator(formCheckValues);


        }
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...fomrValidator,
        isFormValid
    }
}