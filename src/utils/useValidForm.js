import React, {useState, useCallback} from "react";

function useValidForm() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (evt) => {
        const target = evt.target;
        const name = target.name;
        const value = target.value;

        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});
        setIsValid(target.closest("form").checkValidity());
    };

    const setCurrentUserValues = (currentUser) => {
        const nameValue = currentUser.name;
        const emailValue = currentUser.email;
        setValues({name: nameValue, email: emailValue});
    };

    return ({values, errors, isValid, handleChange, setCurrentUserValues});
}

export default useValidForm;