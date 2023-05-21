function loginFormHandle(event){
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const formData = {
        email, password
    }

    console.log(formData)
}


//registration form handle
function registrationFormHandle(event){
    event.preventDefault();
    const form = event.target;
    const firstName = form.firest_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;
    const photoUrl = form.photo_url.value;
    const gender = form.gender.value;
    const password = form.password.value;


    console.log(firstName, lastName, email, photoUrl, gender, password)
}

export {
    loginFormHandle,
    registrationFormHandle
}