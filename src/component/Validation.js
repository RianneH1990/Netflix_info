const Validation = (values) => {

    let valErrors={}

    if(!values.email) {
        valErrors.email="Email is required"
    } else if (!/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.tets(values.email)) {
        valErrors.email="Email is invalid"
    }

    if(!values.password) {
        valErrors.password = "Password is required"
        // } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) {
        //     valErrors.password="password must contain:" +
        //         "- at least 8 characters" +
        //         "- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number" +
        //         "- Can contain special characters"
        // }

        if (values.passwordConfirm === values.password) {
            valErrors.passwordConfirm = "Passwords don't match"
        }

        if (!values.country) {
            valErrors.country = "Country is required"
        }

        return valErrors;

    }}

export default Validation;