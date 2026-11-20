import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "12345") {
            navigate("/dashboard");
        }
        else {
            alert("Invalid Email or Password");
        }
    };

    return (
        <div className="login-container">

            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <br /><br />

                <button type="submit">LOGIN</button>

            </form>

        </div>
    );
};

export default Login;