import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return(
        <div>
    
            <h1>Register</h1>
            <form action="register-user" method="post">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required></input>
        
                <label for="lastNamw">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required></input>

                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required></input>
        
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
                
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" required></input>
        
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>

                <label for="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" required></input>


                <input type="submit" value="Register"></input>
            </form>
            <div>
                <p>Already have account??</p>
                <Link to="/">Register here</Link>

            </div>

        </div>
    )
}

export default RegisterPage