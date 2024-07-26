import { useState,useEffect } from "react";
import './login.css'

function Login(props){
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState('');
    const [password, setPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() =>{
        setTimeout(() =>{
            console.log("Validating form input....");
        setFormIsValid(
            email.includes('@') && password.trim().length > 6
        );
        }, 1500)
    },[email, password]);

    const emailChangeHandler = (event) =>{
        setEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value); 
    }
    const validateEmailHandler = (event) => {
        setEmailIsValid(email.includes('@'));
    }
    const validatePasswordHandler = () => {
        setPasswordIsValid(password.trim().length > 6);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(formIsValid){
            props.onLogin(email, password);
        }
    }
    return(
        <section className="form-container">
            <form className="login-form" onSubmit={submitHandler}>
                <section className={`form-group ${!emailIsValid && email ? 'invalid' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={emailChangeHandler} onBlur={validateEmailHandler} required/>
                </section>
                <section className={`form-group ${!passwordIsValid && password ? 'invalid' : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input type="number" name="password" id="password" onChange={passwordChangeHandler} onBlur={validatePasswordHandler} required/>
                </section>
                <button type="submit" disabled={!formIsValid}>Login</button>
            </form>
        </section>
    )
}
export default Login;