const Validation = (values) => {

    let valErrors={}

    if(!values.email) {
        valErrors.email="Email is required"
    } else if (!values.email === '@' || !values.email === '.') {
        valErrors.email="Email is invalid"
    }

    if(!values.password) {
        valErrors.password ="Password is required"
        } else if (values.password < 8) {
            valErrors.password ="Password must be 8 characters"
        } else if (values.password > 15) {
            valErrors.password ="Password can't be longer than 15 characters"
    }

        if (values.passwordConfirm !== values.password) {
            valErrors.passwordConfirm = "Passwords don't match"
        }

        if (!values.country) {
            valErrors.country = "Country is required"
        }

        return valErrors;
    }

export default Validation;