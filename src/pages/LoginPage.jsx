import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return(
        <div>
    
            <h1>Login</h1>
            <form action="login.php" method="post">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" required></input>
        
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>

                <input type="submit" value="Login"></input>
            </form>
            <div>
                <p>Don't have an account?</p>
                <Link to="/register-user">Register here</Link>

            </div>

        </div>
    )
}

export default LoginPage