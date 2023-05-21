import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function loginFormHandle(event){
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const formData = {
        email, password
    }

}



export {
    loginFormHandle
}