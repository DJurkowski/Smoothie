import { useState, useEffect } from 'react';

const useForm = (validateForm) => {

    const [ values, setValues ] = useState({
        username: '',
        email: ''
    });

    const [ errors, setErrors ] = useState({});

    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateForm(values));
        setIsSubmitting(true);
    };

    useEffect(() => {

        if(Object.keys(errors).length === 0 && isSubmitting) {
            console.log('Sent');
           
            // TODO: Here add api request
        }
    }, [errors, isSubmitting]);

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;