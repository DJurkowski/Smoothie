const EMAIL_REG = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function validateForm(values) {
    
    let errors = {};

    if(!values.username.trim()) {
        errors.username = "Name is required";
    }

    if(!values.email) {
        errors.email = "Email is required";

    } else if(!EMAIL_REG.test(String(values.email).toLowerCase())) {
        errors.email = "Email address is invalid";
    }

    return errors;
}