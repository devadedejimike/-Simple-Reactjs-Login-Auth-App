import React, {useState, useEffect} from "react";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import MainHeader from "./components/MainHeader/mainheader";

function App(){
    const[isLoggedIn, updateisLoggedIn] = useState(false);

    useEffect(() =>{
        let isLoggedInValue = localStorage.getItem('isLoggedIn');
        if(isLoggedInValue === '1'){
            updateisLoggedIn(true);
        }
    }, [])


    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1')
        updateisLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        updateisLoggedIn(false);
    }
    return(
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
                {isLoggedIn && <Home onLogout={logoutHandler}/>}
            </main>
        </React.Fragment>
    )
}
export default App;