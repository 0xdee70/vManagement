import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = (e) => {
        e.preventDefault();
        
        console.log("Email:", email);
        console.log("Password:", password);

        if(!email || !password) {
            setErrMsg("Please enter both email and password.");
            return;
        }

        axios.post("http://localhost:3001/adminlogin", {email, password})
        .then((response) => {
            console.log(response.data);
            setLoggedIn(true);
        })
        .catch((error) => {
            console.log(error);
            setErrMsg("Invalid email or password.");
        })

        setEmail("");
        setPassword("");
        setErrMsg("");
    }

    if(loggedIn) {
        Navigate("/adminpage");
    }
    return (
        <div>
            <div>
                <h3>Admin Login: </h3>
            </div>
            <div>
                <form onSubmit={loginHandler}>
                {errMsg && <p>{errMsg}</p>}
                    <div>
                        <label>
                            Email:
                        </label>
                        <br />
                        <input
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>
                            Password:
                        </label>
                        <br />
                        <input
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}
