import React, { useState } from 'react'

export const Login = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" name="name" placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}></input>
                <input type="text" name='password' placeholder="password" onChange={(ev) => setPassword(ev.target.value)}></input>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    )
}
